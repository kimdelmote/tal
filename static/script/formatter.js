/**
 * @fileOverview Requirejs module containing base antie.Formatter class.
 * @author Chris Warren <chris.warren@bbc.co.uk>
 * @version 1.0.0
 */

require.def("antie/formatter",
	[
		"antie/class"
	],
	function(Class) {
		/**
		 * Base formatter. Takes an iterator to a data source and returns a widget tree to represent one or more items of data.
		 * @name antie.Formatter
		 * @class
		 * @abstract
		 * @extends antie.Class
		 * @requires antie.Iterator
		 */
		return Class.extend(/** @lends antie.Formatter.prototype */ {
			/**
			 * @constructor
			 * @ignore
			 */
			init: function(opts) {
				if (opts) {
					this._opts = opts;
				}
			},
			/**
			 * Formats data from the iterator.
			 * @param {antie.Iterator} iterator An iterator pointing to the data to be formatted.	
			 * @returns A antie.widgets.Widget object representing one or more data items from the iterator.
			 */
			format: function(iterator) {
				throw new Error("Not implemented (Formatter::format). A formatter class does not implement its format method.");
			}
		});
	}
);