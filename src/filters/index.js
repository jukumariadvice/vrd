import Vue from "vue";
import FormatPosition from "./format-position";
import FormatPositionOSM from "./format-position-osm";
import FormatDataTreemap from "./format-data-treemap";
import FormatArray from "./format-array";
Vue.filter("position", FormatPosition);
Vue.filter("treemap", FormatDataTreemap);
Vue.filter("array", FormatArray);
Vue.filter("osmarker", FormatPositionOSM);
