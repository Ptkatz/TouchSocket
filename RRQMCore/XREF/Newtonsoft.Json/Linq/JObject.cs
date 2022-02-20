//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在RRQMCore.XREF命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/eo2w71/rrqm
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

#region License

// Copyright (c) 2007 James Newton-King
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

#endregion License

using System;
using System.Collections.Generic;

#if HAVE_INOTIFY_COLLECTION_CHANGED
using System.Collections.ObjectModel;
using System.Collections.Specialized;
#endif

using System.ComponentModel;

#if HAVE_DYNAMIC
using System.Dynamic;
using System.Linq.Expressions;
#endif

using System.IO;
using RRQMCore.XREF.Newtonsoft.Json.Utilities;
using System.Globalization;

#if !HAVE_LINQ

using RRQMCore.XREF.Newtonsoft.Json.Utilities.LinqBridge;

#else
using System.Linq;
#endif

namespace RRQMCore.XREF.Newtonsoft.Json.Linq
{
    /// <summary>
    /// Represents a JSON object.
    /// </summary>
    /// <example>
    ///   <code lang="cs" source="..\Src\RRQMCore.XREF.Newtonsoft.Json.Tests\Documentation\LinqToJsonTests.cs" region="LinqToJsonCreateParse" title="Parsing a JSON Object from Text" />
    /// </example>
    public partial class JObject : JContainer, IDictionary<string, JToken>, INotifyPropertyChanged
#if HAVE_COMPONENT_MODEL
        , ICustomTypeDescriptor
#endif
#if HAVE_INOTIFY_PROPERTY_CHANGING
        , INotifyPropertyChanging
#endif
    {
        private readonly JPropertyKeyedCollection _properties = new JPropertyKeyedCollection();

        /// <summary>
        /// Gets the container's children tokens.
        /// </summary>
        /// <value>The container's children tokens.</value>
        protected override IList<JToken> ChildrenTokens => this._properties;

        /// <summary>
        /// Occurs when a property value changes.
        /// </summary>
        public event PropertyChangedEventHandler PropertyChanged;

#if HAVE_INOTIFY_PROPERTY_CHANGING
        /// <summary>
        /// Occurs when a property value is changing.
        /// </summary>
        public event PropertyChangingEventHandler PropertyChanging;
#endif

        /// <summary>
        /// Initializes a new instance of the <see cref="JObject"/> class.
        /// </summary>
        public JObject()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="JObject"/> class from another <see cref="JObject"/> object.
        /// </summary>
        /// <param name="other">A <see cref="JObject"/> object to copy from.</param>
        public JObject(JObject other)
            : base(other)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="JObject"/> class with the specified content.
        /// </summary>
        /// <param name="content">The contents of the object.</param>
        public JObject(params object[] content)
            : this((object)content)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="JObject"/> class with the specified content.
        /// </summary>
        /// <param name="content">The contents of the object.</param>
        public JObject(object content)
        {
            this.Add(content);
        }

        internal override bool DeepEquals(JToken node)
        {
            if (!(node is JObject t))
            {
                return false;
            }

            return this._properties.Compare(t._properties);
        }

        internal override int IndexOfItem(JToken item)
        {
            return this._properties.IndexOfReference(item);
        }

        internal override void InsertItem(int index, JToken item, bool skipParentCheck)
        {
            // don't add comments to JObject, no name to reference comment by
            if (item != null && item.Type == JTokenType.Comment)
            {
                return;
            }

            base.InsertItem(index, item, skipParentCheck);
        }

        internal override void ValidateToken(JToken o, JToken existing)
        {
            ValidationUtils.ArgumentNotNull(o, nameof(o));

            if (o.Type != JTokenType.Property)
            {
                throw new ArgumentException("Can not add {0} to {1}.".FormatWith(CultureInfo.InvariantCulture, o.GetType(), this.GetType()));
            }

            JProperty newProperty = (JProperty)o;

            if (existing != null)
            {
                JProperty existingProperty = (JProperty)existing;

                if (newProperty.Name == existingProperty.Name)
                {
                    return;
                }
            }

            if (this._properties.TryGetValue(newProperty.Name, out existing))
            {
                throw new ArgumentException("Can not add property {0} to {1}. Property with the same name already exists on object.".FormatWith(CultureInfo.InvariantCulture, newProperty.Name, this.GetType()));
            }
        }

        internal override void MergeItem(object content, JsonMergeSettings settings)
        {
            if (!(content is JObject o))
            {
                return;
            }

            foreach (KeyValuePair<string, JToken> contentItem in o)
            {
                JProperty existingProperty = this.Property(contentItem.Key);

                if (existingProperty == null)
                {
                    this.Add(contentItem.Key, contentItem.Value);
                }
                else if (contentItem.Value != null)
                {
                    if (!(existingProperty.Value is JContainer existingContainer) || existingContainer.Type != contentItem.Value.Type)
                    {
                        if (!IsNull(contentItem.Value) || settings?.MergeNullValueHandling == MergeNullValueHandling.Merge)
                        {
                            existingProperty.Value = contentItem.Value;
                        }
                    }
                    else
                    {
                        existingContainer.Merge(contentItem.Value, settings);
                    }
                }
            }
        }

        private static bool IsNull(JToken token)
        {
            if (token.Type == JTokenType.Null)
            {
                return true;
            }

            if (token is JValue v && v.Value == null)
            {
                return true;
            }

            return false;
        }

        internal void InternalPropertyChanged(JProperty childProperty)
        {
            this.OnPropertyChanged(childProperty.Name);
#if HAVE_COMPONENT_MODEL
            if (_listChanged != null)
            {
                OnListChanged(new ListChangedEventArgs(ListChangedType.ItemChanged, IndexOfItem(childProperty)));
            }
#endif
#if HAVE_INOTIFY_COLLECTION_CHANGED
            if (_collectionChanged != null)
            {
                OnCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Replace, childProperty, childProperty, IndexOfItem(childProperty)));
            }
#endif
        }

        internal void InternalPropertyChanging(JProperty childProperty)
        {
#if HAVE_INOTIFY_PROPERTY_CHANGING
            OnPropertyChanging(childProperty.Name);
#endif
        }

        internal override JToken CloneToken()
        {
            return new JObject(this);
        }

        /// <summary>
        /// Gets the node type for this <see cref="JToken"/>.
        /// </summary>
        /// <value>The type.</value>
        public override JTokenType Type => JTokenType.Object;

        /// <summary>
        /// Gets an <see cref="IEnumerable{T}"/> of <see cref="JProperty"/> of this object's properties.
        /// </summary>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="JProperty"/> of this object's properties.</returns>
        public IEnumerable<JProperty> Properties()
        {
            return this._properties.Cast<JProperty>();
        }

        /// <summary>
        /// Gets a <see cref="JProperty"/> the specified name.
        /// </summary>
        /// <param name="name">The property name.</param>
        /// <returns>A <see cref="JProperty"/> with the specified name or <c>null</c>.</returns>
        public JProperty Property(string name)
        {
            if (name == null)
            {
                return null;
            }

            this._properties.TryGetValue(name, out JToken property);
            return (JProperty)property;
        }

        /// <summary>
        /// Gets a <see cref="JEnumerable{T}"/> of <see cref="JToken"/> of this object's property values.
        /// </summary>
        /// <returns>A <see cref="JEnumerable{T}"/> of <see cref="JToken"/> of this object's property values.</returns>
        public JEnumerable<JToken> PropertyValues()
        {
            return new JEnumerable<JToken>(this.Properties().Select(p => p.Value));
        }

        /// <summary>
        /// Gets the <see cref="JToken"/> with the specified key.
        /// </summary>
        /// <value>The <see cref="JToken"/> with the specified key.</value>
        public override JToken this[object key]
        {
            get
            {
                ValidationUtils.ArgumentNotNull(key, nameof(key));

                if (!(key is string propertyName))
                {
                    throw new ArgumentException("Accessed JObject values with invalid key value: {0}. Object property name expected.".FormatWith(CultureInfo.InvariantCulture, MiscellaneousUtils.ToString(key)));
                }

                return this[propertyName];
            }
            set
            {
                ValidationUtils.ArgumentNotNull(key, nameof(key));

                if (!(key is string propertyName))
                {
                    throw new ArgumentException("Set JObject values with invalid key value: {0}. Object property name expected.".FormatWith(CultureInfo.InvariantCulture, MiscellaneousUtils.ToString(key)));
                }

                this[propertyName] = value;
            }
        }

        /// <summary>
        /// Gets or sets the <see cref="JToken"/> with the specified property name.
        /// </summary>
        /// <value></value>
        public JToken this[string propertyName]
        {
            get
            {
                ValidationUtils.ArgumentNotNull(propertyName, nameof(propertyName));

                JProperty property = this.Property(propertyName);

                return property?.Value;
            }
            set
            {
                JProperty property = this.Property(propertyName);
                if (property != null)
                {
                    property.Value = value;
                }
                else
                {
#if HAVE_INOTIFY_PROPERTY_CHANGING
                    OnPropertyChanging(propertyName);
#endif
                    this.Add(new JProperty(propertyName, value));
                    this.OnPropertyChanged(propertyName);
                }
            }
        }

        /// <summary>
        /// Loads a <see cref="JObject"/> from a <see cref="JsonReader"/>.
        /// </summary>
        /// <param name="reader">A <see cref="JsonReader"/> that will be read for the content of the <see cref="JObject"/>.</param>
        /// <returns>A <see cref="JObject"/> that contains the JSON that was read from the specified <see cref="JsonReader"/>.</returns>
        /// <exception cref="JsonReaderException">
        ///     <paramref name="reader"/> is not valid JSON.
        /// </exception>
        public new static JObject Load(JsonReader reader)
        {
            return Load(reader, null);
        }

        /// <summary>
        /// Loads a <see cref="JObject"/> from a <see cref="JsonReader"/>.
        /// </summary>
        /// <param name="reader">A <see cref="JsonReader"/> that will be read for the content of the <see cref="JObject"/>.</param>
        /// <param name="settings">The <see cref="JsonLoadSettings"/> used to load the JSON.
        /// If this is <c>null</c>, default load settings will be used.</param>
        /// <returns>A <see cref="JObject"/> that contains the JSON that was read from the specified <see cref="JsonReader"/>.</returns>
        /// <exception cref="JsonReaderException">
        ///     <paramref name="reader"/> is not valid JSON.
        /// </exception>
        public new static JObject Load(JsonReader reader, JsonLoadSettings settings)
        {
            ValidationUtils.ArgumentNotNull(reader, nameof(reader));

            if (reader.TokenType == JsonToken.None)
            {
                if (!reader.Read())
                {
                    throw JsonReaderException.Create(reader, "Error reading JObject from JsonReader.");
                }
            }

            reader.MoveToContent();

            if (reader.TokenType != JsonToken.StartObject)
            {
                throw JsonReaderException.Create(reader, "Error reading JObject from JsonReader. Current JsonReader item is not an object: {0}".FormatWith(CultureInfo.InvariantCulture, reader.TokenType));
            }

            JObject o = new JObject();
            o.SetLineInfo(reader as IJsonLineInfo, settings);

            o.ReadTokenFrom(reader, settings);

            return o;
        }

        /// <summary>
        /// Load a <see cref="JObject"/> from a string that contains JSON.
        /// </summary>
        /// <param name="json">A <see cref="String"/> that contains JSON.</param>
        /// <returns>A <see cref="JObject"/> populated from the string that contains JSON.</returns>
        /// <exception cref="JsonReaderException">
        ///     <paramref name="json"/> is not valid JSON.
        /// </exception>
        /// <example>
        ///   <code lang="cs" source="..\Src\RRQMCore.XREF.Newtonsoft.Json.Tests\Documentation\LinqToJsonTests.cs" region="LinqToJsonCreateParse" title="Parsing a JSON Object from Text" />
        /// </example>
        public new static JObject Parse(string json)
        {
            return Parse(json, null);
        }

        /// <summary>
        /// Load a <see cref="JObject"/> from a string that contains JSON.
        /// </summary>
        /// <param name="json">A <see cref="String"/> that contains JSON.</param>
        /// <param name="settings">The <see cref="JsonLoadSettings"/> used to load the JSON.
        /// If this is <c>null</c>, default load settings will be used.</param>
        /// <returns>A <see cref="JObject"/> populated from the string that contains JSON.</returns>
        /// <exception cref="JsonReaderException">
        ///     <paramref name="json"/> is not valid JSON.
        /// </exception>
        /// <example>
        ///   <code lang="cs" source="..\Src\RRQMCore.XREF.Newtonsoft.Json.Tests\Documentation\LinqToJsonTests.cs" region="LinqToJsonCreateParse" title="Parsing a JSON Object from Text" />
        /// </example>
        public new static JObject Parse(string json, JsonLoadSettings settings)
        {
            using (JsonReader reader = new JsonTextReader(new StringReader(json)))
            {
                JObject o = Load(reader, settings);

                while (reader.Read())
                {
                    // Any content encountered here other than a comment will throw in the reader.
                }

                return o;
            }
        }

        /// <summary>
        /// Creates a <see cref="JObject"/> from an object.
        /// </summary>
        /// <param name="o">The object that will be used to create <see cref="JObject"/>.</param>
        /// <returns>A <see cref="JObject"/> with the values of the specified object.</returns>
        public new static JObject FromObject(object o)
        {
            return FromObject(o, JsonSerializer.CreateDefault());
        }

        /// <summary>
        /// Creates a <see cref="JObject"/> from an object.
        /// </summary>
        /// <param name="o">The object that will be used to create <see cref="JObject"/>.</param>
        /// <param name="jsonSerializer">The <see cref="JsonSerializer"/> that will be used to read the object.</param>
        /// <returns>A <see cref="JObject"/> with the values of the specified object.</returns>
        public new static JObject FromObject(object o, JsonSerializer jsonSerializer)
        {
            JToken token = FromObjectInternal(o, jsonSerializer);

            if (token != null && token.Type != JTokenType.Object)
            {
                throw new ArgumentException("Object serialized to {0}. JObject instance expected.".FormatWith(CultureInfo.InvariantCulture, token.Type));
            }

            return (JObject)token;
        }

        /// <summary>
        /// Writes this token to a <see cref="JsonWriter"/>.
        /// </summary>
        /// <param name="writer">A <see cref="JsonWriter"/> into which this method will write.</param>
        /// <param name="converters">A collection of <see cref="JsonConverter"/> which will be used when writing the token.</param>
        public override void WriteTo(JsonWriter writer, params JsonConverter[] converters)
        {
            writer.WriteStartObject();

            for (int i = 0; i < this._properties.Count; i++)
            {
                this._properties[i].WriteTo(writer, converters);
            }

            writer.WriteEndObject();
        }

        /// <summary>
        /// Gets the <see cref="RRQMCore.XREF.Newtonsoft.Json.Linq.JToken"/> with the specified property name.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <returns>The <see cref="RRQMCore.XREF.Newtonsoft.Json.Linq.JToken"/> with the specified property name.</returns>
        public JToken GetValue(string propertyName)
        {
            return this.GetValue(propertyName, StringComparison.Ordinal);
        }

        /// <summary>
        /// Gets the <see cref="RRQMCore.XREF.Newtonsoft.Json.Linq.JToken"/> with the specified property name.
        /// The exact property name will be searched for first and if no matching property is found then
        /// the <see cref="StringComparison"/> will be used to match a property.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <param name="comparison">One of the enumeration values that specifies how the strings will be compared.</param>
        /// <returns>The <see cref="RRQMCore.XREF.Newtonsoft.Json.Linq.JToken"/> with the specified property name.</returns>
        public JToken GetValue(string propertyName, StringComparison comparison)
        {
            if (propertyName == null)
            {
                return null;
            }

            // attempt to get value via dictionary first for performance
            JProperty property = this.Property(propertyName);
            if (property != null)
            {
                return property.Value;
            }

            // test above already uses this comparison so no need to repeat
            if (comparison != StringComparison.Ordinal)
            {
                foreach (JProperty p in this._properties)
                {
                    if (string.Equals(p.Name, propertyName, comparison))
                    {
                        return p.Value;
                    }
                }
            }

            return null;
        }

        /// <summary>
        /// Tries to get the <see cref="RRQMCore.XREF.Newtonsoft.Json.Linq.JToken"/> with the specified property name.
        /// The exact property name will be searched for first and if no matching property is found then
        /// the <see cref="StringComparison"/> will be used to match a property.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <param name="value">The value.</param>
        /// <param name="comparison">One of the enumeration values that specifies how the strings will be compared.</param>
        /// <returns><c>true</c> if a value was successfully retrieved; otherwise, <c>false</c>.</returns>
        public bool TryGetValue(string propertyName, StringComparison comparison, out JToken value)
        {
            value = this.GetValue(propertyName, comparison);
            return (value != null);
        }

        #region IDictionary<string,JToken> Members

        /// <summary>
        /// Adds the specified property name.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <param name="value">The value.</param>
        public void Add(string propertyName, JToken value)
        {
            this.Add(new JProperty(propertyName, value));
        }

        /// <summary>
        /// Determines whether the JSON object has the specified property name.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <returns><c>true</c> if the JSON object has the specified property name; otherwise, <c>false</c>.</returns>
        public bool ContainsKey(string propertyName)
        {
            ValidationUtils.ArgumentNotNull(propertyName, nameof(propertyName));

            return this._properties.Contains(propertyName);
        }

        ICollection<string> IDictionary<string, JToken>.Keys => this._properties.Keys;

        /// <summary>
        /// Removes the property with the specified name.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <returns><c>true</c> if item was successfully removed; otherwise, <c>false</c>.</returns>
        public bool Remove(string propertyName)
        {
            JProperty property = this.Property(propertyName);
            if (property == null)
            {
                return false;
            }

            property.Remove();
            return true;
        }

        /// <summary>
        /// Tries to get the <see cref="RRQMCore.XREF.Newtonsoft.Json.Linq.JToken"/> with the specified property name.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        /// <param name="value">The value.</param>
        /// <returns><c>true</c> if a value was successfully retrieved; otherwise, <c>false</c>.</returns>
        public bool TryGetValue(string propertyName, out JToken value)
        {
            JProperty property = this.Property(propertyName);
            if (property == null)
            {
                value = null;
                return false;
            }

            value = property.Value;
            return true;
        }

        ICollection<JToken> IDictionary<string, JToken>.Values => throw new NotImplementedException();

        #endregion IDictionary<string,JToken> Members

        #region ICollection<KeyValuePair<string,JToken>> Members

        void ICollection<KeyValuePair<string, JToken>>.Add(KeyValuePair<string, JToken> item)
        {
            this.Add(new JProperty(item.Key, item.Value));
        }

        void ICollection<KeyValuePair<string, JToken>>.Clear()
        {
            this.RemoveAll();
        }

        bool ICollection<KeyValuePair<string, JToken>>.Contains(KeyValuePair<string, JToken> item)
        {
            JProperty property = this.Property(item.Key);
            if (property == null)
            {
                return false;
            }

            return (property.Value == item.Value);
        }

        void ICollection<KeyValuePair<string, JToken>>.CopyTo(KeyValuePair<string, JToken>[] array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException(nameof(array));
            }
            if (arrayIndex < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(arrayIndex), "arrayIndex is less than 0.");
            }
            if (arrayIndex >= array.Length && arrayIndex != 0)
            {
                throw new ArgumentException("arrayIndex is equal to or greater than the length of array.");
            }
            if (this.Count > array.Length - arrayIndex)
            {
                throw new ArgumentException("The number of elements in the source JObject is greater than the available space from arrayIndex to the end of the destination array.");
            }

            int index = 0;
            foreach (JProperty property in this._properties)
            {
                array[arrayIndex + index] = new KeyValuePair<string, JToken>(property.Name, property.Value);
                index++;
            }
        }

        bool ICollection<KeyValuePair<string, JToken>>.IsReadOnly => false;

        bool ICollection<KeyValuePair<string, JToken>>.Remove(KeyValuePair<string, JToken> item)
        {
            if (!((ICollection<KeyValuePair<string, JToken>>)this).Contains(item))
            {
                return false;
            }

            ((IDictionary<string, JToken>)this).Remove(item.Key);
            return true;
        }

        #endregion ICollection<KeyValuePair<string,JToken>> Members

        internal override int GetDeepHashCode()
        {
            return this.ContentsHashCode();
        }

        /// <summary>
        /// Returns an enumerator that can be used to iterate through the collection.
        /// </summary>
        /// <returns>
        /// A <see cref="IEnumerator{T}"/> that can be used to iterate through the collection.
        /// </returns>
        public IEnumerator<KeyValuePair<string, JToken>> GetEnumerator()
        {
            foreach (JProperty property in this._properties)
            {
                yield return new KeyValuePair<string, JToken>(property.Name, property.Value);
            }
        }

        /// <summary>
        /// Raises the <see cref="PropertyChanged"/> event with the provided arguments.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

#if HAVE_INOTIFY_PROPERTY_CHANGING
        /// <summary>
        /// Raises the <see cref="PropertyChanging"/> event with the provided arguments.
        /// </summary>
        /// <param name="propertyName">Name of the property.</param>
        protected virtual void OnPropertyChanging(string propertyName)
        {
            PropertyChanging?.Invoke(this, new PropertyChangingEventArgs(propertyName));
        }
#endif

#if HAVE_COMPONENT_MODEL
        // include custom type descriptor on JObject rather than use a provider because the properties are specific to a type

        #region ICustomTypeDescriptor

        PropertyDescriptorCollection ICustomTypeDescriptor.GetProperties()
        {
            return ((ICustomTypeDescriptor)this).GetProperties(null);
        }

        PropertyDescriptorCollection ICustomTypeDescriptor.GetProperties(Attribute[] attributes)
        {
            PropertyDescriptorCollection descriptors = new PropertyDescriptorCollection(null);

            foreach (KeyValuePair<string, JToken> propertyValue in this)
            {
                descriptors.Add(new JPropertyDescriptor(propertyValue.Key));
            }

            return descriptors;
        }

        AttributeCollection ICustomTypeDescriptor.GetAttributes()
        {
            return AttributeCollection.Empty;
        }

        string ICustomTypeDescriptor.GetClassName()
        {
            return null;
        }

        string ICustomTypeDescriptor.GetComponentName()
        {
            return null;
        }

        TypeConverter ICustomTypeDescriptor.GetConverter()
        {
            return new TypeConverter();
        }

        EventDescriptor ICustomTypeDescriptor.GetDefaultEvent()
        {
            return null;
        }

        PropertyDescriptor ICustomTypeDescriptor.GetDefaultProperty()
        {
            return null;
        }

        object ICustomTypeDescriptor.GetEditor(Type editorBaseType)
        {
            return null;
        }

        EventDescriptorCollection ICustomTypeDescriptor.GetEvents(Attribute[] attributes)
        {
            return EventDescriptorCollection.Empty;
        }

        EventDescriptorCollection ICustomTypeDescriptor.GetEvents()
        {
            return EventDescriptorCollection.Empty;
        }

        object ICustomTypeDescriptor.GetPropertyOwner(PropertyDescriptor pd)
        {
            return null;
        }

        #endregion ICustomTypeDescriptor

#endif

#if HAVE_DYNAMIC
        /// <summary>
        /// Returns the <see cref="DynamicMetaObject"/> responsible for binding operations performed on this object.
        /// </summary>
        /// <param name="parameter">The expression tree representation of the runtime value.</param>
        /// <returns>
        /// The <see cref="DynamicMetaObject"/> to bind this object.
        /// </returns>
        protected override DynamicMetaObject GetMetaObject(Expression parameter)
        {
            return new DynamicProxyMetaObject<JObject>(parameter, this, new JObjectDynamicProxy());
        }

        private class JObjectDynamicProxy : DynamicProxy<JObject>
        {
            public override bool TryGetMember(JObject instance, GetMemberBinder binder, out object result)
            {
                // result can be null
                result = instance[binder.Name];
                return true;
            }

            public override bool TrySetMember(JObject instance, SetMemberBinder binder, object value)
            {
                // this can throw an error if value isn't a valid for a JValue
                if (!(value is JToken v))
                {
                    v = new JValue(value);
                }

                instance[binder.Name] = v;
                return true;
            }

            public override IEnumerable<string> GetDynamicMemberNames(JObject instance)
            {
                return instance.Properties().Select(p => p.Name);
            }
        }
#endif
    }
}