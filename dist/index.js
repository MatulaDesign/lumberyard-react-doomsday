var React = require('react');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
});

var endOfUnit = function endOfUnit(now, type) {
  return {
    months: now.endOf(type).diff(now, 'months'),
    days: now.endOf(type).diff(now, 'days'),
    hours: now.endOf(type).diff(now, 'hours'),
    minutes: now.endOf(type).diff(now, 'minutes'),
    seconds: now.endOf(type).diff(now, 'seconds')
  };
};

var createDoomsdate = function createDoomsdate(date, refresh) {
  var now = dayjs_min(refresh);
  var target = dayjs_min(date);
  var takeYr = target.subtract(target.diff(now, 'years'), 'years');
  var takeMo = takeYr.subtract(takeYr.diff(now, 'months'), 'months');
  var takeDay = takeMo.subtract(takeMo.diff(now, 'days'), 'days');
  var takeHr = takeDay.subtract(takeDay.diff(now, 'hours'), 'hours');
  var takeMin = takeHr.subtract(takeHr.diff(now, 'minutes'), 'minutes');
  return {
    now: now,
    target: target,
    nowTimestamp: now.valueOf(),
    targetTimestamp: target.valueOf(),
    endOfTimeSequence: {
      years: target.diff(now, 'years'),
      months: takeYr.diff(now, 'months'),
      days: takeMo.diff(now, 'days'),
      hours: takeDay.diff(now, 'hours'),
      minutes: takeHr.diff(now, 'minutes'),
      seconds: takeMin.diff(now, 'seconds')
    },
    endOfTimeFloat: {
      years: target.diff(now, 'years'),
      months: takeYr.diff(now, 'months'),
      days: takeYr.diff(now, 'days'),
      hours: takeYr.diff(now, 'hours'),
      minutes: takeYr.diff(now, 'minutes'),
      seconds: takeYr.diff(now, 'seconds')
    },
    endOfTime: {
      years: target.diff(now, 'years'),
      months: target.diff(now, 'months'),
      days: target.diff(now, 'days'),
      hours: target.diff(now, 'hours'),
      minutes: target.diff(now, 'minutes'),
      seconds: target.diff(now, 'seconds')
    },
    endOfYear: endOfUnit(now, 'years'),
    endOfMonth: endOfUnit(now, 'months'),
    endOfDay: endOfUnit(now, 'days'),
    endOfHour: endOfUnit(now, 'hours'),
    endOfMinute: endOfUnit(now, 'minutes'),
    endOfSecond: endOfUnit(now, 'seconds')
  };
};

function useDoomsday(date, play) {
  if (play === void 0) {
    play = true;
  }

  if (dayjs_min(date).valueOf() < dayjs_min().valueOf()) throw new Error('Doomsday: The past is in the past, pick some future date');
  var doom = React.useMemo(function () {
    return createDoomsdate(date);
  }, [date]);

  var _React$useState = React.useState(doom),
      doomsday = _React$useState[0],
      setDoomsday = _React$useState[1];

  var _React$useState2 = React.useState(doomsday.endOfTime.seconds),
      ticker = _React$useState2[0],
      setTicker = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      isHere = _React$useState3[0],
      setIsHere = _React$useState3[1];

  var refresh = React.useCallback(function (now) {
    return setDoomsday(createDoomsdate(date, now));
  }, [date]);
  React.useEffect(function () {
    var tick;

    if (play) {
      tick = setInterval(function () {
        refresh(dayjs_min());
        setTicker(function (s) {
          return --s;
        });

        if (ticker <= 0) {
          setIsHere(true);
          clearInterval(tick);
        }
      }, 1000);
    }

    return function () {
      return clearInterval(tick);
    };
  }, [refresh, play, ticker, doomsday.endOfMinute.seconds]);
  return {
    doomsday: doomsday,
    isHere: isHere
  };
}

var Doomsday = function Doomsday(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === void 0 ? dayjs_min().endOf('year') : _ref$date,
      _ref$play = _ref.play,
      play = _ref$play === void 0 ? true : _ref$play,
      _ref$showDefaults = _ref.showDefaults,
      showDefaults = _ref$showDefaults === void 0 ? true : _ref$showDefaults,
      _ref$renderAll = _ref.renderAll,
      renderAll = _ref$renderAll === void 0 ? false : _ref$renderAll,
      props = _objectWithoutPropertiesLoose(_ref, ["date", "play", "showDefaults", "renderAll"]);

  var _useDoomsday = useDoomsday(date, play),
      doomsday = _useDoomsday.doomsday,
      isHere = _useDoomsday.isHere;

  var formattedDate = dayjs_min(date).format(props.format);

  var renderUnit = function renderUnit(type) {
    return props[type] ? props[type]({
      endOfTime: doomsday.endOfTime[type],
      endOfYear: doomsday.endOfYear[type],
      endOfMonth: doomsday.endOfMonth[type],
      endOfDay: doomsday.endOfDay[type],
      endOfHour: doomsday.endOfHour[type],
      endOfMinute: doomsday.endOfMinute[type],
      endOfSecond: doomsday.endOfSecond[type],
      endOfTimeSequence: doomsday.endOfTimeSequence[type],
      endOfTimeFloat: doomsday.endOfTimeFloat[type],
      type: type,
      label: function label(u, text) {
        return u === 1 ? (text || type).slice(0, -1) : text || type;
      }
    }) : showDefaults && React.createElement("div", {
      style: {
        margin: '0 4px'
      }
    }, React.createElement("span", null, doomsday.endOfTimeSequence[type], " "), React.createElement("span", null, doomsday.endOfTimeSequence[type] === 1 ? type.slice(0, -1) : type));
  };

  var render = props.render && props.render(_extends({}, doomsday, {
    date: formattedDate
  }));
  var renderYears = renderUnit('years');
  var renderMonths = renderUnit('months');
  var renderDays = renderUnit('days');
  var renderHours = renderUnit('hours');
  var renderMinutes = renderUnit('minutes');
  var renderSeconds = renderUnit('seconds');

  var div = _objectWithoutPropertiesLoose(props, ["seconds", "minutes", "hours", "days", "months", "years"]);

  var styles = _extends({
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, props.style);

  if (isHere) return React.createElement("div", Object.assign({
    style: styles
  }, div), props.goodbye);
  if (props.render && !renderAll) return React.createElement("div", Object.assign({
    style: styles
  }, div), render);
  return React.createElement("div", Object.assign({
    style: styles
  }, div), renderYears, renderMonths, renderDays, renderHours, renderMinutes, renderSeconds, renderAll && render);
};

module.exports = Doomsday;
//# sourceMappingURL=index.js.map
