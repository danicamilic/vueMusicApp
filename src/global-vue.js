import Vue from 'vue';

// Global instance of Vue
export function globalVue() {
	return {
		methods: {
			/**
			 * Show toastr notification
			 *
			 * @param message {String} - Notification message
			 * @param type (String) - Type of notification by toastr documentation: info, success, warning, error
			 * @param title {String} - Notification title
			 * @param options {Object} - Override default toastr options
			 */
			isObjectEmpty(obj) {
				try {
					return !Object.keys(obj).length;
				}
				catch (e) {
					return true;
				}
			},
			destroyComponent() {
				this.$destroy();
			}

		},
		filters: {
			formatPrice(price) {
				if (!price)
					return price;
				return parseFloat(price).toLocaleString('sr', { minimumFractionDigits: 0, maximumFractionDigits: 2, useGrouping: true });
			},

		}
	};
}

// Vue event bus plugin
export function eventBus() {
	let eventBus = {};

	eventBus.config = {
		name: '$bus'
	};

	eventBus.install = (Vue) => {
		let v = new Vue({});
		let bus = {};

		bus.$on = function() {
			v.$on.apply(v, arguments);
		};
		bus.$off = function() {
			v.$off.apply(v, arguments);
		};
		bus.$emit = function() {
			v.$emit.apply(v, arguments);
		};
		bus.$once = function() {
			v.$once.apply(v, arguments);
		};
		Object.defineProperty(Vue.prototype, eventBus.config.name, {
			get: () => {
				return bus;
			}
		});
	};

	return eventBus;
}

if (!Array.prototype.find) {
	Array.prototype.find = function(predicate) { // eslint-disable-line no-extend-native
		if (this == null)
			throw new TypeError('Array.prototype.find called on null or undefined');
		if (typeof predicate !== 'function')
			throw new TypeError('predicate must be a function');
		let list = Object(this);
		let length = list.length >>> 0;
		let thisArg = arguments[1];
		let value;

		for (let i = 0; i < length; i++) {
			value = list[i];
			if (predicate.call(thisArg, value, i, list))
				return value;
		}
		return undefined;
	};
}

export const globalStore = new Vue({
	data: {
		existingUser: false
	},
	computed: {
		language() {
			return document.querySelector('html').getAttribute('data-language');
		}
	}
});
