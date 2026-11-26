(()=>{var Zu=0,eh=1,Ju=2;var os=1,$u=2,sr=3,Oi=0,qt=1,Ln=2,xi=0,rr=1,vi=2,th=3,nh=4,Ku=5;var ls=100,Qu=101,ju=102,ef=103,tf=104,nf=200,sf=201,rf=202,af=203,ih=204,sh=205,of=206,lf=207,cf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,xo=0,vo=1,yo=2,Xs=3,Mo=4,So=5,bo=6,wo=7,rh=0,gf=1,_f=2,ti=0,ua=1,fa=2,da=3,cs=4,pa=5,ma=6,ga=7;var ah=300,hs=301,ar=302,or=303,Jo=304,ts=1e3,gn=1001,To=1002,en=1003,xf=1004;var _a=1005;var dn=1006,$o=1007;var Vn=1008;var _n=1009,oh=1010,lh=1011,lr=1012,Ko=1013,Gn=1014,Dn=1015,Yt=1016,Qo=1017,jo=1018,us=1020,ch=35902,hh=35899,uh=1021,fh=1022,Hn=1023,mi=1026,yi=1027,el=1028,tl=1029,Bi=1030,nl=1031;var il=1033,xa=33776,va=33777,ya=33778,Ma=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37488,fl=37489,Sa=37490,dl=37491,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,vl=37813,yl=37814,Ml=37815,Sl=37816,bl=37817,wl=37818,Tl=37819,El=37820,Al=37821,Cl=36492,Rl=36494,Pl=36495,Il=36283,Ll=36284,ba=36285,Dl=36286;var kr=2300,Eo=2301,go=2302,Xc=2303,qc=2400,Yc=2401,Zc=2402;var vf=3200,dh=3201;var Nl=0,yf=1,Wn="",Wt="srgb",zr="srgb-linear",Vr="linear",ht="srgb";var _o=7680;var Mf=519,Sf=512,bf=513,wf=514,ph=515,Tf=516,Ef=517,mh=518,gh=519,Af=35044,Ul=35048;var _h="300 es",In=2e3,qs=2001;function mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){let i=Gr("canvas");return i.style.display="block",i}var _u={},Ys=null;function xh(...i){let e="THREE."+i.shift();Ys?Ys("log",e,...i):console.log(e,...i)}function Rf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Rf(i);let e="THREE."+i.shift();if(Ys)Ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Rf(i);let e="THREE."+i.shift();if(Ys)Ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Br(...i){let e=i.join(" ");e in _u||(_u[e]=!0,We(...i))}function Pf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var If={[xo]:xo,[yo]:bo,[Mo]:Mo,[Xs]:So,[vo]:vo,[bo]:yo,[wo]:wo,[So]:Xs},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sc=Math.PI/180,Ao=180/Math.PI;function wa(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function _p(i,e){return(i%e+e)%e}function bc(i,e,t){return(1-t)*i+t*e}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xp(i,e){if(e.constructor===Float32Array)return i;let t=vh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function vp(i,e){if(e.constructor===Float32Array)return i;let t=vh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var wh=class wh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wh.prototype.isVector2=!0;var Ne=wh,$n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(f!==x||c!==u||l!==p||h!==_){let d=c*u+l*p+h*_+f*x;d<0&&(u=-u,p=-p,_=-_,x=-x,d=-d);let m=1-o;if(d<.9995){let v=Math.acos(d),A=Math.sin(v);m=Math.sin(m*v)/A,o=Math.sin(o*v)/A,c=c*m+u*o,l=l*m+p*o,h=h*m+_*o,f=f*m+x*o}else{c=c*m+u*o,l=l*m+p*o,h=h*m+_*o,f=f*m+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*f+c*p-l*u,e[t+1]=c*_+h*u+l*f-o*p,e[t+2]=l*_+h*p+o*u-c*f,e[t+3]=h*_-o*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f+u*p*_;break;case"YZX":this._x=u*h*f+l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f-u*p*_;break;case"XZY":this._x=u*h*f-l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f+u*p*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Th=class Th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;var z=Th,wc=new z,xu=new $n,Eh=class Eh{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],x=s[0],d=s[3],m=s[6],v=s[1],A=s[4],E=s[7],M=s[2],b=s[5],g=s[8];return r[0]=a*x+o*v+c*M,r[3]=a*d+o*A+c*b,r[6]=a*m+o*E+c*g,r[1]=l*x+h*v+f*M,r[4]=l*d+h*A+f*b,r[7]=l*m+h*E+f*g,r[2]=u*x+p*v+_*M,r[5]=u*d+p*A+_*b,r[8]=u*m+p*E+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,p=l*r-a*c,_=t*f+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return Br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return Br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;var Ye=Eh,Tc=new Ye,vu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){let i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var it=yp();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Co=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Gr("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mp=0,Zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ec(s[a].image)):r.push(Ec(s[a]))}else r=Ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Sp=0,Ac=new z,nn=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,s=gn,r=dn,a=Vn,o=Hn,c=_n,l=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=wa(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ah;nn.DEFAULT_ANISOTROPY=1;var Ah=class Ah{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],_=c[9],x=c[2],d=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(_+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,E=(p+1)/2,M=(m+1)/2,b=(h+u)/4,g=(f+x)/4,y=(_+d)/4;return A>E&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=g/n):E>M?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=b/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=g/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((d-_)*(d-_)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ah.prototype.isVector4=!0;var wt=Ah,Ro=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends Ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Po=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Zo=class Zo{constructor(e,t,n,s,r,a,o,c,l,h,f,u,p,_,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,u,p,_,x,d)}set(e,t,n,s,r,a,o,c,l,h,f,u,p,_,x,d){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=p,m[7]=_,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*f,_=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+_*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*f,_=l*h,x=l*f;t[0]=u+x*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*f,_=l*h,x=l*f;t[0]=u-x*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*f,_=o*h,x=o*f;t[0]=c*h,t[4]=_*l-p,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=x-u*f,t[8]=_*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+_,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=a*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,wp)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ai.crossVectors(n,Mn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ai.crossVectors(n,Mn)),Ai.normalize(),Wa.crossVectors(Mn,Ai),s[0]=Ai.x,s[4]=Wa.x,s[8]=Mn.x,s[1]=Ai.y,s[5]=Wa.y,s[9]=Mn.y,s[2]=Ai.z,s[6]=Wa.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],x=n[6],d=n[10],m=n[14],v=n[3],A=n[7],E=n[11],M=n[15],b=s[0],g=s[4],y=s[8],R=s[12],S=s[1],I=s[5],D=s[9],G=s[13],L=s[2],k=s[6],X=s[10],C=s[14],V=s[3],U=s[7],F=s[11],H=s[15];return r[0]=a*b+o*S+c*L+l*V,r[4]=a*g+o*I+c*k+l*U,r[8]=a*y+o*D+c*X+l*F,r[12]=a*R+o*G+c*C+l*H,r[1]=h*b+f*S+u*L+p*V,r[5]=h*g+f*I+u*k+p*U,r[9]=h*y+f*D+u*X+p*F,r[13]=h*R+f*G+u*C+p*H,r[2]=_*b+x*S+d*L+m*V,r[6]=_*g+x*I+d*k+m*U,r[10]=_*y+x*D+d*X+m*F,r[14]=_*R+x*G+d*C+m*H,r[3]=v*b+A*S+E*L+M*V,r[7]=v*g+A*I+E*k+M*U,r[11]=v*y+A*D+E*X+M*F,r[15]=v*R+A*G+E*C+M*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],_=e[3],x=e[7],d=e[11],m=e[15],v=c*p-l*u,A=o*p-l*f,E=o*u-c*f,M=a*p-l*h,b=a*u-c*h,g=a*f-o*h;return t*(x*v-d*A+m*E)-n*(_*v-d*M+m*b)+s*(_*A-x*M+m*g)-r*(_*E-x*b+d*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],_=e[12],x=e[13],d=e[14],m=e[15],v=t*o-n*a,A=t*c-s*a,E=t*l-r*a,M=n*c-s*o,b=n*l-r*o,g=s*l-r*c,y=h*x-f*_,R=h*d-u*_,S=h*m-p*_,I=f*d-u*x,D=f*m-p*x,G=u*m-p*d,L=v*G-A*D+E*I+M*S-b*R+g*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return e[0]=(o*G-c*D+l*I)*k,e[1]=(s*D-n*G-r*I)*k,e[2]=(x*g-d*b+m*M)*k,e[3]=(u*b-f*g-p*M)*k,e[4]=(c*S-a*G-l*R)*k,e[5]=(t*G-s*S+r*R)*k,e[6]=(d*E-_*g-m*A)*k,e[7]=(h*g-u*E+p*A)*k,e[8]=(a*D-o*S+l*y)*k,e[9]=(n*S-t*D-r*y)*k,e[10]=(_*b-x*E+m*v)*k,e[11]=(f*E-h*b-p*v)*k,e[12]=(o*R-a*I-c*y)*k,e[13]=(t*I-n*R+s*y)*k,e[14]=(x*A-_*M-d*v)*k,e[15]=(h*M-f*A+u*v)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,p=r*h,_=r*f,x=a*h,d=a*f,m=o*f,v=c*l,A=c*h,E=c*f,M=n.x,b=n.y,g=n.z;return s[0]=(1-(x+m))*M,s[1]=(p+E)*M,s[2]=(_-A)*M,s[3]=0,s[4]=(p-E)*b,s[5]=(1-(u+m))*b,s[6]=(d+v)*b,s[7]=0,s[8]=(_+A)*g,s[9]=(d-v)*g,s[10]=(1-(u+x))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),c=Is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let l=1/a,h=1/o,f=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=In,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),_,x;if(c)_=r/(a-r),x=a*r/(a-r);else if(o===In)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===qs)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=In,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),_,x;if(c)_=1/(a-r),x=a/(a-r);else if(o===In)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===qs)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Zo.prototype.isMatrix4=!0;var ut=Zo,Is=new z,Fn=new ut,bp=new z(0,0,0),wp=new z(1,1,1),Ai=new z,Wa=new z,Mn=new z,Mu=new ut,Su=new $n,gi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tp=0,bu=new z,Ls=new $n,ci=new ut,Xa=new z,Ir=new z,Ep=new z,Ap=new $n,wu=new z(1,0,0),Tu=new z(0,1,0),Eu=new z(0,0,1),Au={type:"added"},Cp={type:"removed"},Ds={type:"childadded",child:null},Cc={type:"childremoved",child:null},kt=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new gi,n=new $n,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ye}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ir,Xa,this.up):ci.lookAt(Xa,Ir,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ci),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new z(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rp={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let d=t.getJointPose(x,n),m=this._getHandJoint(l,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=_p(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rc(a,r,e+1/3),this.g=Rc(a,r,e),this.b=Rc(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return it.workingToColorSpace(ln.copy(this),e),Math.round(ot(ln.r*255,0,255))*65536+Math.round(ot(ln.g*255,0,255))*256+Math.round(ot(ln.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Wt){it.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(qa);let n=bc(Ci.h,qa.h,t),s=bc(Ci.s,qa.s,t),r=bc(Ci.l,qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new ke;ke.NAMES=Df;var Xr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ns=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},On=new z,hi=new z,Pc=new z,ui=new z,Ns=new z,Us=new z,Cu=new z,Ic=new z,Lc=new z,Dc=new z,Nc=new wt,Uc=new wt,Fc=new wt,Li=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),hi.subVectors(n,t),Pc.subVectors(e,t);let a=On.dot(On),o=On.dot(hi),c=On.dot(Pc),l=hi.dot(hi),h=hi.dot(Pc),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Nc.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Nc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nc,r.x),a.addScaledVector(Uc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,n),Us.subVectors(r,n),Ic.subVectors(e,n);let c=Ns.dot(Ic),l=Us.dot(Ic);if(c<=0&&l<=0)return t.copy(n);Lc.subVectors(e,s);let h=Ns.dot(Lc),f=Us.dot(Lc);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ns,a);Dc.subVectors(e,r);let p=Ns.dot(Dc),_=Us.dot(Dc);if(_>=0&&p<=_)return t.copy(r);let x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Us,o);let d=h*_-p*f;if(d<=0&&f-h>=0&&p-_>=0)return Cu.subVectors(r,s),o=(f-h)/(f-h+(p-_)),t.copy(s).addScaledVector(Cu,o);let m=1/(d+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Za.subVectors(this.max,Lr),Fs.subVectors(e.a,Lr),Os.subVectors(e.b,Lr),Bs.subVectors(e.c,Lr),Ri.subVectors(Os,Fs),Pi.subVectors(Bs,Os),Ki.subVectors(Fs,Bs);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Ki.y,Ki.x,0];return!Oc(t,Fs,Os,Bs,Za)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Fs,Os,Bs,Za))?!1:(Ja.crossVectors(Ri,Pi),t=[Ja.x,Ja.y,Ja.z],Oc(t,Fs,Os,Bs,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new z,new z,new z,new z,new z,new z,new z,new z],Bn=new z,Ya=new Kn,Fs=new z,Os=new z,Bs=new z,Ri=new z,Pi=new z,Ki=new z,Lr=new z,Za=new z,Ja=new z,Qi=new z;function Oc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);let o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Bt=new z,$a=new Ne,Pp=0,hn=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Af,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=e!==void 0?vh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vp(e,this.array)}};var qr=class extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yr=class extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ip=new Kn,Dr=new z,Bc=new z,Qn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Bc)),this.expandByPoint(Dr.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lp=0,Pn=new ut,kc=new kt,ks=new z,Sn=new Kn,Nr=new Kn,jt=new z,bt=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?Yr:qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Sn.min,Nr.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,Nr.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(Nr.min),Sn.expandByPoint(Nr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(ks.fromBufferAttribute(e,l),jt.add(ks)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new z,c[R]=new z;let h=new z,f=new z,u=new z,p=new Ne,_=new Ne,x=new Ne,d=new z,m=new z;function v(R,S,I){l[R]=l[S]=l[I]=1,h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),u.fromBufferAttribute(n,I),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,S),x.fromBufferAttribute(r,I),f.sub(h),u.sub(h),_.sub(p),x.sub(p);let D=1/(_.x*x.y-x.x*_.y);isFinite(D)&&(d.copy(f).multiplyScalar(x.y).addScaledVector(u,-_.y).multiplyScalar(D),m.copy(u).multiplyScalar(_.x).addScaledVector(f,-x.x).multiplyScalar(D),o[R].add(d),o[S].add(d),o[I].add(d),c[R].add(m),c[S].add(m),c[I].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let R=0,S=A.length;R<S;++R){let I=A[R],D=I.start,G=I.count;for(let L=D,k=D+G;L<k;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let E=new z,M=new z,b=new z,g=new z;function y(R){b.fromBufferAttribute(s,R),g.copy(b);let S=o[R];E.copy(S),E.sub(b.multiplyScalar(b.dot(S))).normalize(),M.crossVectors(g,S);let D=M.dot(c[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,D)}for(let R=0,S=n.count;R<S;++R)l[R]&&y(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,f=new z;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),x=e.getX(u+1),d=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),p=0,_=0;for(let x=0,d=c.length;x<d;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let m=0;m<h;m++)u[_++]=l[p++]}return new hn(u,h,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zc=new z,Dp=new z,Np=new Ye,kn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zc.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Np.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Up=0,jn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=rr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new z,Vc=new z,Ka=new z,Qa=new z,$s=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vc.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Vc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=Qa.dot(this.direction),c=-Qa.dot(Ka),l=Qa.lengthSq(),h=Math.abs(1-a*a),f,u,p,_;if(h>0)if(f=a*c-o,u=a*o-c,_=r*h,f>=0)if(u>=-_)if(u<=_){let x=1/h;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vc).addScaledVector(Ka,u),p}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,x=t.y-a.y,d=t.z-a.z,m=n.x-a.x,v=n.y-a.y,A=n.z-a.z,E=Math.abs(c),M=Math.abs(l),b=Math.abs(h),g,y,R,S,I,D,G,L,k,X,C,V;if(E>=M&&E>=b?(R=c,D=f,k=_,V=m,c>=0?(g=l,y=h,S=u,I=p,G=x,L=d,X=v,C=A):(g=h,y=l,S=p,I=u,G=d,L=x,X=A,C=v)):M>=b?(R=l,D=u,k=x,V=v,l>=0?(g=h,y=c,S=p,I=f,G=d,L=_,X=A,C=m):(g=c,y=h,S=f,I=p,G=_,L=d,X=m,C=A)):(R=h,D=p,k=d,V=A,h>=0?(g=c,y=l,S=f,I=u,G=_,L=x,X=m,C=v):(g=l,y=c,S=u,I=f,G=x,L=_,X=v,C=m)),R===0)return null;let U=g/R,F=y/R,H=1/R,Q=S-U*D,he=I-F*D,K=G-U*k,J=L-F*k,te=X-U*V,ee=C-F*V,Z=te*J-ee*K,ae=Q*ee-he*te,Xe=K*he-J*Q;if(s){if(Z<0||ae<0||Xe<0)return null}else if((Z<0||ae<0||Xe<0)&&(Z>0||ae>0||Xe>0))return null;let ye=Z+ae+Xe;if(ye===0)return null;let Fe=H*(Z*D+ae*k+Xe*V);return(ye>0?Fe<0:Fe>0)?null:this.at(Fe/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ru=new ut,ji=new $s,ja=new Qn,Pu=new z,eo=new z,to=new z,no=new z,Gc=new z,io=new z,Iu=new z,so=new z,pt=class extends kt{constructor(e=new bt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Gc.fromBufferAttribute(f,e),a?io.addScaledVector(Gc,h):io.addScaledVector(Gc.sub(t),h))}t.add(io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(ja.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ja,Pu)===null||ji.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Ru.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){let d=u[_],m=a[d.materialIndex],v=Math.max(d.start,p.start),A=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let E=v,M=A;E<M;E+=3){let b=o.getX(E),g=o.getX(E+1),y=o.getX(E+2);s=ro(this,m,e,n,l,h,f,b,g,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let d=_,m=x;d<m;d+=3){let v=o.getX(d),A=o.getX(d+1),E=o.getX(d+2);s=ro(this,a,e,n,l,h,f,v,A,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){let d=u[_],m=a[d.materialIndex],v=Math.max(d.start,p.start),A=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let E=v,M=A;E<M;E+=3){let b=E,g=E+1,y=E+2;s=ro(this,m,e,n,l,h,f,b,g,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let d=_,m=x;d<m;d+=3){let v=d,A=d+1,E=d+2;s=ro(this,a,e,n,l,h,f,v,A,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function Fp(i,e,t,n,s,r,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Oi,o),c===null)return null;so.copy(o),so.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(so);return l<t.near||l>t.far?null:{distance:l,point:so.clone(),object:i}}function ro(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,eo),i.getVertexPosition(c,to),i.getVertexPosition(l,no);let h=Fp(i,e,t,n,eo,to,no,Iu);if(h){let f=new z;Li.getBarycoord(Iu,eo,to,no,f),s&&(h.uv=Li.getInterpolatedAttribute(s,o,c,l,f,new Ne)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,c,l,f,new Ne)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,c,l,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new z,materialIndex:0};Li.getNormal(eo,to,no,u.normal),h.face=u,h.barycoord=f}return h}var Zr=class extends nn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=en,h=en,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new ut,Lu=new ut,ao=[],Du=new Kn,Op=new ut,Ur=new pt,Fr=new Qn,$r=class extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Op)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Du.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(Du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Fr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),Lu.multiplyMatrices(n,zs),Ur.matrixWorld=Lu,Ur.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){let c=ao[a];c.instanceId=r,c.object=this,t.push(c)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(s*this.count),s,this.count,el,Dn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new Qn,Bp=new Ne(.5,.5),oo=new z,Di=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],x=r[9],d=r[10],m=r[11],v=r[12],A=r[13],E=r[14],M=r[15];if(s[0].setComponents(l-a,p-h,m-_,M-v).normalize(),s[1].setComponents(l+a,p+h,m+_,M+v).normalize(),s[2].setComponents(l+o,p+f,m+x,M+A).normalize(),s[3].setComponents(l-o,p-f,m-x,M-A).normalize(),n)s[4].setComponents(c,u,d,E).normalize(),s[5].setComponents(l-c,p-u,m-d,M-E).normalize();else if(s[4].setComponents(l-c,p-u,m-d,M-E).normalize(),t===In)s[5].setComponents(l+c,p+u,m+d,M+E).normalize();else if(t===qs)s[5].setComponents(c,u,d,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);let t=Bp.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nu=new ut,Io=class i{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Di),n[s].setFromProjectionMatrix(Nu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Di),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ks=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lo=new z,Do=new z,Uu=new ut,Or=new $s,lo=new Qn,Hc=new z,Fu=new z,No=class extends kt{constructor(e=new bt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Lo.fromBufferAttribute(t,s-1),Do.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Lo.distanceTo(Do);e.setAttribute("lineDistance",new Ke(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Uu.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Uu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=p,d=_-1;x<d;x+=l){let m=h.getX(x),v=h.getX(x+1),A=co(this,e,Or,c,m,v,x);A&&t.push(A)}if(this.isLineLoop){let x=h.getX(_-1),d=h.getX(p),m=co(this,e,Or,c,x,d,_-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=p,d=_-1;x<d;x+=l){let m=co(this,e,Or,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=co(this,e,Or,c,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function co(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Lo.fromBufferAttribute(o,s),Do.fromBufferAttribute(o,r),t.distanceSqToSegment(Lo,Do,Hc,Fu)>n)return;Hc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Hc);if(!(l<e.near||l>e.far))return{distance:l,point:Fu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ou=new z,Bu=new z,Kr=class extends No{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ou.fromBufferAttribute(t,s),Bu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ou.distanceTo(Bu);e.setAttribute("lineDistance",new Ke(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var is=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ku=new ut,Jc=new $s,ho=new Qn,uo=new z,Qs=class extends kt{constructor(e=new bt,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;ku.copy(s).invert(),Jc.copy(e.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=u,x=p;_<x;_++){let d=l.getX(_);uo.fromBufferAttribute(f,d),zu(uo,d,c,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,x=p;_<x;_++)uo.fromBufferAttribute(f,_),zu(uo,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zu(i,e,t,n,s,r,a){let o=Jc.distanceSqToPoint(i);if(o<t){let c=new z;Jc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends nn{constructor(e=[],t=hs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jr=class extends nn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends nn{constructor(e,t,n=Gn,s,r,a,o=en,c=en,l,h=mi,f=1){if(h!==mi&&h!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends _i{constructor(e,t=Gn,n=hs,s,r,a=en,o=en,c,l=mi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dt=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2));function _(x,d,m,v,A,E,M,b,g,y,R){let S=E/g,I=M/y,D=E/2,G=M/2,L=b/2,k=g+1,X=y+1,C=0,V=0,U=new z;for(let F=0;F<X;F++){let H=F*I-G;for(let Q=0;Q<k;Q++){let he=Q*S-D;U[x]=he*v,U[d]=H*A,U[m]=L,l.push(U.x,U.y,U.z),U[x]=0,U[d]=0,U[m]=b>0?1:-1,h.push(U.x,U.y,U.z),f.push(Q/g),f.push(1-F/y),C+=1}}for(let F=0;F<y;F++)for(let H=0;H<g;H++){let Q=u+H+k*F,he=u+H+k*(F+1),K=u+(H+1)+k*(F+1),J=u+(H+1)+k*F;c.push(Q,he,J),c.push(he,K,J),V+=6}o.addGroup(p,V,R),p+=V,u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bn=class i extends bt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,_=n*2+r,x=s+1,d=new z,m=new z;for(let v=0;v<=_;v++){let A=0,E=0,M=0,b=0;if(v<=n){let R=v/n,S=R*Math.PI/2;E=-h-e*Math.cos(S),M=e*Math.sin(S),b=-e*Math.cos(S),A=R*f}else if(v<=n+r){let R=(v-n)/r;E=-h+R*t,M=e,b=0,A=f+R*u}else{let R=(v-n-r)/n,S=R*Math.PI/2;E=h+e*Math.sin(S),M=e*Math.cos(S),b=e*Math.sin(S),A=f+u+R*f}let g=Math.max(0,Math.min(1,A/p)),y=0;v===0?y=.5/s:v===_&&(y=-.5/s);for(let R=0;R<=s;R++){let S=R/s,I=S*Math.PI*2,D=Math.sin(I),G=Math.cos(I);m.x=-M*G,m.y=E,m.z=M*D,o.push(m.x,m.y,m.z),d.set(-M*G,b,M*D),d.normalize(),c.push(d.x,d.y,d.z),l.push(S+y,g)}if(v>0){let R=(v-1)*x;for(let S=0;S<s;S++){let I=R+S,D=R+S+1,G=v*x+S,L=v*x+S+1;a.push(I,D,G),a.push(D,L,G)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ss=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new z,h=new Ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let p=n+f/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xt=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],_=0,x=[],d=n/2,m=0;v(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ke(f,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(p,2));function v(){let E=new z,M=new z,b=0,g=(t-e)/n;for(let y=0;y<=r;y++){let R=[],S=y/r,I=S*(t-e)+e;for(let D=0;D<=s;D++){let G=D/s,L=G*c+o,k=Math.sin(L),X=Math.cos(L);M.x=I*k,M.y=-S*n+d,M.z=I*X,f.push(M.x,M.y,M.z),E.set(k,g,X).normalize(),u.push(E.x,E.y,E.z),p.push(G,1-S),R.push(_++)}x.push(R)}for(let y=0;y<s;y++)for(let R=0;R<r;R++){let S=x[R][y],I=x[R+1][y],D=x[R+1][y+1],G=x[R][y+1];(e>0||R!==0)&&(h.push(S,I,G),b+=3),(t>0||R!==r-1)&&(h.push(I,D,G),b+=3)}l.addGroup(m,b,0),m+=b}function A(E){let M=_,b=new Ne,g=new z,y=0,R=E===!0?e:t,S=E===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,d*S,0),u.push(0,S,0),p.push(.5,.5),_++;let I=_;for(let D=0;D<=s;D++){let L=D/s*c+o,k=Math.cos(L),X=Math.sin(L);g.x=R*X,g.y=d*S,g.z=R*k,f.push(g.x,g.y,g.z),u.push(0,S,0),b.x=k*.5+.5,b.y=X*.5*S+.5,p.push(b.x,b.y),_++}for(let D=0;D<s;D++){let G=M+D,L=I+D;E===!0?h.push(L,L+1,G):h.push(L+1,L,G),y+=3}l.addGroup(m,y,E===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},na=class i extends Xt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uo=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new z,E=new z,M=new z;for(let b=0;b<t.length;b+=3)p(t[b+0],A),p(t[b+1],E),p(t[b+2],M),c(A,E,M,v)}function c(v,A,E,M){let b=M+1,g=[];for(let y=0;y<=b;y++){g[y]=[];let R=v.clone().lerp(E,y/b),S=A.clone().lerp(E,y/b),I=b-y;for(let D=0;D<=I;D++)D===0&&y===b?g[y][D]=R:g[y][D]=R.clone().lerp(S,D/I)}for(let y=0;y<b;y++)for(let R=0;R<2*(b-y)-1;R++){let S=Math.floor(R/2);R%2===0?(u(g[y][S+1]),u(g[y+1][S]),u(g[y][S])):(u(g[y][S+1]),u(g[y+1][S+1]),u(g[y+1][S]))}}function l(v){let A=new z;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(v),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function h(){let v=new z;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let E=d(v)/2/Math.PI+.5,M=m(v)/Math.PI+.5;a.push(E,1-M)}_(),f()}function f(){for(let v=0;v<a.length;v+=6){let A=a[v+0],E=a[v+2],M=a[v+4],b=Math.max(A,E,M),g=Math.min(A,E,M);b>.9&&g<.1&&(A<.2&&(a[v+0]+=1),E<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,A){let E=v*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function _(){let v=new z,A=new z,E=new z,M=new z,b=new Ne,g=new Ne,y=new Ne;for(let R=0,S=0;R<r.length;R+=9,S+=6){v.set(r[R+0],r[R+1],r[R+2]),A.set(r[R+3],r[R+4],r[R+5]),E.set(r[R+6],r[R+7],r[R+8]),b.set(a[S+0],a[S+1]),g.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),M.copy(v).add(A).add(E).divideScalar(3);let I=d(M);x(b,S+0,v,I),x(g,S+2,A,I),x(y,S+4,E,I)}}function x(v,A,E,M){M<0&&v.x===1&&(a[A]=v.x-1),E.x===0&&E.z===0&&(a[A]=M/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ia=class i extends Uo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},sa=class i extends bt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,f=new z,u=new Ne,p=new z,_=new z,x=new z,d=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:d=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,p.x=m*1,p.y=-d,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:d=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,p.x=m*1,p.y=-d,p.z=m*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(_)}for(let v=0;v<=t;v++){let A=n+v*h*s,E=Math.sin(A),M=Math.cos(A);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*E,f.y=e[b].y,f.z=e[b].x*M,a.push(f.x,f.y,f.z),u.x=v/t,u.y=b/(e.length-1),o.push(u.x,u.y);let g=c[3*b+0]*E,y=c[3*b+1],R=c[3*b+0]*M;l.push(g,y,R)}}for(let v=0;v<t;v++)for(let A=0;A<e.length-1;A++){let E=A+v*e.length,M=E,b=E+e.length,g=E+e.length+1,y=E+1;r.push(M,b,y),r.push(g,y,b)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var zn=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,p=[],_=[],x=[],d=[];for(let m=0;m<h;m++){let v=m*u-a;for(let A=0;A<l;A++){let E=A*f-r;_.push(E,-v,0),x.push(0,0,1),d.push(A/o),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let A=v+l*m,E=v+l*(m+1),M=v+1+l*(m+1),b=v+1+l*m;p.push(A,E,b),p.push(E,M,b)}this.setIndex(p),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mn=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new z,u=new z,p=[],_=[],x=[],d=[];for(let m=0;m<=n;m++){let v=[],A=m/n,E=a+A*o,M=e*Math.cos(E),b=Math.sqrt(e*e-M*M),g=0;m===0&&a===0?g=.5/t:m===n&&c===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){let R=y/t,S=s+R*r;f.x=-b*Math.cos(S),f.y=M,f.z=b*Math.sin(S),_.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),d.push(R+g,1-A),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let A=h[m][v+1],E=h[m][v],M=h[m+1][v],b=h[m+1][v+1];(m!==0||a>0)&&p.push(A,E,b),(m!==n-1||c<Math.PI)&&p.push(E,M,b)}this.setIndex(p),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rs=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],u=new z,p=new z,_=new z;for(let x=0;x<=n;x++){let d=a+x/n*o;for(let m=0;m<=s;m++){let v=m/s*r;p.x=(e+t*Math.cos(d))*Math.cos(v),p.y=(e+t*Math.cos(d))*Math.sin(v),p.z=t*Math.sin(d),l.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),f.push(m/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let d=1;d<=s;d++){let m=(s+1)*x+d-1,v=(s+1)*(x-1)+d-1,A=(s+1)*(x-1)+d,E=(s+1)*x+d;c.push(m,v,E),c.push(v,A,E)}this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Vu(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=fs(i[t]);for(let s in n)e[s]=n[s]}return e}function Vu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Xn={clone:fs,merge:un},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},js=class extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ei=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var er=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ni=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oo=class extends Ni{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,o=2*t-n;break;case Zc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yc:a=e,c=2*n-t;break;case Zc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),x=_*_,d=x*_,m=-u*d+2*u*x-u*_,v=(1+u)*d+(-1.5-2*u)*x+(-.5+u)*_+1,A=(-1-p)*d+(1.5+p)*x+.5*_,E=p*d-p*x;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+v*a[l+M]+A*a[c+M]+E*a[f+M];return r}},Bo=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},ko=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zo=class extends Ni{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(s-t),x=1-_;for(let d=0;d!==o;++d)r[d]=a[l+d]*x+a[c+d]*_;return r}let u=o*2,p=e-1;for(let _=0;_!==o;++_){let x=a[l+_],d=a[c+_],m=p*u+_*2,v=f[m],A=f[m+1],E=e*u+_*2,M=h[E],b=h[E+1],g=Hp(n,t,v,M,s);r[_]=Nf(g,x,A,b,d)}return r}};function Nf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Gp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Hp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Nf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Gp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),fo(e.settings)&&(n.settings={inTangents:Vs(e.settings.inTangents,Array),outTangents:Vs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;fo(this.settings)&&(Gu(this.settings.inTangents,e),Gu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;fo(this.settings)&&(Hu(this.settings.inTangents,e),Hu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&gp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let x=t[f+_];if(x!==t[u+_]||x!==t[p+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,fo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Eo;var Ui=class extends wn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=kr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="color";var Go=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="number";var Ho=class extends Ni{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)$n.slerpFlat(r,0,a,l-o,a,l,c);return r}},ra=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends wn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=kr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="vector";var Xo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let p=l[f],_=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uf=new Xo,qo=class{constructor(e){this.manager=e!==void 0?e:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},aa=class extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wc=new ut,Wu=new z,Xu=new z,oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new z,mo=new $n,Zn=new z,la=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(po,mo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new z,qu=new Ne,Yu=new Ne,cn=class extends la{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,qu,Yu),t.subVectors(Yu,qu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $c=class extends oa{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},ca=class extends tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},as=class extends la{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends oa{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gs=-90,Hs=1,ir=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Gs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new cn(Gs,Hs,e,t);r.layers=this.layers,this.add(r);let a=new cn(Gs,Hs,e,t);a.layers=this.layers,this.add(a);let o=new cn(Gs,Hs,e,t);o.layers=this.layers,this.add(o);let c=new cn(Gs,Hs,e,t);c.layers=this.layers,this.add(c);let l=new cn(Gs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Yo=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Wp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Wp(){this._document.hidden===!1&&this.reset()}var Mh="\\[\\]\\.:\\/",Xp=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",qp="[^"+Mh.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Sh),Zp=/(WCOD+)?/.source.replace("WCOD",qp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),$p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Kp=new RegExp("^"+Yp+Zp+Jp+$p+"$"),Qp=["material","materials","bones","map"],Qc=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(e){let t=Kp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Qc;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var Ch=class Ch{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ch.prototype.isMatrix2=!0;var jc=Ch;function bh(i,e,t,n){let s=jp(n);switch(t){case uh:return i*e;case el:return i*e/s.components*s.byteLength;case tl:return i*e/s.components*s.byteLength;case Bi:return i*e*2/s.components*s.byteLength;case nl:return i*e*2/s.components*s.byteLength;case fh:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case il:return i*e*4/s.components*s.byteLength;case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case sl:case al:return Math.max(i,8)*Math.max(e,8)/2;case ll:case cl:case ul:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:case Sa:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Rl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ba:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jp(i){switch(i){case _n:case oh:return{byteLength:1,components:1};case lr:case lh:case Yt:return{byteLength:2,components:1};case Qo:case jo:return{byteLength:2,components:4};case Gn:case Ko:case Dn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function id(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let x=f[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:fm,beginnormal_vertex:dm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:wm,common:Tm,defaultnormal_vertex:Em,displacementmap_pars_vertex:Am,displacementmap_vertex:Cm,emissivemap_fragment:Rm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Ym,envmap_vertex:Om,fog_vertex:Bm,fog_pars_vertex:km,fog_fragment:zm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:$m,lights_phong_pars_fragment:Km,lights_physical_fragment:Qm,lights_physical_pars_fragment:jm,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,lightprobes_pars_fragment:i0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:d0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:_0,morphtarget_vertex:x0,normal_fragment_begin:v0,normal_fragment_maps:y0,normal_pars_fragment:M0,normal_pars_vertex:S0,normal_vertex:b0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:C0,opaque_fragment:R0,packing:P0,premultiplied_alpha_fragment:I0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:N0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:k0,shadowmask_pars_fragment:z0,skinbase_vertex:V0,skinning_pars_vertex:G0,skinning_vertex:H0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:$0,uv_pars_fragment:K0,uv_pars_vertex:Q0,uv_vertex:j0,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:ag,depth_vert:og,depth_frag:lg,distance_vert:cg,distance_frag:hg,equirect_vert:ug,equirect_frag:fg,linedashed_vert:dg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:wg,meshphysical_vert:Tg,meshphysical_frag:Eg,meshtoon_vert:Ag,meshtoon_frag:Cg,points_vert:Rg,points_frag:Pg,shadow_vert:Ig,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},we={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ii={basic:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ke(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:un([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:un([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:un([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:un([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:un([we.lights,we.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ii.physical={uniforms:un([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Fl={r:0,b:0,g:0},Ug=new ut,sd=new Ye;sd.set(-1,0,0,0,1,0,0,0,1);function Fg(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function p(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let E=v.backgroundBlurriness>0;A=e.get(A,E)}return A}function _(v){let A=!1,E=p(v);E===null?d(a,o):E&&E.isColor&&(d(E,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,A){let E=p(A);E&&E.isCubeTexture?(l===void 0&&(l=new pt(new Dt(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:fs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sd),l.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,(h!==E||f!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pt(new zn(2,2),new zt({name:"BackgroundMaterial",uniforms:fs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,A){v.getRGB(Fl,yh(i)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,A,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:_,addToRenderList:x,dispose:m}}function Og(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,D,G,L,k){let X=!1,C=f(I,L,G,D);r!==C&&(r=C,l(r.object)),X=p(I,L,G,k),X&&_(I,L,G,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(I,D,G,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,D,G,L){let k=L.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let C=I.isInstancedMesh===!0?I.id:0,V=X[C];V===void 0&&(V={},X[C]=V);let U=V[G.id];U===void 0&&(U={},V[G.id]=U);let F=U[k];return F===void 0&&(F=u(c()),U[k]=F),F}function u(I){let D=[],G=[],L=[];for(let k=0;k<t;k++)D[k]=0,G[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,D,G,L){let k=r.attributes,X=D.attributes,C=0,V=G.getAttributes();for(let U in V)if(V[U].location>=0){let H=k[U],Q=X[U];if(Q===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),H===void 0||H.attribute!==Q||Q&&H.data!==Q.data)return!0;C++}return r.attributesNum!==C||r.index!==L}function _(I,D,G,L){let k={},X=D.attributes,C=0,V=G.getAttributes();for(let U in V)if(V[U].location>=0){let H=X[U];H===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(H=I.instanceColor));let Q={};Q.attribute=H,H&&H.data&&(Q.data=H.data),k[U]=Q,C++}r.attributes=k,r.attributesNum=C,r.index=L}function x(){let I=r.newAttributes;for(let D=0,G=I.length;D<G;D++)I[D]=0}function d(I){m(I,0)}function m(I,D){let G=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;G[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),k[I]!==D&&(i.vertexAttribDivisor(I,D),k[I]=D)}function v(){let I=r.newAttributes,D=r.enabledAttributes;for(let G=0,L=D.length;G<L;G++)D[G]!==I[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function A(I,D,G,L,k,X,C){C===!0?i.vertexAttribIPointer(I,D,G,k,X):i.vertexAttribPointer(I,D,G,L,k,X)}function E(I,D,G,L){x();let k=L.attributes,X=G.getAttributes(),C=D.defaultAttributeValues;for(let V in X){let U=X[V];if(U.location>=0){let F=k[V];if(F===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),F!==void 0){let H=F.normalized,Q=F.itemSize,he=e.get(F);if(he===void 0)continue;let K=he.buffer,J=he.type,te=he.bytesPerElement,ee=J===i.INT||J===i.UNSIGNED_INT||F.gpuType===Ko;if(F.isInterleavedBufferAttribute){let Z=F.data,ae=Z.isInterleavedBuffer===!0?Z.stride:Z.itemSize,Xe=F.offset;if(Z.isInstancedInterleavedBuffer||Z.isInstancedBufferAttribute){for(let ye=0;ye<U.locationSize;ye++)m(U.location+ye,Z.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ye=0;ye<U.locationSize;ye++)d(U.location+ye);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ye=0;ye<U.locationSize;ye++)A(U.location+ye,Q/U.locationSize,J,H,ae*te,(Xe+Q/U.locationSize*ye)*te,ee)}else{if(F.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z,F.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Z=0;Z<U.locationSize;Z++)d(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Z=0;Z<U.locationSize;Z++)A(U.location+Z,Q/U.locationSize,J,H,Q*te,Q/U.locationSize*Z*te,ee)}}else if(C!==void 0){let H=C[V];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(U.location,H);break;case 3:i.vertexAttrib3fv(U.location,H);break;case 4:i.vertexAttrib4fv(U.location,H);break;default:i.vertexAttrib1fv(U.location,H)}}}}v()}function M(){R();for(let I in n){let D=n[I];for(let G in D){let L=D[G];for(let k in L){let X=L[k];for(let C in X)h(X[C].object),delete X[C];delete L[k]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let G in D){let L=D[G];for(let k in L){let X=L[k];for(let C in X)h(X[C].object),delete X[C];delete L[k]}}delete n[I.id]}function g(I){for(let D in n){let G=n[D];for(let L in G){let k=G[L];if(k[I.id]===void 0)continue;let X=k[I.id];for(let C in X)h(X[C].object),delete X[C];delete k[I.id]}}}function y(I){for(let D in n){let G=n[D],L=I.isInstancedMesh===!0?I.id:0,k=G[L];if(k!==void 0){for(let X in k){let C=k[X];for(let V in C)h(C[V].object),delete C[V];delete k[X]}delete G[L],Object.keys(G).length===0&&delete n[D]}}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:d,disableUnusedAttributes:v}}function Bg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Hn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let y=g===Yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==_n&&g!==Dn&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:E,maxSamples:M,samples:b}}function zg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new kn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,x=f.clipIntersection,d=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!d)r?h(null):l();else{let v=r?0:n,A=v*4,E=m.clippingState||null;c.value=E,E=h(_,u,A,p);for(let M=0;M!==A;++M)E[M]=t[M];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,_){let x=f!==null?f.length:0,d=null;if(x!==0){if(d=c.value,_!==!0||d===null){let m=p+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<m)&&(d=new Float32Array(m));for(let A=0,E=p;A!==x;++A,E+=4)a.copy(f[A]).applyMatrix4(v,o),a.normal.toArray(d,E),d[E+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}var Aa=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dt(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:xi});r.uniforms.tEquirect.value=t;let a=new pt(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=dn),new ir(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ff=256,Vg=3,Gg=20,rd=256,ad=16,Hg=3,Wg=new z,Xg=new ke,hr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ir(1,10,null),this._boxMesh=new pt(new Dt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Wg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Xg));let d=new ir(n,s,h);return d.position.copy(o),d.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=_,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ff,Lf(e))}_fromTexture(e,t){e.mapping===hs||e.mapping===ar?this._setSize(e.image.length===0?Ff:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Of(e,!1,!1),n=Math.log2(e)-Vg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Of(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===hs||e.mapping===ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qg(),this._integrationMaterial=Yg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ad);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Hg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(rd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Of(i,e,t){return new Aa(i,{minFilter:Vn,generateMipmaps:e,type:Yt,colorSpace:zr,depthBuffer:t})}function Ca(i,e,t){return new zt({name:i,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:qt,blending:xi,depthTest:!1,depthWrite:!1})}function qg(){return Ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yg(){return Ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ad}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zg(){return Ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bf(){return Ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kf(){return Ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===or||p===Jo)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let x=new Aa(_.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===or||p===Jo,x=p===hs||p===ar;if(_||x){let d=t.get(u),m=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new hr(i)),d=_?n.fromEquirectangular(u,d):n.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),d.texture;if(d!==void 0)return d.texture;{let v=u.image;return _&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new hr(i)),d=_?n.fromEquirectangular(u):n.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),u.addEventListener("dispose",h),d.texture):null}}}return u}function o(u,p){return p===or?u.mapping=hs:p===Jo&&(u.mapping=ar),u}function c(u){let p=0,_=6;for(let x=0;x<_;x++)u[x]!==void 0&&p++;return p===_}function l(u){let p=u.target;p.removeEventListener("dispose",l);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function $g(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Br("WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let d in _.attributes)e.remove(_.attributes[d]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let x=r.get(_);x&&(e.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(_){let x=_.attributes;for(let d in x)e.update(x[d],i.ARRAY_BUFFER)}function f(_){let x=_.index,d=_.attributes.position,m=0;if(d===void 0)return;let v=x!==null?x.array.length:d.array.length/3-1,A=d.count>=65535?Yr:qr,E=new A(Math.ceil(v/3)*6,1),M=E.array;if(x!==null){let g=x.array;m=x.version;for(let y=0,R=0;y<v;y+=3){let S=g[y+0],I=g[y+1],D=g[y+2];M[R++]=S,M[R++]=I,M[R++]=I,M[R++]=D,M[R++]=D,M[R++]=S}}else{m=d.version;for(let g=0,y=0;g<v;g+=3){let R=g+0,S=g+1,I=g+2;M[y++]=R,M[y++]=S,M[y++]=S,M[y++]=I,M[y++]=I,M[y++]=R}}E.version=m;let b=r.get(_);b&&e.remove(b),r.set(_,E)}function u(_){let x=r.get(_);if(x){let d=_.index;d!==null&&x.version<d.version&&f(_)}else f(_);return r.get(_)}function p(){for(let _ in s){let x=s[_].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:p}}function Qg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function l(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let x=0;for(let d=0;d<p;d++)x+=u[d];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,e,t){let n=new WeakMap,s=new wt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let R=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),x===!0&&(A=3);let E=o.attributes.position.count*A,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let b=new Float32Array(E*M*4*f),g=new Hr(b,E,M,f);g.type=Dn,g.needsUpdate=!0;let y=A*4;for(let S=0;S<f;S++){let I=d[S],D=m[S],G=v[S],L=E*M*4*S;for(let k=0;k<I.count;k++){let X=k*y;p===!0&&(s.fromBufferAttribute(I,k),b[L+X+0]=s.x,b[L+X+1]=s.y,b[L+X+2]=s.z,b[L+X+3]=0),_===!0&&(s.fromBufferAttribute(D,k),b[L+X+4]=s.x,b[L+X+5]=s.y,b[L+X+6]=s.z,b[L+X+7]=0),x===!0&&(s.fromBufferAttribute(G,k),b[L+X+8]=s.x,b[L+X+9]=s.y,b[L+X+10]=s.z,b[L+X+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Ne(E,M)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function t_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var n_={[ua]:"LINEAR_TONE_MAPPING",[fa]:"REINHARD_TONE_MAPPING",[da]:"CINEON_TONE_MAPPING",[cs]:"ACES_FILMIC_TONE_MAPPING",[ma]:"AGX_TONE_MAPPING",[ga]:"NEUTRAL_TONE_MAPPING",[pa]:"CUSTOM_TONE_MAPPING"};function i_(i,e,t,n,s,r){let a=new Lt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new bt;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let f=new js({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new pt(h,f),p=new as(-1,1,1,-1,0,1),_=null,x=null,d=!1,m,v=null,A=[],E=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let g=0;g<A.length;g++){let y=A[g];y.setSize&&y.setSize(M,b)}},this.setEffects=function(M){A=M,E=A.length>0&&A[0].isRenderPass===!0;let b=a.width,g=a.height;A.length>0&&o===null&&(o=new Lt(b,g,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),c=new Lt(b,g,{type:Yt,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&A.some(R=>R.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new _i(b,g),r===!0&&(l.format=yi,l.type=us)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let R=0;R<A.length;R++){let S=A[R];S.setSize&&S.setSize(b,g),y&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(l)}},this.begin=function(M,b){if(d||M.toneMapping===ti&&A.length===0)return!1;if(v=b,b!==null){let g=b.width,y=b.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return E===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=ti,!0},this.hasRenderPass=function(){return E},this.end=function(M,b){M.toneMapping=m,d=!0;let g=a,y=o;for(let R=0;R<A.length;R++){let S=A[R];S.enabled!==!1&&(S.render(M,y,g,b),S.needsSwap!==!1&&(g=y,y=y===o?c:o))}if(_!==M.outputColorSpace||x!==M.toneMapping){_=M.outputColorSpace,x=M.toneMapping,f.defines={},it.getTransfer(_)===ht&&(f.defines.SRGB_TRANSFER="");let R=n_[x];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,M.setRenderTarget(v),M.render(u,p),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var od=new nn,ld=new _i(1,1),cd=new ea(1),hd=new Hr,ud=new Po,fd=new Qr,zf=[],Vf=[],Gf=new Float32Array(16),Hf=new Float32Array(9),Wf=new Float32Array(4);function ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function s_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function l_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Wf.set(n),i.uniformMatrix2fv(this.addr,!1,Wf),Jt(t,n)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Hf.set(n),i.uniformMatrix3fv(this.addr,!1,Hf),Jt(t,n)}}function h_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Gf.set(n),i.uniformMatrix4fv(this.addr,!1,Gf),Jt(t,n)}}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function m_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function zl(i){return i.version===0&&(i.compareFunction=gh,i.needsUpdate=!0),i}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=zl(ld):r=od,t.setTexture2D(e||r,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ud,s)}function M_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=zl(cd):r=fd,t.setTextureCube(e||r,s)}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hd,s)}function b_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function w_(i,e){i.uniform1fv(this.addr,e)}function T_(i,e){let t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function E_(i,e){let t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function A_(i,e){let t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function C_(i,e){let t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R_(i,e){let t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function P_(i,e){let t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I_(i,e){i.uniform1iv(this.addr,e)}function L_(i,e){i.uniform2iv(this.addr,e)}function D_(i,e){i.uniform3iv(this.addr,e)}function N_(i,e){i.uniform4iv(this.addr,e)}function U_(i,e){i.uniform1uiv(this.addr,e)}function F_(i,e){i.uniform2uiv(this.addr,e)}function O_(i,e){i.uniform3uiv(this.addr,e)}function B_(i,e){i.uniform4uiv(this.addr,e)}function k_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=zl(ld):a=od;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ud,r[a])}function V_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=zl(cd):a=fd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function G_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hd,r[a])}function H_(i){switch(i){case 5126:return w_;case 35664:return T_;case 35665:return E_;case 35666:return A_;case 35674:return C_;case 35675:return R_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}var Ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b_(t.type)}},Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}},Dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Rh=/(\w+)(\])?(\[|\.)?/g;function Xf(i,e){i.seq.push(e),i.map[e.id]=e}function W_(i,e,t){let n=i.name,s=n.length;for(Rh.lastIndex=0;;){let r=Rh.exec(n),a=Rh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xf(t,l===void 0?new Ih(o,i,e):new Lh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Dh(o),Xf(t,f)),t=f}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);W_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function qf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var X_=37297,q_=0;function Y_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Yf=new Ye;function Z_(i){it._getMatrix(Yf,it.workingColorSpace,i);let e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(e),o)}else return r}function J_(i,e){let t=Z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $_={[ua]:"Linear",[fa]:"Reinhard",[da]:"Cineon",[cs]:"ACESFilmic",[ma]:"AgX",[ga]:"Neutral",[pa]:"Custom"};function K_(i,e){let t=$_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new z;function Q_(){it.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function ex(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ea(i){return i!==""}function Jf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(nx,ix)}function ix(i,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Nh(t)}var sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(i){return i.replace(sx,rx)}function rx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ax={[os]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function ox(i){return ax[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lx={[ar]:"ENVMAP_MODE_REFRACTION"};function cx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[rh]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[_f]:"ENVMAP_BLENDING_ADD"};function ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hx[i.combine]||"ENVMAP_BLENDING_NONE"}function fx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ox(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=cx(t),f=ux(t),u=j_(t),p=ex(r),_=s.createProgram(),x,d,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ea).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ea).join(`
`),d.length>0&&(d+=`
`)):(x=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),d=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?tt.tonemapping_pars_fragment:"",t.toneMapping!==ti?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,J_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=Nh(a),a=Jf(a,t),a=$f(a,t),o=Nh(o),o=Jf(o,t),o=$f(o,t),a=Kf(a),o=Kf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=m+x+a,A=m+d+o,E=qf(s,s.VERTEX_SHADER,v),M=qf(s,s.FRAGMENT_SHADER,A);s.attachShader(_,E),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(S){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",D=s.getShaderInfoLog(E)||"",G=s.getShaderInfoLog(M)||"",L=I.trim(),k=D.trim(),X=G.trim(),C=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,M);else{let U=Zf(s,E,"vertex"),F=Zf(s,M,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+U+`
`+F)}else L!==""?We("WebGLProgram: Program Info Log:",L):(k===""||X==="")&&(V=!1);V&&(S.diagnostics={runnable:C,programLog:L,vertexShader:{log:k,prefix:x},fragmentShader:{log:X,prefix:d}})}s.deleteShader(E),s.deleteShader(M),g=new cr(s,_),y=tx(s,_)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,X_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}var dx=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fh(e),t.set(e,n)),n}},Fh=class{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}};function px(i){return i===Bi||i===Sa||i===ba}function mx(i,e,t,n,s,r){let a=new Wr,o=new Uh,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,y,R,S,I,D){let G=S.fog,L=I.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?S.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,C=e.get(g.envMap||k,X),V=u[g.type],U=n.precision;g.precision!==null&&(U=n.getMaxPrecision(g.precision),U!==g.precision&&We("WebGLProgram.getParameters:",g.precision,"not supported, using",U,"instead."));let F=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,H=F!==void 0?F.length:0,Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let he,K,J,te;if(V){let be=ii[V];he=be.vertexShader,K=be.fragmentShader}else{he=g.vertexShader,K=g.fragmentShader;let be=o.getVertexShaderStage(g),gt=o.getFragmentShaderStage(g);o.update(g,be,gt),J=be.id,te=gt.id}let ee=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),ae=I.isInstancedMesh===!0,Xe=I.isBatchedMesh===!0,ye=!!g.map,Fe=!!g.matcap,Oe=!!C,Ee=Oe&&C.isPMREMTexture===!0,qe=!!g.aoMap,ve=!!g.lightMap,Re=!!g.bumpMap&&g.wireframe===!1,Ae=!!g.normalMap,Ce=!!g.displacementMap,je=!!g.emissiveMap,Mt=!!g.metalnessMap,At=!!g.roughnessMap,Gt=g.anisotropy>0,O=g.clearcoat>0,Ft=g.diffuseRoughness>0,nt=g.dispersion>0,st=g.retroreflectivity>0,Me=g.iridescence>0,Ht=g.sheen>0,He=g.transmission>0,Je=Gt&&!!g.anisotropyMap,P=O&&!!g.clearcoatMap,w=O&&!!g.clearcoatNormalMap,q=O&&!!g.clearcoatRoughnessMap,oe=Ft&&!!g.diffuseRoughnessMap,re=Me&&!!g.iridescenceMap,ue=Me&&!!g.iridescenceThicknessMap,_e=Ht&&!!g.sheenColorMap,ne=Ht&&!!g.sheenRoughnessMap,ie=!!g.specularMap,pe=!!g.specularColorMap,N=!!g.specularIntensityMap,se=He&&!!g.transmissionMap,j=He&&!!g.thicknessMap,me=!!g.gradientMap,ce=!!g.alphaMap,fe=g.alphaTest>0,ze=!!g.alphaHash,et=!!g.extensions,le=ti;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(le=i.toneMapping);let Ge=Ee?C.isCompressedCubeTexture?C.image[0].mipmaps:C.mipmaps:null,Qe={shaderID:V,shaderType:g.type,shaderName:g.name,vertexShader:he,fragmentShader:K,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:te,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:U,batching:Xe,batchingColor:Xe&&I._colorsTexture!==null,instancing:ae,instancingColor:ae&&I.instanceColor!==null,instancingMorph:ae&&I.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ye,matcap:Fe,envMap:Oe,envMapMode:Oe&&C.mapping,envMapPMREM:Ee,envMapMaxLod:Ee?Ge.length-1:null,envMapSize:Ee?Ge[0].width:null,aoMap:qe,lightMap:ve,bumpMap:Re,normalMap:Ae,displacementMap:Ce,emissiveMap:je,normalMapObjectSpace:Ae&&g.normalMapType===yf,normalMapTangentSpace:Ae&&g.normalMapType===Nl,packedNormalMap:Ae&&g.normalMapType===Nl&&px(g.normalMap.format),metalnessMap:Mt,roughnessMap:At,anisotropy:Gt,anisotropyMap:Je,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:q,diffuseRoughness:Ft,diffuseRoughnessMap:oe,dispersion:nt,retroreflection:st,iridescence:Me,iridescenceMap:re,iridescenceThicknessMap:ue,sheen:Ht,sheenColorMap:_e,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:pe,specularIntensityMap:N,transmission:He,transmissionMap:se,thicknessMap:j,gradientMap:me,opaque:g.transparent===!1&&g.blending===rr&&g.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:ze,combine:g.combine,mapUv:ye&&p(g.map.channel),aoMapUv:qe&&p(g.aoMap.channel),lightMapUv:ve&&p(g.lightMap.channel),bumpMapUv:Re&&p(g.bumpMap.channel),normalMapUv:Ae&&p(g.normalMap.channel),displacementMapUv:Ce&&p(g.displacementMap.channel),emissiveMapUv:je&&p(g.emissiveMap.channel),metalnessMapUv:Mt&&p(g.metalnessMap.channel),roughnessMapUv:At&&p(g.roughnessMap.channel),anisotropyMapUv:Je&&p(g.anisotropyMap.channel),clearcoatMapUv:P&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:w&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:ne&&p(g.sheenRoughnessMap.channel),specularMapUv:ie&&p(g.specularMap.channel),specularColorMapUv:pe&&p(g.specularColorMap.channel),specularIntensityMapUv:N&&p(g.specularIntensityMap.channel),transmissionMapUv:se&&p(g.transmissionMap.channel),thicknessMapUv:j&&p(g.thicknessMap.channel),alphaMapUv:ce&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ae||Gt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(ye||ce),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Ae===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Z,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Q,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ye&&g.map.isVideoTexture===!0&&it.getTransfer(g.map.colorSpace)===ht,decodeVideoTextureEmissive:je&&g.emissiveMap.isVideoTexture===!0&&it.getTransfer(g.emissiveMap.colorSpace)===ht,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ln,flipSided:g.side===qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:et&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&g.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function x(g){let y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)y.push(R),y.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(d(y,g),m(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function d(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function m(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let y=u[g.type],R;if(y){let S=ii[y];R=Xn.clone(S.uniforms)}else R=g.uniforms;return R}function A(g,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new fx(i,y,g,s),l.push(R),h.set(y,R)),R}function E(g){if(--g.usedTimes===0){let y=l.indexOf(g);l[y]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function M(g){o.remove(g)}function b(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:M,programs:l,dispose:b}}function gx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _x(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ed(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,x,d,m){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:d,group:m},i[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=_,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=d,v.group=m),e++,v}function c(u,p,_,x,d,m,v){v.reversedDepth===!0&&(d=-d);let A=o(u,p,_,x,d,m);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function l(u,p,_,x,d,m){let v=o(u,p,_,x,d,m);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,p){t.length>1&&t.sort(u||_x),n.length>1&&n.sort(p||jf),s.length>1&&s.sort(p||jf)}function f(){for(let u=e,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function xx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new ed,i.set(n,[a])):s>=r.length?(a=new ed,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new ke};break;case"SpotLight":t={position:new z,direction:new z,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function yx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Mx=0;function Sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bx(i){let e=new vx,t=yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let s=new z,r=new ut,a=new ut;function o(l){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,_=0,x=0,d=0,m=0,v=0,A=0,E=0,M=0,b=0,g=0,y=0,R=0,S=0;l.sort(Sx);for(let D=0,G=l.length;D<G;D++){let L=l[D],k=L.color,X=L.intensity,C=L.distance,V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Bi?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*X,f+=k.g*X,u+=k.b*X;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],X);S++}else if(L.isSunLight){let U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let F=L.shadow,H=t.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[_]=H,n.sunShadowMap[_]=V;let Q=F.getViewportCount();for(let he=0;he<Q;he++)n.sunShadowMatrix[x+he]=F.getMatrix(he),n.sunShadowCascade[x+he]=F._cascadeData[he];x+=Q,_++}n.sun[p]=U,p++}else if(L.isDirectionalLight){let U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let F=L.shadow,H=t.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=U,d++}else if(L.isSpotLight){let U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(k).multiplyScalar(X),U.distance=C,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[v]=U;let F=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,F.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[v]=F.matrix,L.castShadow){let H=t.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=V,g++}v++}else if(L.isRectAreaLight){let U=e.get(L);U.color.copy(k).multiplyScalar(X),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=U,A++}else if(L.isPointLight){let U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){let F=L.shadow,H=t.get(L);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=U,m++}else if(L.isHemisphereLight){let U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(X),U.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[E]=U,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==p||I.directionalLength!==d||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==A||I.hemiLength!==E||I.numSunShadows!==_||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==g||I.numSpotMaps!==y||I.numLightProbes!==S)&&(n.sun.length=p,n.directional.length=d,n.spot.length=v,n.rectArea.length=A,n.point.length=m,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,I.sunLength=p,I.directionalLength=d,I.pointLength=m,I.spotLength=v,I.rectAreaLength=A,I.hemiLength=E,I.numSunShadows=_,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=g,I.numSpotMaps=y,I.numLightProbes=S,n.version=Mx++)}function c(l,h){let f=0,u=0,p=0,_=0,x=0,d=0,m=h.matrixWorldInverse;for(let v=0,A=l.length;v<A;v++){let E=l[v];if(E.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),f++}else if(E.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){let M=n.spot[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(E.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){let M=n.hemi[d];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),d++}}}return{setup:o,setupView:c,state:n}}function td(i){let e=new bx(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function wx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new td(i),e.set(s,[o])):r>=a.length?(o=new td(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ax=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Cx=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],nd=new ut,Ta=new z,Ph=new z;function Rx(i,e,t){let n=new Di,s=new Ne,r=new Ne,a=new wt,o=new er,c=new Fo,l={},h=t.maxTextureSize,f={[Oi]:qt,[qt]:Oi,[Ln]:Ln},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Tx,fragmentShader:Ex}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new bt;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let m=this.type;this.render=function(b,g,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;this.type===$u&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);let R=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(xi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=m!==this.type;G&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=b.length;L<k;L++){let X=b[L],C=X.shadow;if(C===void 0){We("WebGLShadowMap:",X,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let V=C.getFrameExtents();s.multiply(V),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,C.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=U,C.map===null||G===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===sr){if(X.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new Lt(s.x,s.y,{format:Bi,type:Yt,minFilter:dn,magFilter:dn,generateMipmaps:!1}),C.map.texture.name=X.name+".shadowMap",C.map.depthTexture=new _i(s.x,s.y,Dn),C.map.depthTexture.name=X.name+".shadowMapDepth",C.map.depthTexture.format=mi,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en}else X.isPointLight?(C.map=new Aa(s.x),C.map.depthTexture=new ea(s.x,Gn)):(C.map=new Lt(s.x,s.y),C.map.depthTexture=new _i(s.x,s.y,Gn)),C.map.depthTexture.name=X.name+".shadowMap",C.map.depthTexture.format=mi,this.type===os?(C.map.depthTexture.compareFunction=U?mh:ph,C.map.depthTexture.minFilter=dn,C.map.depthTexture.magFilter=dn):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=en,C.map.depthTexture.magFilter=en);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==s.x||C.map.height!==s.y)&&C.map.setSize(s.x,s.y);let F=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();X.isPointLight!==!0&&C.updateMatrices(X,y);let H=(C.camera.layers.mask&4294967294)!==0?C.camera.layers:y.layers;for(let Q=0;Q<F;Q++){let he=C.getCamera(Q);if(X.isPointLight){let K=C.camera,J=C.matrix,te=X.distance||K.far;te!==K.far&&(K.far=te,K.updateProjectionMatrix()),Ta.setFromMatrixPosition(X.matrixWorld),K.position.copy(Ta),Ph.copy(K.position),Ph.add(Ax[Q]),K.up.copy(Cx[Q]),K.lookAt(Ph),K.updateMatrixWorld(),J.makeTranslation(-Ta.x,-Ta.y,-Ta.z),nd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),C._frustum.setFromProjectionMatrix(nd,K.coordinateSystem,K.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(C.map),i.clear());let K=C.getViewport(Q);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),D.viewport(a)}n=C.getFrustum(Q),E(g,y,he,X,H,this.type)}C.isPointLightShadow!==!0&&this.type===sr&&v(C,y),C.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(R,S,I)};function v(b,g){let y=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Lt(s.x,s.y,{format:Bi,type:Yt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(g,null,y,u,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(g,null,y,p,x,null)}function A(b,g,y,R){let S=null,I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=y.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let D=S.uuid,G=g.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let k=L[G];k===void 0&&(k=S.clone(),L[G]=k,g.addEventListener("dispose",M)),S=k}if(S.visible=g.visible,S.wireframe=g.wireframe,R===sr?S.side=g.shadowSide!==null?g.shadowSide:g.side:S.side=g.shadowSide!==null?g.shadowSide:f[g.side],S.alphaMap=g.alphaMap,S.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,S.map=g.map,S.clipShadows=g.clipShadows,S.clippingPlanes=g.clippingPlanes,S.clipIntersection=g.clipIntersection,S.displacementMap=g.displacementMap,S.displacementScale=g.displacementScale,S.displacementBias=g.displacementBias,S.wireframeLinewidth=g.wireframeLinewidth,S.linewidth=g.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=i.properties.get(S);D.light=y}return S}function E(b,g,y,R,S,I){if(b.visible===!1)return;if(b.layers.test(S)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===sr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let L=e.update(b),k=b.material;if(Array.isArray(k)){let X=L.groups;for(let C=0,V=X.length;C<V;C++){let U=X[C],F=k[U.materialIndex];if(F&&F.visible){let H=A(b,F,R,I);b.onBeforeShadow(i,b,g,y,L,H,U),i.renderBufferDirect(y,null,L,H,b,U),b.onAfterShadow(i,b,g,y,L,H,U)}}}else if(k.visible){let X=A(b,k,R,I);b.onBeforeShadow(i,b,g,y,L,X,null),i.renderBufferDirect(y,null,L,X,b,null),b.onAfterShadow(i,b,g,y,L,X,null)}}let G=b.children;for(let L=0,k=G.length;L<k;L++)E(G[L],g,y,R,S,I)}function M(b){b.target.removeEventListener("dispose",M);for(let y in l){let R=l[y],S=b.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function Px(i,e){function t(){let N=!1,se=new wt,j=null,me=new wt(0,0,0,0);return{setMask:function(ce){j!==ce&&!N&&(i.colorMask(ce,ce,ce,ce),j=ce)},setLocked:function(ce){N=ce},setClear:function(ce,fe,ze,et,le){le===!0&&(ce*=et,fe*=et,ze*=et),se.set(ce,fe,ze,et),me.equals(se)===!1&&(i.clearColor(ce,fe,ze,et),me.copy(se))},reset:function(){N=!1,j=null,me.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,j=null,me=null,ce=null;return{setReversed:function(fe){if(se!==fe){let ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),se=fe;let et=ce;ce=null,this.setClear(et)}},getReversed:function(){return se},setTest:function(fe){fe?Z(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(fe){j!==fe&&!N&&(i.depthMask(fe),j=fe)},setFunc:function(fe){if(se&&(fe=If[fe]),me!==fe){switch(fe){case xo:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=fe}},setLocked:function(fe){N=fe},setClear:function(fe){ce!==fe&&(ce=fe,se&&(fe=1-fe),i.clearDepth(fe))},reset:function(){N=!1,j=null,me=null,ce=null,se=!1}}}function s(){let N=!1,se=null,j=null,me=null,ce=null,fe=null,ze=null,et=null,le=null;return{setTest:function(Ge){N||(Ge?Z(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!N&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,Qe,be){(j!==Ge||me!==Qe||ce!==be)&&(i.stencilFunc(Ge,Qe,be),j=Ge,me=Qe,ce=be)},setOp:function(Ge,Qe,be){(fe!==Ge||ze!==Qe||et!==be)&&(i.stencilOp(Ge,Qe,be),fe=Ge,ze=Qe,et=be)},setLocked:function(Ge){N=Ge},setClear:function(Ge){le!==Ge&&(i.clearStencil(Ge),le=Ge)},reset:function(){N=!1,se=null,j=null,me=null,ce=null,fe=null,ze=null,et=null,le=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},f={},u={},p=new WeakMap,_=[],x=null,d=!1,m=null,v=null,A=null,E=null,M=null,b=null,g=null,y=new ke(0,0,0),R=0,S=!1,I=null,D=null,G=null,L=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,V=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(U)[1]),C=V>=1):U.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),C=V>=2);let F=null,H={},Q=i.getParameter(i.SCISSOR_BOX),he=i.getParameter(i.VIEWPORT),K=new wt().fromArray(Q),J=new wt().fromArray(he);function te(N,se,j,me){let ce=new Uint8Array(4),fe=i.createTexture();i.bindTexture(N,fe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<j;ze++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(se+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return fe}let ee={};ee[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Xs),Re(!1),Ae(eh),Z(i.CULL_FACE),qe(xi);function Z(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ae(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Xe(N,se){return u[N]!==se?(i.bindFramebuffer(N,se),u[N]=se,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function ye(N,se){let j=_,me=!1;if(N){j=p.get(se),j===void 0&&(j=[],p.set(se,j));let ce=N.textures;if(j.length!==ce.length||j[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,ze=ce.length;fe<ze;fe++)j[fe]=i.COLOR_ATTACHMENT0+fe;j.length=ce.length,me=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,me=!0);me&&i.drawBuffers(j)}function Fe(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Oe={[ls]:i.FUNC_ADD,[Qu]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};Oe[ef]=i.MIN,Oe[tf]=i.MAX;let Ee={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[of]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[ff]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(N,se,j,me,ce,fe,ze,et,le,Ge){if(N===xi){d===!0&&(ae(i.BLEND),d=!1);return}if(d===!1&&(Z(i.BLEND),d=!0),N!==Ku){if(N!==m||Ge!==S){if((v!==ls||M!==ls)&&(i.blendEquation(i.FUNC_ADD),v=ls,M=ls),Ge)switch(N){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vi:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}A=null,E=null,b=null,g=null,y.set(0,0,0),R=0,m=N,S=Ge}return}ce=ce||se,fe=fe||j,ze=ze||me,(se!==v||ce!==M)&&(i.blendEquationSeparate(Oe[se],Oe[ce]),v=se,M=ce),(j!==A||me!==E||fe!==b||ze!==g)&&(i.blendFuncSeparate(Ee[j],Ee[me],Ee[fe],Ee[ze]),A=j,E=me,b=fe,g=ze),(et.equals(y)===!1||le!==R)&&(i.blendColor(et.r,et.g,et.b,le),y.copy(et),R=le),m=N,S=!1}function ve(N,se){N.side===Ln?ae(i.CULL_FACE):Z(i.CULL_FACE);let j=N.side===qt;se&&(j=!j),Re(j),N.blending===rr&&N.transparent===!1?qe(xi):qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let me=N.stencilWrite;o.setTest(me),me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),je(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function Ae(N){N!==Zu?(Z(i.CULL_FACE),N!==D&&(N===eh?i.cullFace(i.BACK):N===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),D=N}function Ce(N){N!==G&&(C&&i.lineWidth(N),G=N)}function je(N,se,j){N?(Z(i.POLYGON_OFFSET_FILL),(L!==se||k!==j)&&(L=se,k=j,a.getReversed()&&(se=-se,j=-j),i.polygonOffset(se,j))):ae(i.POLYGON_OFFSET_FILL)}function Mt(N){N?Z(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function At(N){N===void 0&&(N=i.TEXTURE0+X-1),F!==N&&(i.activeTexture(N),F=N)}function Gt(N,se,j){j===void 0&&(F===null?j=i.TEXTURE0+X-1:j=F);let me=H[j];me===void 0&&(me={type:void 0,texture:void 0},H[j]=me),(me.type!==N||me.texture!==se)&&(F!==j&&(i.activeTexture(j),F=j),i.bindTexture(N,se||ee[N]),me.type=N,me.texture=se)}function O(){let N=H[F];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function st(){try{i.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Me(){try{i.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Ht(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function Je(){try{i.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function P(){try{i.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function w(){try{i.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function q(){try{i.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function oe(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function re(N,se){f[N]!==se&&(i.pixelStorei(N,se),f[N]=se)}function ue(N){K.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function _e(N){J.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function ne(N,se){let j=l.get(se);j===void 0&&(j=new WeakMap,l.set(se,j));let me=j.get(N);me===void 0&&(me=i.getUniformBlockIndex(se,N.name),i.uniformBlockBinding(se,me,me),j.set(N,me))}function ie(N,se,j){let ce=l.get(se).get(N);c[ce]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,j),c[ce]=j)}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},F=null,H={},u={},c={},p=new WeakMap,_=[],x=null,d=!1,m=null,v=null,A=null,E=null,M=null,b=null,g=null,y=new ke(0,0,0),R=0,S=!1,I=null,D=null,G=null,L=null,k=null,K.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ae,bindFramebuffer:Xe,drawBuffers:ye,useProgram:Fe,setBlending:qe,setMaterial:ve,setFlipSided:Re,setCullFace:Ae,setLineWidth:Ce,setPolygonOffset:je,setScissorTest:Mt,activeTexture:At,bindTexture:Gt,unbindTexture:O,compressedTexImage2D:Ft,compressedTexImage3D:nt,texImage2D:w,texImage3D:q,pixelStorei:re,getParameter:oe,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Je,texStorage3D:P,texSubImage2D:st,texSubImage3D:Me,compressedTexSubImage2D:Ht,compressedTexSubImage3D:He,scissor:ue,viewport:_e,reset:pe}}function Ix(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,f=new Set,u,p=new WeakMap,_=new Set,x=new FinalizationRegistry(P=>_.delete(P)),d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return d?new OffscreenCanvas(P,w):Gr("canvas")}function v(P,w,q){let oe=1,re=Je(P);if((re.width>q||re.height>q)&&(oe=q/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let ue=Math.floor(oe*re.width),_e=Math.floor(oe*re.height);u===void 0&&(u=m(ue,_e));let ne=w?m(ue,_e):u;return ne.width=ue,ne.height=_e,ne.getContext("2d").drawImage(P,0,0,ue,_e),We("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ue+"x"+_e+")."),ne}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function A(P){return P.generateMipmaps}function E(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,w,q,oe,re,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=w;if(w===i.RED&&(q===i.FLOAT&&(ne=i.R32F),q===i.HALF_FLOAT&&(ne=i.R16F),q===i.UNSIGNED_BYTE&&(ne=i.R8),q===i.UNSIGNED_SHORT&&_e&&(ne=_e.R16_EXT),q===i.SHORT&&_e&&(ne=_e.R16_SNORM_EXT)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.R8UI),q===i.UNSIGNED_SHORT&&(ne=i.R16UI),q===i.UNSIGNED_INT&&(ne=i.R32UI),q===i.BYTE&&(ne=i.R8I),q===i.SHORT&&(ne=i.R16I),q===i.INT&&(ne=i.R32I)),w===i.RG&&(q===i.FLOAT&&(ne=i.RG32F),q===i.HALF_FLOAT&&(ne=i.RG16F),q===i.UNSIGNED_BYTE&&(ne=i.RG8),q===i.UNSIGNED_SHORT&&_e&&(ne=_e.RG16_EXT),q===i.SHORT&&_e&&(ne=_e.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RG8UI),q===i.UNSIGNED_SHORT&&(ne=i.RG16UI),q===i.UNSIGNED_INT&&(ne=i.RG32UI),q===i.BYTE&&(ne=i.RG8I),q===i.SHORT&&(ne=i.RG16I),q===i.INT&&(ne=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),q===i.UNSIGNED_INT&&(ne=i.RGB32UI),q===i.BYTE&&(ne=i.RGB8I),q===i.SHORT&&(ne=i.RGB16I),q===i.INT&&(ne=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),q===i.UNSIGNED_INT&&(ne=i.RGBA32UI),q===i.BYTE&&(ne=i.RGBA8I),q===i.SHORT&&(ne=i.RGBA16I),q===i.INT&&(ne=i.RGBA32I)),w===i.RGB&&(q===i.UNSIGNED_SHORT&&_e&&(ne=_e.RGB16_EXT),q===i.SHORT&&_e&&(ne=_e.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),w===i.RGBA){let ie=ue?Vr:it.getTransfer(re);q===i.FLOAT&&(ne=i.RGBA32F),q===i.HALF_FLOAT&&(ne=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ne=ie===ht?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&_e&&(ne=_e.RGBA16_EXT),q===i.SHORT&&_e&&(ne=_e.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function g(P,w){let q;return P?w===null||w===Gn||w===us?q=i.DEPTH24_STENCIL8:w===Dn?q=i.DEPTH32F_STENCIL8:w===lr&&(q=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gn||w===us?q=i.DEPTH_COMPONENT24:w===Dn?q=i.DEPTH_COMPONENT32F:w===lr&&(q=i.DEPTH_COMPONENT16),q}function y(P,w){return A(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==dn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){let w=new WeakRef(P);n.get(P).__ref=w,_.add(w),x.register(P,w,w)}function S(P){let w=n.get(P).__ref;w!==void 0&&(_.delete(w),x.unregister(w))}function I(P){G(P.target)}function D(P){L(P.target)}function G(P){P.removeEventListener("dispose",I),S(P),X(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&f.delete(P)}function L(P){P.removeEventListener("dispose",D),S(P),V(P)}function k(){for(let P of _){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):G(w))}_.clear(),f.clear()}function X(P){let w=n.get(P);if(w.__webglInit===void 0)return;let q=P.source,oe=p.get(q);if(oe){let re=oe[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(P),Object.keys(oe).length===0&&p.delete(q)}n.remove(P)}function C(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let q=P.source,oe=p.get(q);delete oe[w.__cacheKey],a.memory.textures--}function V(P){let w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let q=P.depthTexture;if(q&&q.renderTarget===P&&G(q),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let ue=0;ue<w.__webglFramebuffer[re].length;ue++)i.deleteFramebuffer(w.__webglFramebuffer[re][ue]);else i.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)i.deleteFramebuffer(w.__webglFramebuffer[re]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let oe=P.textures;for(let re=0,ue=oe.length;re<ue;re++){let _e=n.get(oe[re]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(oe[re])}n.remove(P)}let U=0;function F(){U=0}function H(){return U}function Q(P){U=P}function he(){let P=U;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function K(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function J(P,w){let q=n.get(P);if(P.isVideoTexture&&Ht(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let oe=P.image;if(oe===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(q,P,w);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function te(P,w){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ve(q,P,w);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function ee(P,w){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){ve(q,P,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function Z(P,w){let q=n.get(P);if(P.version>0&&q.__version!==P.version){Re(q,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}let ae={[ts]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},Xe={[en]:i.NEAREST,[xf]:i.NEAREST_MIPMAP_NEAREST,[_a]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},ye={[Sf]:i.NEVER,[gh]:i.ALWAYS,[bf]:i.LESS,[ph]:i.LEQUAL,[wf]:i.EQUAL,[mh]:i.GEQUAL,[Tf]:i.GREATER,[Ef]:i.NOTEQUAL};function Fe(P,w){if(w.type===Dn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===dn||w.magFilter===$o||w.magFilter===_a||w.magFilter===Vn||w.minFilter===dn||w.minFilter===$o||w.minFilter===_a||w.minFilter===Vn)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ae[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ae[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ae[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Xe[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Xe[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==_a&&w.minFilter!==Vn||w.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",I),R(w));let oe=w.source,re=p.get(oe);re===void 0&&(re={},p.set(oe,re));let ue=K(w);if(ue!==P.__cacheKey){re[ue]===void 0&&(re[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[ue].usedTimes++;let _e=re[P.__cacheKey];_e!==void 0&&(re[P.__cacheKey].usedTimes--,_e.usedTimes===0&&C(w)),P.__cacheKey=ue,P.__webglTexture=re[ue].texture}return q}function Ee(P,w,q){return Math.floor(Math.floor(P/q)/w)}function qe(P,w,q,oe){let ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,q,oe,w.data);else{ue.sort((N,se)=>N.start-se.start);let _e=0;for(let N=1;N<ue.length;N++){let se=ue[_e],j=ue[N],me=se.start+se.count,ce=Ee(j.start,w.width,4),fe=Ee(se.start,w.width,4);j.start<=me+1&&ce===fe&&Ee(j.start+j.count-1,w.width,4)===ce?se.count=Math.max(se.count,j.start+j.count-se.start):(++_e,ue[_e]=j)}ue.length=_e+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let N=0,se=ue.length;N<se;N++){let j=ue[N],me=Math.floor(j.start/4),ce=Math.ceil(j.count/4),fe=me%w.width,ze=Math.floor(me/w.width),et=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,fe,ze,et,le,q,oe,w.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ve(P,w,q){let oe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=i.TEXTURE_3D);let re=Oe(P,w),ue=w.source;t.bindTexture(oe,P.__webglTexture,i.TEXTURE0+q);let _e=n.get(ue);if(ue.version!==_e.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let le=it.getPrimaries(it.workingColorSpace),Ge=w.colorSpace===Wn?null:it.getPrimaries(w.colorSpace),Qe=w.colorSpace===Wn||le===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ie=v(w.image,!1,s.maxTextureSize);ie=He(w,ie);let pe=r.convert(w.format,w.colorSpace),N=r.convert(w.type),se=b(w.internalFormat,pe,N,w.normalized,w.colorSpace,w.isVideoTexture);Fe(oe,w);let j,me=w.mipmaps,ce=w.isVideoTexture!==!0,fe=_e.__version===void 0||re===!0,ze=ue.dataReady,et=y(w,ie);if(w.isDepthTexture)se=g(w.format===yi,w.type),fe&&(ce?t.texStorage2D(i.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,pe,N,null));else if(w.isDataTexture)if(me.length>0){ce&&fe&&t.texStorage2D(i.TEXTURE_2D,et,se,me[0].width,me[0].height);for(let le=0,Ge=me.length;le<Ge;le++)j=me[le],ce?ze&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,j.width,j.height,pe,N,j.data):t.texImage2D(i.TEXTURE_2D,le,se,j.width,j.height,0,pe,N,j.data);w.generateMipmaps=!1}else ce?(fe&&t.texStorage2D(i.TEXTURE_2D,et,se,ie.width,ie.height),ze&&qe(w,ie,pe,N)):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,pe,N,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ce&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,se,me[0].width,me[0].height,ie.depth);for(let le=0,Ge=me.length;le<Ge;le++)if(j=me[le],w.format!==Hn)if(pe!==null)if(ce){if(ze)if(w.layerUpdates.size>0){let Qe=bh(j.width,j.height,w.format,w.type);for(let be of w.layerUpdates){let gt=j.data.subarray(be*Qe/j.data.BYTES_PER_ELEMENT,(be+1)*Qe/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,be,j.width,j.height,1,pe,gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,j.width,j.height,ie.depth,pe,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,se,j.width,j.height,ie.depth,0,j.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,j.width,j.height,ie.depth,pe,N,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,se,j.width,j.height,ie.depth,0,pe,N,j.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ce&&fe&&t.texStorage2D(i.TEXTURE_2D,et,se,me[0].width,me[0].height);for(let le=0,Ge=me.length;le<Ge;le++)j=me[le],w.format!==Hn?pe!==null?ce?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,j.width,j.height,pe,j.data):t.compressedTexImage2D(i.TEXTURE_2D,le,se,j.width,j.height,0,j.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?ze&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,j.width,j.height,pe,N,j.data):t.texImage2D(i.TEXTURE_2D,le,se,j.width,j.height,0,pe,N,j.data)}else if(w.isDataArrayTexture)if(ce){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,se,ie.width,ie.height,ie.depth),ze)if(w.layerUpdates.size>0){let le=bh(ie.width,ie.height,w.format,w.type);for(let Ge of w.layerUpdates){let Qe=ie.data.subarray(Ge*le/ie.data.BYTES_PER_ELEMENT,(Ge+1)*le/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,ie.width,ie.height,1,pe,N,Qe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,N,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,pe,N,ie.data);else if(w.isData3DTexture)ce?(fe&&t.texStorage3D(i.TEXTURE_3D,et,se,ie.width,ie.height,ie.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,N,ie.data)):t.texImage3D(i.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,pe,N,ie.data);else if(w.isFramebufferTexture){if(fe)if(ce)t.texStorage2D(i.TEXTURE_2D,et,se,ie.width,ie.height);else{let le=ie.width,Ge=ie.height;for(let Qe=0;Qe<et;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,se,le,Ge,0,pe,N,null),le>>=1,Ge>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ie.parentNode!==le){le.appendChild(ie),f.add(w),le.onpaint=Ge=>{let Qe=Ge.changedElements;for(let be of f)Qe.includes(be.image)&&(be.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Qe=i.RGBA,be=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,be,gt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(me.length>0){if(ce&&fe){let le=Je(me[0]);t.texStorage2D(i.TEXTURE_2D,et,se,le.width,le.height)}for(let le=0,Ge=me.length;le<Ge;le++)j=me[le],ce?ze&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,pe,N,j):t.texImage2D(i.TEXTURE_2D,le,se,pe,N,j);w.generateMipmaps=!1}else if(ce){if(fe){let le=Je(ie);t.texStorage2D(i.TEXTURE_2D,et,se,le.width,le.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,N,ie)}else t.texImage2D(i.TEXTURE_2D,0,se,pe,N,ie);A(w)&&w.mipmapsAutoUpdate===!0&&E(oe),_e.__version=ue.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Re(P,w,q){if(w.image.length!==6)return;let oe=Oe(P,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let ue=n.get(re);if(re.version!==ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let _e=it.getPrimaries(it.workingColorSpace),ne=w.colorSpace===Wn?null:it.getPrimaries(w.colorSpace),ie=w.colorSpace===Wn||_e===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let pe=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,se=[];for(let be=0;be<6;be++)!pe&&!N?se[be]=v(w.image[be],!0,s.maxCubemapSize):se[be]=N?w.image[be].image:w.image[be],se[be]=He(w,se[be]);let j=se[0],me=r.convert(w.format,w.colorSpace),ce=r.convert(w.type),fe=b(w.internalFormat,me,ce,w.normalized,w.colorSpace),ze=w.isVideoTexture!==!0,et=ue.__version===void 0||oe===!0,le=re.dataReady,Ge=y(w,j);Fe(i.TEXTURE_CUBE_MAP,w);let Qe;if(w.isDepthTexture){if(fe=g(w.format===yi,w.type),et)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,j.width,j.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,fe,j.width,j.height,0,me,ce,null)}else if(pe){ze&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,fe,j.width,j.height);for(let be=0;be<6;be++){Qe=se[be].mipmaps;for(let gt=0;gt<Qe.length;gt++){let Kt=Qe[gt];w.format!==Hn?me!==null?ze?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt,0,0,Kt.width,Kt.height,me,Kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt,fe,Kt.width,Kt.height,0,Kt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt,0,0,Kt.width,Kt.height,me,ce,Kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt,fe,Kt.width,Kt.height,0,me,ce,Kt.data)}}}else{if(Qe=w.mipmaps,ze&&et){Qe.length>0&&Ge++;let be=Je(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,fe,be.width,be.height)}for(let be=0;be<6;be++)if(N){ze?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,se[be].width,se[be].height,me,ce,se[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,fe,se[be].width,se[be].height,0,me,ce,se[be].data);for(let gt=0;gt<Qe.length;gt++){let Ti=Qe[gt].image[be].image;ze?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt+1,0,0,Ti.width,Ti.height,me,ce,Ti.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt+1,fe,Ti.width,Ti.height,0,me,ce,Ti.data)}}else{ze?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,me,ce,se[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,fe,me,ce,se[be]);for(let gt=0;gt<Qe.length;gt++){let Kt=Qe[gt];ze?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt+1,0,0,me,ce,Kt.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,gt+1,fe,me,ce,Kt.image[be])}}}A(w)&&w.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),ue.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ae(P,w,q,oe,re,ue){let _e=r.convert(q.format,q.colorSpace),ne=r.convert(q.type),ie=b(q.internalFormat,_e,ne,q.normalized,q.colorSpace),pe=n.get(w),N=n.get(q);if(N.__renderTarget=w,!pe.__hasExternalTextures){let se=Math.max(1,w.width>>ue),j=Math.max(1,w.height>>ue);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ue,ie,se,j,w.depth,0,_e,ne,null):t.texImage2D(re,ue,ie,se,j,0,_e,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,N.__webglTexture,0,st(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,N.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(P,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let oe=w.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,ue=g(w.stencilBuffer,re),_e=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(w),ue,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(w),ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,P)}else{let oe=w.textures;for(let re=0;re<oe.length;re++){let ue=oe[re],_e=r.convert(ue.format,ue.colorSpace),ne=r.convert(ue.type),ie=b(ue.internalFormat,_e,ne,ue.normalized,ue.colorSpace);Me(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(w),ie,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(w),ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ie,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(P,w,q){let oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);re.__renderTarget=w;let ue=oe?w.depthTexture.image[0]:w.depthTexture.image;(!re.__webglTexture||ue.width!==w.width||ue.height!==w.height)&&(ue.width=w.width,ue.height=w.height,w.depthTexture.needsUpdate=!0),oe?Z(w.depthTexture,0):J(w.depthTexture,0);let _e=re.__webglTexture,ne=st(w),ie=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,pe=w.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===mi)Me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ie,_e,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,pe,ie,_e,0);else if(w.depthTexture.format===yi)Me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ie,_e,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,pe,ie,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(P){let w=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let oe=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",re)};oe.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=oe}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let oe=0;oe<6;oe++)je(w.__webglFramebuffer[oe],P,oe);else P.texture.mipmaps.length>0?je(w.__webglFramebuffer[0],P,0):je(w.__webglFramebuffer,P,0);else if(q){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ce(w.__webglDepthbuffer[oe],P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ue)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ce(w.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(P,w,q){let oe=n.get(P);w!==void 0&&Ae(oe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Mt(P)}function Gt(P){let w=P.texture,q=n.get(P),oe=n.get(w);P.addEventListener("dispose",D),R(P);let re=P.textures,ue=P.isWebGLCubeRenderTarget===!0,_e=re.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=w.version,a.memory.textures++),ue){q.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(w.mipmaps.length>0){q.__webglFramebuffer[ne]=[];for(let ie=0;ie<w.mipmaps.length;ie++)q.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else q.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(w.mipmaps.length>0){q.__webglFramebuffer=[];for(let ne=0;ne<w.mipmaps.length;ne++)q.__webglFramebuffer[ne]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ne=0,ie=re.length;ne<ie;ne++){let pe=n.get(re[ne]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Me(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let ie=re[ne];q.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ne]);let pe=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),se=b(ie.internalFormat,pe,N,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),j=st(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,se,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,q.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,w);for(let ne=0;ne<6;ne++)if(w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)Ae(q.__webglFramebuffer[ne][ie],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else Ae(q.__webglFramebuffer[ne],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);A(w)?E(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let ne=0,ie=re.length;ne<ie;ne++){let pe=re[ne],N=n.get(pe),se=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,N.__webglTexture),Fe(se,pe),Ae(q.__webglFramebuffer,P,pe,i.COLOR_ATTACHMENT0+ne,se,0),A(pe)&&E(se)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,oe.__webglTexture),Fe(ne,w),w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)Ae(q.__webglFramebuffer[ie],P,w,i.COLOR_ATTACHMENT0,ne,ie);else Ae(q.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ne,0);A(w)?E(ne):w.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Mt(P)}function O(P){let w=P.textures;for(let q=0,oe=w.length;q<oe;q++){let re=w[q];if(A(re)&&re.mipmapsAutoUpdate===!0){let ue=M(P),_e=n.get(re).__webglTexture;t.bindTexture(ue,_e),E(ue),t.unbindTexture()}}}let Ft=[];function nt(P){if(P.samples>0){if(Me(P)===!1){let w=P.textures,q=P.width,oe=P.height,re=i.COLOR_BUFFER_BIT,ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(P),ne=w.length>1;if(ne)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let N=n.get(w[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,q,oe,0,0,q,oe,re,i.NEAREST),c===!0&&(Ft.length=0,Ft.push(i.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ft.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let N=n.get(w[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function st(P){return Math.min(s.maxSamples,P.samples)}function Me(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function He(P,w){let q=P.colorSpace,oe=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==zr&&q!==Wn&&(it.getTransfer(q)===ht?(oe!==Hn||re!==_n)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",q)),w}function Je(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=he,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=te,this.setTexture3D=ee,this.setTextureCube=Z,this.rebindTextures=At,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Me,this.dispose=k}function Lx(i,e){function t(n,s=Wn){let r,a=it.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Yt)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Hn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===xa||n===va||n===ya||n===Ma)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl||n===ul||n===fl||n===Sa||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===Tl||n===El||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Rl||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cl)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Ll||n===ba||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zt({vertexShader:Dx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bh=class extends Jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,_=null,x=typeof XRWebGLBinding!="undefined",d=new Oh,m={},v=t.getContextAttributes(),A=null,E=null,M=[],b=[],g=new Ne,y=null,R=null,S=new cn;S.viewport=new wt;let I=new cn;I.viewport=new wt;let D=[S,I],G=new Yo,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=M[K];return J===void 0&&(J=new Js,M[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=M[K];return J===void 0&&(J=new Js,M[K]=J),J.getGripSpace()},this.getHand=function(K){let J=M[K];return J===void 0&&(J=new Js,M[K]=J),J.getHandSpace()};function X(K){let J=b.indexOf(K.inputSource);if(J===-1)return;let te=M[J];te!==void 0&&(te.update(K.inputSource,K.frame,l||a),te.dispatchEvent({type:K.type,data:K.inputSource}))}function C(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",V);for(let K=0;K<M.length;K++){let J=b[K];J!==null&&(b[K]=null,M[K].disconnect(J))}L=null,k=null,d.reset();for(let K in m)delete m[K];if(e.setRenderTarget(A),p=null,u=null,f=null,s=null,E=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),R!==null){let K=R.camera;K.fov=R.fov,K.zoom=R.zoom,K.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",C),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ee=null,Z=null;v.depth&&(Z=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=v.stencil?yi:mi,ee=v.stencil?us:Gn);let ae={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Lt(u.textureWidth,u.textureHeight,{format:Hn,type:_n,depthTexture:new _i(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Lt(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function V(K){for(let J=0;J<K.removed.length;J++){let te=K.removed[J],ee=b.indexOf(te);ee>=0&&(b[ee]=null,M[ee].disconnect(te))}for(let J=0;J<K.added.length;J++){let te=K.added[J],ee=b.indexOf(te);if(ee===-1){for(let ae=0;ae<M.length;ae++)if(ae>=b.length){b.push(te),ee=ae;break}else if(b[ae]===null){b[ae]=te,ee=ae;break}if(ee===-1)break}let Z=M[ee];Z&&Z.connect(te)}}function U(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,te=K.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(te=d.depthFar)),G.near=I.near=S.near=J,G.far=I.far=S.far=te,(L!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,k=G.far),G.layers.mask=K.layers.mask|6,S.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let ee=K.parent,Z=G.cameras;U(G,ee);for(let ae=0;ae<Z.length;ae++)U(Z[ae],ee);G.projectionMatrix.copy(S.projectionMatrix),G.projectionMatrixInverse.copy(S.projectionMatrixInverse),R===null&&K.isPerspectiveCamera&&(R={camera:K,fov:K.fov,zoom:K.zoom}),F(K,G,ee)};function F(K,J,te){te===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ao*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(G)},this.getCameraTexture=function(K){return m[K]};let H=null;function Q(K,J){if(h=J.getViewerPose(l||a),_=J,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ee=!1;te.length!==G.cameras.length&&(G.cameras.length=0,ee=!0);for(let ye=0;ye<te.length;ye++){let Fe=te[ye],Oe=null;if(p!==null)Oe=p.getViewport(Fe);else{let qe=f.getViewSubImage(u,Fe);Oe=qe.viewport,ye===0&&(e.setRenderTargetTextures(E,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(E))}let Ee=D[ye];Ee===void 0&&(Ee=new cn,Ee.layers.enable(ye),Ee.viewport=new wt,D[ye]=Ee),Ee.matrix.fromArray(Fe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Fe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ye===0&&(G.matrix.copy(Ee.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ee===!0&&G.cameras.push(Ee)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ye=f.getDepthInformation(te[0]);ye&&ye.isValid&&ye.texture&&d.init(ye,s.renderState)}if(Z&&Z.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let ye=0;ye<te.length;ye++){let Fe=te[ye].camera;if(Fe){let Oe=m[Fe];Oe||(Oe=new ta,m[Fe]=Oe);let Ee=f.getCameraImage(Fe);Oe.sourceTexture=Ee}}}}for(let te=0;te<M.length;te++){let ee=b[te],Z=M[te];ee!==null&&Z!==void 0&&Z.update(ee,J,l||a)}H&&H(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let he=new id;he.setAnimationLoop(Q),this.setAnimationLoop=function(K){H=K},this.dispose=function(){}}},Ux=new ut,dd=new Ye;dd.set(-1,0,0,0,1,0,0,0,1);function Fx(i,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,yh(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,v,A,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),f(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),u(d,m),m.isMeshPhysicalMaterial&&p(d,m,E)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),x(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?c(d,m,v,A):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===qt&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===qt&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v=e.get(m),A=v.envMap,E=v.envMapRotation;A&&(d.envMap.value=A,d.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(dd),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,v,A){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=A*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,v){d.ior.value=m.ior,m.diffuseRoughness>0&&(d.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){let v=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,e,t,n){let s={},r={};function a(v,A){let E=A.program;n.uniformBlockBinding(v,E,s[v.id])}function o(v,A){let E=s[v.id];E===void 0&&(_(v),E=c(v),s[v.id]=E,v.addEventListener("dispose",d));let M=A.program;n.updateUBOMapping(v,M);let b=e.render.frame;r[v.id]!==b&&(l(v),r[v.id]=b)}function c(v){let A=i.createBuffer(),E=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(v){let A=s[v.id],E=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,g=E.length;b<g;b++){let y=E[b];if(Array.isArray(y))for(let R=0,S=y.length;R<S;R++)h(y[R],b,R,M);else h(y,b,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,A,E,M){if(u(v,A,E,M)===!0){let b=v.__offset,g=v.value;if(Array.isArray(g)){let y=0;for(let R=0;R<g.length;R++){let S=g[R],I=x(S,!0);f(S,v.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function f(v,A,E){typeof v=="number"||typeof v=="boolean"?A[E]=v:v.isMatrix3?(A[E]=v.elements[0],A[E+1]=v.elements[1],A[E+2]=v.elements[2],A[E+3]=0,A[E+4]=v.elements[3],A[E+5]=v.elements[4],A[E+6]=v.elements[5],A[E+7]=0,A[E+8]=v.elements[6],A[E+9]=v.elements[7],A[E+10]=v.elements[8],A[E+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-E),E):v.toArray(A,E)}function u(v,A,E,M){let b=v.value,g=A+"_"+E;if(Array.isArray(b)){M[g]===void 0&&(M[g]=[]);let y=M[g],R=!1;for(let S=0;S<b.length;S++)p(b[S],y,S)===!0&&(R=!0);return R}return p(b,M,g)}function p(v,A,E){if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{let M=A[E];if(typeof v=="number"||typeof v=="boolean"){if(M!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(M.equals(v)===!1)return M.copy(v),!0}}return!1}function _(v){let A=v.uniforms,E=0,M=16;for(let g=0,y=A.length;g<y;g++){let R=Array.isArray(A[g])?A[g]:[A[g]];for(let S=0,I=R.length;S<I;S++){let D=R[S],G=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(A[g])||Array.isArray(D.value),k=E;for(let C=0,V=G.length;C<V;C++){let U=G[C],F=x(U,L),H=E%M,Q=H%F.boundary,he=H+Q;E+=Q,he!==0&&M-he<F.storage&&(E+=M-he),C===0&&(k=E),E+=F.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((E-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let b=E%M;return b>0&&(E+=M-b),v.__size=E,v.__cache={},this}function x(v,A){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=16,E.storage=48):v.isMatrix4?(E.boundary=16,E.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function d(v){let A=v.target;A.removeEventListener("dispose",d),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function kx(){return ni===null&&(ni=new Zr(Bx,16,16,Bi,Yt),ni.name="DFG_LUT",ni.minFilter=dn,ni.magFilter=dn,ni.wrapS=gn,ni.wrapT=gn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Bl=class{constructor(e={}){let{canvas:t=Cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=_n}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let x=p,d=new Set([il,nl,tl]),m=new Set([_n,Gn,lr,us,Qo,jo]),v=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},M=null,b=null,g=[],y=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,I=!1,D=null,G=null,L=null,k=null;this._outputColorSpace=Wt;let X=0,C=0,V=null,U=-1,F=null,H=new wt,Q=new wt,he=null,K=new ke(0),J=0,te=t.width,ee=t.height,Z=1,ae=null,Xe=null,ye=new wt(0,0,te,ee),Fe=new wt(0,0,te,ee),Oe=!1,Ee=new Di,qe=new Io,ve=!1,Re=!1,Ae=new ut,Ce=new z,je=new wt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Gt(){return V===null?Z:1}let O=n;function Ft(T,B){return t.getContext(T,B)}let nt,st,Me,Ht,He,Je,P,w,q,oe,re,ue,_e,ne,ie,pe,N,se,j,me,ce,fe,ze;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let B="webgl2";if(O=Ft(B,T),O===null)throw Ft(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(T){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ze("WebGLRenderer: "+T.message),T}function et(){nt=new $g(O),nt.init(),ce=new Lx(O,nt),st=new kg(O,nt,e,ce),Me=new Px(O,nt),st.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),G=O.createFramebuffer(),L=O.createFramebuffer(),k=O.createFramebuffer(),Ht=new jg(O),He=new gx,Je=new Ix(O,nt,Me,He,st,ce,Ht),P=new Jg(S),w=new tm(O),fe=new Og(O,w),q=new Kg(O,w,Ht,fe),oe=new t_(O,q,w,fe,Ht),se=new e_(O,st,Je),ie=new zg(He),re=new mx(S,P,nt,st,fe,ie),ue=new Fx(S,He),_e=new xx,ne=new wx(nt),N=new Fg(S,P,Me,oe,_,c),pe=new Rx(S,oe,st),ze=new Ox(O,Ht,st,Me),j=new Bg(O,nt,Ht),me=new Qg(O,nt,Ht),Ht.programs=re.programs,S.capabilities=st,S.extensions=nt,S.properties=He,S.renderLists=_e,S.shadowMap=pe,S.state=Me,S.info=Ht}x!==_n&&(R=new i_(x,t.width,t.height,o,s,r));let le=new Bh(S,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(te,ee,!1))},this.getSize=function(T){return T.set(te,ee)},this.setSize=function(T,B,$=!0){if(le.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ee=B,t.width=Math.floor(T*Z),t.height=Math.floor(B*Z),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(te*Z,ee*Z).floor()},this.setDrawingBufferSize=function(T,B,$){te=T,ee=B,Z=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===_n){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,B,$,W){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,B,$,W),Me.viewport(H.copy(ye).multiplyScalar(Gt()).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,B,$,W){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,B,$,W),Me.scissor(Q.copy(Fe).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){Me.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){Xe=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,$=!0){let W=0;if(T){let Y=!1;if(V!==null){let xe=V.texture.format;Y=d.has(xe)}if(Y){let xe=V.texture.type,Ie=m.has(xe),ge=N.getClearColor(),Te=N.getClearAlpha(),Be=ge.r,$e=ge.g,rt=ge.b;Ie?(v[0]=Be,v[1]=$e,v[2]=rt,v[3]=Te,O.clearBufferuiv(O.COLOR,0,v)):(A[0]=Be,A[1]=$e,A[2]=rt,A[3]=Te,O.clearBufferiv(O.COLOR,0,A))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),N.dispose(),_e.dispose(),ne.dispose(),Je.dispose(),He.dispose(),P.dispose(),oe.dispose(),q.dispose(),fe.dispose(),ze.dispose(),re.dispose(),le.dispose(),le.removeEventListener("sessionstart",ou),le.removeEventListener("sessionend",lu),Zi.stop()};function Ge(T){T.preventDefault(),xh("WebGLRenderer: Context Lost."),I=!0}function Qe(){xh("WebGLRenderer: Context Restored."),I=!1;let T=Ht.autoReset,B=pe.enabled,$=pe.autoUpdate,W=pe.needsUpdate,Y=pe.type;et(),Ht.autoReset=T,pe.enabled=B,pe.autoUpdate=$,pe.needsUpdate=W,pe.type=Y}function be(T){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){let B=T.target;B.removeEventListener("dispose",gt),Kt(B)}function Kt(T){Ti(T),He.remove(T)}function Ti(T){let B=He.get(T).programs;B!==void 0&&(B.forEach(function($){re.releaseProgram($)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,W,Y,xe){B===null&&(B=Mt);let Ie=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ge=fp(T,B,$,W,Y);Me.setMaterial(W,Ie);let Te=$.index,Be=1;if(W.wireframe===!0){if(Te=q.getWireframeAttribute($),Te===void 0)return;Be=2}let $e=$.drawRange,rt=$.attributes.position,Le=$e.start*Be,at=($e.start+$e.count)*Be;xe!==null&&(Le=Math.max(Le,xe.start*Be),at=Math.min(at,(xe.start+xe.count)*Be)),Te!==null?(Le=Math.max(Le,0),at=Math.min(at,Te.count)):rt!=null&&(Le=Math.max(Le,0),at=Math.min(at,rt.count));let Ot=at-Le;if(Ot<0||Ot===1/0)return;fe.setup(Y,W,ge,$,Te);let vt,xt=j;if(Te!==null&&(vt=w.get(Te),xt=me,xt.setIndex(vt)),Y.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*Gt()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(Y.isLine){let rn=W.linewidth;rn===void 0&&(rn=1),Me.setLineWidth(rn*Gt()),Y.isLineSegments?xt.setMode(O.LINES):Y.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else Y.isPoints?xt.setMode(O.POINTS):Y.isSprite&&xt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let rn=Y._multiDrawStarts,De=Y._multiDrawCounts,fn=Y._multiDrawCount,dt=Te?w.get(Te).bytesPerElement:1,Ji=He.get(W).currentProgram.getUniforms();for(let an=0;an<fn;an++)Ji.setValue(O,"_gl_DrawID",an),xt.render(rn[an]/dt,De[an])}else if(Y.isInstancedMesh)xt.renderInstances(Le,Ot,Y.count);else if($.isInstancedBufferGeometry){let rn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,De=Math.min($.instanceCount,rn);xt.renderInstances(Le,Ot,De)}else xt.render(Le,Ot)};function au(T,B,$,W){D!==null&&T.isNodeMaterial&&D.setObject(W,T),ve===!0&&ie.setState(T,$,!1),T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=qt,T.needsUpdate=!0,Pr(T,B,W),T.side=Oi,T.needsUpdate=!0,Pr(T,B,W),T.side=Ln):Pr(T,B,W)}this.compile=function(T,B,$=null){$===null&&($=T),D!==null&&D.renderStart(T,B,$),b=ne.get($),b.init(B),y.push(b),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),T!==$&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Re=this.localClippingEnabled,ve=ie.init(this.clippingPlanes,Re),ve===!0&&ie.setGlobalState(this.clippingPlanes,B),D!==null&&pe.render(b.state.shadowsArray,$,B);let W=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xe=Y.material;if(xe)if(Array.isArray(xe))for(let Ie=0;Ie<xe.length;Ie++){let ge=xe[Ie];au(ge,$,B,Y),W.add(ge)}else au(xe,$,B,Y),W.add(xe)}),b=y.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(T,B,$=null){let W=this.compile(T,B,$);return new Promise(Y=>{function xe(){if(W.forEach(function(Ie){let Te=He.get(Ie).currentProgram;(Te===void 0||Te.isReady())&&W.delete(Ie)}),W.size===0){Y(T);return}setTimeout(xe,10)}nt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let yc=null;function hp(T){yc&&yc(T)}function ou(){Zi.stop()}function lu(){Zi.start()}let Zi=new id;Zi.setAnimationLoop(hp),typeof self!="undefined"&&Zi.setContext(self),this.setAnimationLoop=function(T){yc=T,le.setAnimationLoop(T),T===null?Zi.stop():Zi.start()},le.addEventListener("sessionstart",ou),le.addEventListener("sessionend",lu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(T,B);let $=le.enabled===!0&&le.isPresenting===!0,W=R!==null&&(V===null||$)&&R.begin(S,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,V),b=ne.get(T,y.length),b.init(B),b.state.textureUnits=Je.getTextureUnits(),y.push(b),Ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?qe.setFromArrayCamera(B):Ee.setFromProjectionMatrix(Ae,In,B.reversedDepth),Re=this.localClippingEnabled,ve=ie.init(this.clippingPlanes,Re),M=_e.get(T,g.length),M.init(),g.push(M),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ie=S.xr.getDepthSensingMesh();Ie!==null&&Mc(Ie,B,-1/0,S.sortObjects)}Mc(T,B,0,S.sortObjects),M.finish(),D!==null&&D.updateLights(b.state.lightsArray),S.sortObjects===!0&&M.sort(ae,Xe),At=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,At&&N.addToRenderList(M,T),this.info.autoReset===!0&&this.info.reset(),ve===!0&&ie.beginShadows();let Y=b.state.shadowsArray;if(pe.render(Y,T,B),ve===!0&&ie.endShadows(),(W&&R.hasRenderPass())===!1){let Ie=M.opaque,ge=M.transmissive;if(b.setupLights(),B.isArrayCamera){let Te=B.cameras;if(ge.length>0)for(let Be=0,$e=Te.length;Be<$e;Be++){let rt=Te[Be];hu(Ie,ge,T,rt)}At&&N.render(T);for(let Be=0,$e=Te.length;Be<$e;Be++){let rt=Te[Be];cu(M,T,rt,rt.viewport)}}else ge.length>0&&hu(Ie,ge,T,B),At&&N.render(T),cu(M,T,B)}V!==null&&C===0&&(Je.updateMultisampleRenderTarget(V),Je.updateRenderTargetMipmap(V)),W&&R.end(S),T.isScene===!0&&T.onAfterRender(S,T,B),fe.resetDefaultState(),U=-1,F=null,y.pop(),y.length>0?(b=y[y.length-1],Je.setTextureUnits(b.state.textureUnits),ve===!0&&ie.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?M=g[g.length-1]:M=null,D!==null&&D.renderEnd()};function Mc(T,B,$,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){let Ie=B.isArrayCamera?qe:Ee;if(!T.frustumCulled||T.intersectsFrustum(Ie)){W&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);let ge=oe.update(T),Te=T.material;Te.visible&&M.push(T,ge,Te,$,je.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){let Ie=B.isArrayCamera?qe:Ee;if(!T.frustumCulled||T.intersectsFrustum(Ie)){let ge=oe.update(T),Te=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(Te)){let Be=ge.groups;for(let $e=0,rt=Be.length;$e<rt;$e++){let Le=Be[$e],at=Te[Le.materialIndex];at&&at.visible&&M.push(T,ge,at,$,je.z,Le,B)}}else Te.visible&&M.push(T,ge,Te,$,je.z,null,B)}}}let xe=T.children;for(let Ie=0,ge=xe.length;Ie<ge;Ie++)Mc(xe[Ie],B,$,W)}function cu(T,B,$,W){let{opaque:Y,transmissive:xe,transparent:Ie}=T;b.setupLightsView($),ve===!0&&ie.setGlobalState(S.clippingPlanes,$),W&&Me.viewport(H.copy(W)),Y.length>0&&Ga(Y,B,$),xe.length>0&&Ga(xe,B,$),Ie.length>0&&Ga(Ie,B,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function hu(T,B,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let Le=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Lt(1,1,{generateMipmaps:!0,type:Le?Yt:_n,minFilter:Vn,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let xe=b.state.transmissionRenderTarget[W.id],Ie=W.viewport||H;xe.setSize(Ie.z*S.transmissionResolutionScale,Ie.w*S.transmissionResolutionScale);let ge=S.getRenderTarget(),Te=S.getActiveCubeFace(),Be=S.getActiveMipmapLevel();S.setRenderTarget(xe),S.getClearColor(K),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),At&&N.render($);let $e=S.toneMapping;S.toneMapping=ti;let rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),ve===!0&&ie.setGlobalState(S.clippingPlanes,W),Ga(T,$,W),Je.updateMultisampleRenderTarget(xe),Je.updateRenderTargetMipmap(xe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let at=0,Ot=B.length;at<Ot;at++){let vt=B[at],{object:xt,geometry:rn,material:De,group:fn}=vt;if(De.side===Ln&&xt.layers.test(W.layers)){let dt=De.side;De.side=qt,De.needsUpdate=!0,uu(xt,$,W,rn,De,fn),De.side=dt,De.needsUpdate=!0,Le=!0}}Le===!0&&(Je.updateMultisampleRenderTarget(xe),Je.updateRenderTargetMipmap(xe))}S.setRenderTarget(ge,Te,Be),S.setClearColor(K,J),rt!==void 0&&(W.viewport=rt),S.toneMapping=$e}function Ga(T,B,$){let W=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,xe=T.length;Y<xe;Y++){let Ie=T[Y],{object:ge,geometry:Te,group:Be}=Ie,$e=Ie.material;$e.allowOverride===!0&&W!==null&&($e=W),ge.layers.test($.layers)&&uu(ge,B,$,Te,$e,Be)}}function uu(T,B,$,W,Y,xe){D!==null&&Y.isNodeMaterial&&D.setObject(T,Y),T.onBeforeRender(S,B,$,W,Y,xe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(S,B,$,W,T,xe),Y.transparent===!0&&Y.side===Ln&&Y.forceSinglePass===!1?(Y.side=qt,Y.needsUpdate=!0,S.renderBufferDirect($,B,W,Y,T,xe),Y.side=Oi,Y.needsUpdate=!0,S.renderBufferDirect($,B,W,Y,T,xe),Y.side=Ln):S.renderBufferDirect($,B,W,Y,T,xe),T.onAfterRender(S,B,$,W,Y,xe)}function fu(T){let B=0;for(let $ of T)$.texture!==null&&B++;return B}function Pr(T,B,$){B.isScene!==!0&&(B=Mt);let W=He.get(T),Y=b.state.lights,xe=b.state.shadowsArray,Ie=Y.state.version,ge=re.getParameters(T,Y.state,xe,B,$,b.state.lightProbeGridArray),Te=re.getProgramCacheKey(ge),Be=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let $e=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=P.get(T.envMap||W.environment,$e),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",gt),Be=new Map,W.programs=Be,W.programVariants=new Map);let rt=Be.get(Te);if(rt!==void 0){if(W.currentProgram===rt&&W.lightsStateVersion===Ie)return pu(T,ge),rt}else ge.uniforms=re.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,$,ge),T.onBeforeCompile(ge,S),rt=re.acquireProgram(ge,Te),Be.set(Te,rt),W.uniforms=ge.uniforms;let Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ie.uniform),pu(T,ge),W.needsLights=pp(T),W.lightsStateVersion=Ie,W.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.sunLights.value=Y.state.sun,Le.sunLightShadows.value=Y.state.sunShadow,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.sunShadowMatrix.value=Y.state.sunShadowMatrix,Le.sunShadowCascade.value=Y.state.sunShadowCascade,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=fu(b.state.lightProbeGridArray),W.currentProgram=rt,W.uniformsList=null,rt}function up(T,B,$,W,Y){let xe=He.get(T),Ie=xe.currentProgram.id+","+W+","+Y,ge=xe.programVariants.get(Ie);return ge===void 0?(ge=Pr(T,B,$),xe.programVariants.set(Ie,ge)):(xe.currentProgram=ge,xe.uniformsList=null,xe.outputColorSpace=W,xe.toneMapping=Y),ge}function du(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=cr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function pu(T,B){let $=He.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function fp(T,B,$,W,Y){B.isScene!==!0&&(B=Mt),Je.resetTextureUnits();let xe=B.fog,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,ge=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:it.workingColorSpace,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Be=P.get(W.envMap||Ie,Te),$e=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,rt=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,Ot=!!$.morphAttributes.color,vt=ti;W.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(vt=S.toneMapping);let xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rn=xt!==void 0?xt.length:0,De=He.get(W),fn=b.state.lights;if(ve===!0&&(Re===!0||T!==F)){let Et=T===F&&W.id===U;ie.setState(W,T,Et)}let dt=!1,Ji=!1;W.version===De.__version?De.needsLights&&De.lightsStateVersion!==fn.state.version||Y.isBatchedMesh&&De.batching===!1||!Y.isBatchedMesh&&De.batching===!0||Y.isBatchedMesh&&De.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&De.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||Y.isInstancedMesh&&De.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&De.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&De.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&De.instancingMorph===!1&&Y.morphTexture!==null||De.envMap!==Be||W.fog===!0&&De.fog!==xe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==$e||De.vertexTangents!==rt||De.morphTargets!==Le||De.morphNormals!==at||De.morphColors!==Ot||De.morphTargetsCount!==rn||De.numLightProbeGrids!==fu(b.state.lightProbeGridArray)?dt=!0:(De.outputColorSpace!==ge||De.toneMapping!==vt)&&(Ji=!0):(dt=!0,De.__version=W.version);let an=De.currentProgram;(dt===!0||Ji===!0)&&(an=Ji===!0?up(W,B,Y,ge,vt):Pr(W,B,Y),D&&W.isNodeMaterial&&D.onUpdateProgram(W,an,De));let Ha=!1,Ei=!1,$i=!1,lt=an.getUniforms(),tn=De.uniforms;if(Me.useProgram(an.program)&&(Ha=!0,Ei=!0,$i=!0),W.id!==U&&(U=W.id,Ei=!0),Ha||F!==T){Me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(O,"projectionMatrix",T.projectionMatrix),lt.setValue(O,"viewMatrix",T.matrixWorldInverse);let Qt=lt.map.cameraPosition;Qt!==void 0&&Qt.setValue(O,Ce.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,Ei=!0,$i=!0)}if(De.needsLights&&(fn.state.sunShadowMap.length>0&&lt.setValue(O,"sunShadowMap",fn.state.sunShadowMap,Je),fn.state.directionalShadowMap.length>0&&lt.setValue(O,"directionalShadowMap",fn.state.directionalShadowMap,Je),fn.state.spotShadowMap.length>0&&lt.setValue(O,"spotShadowMap",fn.state.spotShadowMap,Je),fn.state.pointShadowMap.length>0&&lt.setValue(O,"pointShadowMap",fn.state.pointShadowMap,Je)),Y.isSkinnedMesh){lt.setOptional(O,Y,"bindMatrix"),lt.setOptional(O,Y,"bindMatrixInverse");let Et=Y.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),lt.setValue(O,"boneTexture",Et.boneTexture,Je))}Y.isBatchedMesh&&(lt.setOptional(O,Y,"batchingTexture"),lt.setValue(O,"batchingTexture",Y._matricesTexture,Je),lt.setOptional(O,Y,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",Y._indirectTexture,Je),lt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",Y._colorsTexture,Je));let Un=$.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&se.update(Y,$,an),(Ei||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,lt.setValue(O,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(tn.envMapIntensity.value=B.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=kx()),Ei){if(lt.setValue(O,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&dp(tn,$i),xe&&W.fog===!0&&ue.refreshFogUniforms(tn,xe),ue.refreshMaterialUniforms(tn,W,Z,ee,b.state.transmissionRenderTarget[T.id]),De.needsLights&&De.numLightProbeGrids>0){let Et=E,Qt=0;for(let li of b.state.lightProbeGridArray)li.texture!==null&&(Et.textures[Qt]=li.texture,Et.min[Qt]=li.boundingBox.min,Et.max[Qt]=li.boundingBox.max,Et.resolution[Qt]=li.resolution,Qt++);for(let li in Et)Et[li].length=Qt;tn.probesSH.value=Et.textures,tn.probesMin.value=Et.min,tn.probesMax.value=Et.max,tn.probesResolution.value=Et.resolution}cr.upload(O,du(De),tn,Je)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(cr.upload(O,du(De),tn,Je),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(O,"center",Y.center),lt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),lt.setValue(O,"normalMatrix",Y.normalMatrix),lt.setValue(O,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let Et=W.uniformsGroups;for(let Qt=0,li=Et.length;Qt<li;Qt++){let gu=Et[Qt];ze.update(gu,an),ze.bind(gu,an)}}return an}function dp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function pp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,B,$){let W=He.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),He.get(T.texture).__webglTexture=B,He.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let $=He.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){V=T,X=B,C=$;let W=null,Y=!1,xe=!1;if(T){let ge=He.get(T);if(ge.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),H.copy(T.viewport),Q.copy(T.scissor),he=T.scissorTest,Me.viewport(H),Me.scissor(Q),Me.setScissorTest(he),U=-1;return}else if(ge.__webglFramebuffer===void 0)Je.setupRenderTarget(T);else if(ge.__hasExternalTextures)Je.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let $e=T.depthTexture;if(ge.__boundDepthTexture!==$e){if($e!==null&&He.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(T)}}let Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(xe=!0);let Be=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?W=Be[B][$]:W=Be[B],Y=!0):T.samples>0&&Je.useMultisampledRTT(T)===!1?W=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[$]:W=Be,H.copy(T.viewport),Q.copy(T.scissor),he=T.scissorTest}else H.copy(ye).multiplyScalar(Z).floor(),Q.copy(Fe).multiplyScalar(Z).floor(),he=Oe;if($!==0&&(W=G),Me.bindFramebuffer(O.FRAMEBUFFER,W)&&Me.drawBuffers(T,W),Me.viewport(H),Me.scissor(Q),Me.setScissorTest(he),Y){let ge=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,$)}else if(xe){let ge=B;for(let Te=0;Te<T.textures.length;Te++){let Be=He.get(T.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Be.__webglTexture,$,ge)}}else if(T!==null&&$!==0){let ge=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,$)}U=-1};function mu(T){let B=He.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=st.textureFormatReadable(T.format),B.__typeReadable=st.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,$,W,Y,xe,Ie,ge=0){if(!(T&&T.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te){Me.bindFramebuffer(O.FRAMEBUFFER,Te);try{let Be=T.textures[ge],$e=Be.format,rt=Be.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Le=mu(Be);if(Le.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&$>=0&&$<=T.height-Y&&O.readPixels(B,$,W,Y,ce.convert($e),ce.convert(rt),xe)}finally{let Be=V!==null?He.get(V).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,B,$,W,Y,xe,Ie,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te)if(B>=0&&B<=T.width-W&&$>=0&&$<=T.height-Y){Me.bindFramebuffer(O.FRAMEBUFFER,Te);let Be=T.textures[ge],$e=Be.format,rt=Be.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Le=mu(Be);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(B,$,W,Y,ce.convert($e),ce.convert(rt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ot=V!==null?He.get(V).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Ot);let vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Pf(O,vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(at),O.deleteSync(vt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,$=0){let W=Math.pow(2,-$),Y=Math.floor(T.image.width*W),xe=Math.floor(T.image.height*W),Ie=B!==null?B.x:0,ge=B!==null?B.y:0;Je.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Ie,ge,Y,xe),Me.unbindTexture()},this.copyTextureToTexture=function(T,B,$=null,W=null,Y=0,xe=0){let Ie,ge,Te,Be,$e,rt,Le,at,Ot,vt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if($!==null)Ie=$.max.x-$.min.x,ge=$.max.y-$.min.y,Te=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,$e=$.min.y,rt=$.isBox3?$.min.z:0;else{let lt=Math.pow(2,-Y);Ie=Math.floor(vt.width*lt),ge=Math.floor(vt.height*lt),T.isDataArrayTexture?Te=vt.depth:T.isData3DTexture?Te=Math.floor(vt.depth*lt):Te=1,Be=0,$e=0,rt=0}W!==null?(Le=W.x,at=W.y,Ot=W.z):(Le=0,at=0,Ot=0);let xt=ce.convert(B.format),rn=ce.convert(B.type),De;B.isData3DTexture?(Je.setTexture3D(B,0),De=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Je.setTexture2DArray(B,0),De=O.TEXTURE_2D_ARRAY):(Je.setTexture2D(B,0),De=O.TEXTURE_2D),Me.activeTexture(O.TEXTURE0),Me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),Me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Me.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let fn=Me.getParameter(O.UNPACK_ROW_LENGTH),dt=Me.getParameter(O.UNPACK_IMAGE_HEIGHT),Ji=Me.getParameter(O.UNPACK_SKIP_PIXELS),an=Me.getParameter(O.UNPACK_SKIP_ROWS),Ha=Me.getParameter(O.UNPACK_SKIP_IMAGES);Me.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),Me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),Me.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),Me.pixelStorei(O.UNPACK_SKIP_ROWS,$e),Me.pixelStorei(O.UNPACK_SKIP_IMAGES,rt);let Ei=T.isDataArrayTexture||T.isData3DTexture,$i=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let lt=He.get(T),tn=He.get(B),Un=He.get(lt.__renderTarget),Et=He.get(tn.__renderTarget);Me.bindFramebuffer(O.READ_FRAMEBUFFER,Un.__webglFramebuffer),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Qt=0;Qt<Te;Qt++)Ei&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(T).__webglTexture,Y,rt+Qt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(B).__webglTexture,xe,Ot+Qt)),O.blitFramebuffer(Be,$e,Be+Ie,$e+ge,Le,at,Le+Ie,at+ge,O.DEPTH_BUFFER_BIT,O.NEAREST);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||He.has(T)){let lt=He.get(T),tn=He.get(B);Me.bindFramebuffer(O.READ_FRAMEBUFFER,L),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Un=0;Un<Te;Un++)Ei?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,lt.__webglTexture,Y,rt+Un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,lt.__webglTexture,Y),$i?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,xe,Ot+Un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,xe),Y!==0?O.blitFramebuffer(Be,$e,Be+Ie,$e+ge,Le,at,Le+Ie,at+ge,O.COLOR_BUFFER_BIT,O.NEAREST):$i?O.copyTexSubImage3D(De,xe,Le,at,Ot+Un,Be,$e,Ie,ge):O.copyTexSubImage2D(De,xe,Le,at,Be,$e,Ie,ge);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else $i?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(De,xe,Le,at,Ot,Ie,ge,Te,xt,rn,vt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(De,xe,Le,at,Ot,Ie,ge,Te,xt,vt.data):O.texSubImage3D(De,xe,Le,at,Ot,Ie,ge,Te,xt,rn,vt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Le,at,Ie,ge,xt,rn,vt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Le,at,vt.width,vt.height,xt,vt.data):O.texSubImage2D(O.TEXTURE_2D,xe,Le,at,Ie,ge,xt,rn,vt);Me.pixelStorei(O.UNPACK_ROW_LENGTH,fn),Me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),Me.pixelStorei(O.UNPACK_SKIP_PIXELS,Ji),Me.pixelStorei(O.UNPACK_SKIP_ROWS,an),Me.pixelStorei(O.UNPACK_SKIP_IMAGES,Ha),xe===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(De),Me.unbindTexture()},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&Je.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Je.setTextureCube(T,0):T.isData3DTexture?Je.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Je.setTexture2DArray(T,0):Je.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){X=0,C=0,V=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Vl=new Float32Array(20002),Gl=new Float32Array(20002),Hl=new Float32Array(20002),Wl=new Float32Array(20002),sn=[],kh=0;function zx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ds=16;function pd(i=1709,e=["street"]){let t=zx(i);sn.length=0;let n=0,s=0,r=e[0],a=(d,m,v=0,A=0)=>{sn.push({s:n,e:n+d,type:m,k:v,dir:A,kind:r}),n+=d},o=()=>{let d;do d=e[t()*e.length|0];while(d===r&&e.length>1&&t()<.7);r=d};for(a(150,"street");n<19600;){let d=t()<.5?-1:1;a(Math.PI/2*ds,"corner",d/ds,d),s++,s%2===1&&a(120,"square"),o(),a(40+t()*40,"street");let m=t()<.5?-1:1;a(70,"bend",m*(.35+t()*.25)/70,m),t()<.5&&o(),a(60+t()*60,"street")}let c=sn.filter(d=>d.type==="corner"),l=0,h=d=>{for(;l<c.length-1&&d>c[l].e+25;)l++;let m=c[l];if(!m)return 1;let v=Math.max(m.s-10-d,d-m.e-10,0),A=Math.min(1,v/20);return A*A*(3-2*A)},f=0,u=0,p=0,_=0,x=0;for(let d=0;d<=20001;d++){for(;_<sn.length-1&&d>=sn[_].e;)_++;let m=sn[_];Vl[d]=u,Gl[d]=p,Wl[d]=f,Hl[d]=x;let v=5.5/230*Math.cos(d/230)+2.6/97*Math.cos(d/97+1)+1.2/41*Math.cos(d/41);x+=v*1*h(d);let A=m&&d>=m.s&&d<m.e?m.k:0;f+=A*1,u+=Math.sin(f)*1,p+=-Math.cos(f)*1}kh=2e4}function ps(i){let e=0,t=sn.length-1;for(;e<=t;){let n=e+t>>1,s=sn[n];if(i<s.s)t=n-1;else if(i>=s.e)e=n+1;else return s}return null}function Xl(i,e){i<0&&(i=0),i>kh-1&&(i=kh-1);let t=i|0,n=i-t;return e.x=Vl[t]+(Vl[t+1]-Vl[t])*n,e.z=Gl[t]+(Gl[t+1]-Gl[t])*n,e.y=Hl[t]+(Hl[t+1]-Hl[t])*n,e.th=Wl[t]+(Wl[t+1]-Wl[t])*n,e}function Nt(i,e,t,n){let s=Xl(i,n),r=Math.cos(s.th),a=Math.sin(s.th);return n.wx=s.x+r*e,n.wz=s.z+a*e,n.wy=s.y+t,n}var ql=new ke;function Pe(i){return ql.set(i),[ql.r,ql.g,ql.b]}var Ut=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(e,t,n,s,r,a,o,c){let l=t[0]-e[0],h=t[1]-e[1],f=t[2]-e[2],u=n[0]-e[0],p=n[1]-e[1],_=n[2]-e[2],x=h*_-f*p,d=f*u-l*_,m=l*p-h*u;if(x*s[0]+d*s[1]+m*s[2]<0){let v=t;t=n,n=v;let A=a;a=o,o=A}this.p.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this.n.push(s[0],s[1],s[2],s[0],s[1],s[2],s[0],s[1],s[2]),this.u.push(r[0],r[1],a[0],a[1],o[0],o[1]),this.c.push(c[0],c[1],c[2],c[0],c[1],c[2],c[0],c[1],c[2])}quad(e,t,n,s,r,a,o,c,l,h){this.tri(e,t,n,r,a,o,c,h),this.tri(e,n,s,r,a,c,l,h)}geo(e,t,n){let s=e.index?e.toNonIndexed():e,r=s.attributes.position,a=s.attributes.normal,o=s.attributes.uv,c=new Ye().getNormalMatrix(t),l=new z;for(let h=0;h<r.count;h++)l.fromBufferAttribute(r,h).applyMatrix4(t),this.p.push(l.x,l.y,l.z),l.fromBufferAttribute(a,h).applyMatrix3(c).normalize(),this.n.push(l.x,l.y,l.z),this.u.push(o?o.getX(h):0,o?o.getY(h):0),this.c.push(n[0],n[1],n[2]);s!==e&&s.dispose()}get empty(){return!this.p.length}build(){if(!this.p.length)return null;let e=new bt;return e.setAttribute("position",new Ke(this.p,3)),e.setAttribute("normal",new Ke(this.n,3)),e.setAttribute("uv",new Ke(this.u,2)),e.setAttribute("color",new Ke(this.c,3)),e.computeBoundingSphere(),e}};function ms(i,e,t,n){let s=Math.sin(n),r=Math.cos(n);return{ox:i,oy:e,oz:t,fx:s,fz:-r,nx:r,nz:s}}function Mi(i,e,t,n){return[i.ox+i.fx*e+i.nx*n,i.oy+t,i.oz+i.fz*e+i.nz*n]}function Tn(i,e,t,n){return[i.fx*e+i.nx*n,t,i.fz*e+i.nz*n]}function Ra(i,e,t,n,s=0,r=1,a=1,o=1){let c=Mi(i,e,t,n),l=Math.PI/2-Math.atan2(i.fx,-i.fz)+s;return new ut().makeRotationY(l).setPosition(c[0],c[1],c[2]).multiply(new ut().makeScale(r,a,o))}function Ve(i,e,t,n,s,r,a,o,c,l=1.9,h=3.3,f=!0,u=s,p=0){let _=(m,v,A)=>Mi(e,m,v,A),x=m=>(m-p)/l,d=m=>(m-u)/h;i.quad(_(t,s,a),_(n,s,a),_(n,r,a),_(t,r,a),Tn(e,0,0,-1),[x(t),d(s)],[x(n),d(s)],[x(n),d(r)],[x(t),d(r)],c),i.quad(_(t,s,o),_(n,s,o),_(n,r,o),_(t,r,o),Tn(e,0,0,1),[-x(t),d(s)],[-x(n),d(s)],[-x(n),d(r)],[-x(t),d(r)],c),i.quad(_(t,s,a),_(t,s,o),_(t,r,o),_(t,r,a),Tn(e,-1,0,0),[-x(a),d(s)],[-x(o),d(s)],[-x(o),d(r)],[-x(a),d(r)],c),i.quad(_(n,s,a),_(n,s,o),_(n,r,o),_(n,r,a),Tn(e,1,0,0),[x(a),d(s)],[x(o),d(s)],[x(o),d(r)],[x(a),d(r)],c),f&&i.quad(_(t,r,a),_(n,r,a),_(n,r,o),_(t,r,o),[0,1,0],[x(t),x(a)],[x(n),x(a)],[x(n),x(o)],[x(t),x(o)],c)}var Vx=i=>"#"+i.map(e=>e.toString(16).padStart(2,"0")).join(""),xn=(...i)=>i.map(Vx),Yl=[{id:"kyiv",n:"\u041A\u0438\u0457\u0432",fac:["stalinka","stalinka","panel","modern"],pal:xn([232,212,176],[216,186,152],[240,228,204],[206,178,144],[226,202,172]),tree:"chestnut",lamp:"city",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","column"],sky:["motherland","belltower","tv"],ads:["\u0412\u0410\u0420\u0415\u041D\u0418\u041A\u0418","\u041A\u0418\u0407\u0412","\u041A\u0410\u0428\u0422\u0410\u041D","\u041C\u0415\u0422\u0420\u041E \u2192","\u041A\u0410\u0412\u0410","\u0410\u041F\u0422\u0415\u041A\u0410"],pool:["avenue","avenue","boulevard","street","park","construction"]},{id:"lviv",n:"\u041B\u044C\u0432\u0456\u0432",fac:["austro"],pal:xn([238,208,162],[200,222,212],[242,192,172],[222,204,232],[250,232,174],[192,212,232],[236,186,150]),tree:"linden",lamp:"lantern",tram:1,trolley:0,cobble:1,cafe:1,land:["opera","gothic","ratusha"],sky:["spires","ratusha","domes"],ads:["\u041A\u0410\u0412\u0410","\u041F\u041B\u042F\u0426\u041A\u0418","\u0428\u041E\u041A\u041E\u041B\u0410\u0414","\u041B\u0415\u0412","\u041A\u0420\u0415\u041C-\u0411\u0420\u042E\u041B\u0415","\u041F\u0418\u0412\u041E"],pool:["street","street","boulevard","park"]},{id:"odesa",n:"\u041E\u0434\u0435\u0441\u0430",fac:["classic","classic","panel"],pal:xn([242,216,160],[248,232,194],[230,200,152],[240,224,202],[234,208,178]),tree:"plane",lamp:"lantern",tram:1,trolley:1,cobble:1,cafe:1,land:["opera","statue"],sky:["cranes","lighthouse"],ads:["\u041F\u0420\u0418\u0412\u041E\u0417","\u0411\u0418\u0427\u041A\u0418","\u0428\u0410\u041B\u0410\u041D\u0414\u0418","\u041C\u041E\u0420\u0415 \u0422\u0410\u041C \u2192","\u0412\u0410\u041C \u041A\u0423\u0414\u0418?","\u041A\u0410\u0412\u0410"],pool:["boulevard","street","street","park"]},{id:"kharkiv",n:"\u0425\u0430\u0440\u043A\u0456\u0432",fac:["constructivist","stalinka","panel"],pal:xn([206,204,196],[218,210,194],[188,188,184],[230,218,194]),tree:"linden",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["gosprom","domes"],sky:["gosprom","belltower","wheel"],ads:["\u0413\u041E\u0421\u041F\u0420\u041E\u041C","\u041C\u0415\u0422\u0420\u041E \u2192","\u0421\u0422\u0423\u0414\u0415\u041D\u0422","\u0428\u0410\u0423\u0420\u041C\u0410","\u041A\u041D\u0418\u0413\u0418"],pool:["avenue","avenue","street","park","construction"]},{id:"dnipro",n:"\u0414\u043D\u0456\u043F\u0440\u043E",fac:["modern","panel","stalinka"],pal:xn([150,192,222],[202,204,210],[228,216,192],[132,172,212]),tree:"poplar",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["highrise","statue"],sky:["highrises","chimneys"],ads:["\u041D\u0410\u0411\u0415\u0420\u0415\u0416\u041D\u0410","\u041C\u0415\u0422\u0420\u041E \u2192","\u0414\u041D\u0406\u041F\u0420\u041E","\u0421\u0423\u0428\u0406"],pool:["avenue","avenue","street","construction","park"]},{id:"zaporizhzhia",n:"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F",fac:["panel","stalinka"],pal:xn([216,208,192],[202,192,172],[228,216,198]),tree:"poplar",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["statue"],sky:["chimneys","dam"],ads:["\u0425\u041E\u0420\u0422\u0418\u0426\u042F","\u0414\u041D\u0406\u041F\u0420\u041E\u0413\u0415\u0421","\u041C\u041E\u0422\u041E\u0420","\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418"],pool:["avenue","street","construction","park"]},{id:"vinnytsia",n:"\u0412\u0456\u043D\u043D\u0438\u0446\u044F",fac:["brick","classic","panel"],pal:xn([192,96,72],[238,216,172],[216,192,162]),tree:"chestnut",lamp:"lantern",tram:1,trolley:1,cobble:0,cafe:1,land:["watertower","domes"],sky:["watertower","domes"],ads:["\u0412\u0406\u041D\u041D\u0418\u0426\u042F","\u0424\u041E\u041D\u0422\u0410\u041D","\u041F\u041E\u0414\u0406\u041B\u041B\u042F","\u041A\u0410\u0412\u0410"],pool:["street","boulevard","park","avenue"]},{id:"mykolaiv",n:"\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432",fac:["classic","panel"],pal:xn([238,218,178],[228,206,172],[216,202,182]),tree:"plane",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["statue"],sky:["cranes"],ads:["\u0412\u0415\u0420\u0424","\u041C\u0418\u041A\u041E\u041B\u0410\u0407\u0412","\u0420\u0418\u0411\u0410","\u0410\u041F\u0422\u0415\u041A\u0410"],pool:["avenue","street","boulevard","park"]},{id:"zhytomyr",n:"\u0416\u0438\u0442\u043E\u043C\u0438\u0440",fac:["brick","classic","panel"],pal:xn([188,98,74],[234,216,182],[212,198,178]),tree:"linden",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["rocket","domes"],sky:["rocket","domes"],ads:["\u041A\u041E\u0421\u041C\u041E\u0421","\u0416\u0418\u0422\u041E\u041C\u0418\u0420","\u041A\u041E\u0420\u041E\u041B\u042C\u041E\u0412"],pool:["street","avenue","park"]},{id:"chernihiv",n:"\u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432",fac:["brick","panel","classic"],pal:xn([186,94,72],[234,222,198],[212,202,188]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","domes"],sky:["domes","domes"],ads:["\u0427\u0415\u0420\u041D\u0406\u0413\u0406\u0412","\u0412\u0410\u041B","\u0425\u041B\u0406\u0411"],pool:["street","boulevard","park"]},{id:"poltava",n:"\u041F\u043E\u043B\u0442\u0430\u0432\u0430",fac:["classic","classic","panel"],pal:xn([246,222,152],[248,238,208],[238,208,152]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:0,cafe:0,land:["column","domes"],sky:["column","domes"],ads:["\u0413\u0410\u041B\u0423\u0428\u041A\u0418","\u041F\u041E\u041B\u0422\u0410\u0412\u0410","\u041A\u0410\u0412\u0410"],pool:["boulevard","street","park"]},{id:"sumy",n:"\u0421\u0443\u043C\u0438",fac:["classic","brick","panel"],pal:xn([238,222,192],[192,102,82],[216,206,192]),tree:"linden",lamp:"city",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","statue"],sky:["domes"],ads:["\u0421\u0423\u041C\u0418","\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418"],pool:["street","avenue","park"]},{id:"lutsk",n:"\u041B\u0443\u0446\u044C\u043A",fac:["brick","austro","panel"],pal:xn([182,98,74],[232,212,182],[212,202,192]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:1,cafe:1,land:["castle","domes"],sky:["castle","domes"],ads:["\u041B\u0423\u0426\u042C\u041A","\u0417\u0410\u041C\u041E\u041A \u2192","\u041A\u0410\u0412\u0410"],pool:["street","street","park","boulevard"]},{id:"frankivsk",n:"\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A",fac:["austro","classic"],pal:xn([238,210,166],[208,224,214],[238,198,178],[224,208,234]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:1,cafe:1,land:["ratusha","domes"],sky:["ratusha","mountains"],ads:["\u0424\u0420\u0410\u041D\u0418\u041A","\u041A\u0410\u0412\u0410","\u041A\u0410\u0420\u041F\u0410\u0422\u0418 \u2192","\u0411\u0410\u041D\u041E\u0428"],pool:["street","street","boulevard","park"]}],Zl=Object.fromEntries(Yl.map(i=>[i.id,i])),Pa={street:{walk:5.8,bx:5.8,flo:0},avenue:{walk:8.6,bx:9,flo:2,park:!0},boulevard:{walk:5.8,bx:12.5,flo:0,alley:!0},park:{walk:5.8,bx:0},construction:{walk:5.8,bx:0}};function md(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1000003+1}var Se={cream:Pe("#efe4c8"),white:Pe("#f4f1ea"),stone:Pe("#a39a8c"),grey:Pe("#8a8a88"),dark:Pe("#4b4744"),green:Pe("#5f9d8c"),brick:Pe("#9a4b36"),red:Pe("#b8322a"),granite:Pe("#6e625a"),bronze:Pe("#4f5a3c"),blue:Pe("#3d5a8a"),concrete:Pe("#b9b6ae"),yellow:Pe("#e3b23c"),steel:Pe("#c9ccd1")},gd={},ki=(i,e)=>gd[i]||(gd[i]=e()),Gx=()=>ki("box",()=>new Dt(1,1,1)),Hx=(i=16)=>ki("cyl"+i,()=>new Xt(.5,.5,1,i)),Wx=(i=16)=>ki("cone"+i,()=>new na(.5,1,i)),Xx=()=>ki("sph",()=>new mn(.5,18,12)),qx=()=>ki("hemi",()=>new mn(.5,18,8,0,Math.PI*2,0,Math.PI/2)),Yx=()=>ki("onion",()=>{let i=[];for(let e=0;e<=16;e++){let t=e/16;i.push(new Ne(Math.max(.001,.5*Math.sin(Math.PI*Math.pow(t,.7))*(1-.3*t)),t*1.4))}return new sa(i,18)}),Zx=()=>ki("caps",()=>new bn(.5,1,4,10));function _d(i,e){let t=(n,s,r,a,o,c,l,h,f,u=0)=>n.geo(s,Ra(i,r,a,o,u,c,l,h),f);return{box:(n,s,r,a,o,c,l,h=e.det,f=0)=>t(h,Gx(),n,s+o/2,r,a,o,c,l,f),cyl:(n,s,r,a,o,c,l=e.det,h=16)=>t(l,Hx(h),n,s+o/2,r,a*2,o,a*2,c),cone:(n,s,r,a,o,c,l=e.det,h=16,f=0)=>t(l,Wx(h),n,s+o/2,r,a*2,o,a*2,c,f),sph:(n,s,r,a,o,c=e.det,l=1)=>t(c,Xx(),n,s,r,a*2,a*2*l,a*2,o),dome:(n,s,r,a,o,c=e.det,l=1)=>t(c,qx(),n,s,r,a*2,a*2*l,a*2,o),onion:(n,s,r,a,o,c=e.gold)=>t(c,Yx(),n,s,r,a*2,a*2,a*2,o),caps:(n,s,r,a,o,c,l=e.det,h=0)=>t(l,Zx(),n,s,r,a*2,o,a*2,c,h)}}function xd(i,e,t,n,s){let r=s||Se.white;i.box(e,0,t,16*n,12*n,10*n,r),i.box(e,0,t,10*n,12*n,16*n,r),i.box(e,12*n,t,16.4*n,.6*n,10.4*n,Se.cream),i.box(e,12*n,t,10.4*n,.6*n,16.4*n,Se.cream),i.cyl(e,12*n,t,3*n,6*n,r),i.onion(e,18*n,t,3.4*n,Se.yellow),i.box(e,22.3*n,t,.2*n,2.4*n,.2*n,Se.yellow,void 0),i.box(e,23.3*n,t,.2*n,.2*n,1.2*n,Se.yellow);for(let[a,o]of[[-5,-5],[5,-5],[-5,5],[5,5]])i.cyl(e+a*n,12*n,t+o*n,1.4*n,3*n,r),i.onion(e+a*n,15*n,t+o*n,1.7*n,Se.yellow);i.box(e-12*n,0,t,5*n,18*n,5*n,r),i.box(e-12*n,18*n,t,4*n,4*n,4*n,r),i.onion(e-12*n,22*n,t,2*n,Se.yellow)}function Jl(i,e,t,n,s,r,a){i.caps(e,t+1.5*s,n,.45*s,1.6*s,r,a),i.sph(e,t+2.75*s,n,.32*s,r,a),i.caps(e+.1*s,t+2.3*s,n+.55*s,.13*s,1.1*s,r,a),i.caps(e,t+1.8*s,n-.55*s,.13*s,.9*s,r,a)}function zh(i,e,t,n){let s=_d(e,n),r=-t;switch(i){case"opera":s.box(0,0,0,30,15,20,Se.cream),s.box(0,14.6,0,31,.8,21,Se.white),s.box(0,0,r*10.5,20,1.2,3,Se.stone),s.box(0,15,r*8.5,18,3,3,Se.cream);for(let a=0;a<8;a++)s.cyl(-10.5+a*3,1.2,r*10.6,.48,10,Se.white);s.box(0,11.2,r*10.6,24,1.2,1.4,Se.white);for(let a of[-13,13])Jl(s,a,15.4,r*8.5,1.4,Se.yellow,n.gold);s.cyl(0,15,0,6.3,1.2,Se.white),s.dome(0,16.2,0,6,Se.green),s.cyl(0,22,0,.35,2.6,Se.yellow,n.gold),Jl(s,0,24.2,0,1.2,Se.yellow,n.gold);break;case"gothic":s.box(0,0,-r*4,14,14,24,Se.stone),s.box(0,14,-r*4,.1,.1,.1,Se.dark),s.cone(0,14,-r*4,9.8,6,Se.dark,n.det,4,Math.PI/4);for(let a of[-5,5])s.box(a,0,r*8,4.4,28,4.4,Se.stone),s.cone(a,28,r*8,3,18,Se.dark,n.det,4,Math.PI/4),s.sph(a,46.3,r*8,.35,Se.yellow,n.gold);s.cyl(0,10,r*10.1,2.1,.2,Se.blue),s.box(0,0,r*10.1,2.6,4.5,.4,Se.dark);break;case"ratusha":s.box(0,0,0,24,13,22,Se.cream),s.box(0,12.8,0,25,.7,23,Se.white),s.box(0,13,0,5.5,20,5.5,Se.cream),s.box(0,33,0,6.4,.6,6.4,Se.white),s.cyl(0,33.6,0,2.6,2.5,Se.cream),s.cone(0,36,0,3.6,5.4,Se.green,n.det,8);for(let[a,o]of[[0,2.8],[0,-2.8],[2.8,0],[-2.8,0]])s.cyl(a,29.5,o,1.25,.1,Se.white);s.cyl(0,41.4,0,.08,5,Se.dark,n.metal,6),s.box(1.3,44.6,0,2.6,.8,.05,Se.yellow),s.box(1.3,45.4,0,2.6,.8,.05,Se.blue);break;case"domes":xd(s,0,0,1.1);break;case"column":s.box(0,0,0,9,1,9,Se.granite),s.box(0,1,0,5,5,5,Se.white),s.cyl(0,6,0,1.3,34,Se.white,n.det,20),s.cyl(0,40,0,2,1.5,Se.white),Jl(s,0,41.5,0,2.2,Se.yellow,n.gold);for(let a=0;a<4;a++)s.cyl(Math.cos(a*1.57)*7,0,Math.sin(a*1.57)*7,.4,3.5,Se.dark,n.metal,8);break;case"statue":s.box(0,0,0,7,.8,7,Se.granite),s.box(0,.8,0,3.4,4.5,3.4,Se.granite),s.box(0,5.3,0,3.8,.5,3.8,Se.granite),Jl(s,0,5.8,0,2.3,Se.bronze,n.metal);break;case"gosprom":for(let[a,o,c]of[[-26,18,26],[-8,16,44],[8,16,50],[26,18,30]]){s.box(a,0,0,o,c,18,Se.concrete);for(let l=3;l<c-2;l+=3.4)s.box(a,l,r*9.05,o-1,1.6,.2,Se.blue,n.glass)}s.box(0,20,r*2,52,3,4,Se.concrete),s.box(-17,14,r*2,4,3,4,Se.concrete),s.cyl(8,50,0,.25,12,Se.dark,n.metal,6);break;case"highrise":s.box(0,0,0,22,6,22,Se.grey),s.box(0,6,0,18,74,18,Se.blue,n.glass),s.box(0,80,0,19,1,19,Se.steel,n.metal);for(let a=9;a<80;a+=3)s.box(0,a,r*9.02,18.2,.25,.1,Se.steel,n.metal);s.cyl(0,81,0,.3,14,Se.steel,n.metal,6);break;case"watertower":s.box(0,0,0,7,24,7,Se.brick),s.box(0,24,0,8.5,6,8.5,Se.brick),s.box(0,30,0,9,.6,9,Se.white);for(let[a,o]of[[0,4.3],[0,-4.3],[4.3,0],[-4.3,0]])s.cyl(a,26.4,o,1.4,.1,Se.white);s.cone(0,30.6,0,5.8,6,Se.dark,n.det,4,Math.PI/4),s.cyl(0,36.6,0,.15,3,Se.yellow,n.gold,6);break;case"rocket":s.box(0,0,0,8,1.2,8,Se.granite);for(let a of[0,2.09,4.19])s.box(Math.cos(a)*2,1.2,Math.sin(a)*2,.5,9,.5,Se.steel,n.metal,a);s.cyl(0,6,0,1.4,16,Se.white),s.cone(0,22,0,1.4,5,Se.white),s.cyl(0,6,0,1.45,1.2,Se.red);for(let a of[0,1.57,3.14,4.71])s.box(Math.cos(a)*1.8,6,Math.sin(a)*1.8,.2,4,1.8,Se.white,n.det,a);break;case"castle":s.box(0,0,0,36,9,2,Se.brick),s.box(0,0,r*14,36,9,2,Se.brick),s.box(-18,0,r*7,2,9,14,Se.brick),s.box(18,0,r*7,2,9,14,Se.brick);for(let a=-17;a<=17;a+=2.4)s.box(a,9,0,1.2,1,2.2,Se.brick);for(let[a,o]of[[-18,22],[0,28],[18,18]])s.box(a,0,0,8,o,8,Se.brick),s.cone(a,o,0,6.2,6,Se.red,n.det,4,Math.PI/4);break}}function vd(i,e){let t=i.length;i.forEach((n,s)=>{let r=-.6+(s-(t-1)/2)*.95+s%2*.2,a=330,o=ms(Math.sin(r)*a,0,-Math.cos(r)*a,r+Math.PI/2),c={det:e,gold:e,glass:e,metal:e},l=_d(o,c),h=[1,1,1];switch(n){case"motherland":l.box(0,0,0,20,30,20,h),l.caps(0,62,0,5,50,h),l.sph(0,92,0,3,h),l.box(4,78,6,1.2,38,1.2,h,e,.2),l.cyl(-6,74,0,6,1.2,h);break;case"belltower":l.box(0,0,0,22,30,22,h),l.box(0,30,0,16,24,16,h),l.cyl(0,54,0,6,18,h),l.onion(0,72,0,7,h,e),l.cone(0,81,0,1,12,h);break;case"tv":l.cone(0,0,0,14,160,h,e,6),l.cyl(0,160,0,1,40,h),l.box(0,100,0,12,4,12,h);break;case"spires":for(let f of[-8,8])l.box(f,0,0,7,50,7,h),l.cone(f,50,0,5,32,h,e,4);l.box(0,0,18,18,28,30,h);break;case"ratusha":l.box(0,0,0,40,22,30,h),l.box(0,22,0,10,40,10,h),l.cone(0,62,0,7,12,h,e,8);break;case"domes":xd(l,0,0,2.2,h);break;case"cranes":for(let f of[-30,0,30])l.box(f,0,0,3,50,3,h),l.box(f+14,48,0,46,3,2,h,e,.15);break;case"lighthouse":l.cone(0,0,0,8,50,h,e,12),l.cyl(0,50,0,4,8,h),l.cone(0,58,0,4.5,4,h);break;case"gosprom":for(let[f,u]of[[-40,50],[-14,80],[14,90],[40,56]])l.box(f,0,0,24,u,24,h);break;case"wheel":{let f=ki("torus",()=>new rs(30,1.2,6,40));e.geo(f,Ra(o,0,36,0,Math.PI/2),h),l.box(0,0,0,2,36,6,h);for(let u=0;u<6;u++)l.box(0,36,0,.8,60,.8,h,e);break}case"highrises":for(let[f,u,p]of[[-50,110,22],[-20,150,26],[14,130,22],[46,90,30]])l.box(f,0,0,p,u,p,h);break;case"chimneys":for(let[f,u]of[[-30,110],[0,130],[28,100]])l.cone(f,0,0,6,u,h,e,12);l.box(0,0,20,90,30,30,h);break;case"dam":l.box(0,0,0,320,40,12,h);for(let f=-150;f<=150;f+=20)l.box(f,40,0,6,14,10,h);break;case"watertower":l.box(0,0,0,12,60,12,h),l.box(0,60,0,16,14,16,h),l.cone(0,74,0,11,14,h,e,4);break;case"rocket":l.cyl(0,0,0,5,60,h),l.cone(0,60,0,5,20,h);break;case"castle":for(let[f,u]of[[-40,40],[0,56],[40,34]])l.box(f,0,0,18,u,18,h),l.cone(f,u,0,13,14,h,e,4);l.box(0,0,0,90,22,8,h);break;case"column":l.cyl(0,0,0,3,90,h),l.caps(0,98,0,3,8,h);break;case"mountains":for(let[f,u,p]of[[-120,120,180],[0,160,220],[130,110,200]])l.cone(f,0,60,p/2,u,h,e,7);break}})}var yd=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i}),zi={mat:null,sky:null};async function Md(i){let e=window.UKH_ASSETS;if(!e||!e.materials)return!1;let t=[],n={},s={};for(let[a,o]of Object.entries(e.materials)){n[a]={tile:o.tile_m};for(let c of["c","n","r"])o[c]&&t.push(yd(o[c]).then(l=>{n[a][c]=l}))}for(let[a,o]of Object.entries(e.skies||{}))s[a]={sun:o.sun,sunCol:o.sunCol,hor:o.hor,elev:o.elev},t.push(yd(o.img).then(c=>{s[a].img=c}));let r=0;return t.forEach(a=>a.then(()=>{r++,i&&i(r/t.length)})),await Promise.all(t),delete window.UKH_ASSETS,zi.mat=n,zi.sky=s,!0}function Si(i,e,t){let n=document.createElement("canvas");return n.width=i,n.height=e,n.__st=new Error().stack,t&&t(n.getContext("2d"),i,e),n}function si(i,{srgb:e=!0,repeatU:t=!0,repeatV:n=!0,aniso:s=8}={}){let r=new jr(i);return r.colorSpace=e?Wt:Wn,r.wrapS=t?ts:gn,r.wrapT=n?ts:gn,r.minFilter=Vn,r.anisotropy=s,r}var Gh=7,mt=()=>(Gh=Gh*16807%2147483647)/2147483647;function Sd(i){Gh=i%2147483646+1}function Jx(i,e=2,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,a=Si(n,s),o=a.getContext("2d"),c=o.createImageData(n,s),l=c.data,h=(f,u)=>(t?(f=(f+n)%n,u=(u+s)%s):(f=Math.max(0,Math.min(n-1,f)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+f)*4]/255);for(let f=0;f<s;f++)for(let u=0;u<n;u++){let p=h(u+1,f-1)+2*h(u+1,f)+h(u+1,f+1)-(h(u-1,f-1)+2*h(u-1,f)+h(u-1,f+1)),_=h(u-1,f+1)+2*h(u,f+1)+h(u+1,f+1)-(h(u-1,f-1)+2*h(u,f-1)+h(u+1,f-1)),x=-p*e,d=_*e,m=1,v=Math.hypot(x,d,m);x/=v,d/=v,m/=v;let A=(f*n+u)*4;l[A]=(x*.5+.5)*255,l[A+1]=(d*.5+.5)*255,l[A+2]=(m*.5+.5)*255,l[A+3]=255}return o.putImageData(c,0,0),a}function Vh(i,e,t,n,s,r){if(e)for(let a=0;a<s;a++)for(let o=0;o<r;o++)i.drawImage(e,a*t/s,o*n/r,t/s+.5,n/r+.5)}function dr(i,e,t,n=null,s=1,r=1){let a={w:i,h:e,hb:parseInt(t.h.replace(/[^0-9,]/g,"").split(",")[0],10)};for(let o of["c","h","r","e"]){a[o]=Si(i,e),a[o].__k=o;let c=a[o].getContext("2d");c.fillStyle=t[o],c.fillRect(0,0,i,e),a[o+"g"]=c}return n&&n.c&&(a.photo=!0,Vh(a.cg,n.c,i,e,s,r),n.r&&Vh(a.rg,n.r,i,e,s,r),n.n&&(a.n=Si(i,e),Vh(a.n.getContext("2d"),n.n,i,e,s,r))),a.scale=o=>{for(let c of["c","h","r","e"])a[c+"g"].setTransform(o,0,0,o,0,0)},a.rect=(o,c,l,h,f)=>{for(let u of["c","h","r","e"])f[u]!=null&&(a[u+"g"].fillStyle=f[u],a[u+"g"].fillRect(o,c,l,h))},a.path=(o,c)=>{for(let l of["c","h","r","e"])if(c[l]!=null){let h=a[l+"g"];h.fillStyle=c[l],h.beginPath(),o(h),h.fill()}},a.noise=(o,c,l=2600,h=2)=>{if(a.photo)return;let f=a[o+"g"];for(let u=0;u<l;u++){let p=mt();f.fillStyle=`rgba(${p<.5?"0,0,0":"255,255,255"},${c*mt()})`,f.fillRect(mt()*i,mt()*e,h,h)}},a}var Ue=i=>`rgb(${i|0},${i|0},${i|0})`;function gs(i,{normal:e=2.2,srgbE:t=!0}={}){let n=Jx(i.h,e);if(i.n){let s=i.w,r=i.h.height,a=i.hg.getImageData(0,0,s,r).data,o=i.n.getContext("2d"),c=o.getImageData(0,0,s,r),l=n.getContext("2d").getImageData(0,0,s,r).data;for(let h=0;h<a.length;h+=4)a[h]!==i.hb&&(c.data[h]=l[h],c.data[h+1]=l[h+1],c.data[h+2]=l[h+2]);o.putImageData(c,0,0),n=i.n}return{map:si(i.c),normal:si(n,{srgb:!1}),rough:si(i.r,{srgb:!1}),emissive:si(i.e,{srgb:t})}}var xs=1;function bd(i){xs=i}var _s=i=>zi.mat&&zi.mat[i]||null,fr=(i,e)=>Math.max(1,Math.round(e/(i&&i.tile||e)));function Hh({cobble:i,rails:e,markings:t}){let n=_s(i?"cobble":"asphalt"),s=Math.round((n?1024:512)*xs),r=Math.round(s*.75),a=s/512,o=dr(s,r,{c:i?"#6f655b":"#4a4b4e",h:Ue(90),r:Ue(i?200:225),e:"#000"},n,fr(n,6.8),fr(n,5));if(i&&!n){let h=r/18;for(let f=0;f<18;f++){let u=f%2*9-9;for(;u<s;){let p=18+mt()*12,_=100+mt()*50|0,x=150+mt()*60;o.path(d=>d.roundRect(u+1.5,f*h+1.5,p-3,h-3,6),{c:`rgb(${_+12},${_+2},${_-10})`,h:Ue(x),r:Ue(150+mt()*60)}),o.path(d=>d.roundRect(u+5,f*h+4,p-10,h-9,5),{h:Ue(x+25)}),u+=p}}}else if(!i){o.noise("c",.25,26e3,2),o.noise("h",.5,3e4,1),o.noise("r",.3,9e3,3);for(let l=0;l<6;l++){let h=mt()*s,f=mt()*r;o.path(u=>u.ellipse(h,f,(20+mt()*50)*a,(8+mt()*20)*a,mt()*3,0,7),{c:"rgba(30,30,32,0.22)",r:Ue(150)})}for(let l=0;l<3;l++){let h=mt()*s;o.path(f=>{f.moveTo(h,0);for(let u=0;u<=r;u+=16*a)f.lineTo(h+Math.sin(u*.05+l)*10*a,u);f.lineTo(h+2*a,r),f.lineTo(h+2*a,0)},{c:"rgba(20,20,20,0.35)",h:Ue(70)})}if(t)for(let l of[-1.1,1.1]){let h=(l+3.4)/6.8*s;o.rect(h-3*a,0,6*a,r*.6,{c:"#dcdcd4",h:Ue(100),r:Ue(140)})}for(let l of[.6,6.2]){let h=l/6.8*s;o.rect(h-2.5*a,0,5*a,r,{c:"#d4d4cc",h:Ue(100),r:Ue(150)})}}if(e)for(let l of[-2.2,0,2.2])for(let h of[-.72,.72]){let f=(l+h+3.4)/6.8*s;o.rect(f-6*a,0,12*a,r,{c:"#3f3c3a",h:Ue(60),r:Ue(170)}),o.rect(f-2.5*a,0,5*a,r,{c:"#b9bcc0",h:Ue(140),r:Ue(55)})}let c=gs(o,{normal:i?3:1.4});for(let l of["map","normal","rough"])c[l].wrapS=gn;return c}function wd(i){let e=_s(i?"pavingOld":"paving"),t=Math.round((e?512:256)*xs),s=dr(t,t,{c:i?"#c3baac":"#b9b6b0",h:Ue(150),r:Ue(215),e:"#000"},e,fr(e,2),fr(e,2));if(!e){let r=i?4:8,a=t/r;for(let o=0;o<r;o++)for(let c=0;c<r;c++){let l=(i?175:182)+mt()*30|0;s.rect(o*a+2,c*a+2,a-4,a-4,{c:`rgb(${l+6},${l},${l-8})`,h:Ue(170+mt()*30)})}s.noise("c",.12,9e3,2),s.noise("h",.25,9e3,1)}return gs(s,{normal:2})}function Td(){let i=_s("grass"),e=Math.round((i?512:256)*xs),t=e,n=dr(e,t,{c:"#5d7f3a",h:Ue(120),r:Ue(240),e:"#000"},i,1,1);if(!i)for(let s=0;s<9e3;s++){let r=mt();n.rect(mt()*e,mt()*t,2,3,{c:r<.5?"#4b6d2e":"#6f9446",h:Ue(80+r*120)})}return gs(n,{normal:1.5})}var Ia={austro:{bw:1.9,fh:3.3},stalinka:{bw:2.4,fh:3.3},classic:{bw:2.2,fh:3.6},panel:{bw:2.6,fh:2.8},constructivist:{bw:3,fh:3.1},modern:{bw:1.6,fh:3},brick:{bw:1.9,fh:3.2}};function Ed(i){if(i==="modern"&&_s("tower"))return Kx();let e=Ia[i],t=_s(i==="brick"?"bricks":i==="panel"?"concrete":"plaster"),n=(t?128:96)*xs/96,s=96,r=Math.round(s*e.fh/e.bw),a=Math.round(s*4*n),o=Math.round(r*2*n),c=dr(a,o,{c:"#f2efe9",h:Ue(150),r:Ue(230),e:"#000"},t,fr(t,e.bw*4),fr(t,e.fh*2));if(c.scale(n),i==="brick"&&!t){let h=Math.round(o/7);for(let f=0;f<h;f++)for(let u=f%2*-6;u<a;u+=12){let p=170+mt()*60|0;c.rect(u+.5,f*7+.5,11,6,{c:`rgb(${p},${p-20},${p-30})`,h:Ue(165+mt()*25)})}}else i!=="modern"&&(c.noise("c",.07,14e3,2),c.noise("h",.18,12e3,2));let l=(h,f,u,p,_,x)=>{c.rect(h,f,u,p,{c:"#2c3a4c",h:Ue(70),r:Ue(35),e:_?mt()<.5?"#ffc977":"#ffe0a8":"#000"}),x&&c.rect(h+2,f+2,u*(.3+mt()*.3),p-4,{c:x,r:Ue(200),e:_?"#e8a05a":null}),c.rect(h+u*.08,f+3,u*.18,p-6,{c:"rgba(160,190,220,0.25)"})};for(let h=0;h<2;h++)for(let f=0;f<4;f++){let u=f*s,p=h*r,_=mt()<.55,x=mt()<.5?$x(["#e9e2d0","#d9c7a8","#c9d4dc","#b98b7a"]):null;if(i==="austro"||i==="brick"||i==="classic"||i==="stalinka"){let d=s*(i==="stalinka"?.46:i==="classic"?.44:.5),m=r*(i==="classic"?.6:.55),v=u+(s-d)/2,A=p+r*.2;i==="brick"?c.path(E=>{E.moveTo(v-6,A+2),E.arc(v+d/2,A+2,d/2+6,Math.PI,0),E.closePath()},{c:"#8c4a36",h:Ue(185)}):c.rect(v-8,A-16,d+16,9,{c:"#f8f5ee",h:Ue(220)}),i==="classic"&&c.path(E=>{E.moveTo(v-10,A-16),E.lineTo(v+d/2,A-34),E.lineTo(v+d+10,A-16),E.closePath()},{c:"#f8f5ee",h:Ue(225)}),c.rect(v-5,A-5,d+10,m+10,{c:"#fbf8f2",h:Ue(200),r:Ue(170)}),l(v,A,d,m,_,x),c.rect(v+d/2-2,A,4,m,{c:"#f4f1ea",h:Ue(190),r:Ue(170),e:"#000"}),c.rect(v,A+m*.36,d,4,{c:"#f4f1ea",h:Ue(190),r:Ue(170),e:"#000"}),c.rect(v-9,A+m+4,d+18,7,{c:"#e3ddd0",h:Ue(230)}),i==="stalinka"&&(c.rect(v-4,A+m+16,d+8,r*.12,{c:"#e9e3d6",h:Ue(185)}),c.rect(u,p+r-5,s,5,{h:Ue(110)}))}else if(i==="panel"){let d=s*.52,m=r*.46,v=u+(s-d)/2,A=p+r*.24;c.rect(u,p,2,r,{c:"#9c9a94",h:Ue(80)}),c.rect(u,p,s,2,{c:"#9c9a94",h:Ue(80)}),c.rect(v-3,A-3,d+6,m+6,{c:"#eeeeea",h:Ue(120),r:Ue(170)}),l(v,A,d,m,_,x),c.rect(v+d*.6,A,3,m,{c:"#eeeeea",e:"#000"}),f%2===1&&c.rect(u+4,A+m+6,s-8,r*.2,{c:"#d9d6cf",h:Ue(205)})}else if(i==="constructivist"){let d=p+r*.28,m=r*.42;l(u,d,s,m,_,x);for(let v=0;v<4;v++)c.rect(u+v*s/4,d,3,m,{c:"#e9e6df",h:Ue(190),r:Ue(170),e:"#000"});c.rect(u,d-4,s,4,{c:"#e9e6df",h:Ue(200)}),c.rect(u,d+m,s,5,{c:"#e9e6df",h:Ue(210)})}else i==="modern"&&(c.rect(u,p,s,r,{c:"#a8bccf",h:Ue(120),r:Ue(18),e:_&&mt()<.7?"#f3e6c8":"#000"}),c.rect(u+6,p+6,s*.3,r-20,{c:"rgba(255,255,255,0.18)"}),c.rect(u,p+r-14,s,14,{c:"#5f6b78",h:Ue(160),r:Ue(80),e:"#000"}),c.rect(u,p,3,r,{c:"#3a434d",h:Ue(185),r:Ue(60),e:"#000"}))}return{...gs(c,{normal:i==="modern"?.6:2.4}),bw:e.bw*4,fh:e.fh*2}}function $x(i){return i[mt()*i.length|0]}function Kx(){let i=_s("tower"),e=Math.round(1024*xs),t=dr(e,e,{c:"#888",h:Ue(150),r:Ue(60),e:"#000"},i,1,1),n=t.cg.getImageData(0,0,e,e).data,s=t.eg,r=s.getImageData(0,0,e,e),a=r.data,o=40,c=[];for(let l=0;l<o*o;l++)c.push(mt()<.45?mt()<.5?[255,205,140]:[255,232,190]:null);for(let l=0;l<e;l++)for(let h=0;h<e;h++){let f=(l*e+h)*4,u=n[f],p=n[f+1],_=n[f+2],x=.3*u+.59*p+.11*_,d=c[(l*o/e|0)*o+(h*o/e|0)];d&&x<110&&_>=u&&(a[f]=d[0],a[f+1]=d[1],a[f+2]=d[2])}return s.putImageData(r,0,0),{...gs(t,{normal:1}),bw:13,fh:13}}function Wh(i){let e=_s(i?"roofFlat":"roofTiles"),t=Math.round((e?512:256)*xs),s=dr(t,t,{c:i?"#6c6a66":"#a8492f",h:Ue(120),r:Ue(i?235:160),e:"#000"},e,1,1);if(e)return gs(s,{normal:2});if(i){s.noise("c",.3,2e4,2),s.noise("h",.5,2e4,2);for(let r=0;r<4;r++)s.rect(0,r*64,t,2,{c:"#56544f",h:Ue(170)})}else for(let r=0;r<10;r++)for(let a=0;a<11;a++){let o=a*24+r%2*12,c=r*26,l=mt();s.path(h=>{h.moveTo(o-12,c),h.lineTo(o+12,c),h.lineTo(o+12,c+20),h.arc(o,c+20,12,0,Math.PI),h.closePath()},{c:`rgb(${150+l*40|0},${62+l*18|0},${40+l*10|0})`,h:Ue(120+l*40)}),s.path(h=>{h.moveTo(o-8,c+2),h.lineTo(o+2,c+2),h.lineTo(o+2,c+24),h.lineTo(o-8,c+20),h.closePath()},{h:Ue(200)})}return gs(s,{normal:i?1.2:3})}function Ad(){return si(Si(128,32,(i,e,t)=>{i.fillStyle="#f5f5f5",i.fillRect(0,0,e,t),i.fillStyle="#d63028";for(let n=-t;n<e+t;n+=32)i.beginPath(),i.moveTo(n,t),i.lineTo(n+16,t),i.lineTo(n+16+t,0),i.lineTo(n+t,0),i.closePath(),i.fill()}))}function La(i,e,t,n=256,s=96){return si(Si(n,s,r=>{r.fillStyle=e,r.fillRect(0,0,n,s),r.fillStyle=t,r.font=`900 ${s*.55}px Rubik, system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,n/2,s/2+2)}),{repeatU:!1,repeatV:!1})}function Cd(){return si(Si(256,128,(i,e,t)=>{i.fillStyle="#eef0f2",i.fillRect(0,0,e,t),i.fillStyle="#2b3a4e";for(let n=0;n<5;n++)i.fillRect(10+n*49,22,40,40);i.fillStyle="#c9ced4",i.fillRect(0,92,e,6)}),{repeatU:!1,repeatV:!1})}function $l(){return si(Si(128,128,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}),{repeatU:!1,repeatV:!1})}function Rd(){return si(Si(8,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.4,"rgba(0,0,0,0.18)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}),{repeatU:!0,repeatV:!1})}function Pd(i){let r=Si(512,256,o=>{let c=["#7a1f1a","#1f4a36","#1d355f","#4b2a55","#5a3a1a","#1b1b1b","#6b5a18","#234a55"];for(let l=0;l<8;l++){let h=l%2*256,f=(l>>1)*64,u=i[l%i.length]||"\u041A\u0410\u0412\u0410";o.fillStyle=c[l],o.fillRect(h,f,256,64),o.strokeStyle="#e8c878",o.lineWidth=3,o.strokeRect(h+4,f+4,248,56),o.fillStyle="#f6e7b8",o.font=`800 ${u.length>9?26:34}px Rubik, system-ui, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(u,h+128,f+32+2)}});return{tex:si(r,{repeatU:!1,repeatV:!1}),uv:o=>{let c=o%2/2,l=1-((o>>1)+1)/4;return[c,l,c+.5,l+.25]}}}var Ua=50,jx=new er({depthPacking:dh}),vn=i=>new ei({roughness:.9,metalness:0,...i});function Nd(i){Sd(i.id.length*977+i.id.charCodeAt(0));let e=Hh({cobble:!!i.cobble,rails:!!i.tram,markings:!i.cobble}),t=Hh({cobble:!1,rails:!1,markings:!1}),n=wd(!!i.cobble),s=Td(),r=Wh(!1),a=Wh(!0),o=Pd(i.ads),c=[...new Set(i.fac.concat(["panel"]))],l={},h={};for(let u of c)l[u]=Ed(u),h[u]=vn({map:l[u].map,normalMap:l[u].normal,roughnessMap:l[u].rough,emissiveMap:l[u].emissive,emissive:"#ffffff",emissiveIntensity:0,vertexColors:!0,metalness:u==="modern"?.55:0,roughness:1});let f={fac:l,wall:h,signsUV:o.uv,road:vn({map:e.map,normalMap:e.normal,roughnessMap:e.rough,roughness:1}),asph:vn({map:t.map,normalMap:t.normal,roughnessMap:t.rough,roughness:1}),walk:vn({map:n.map,normalMap:n.normal,roughnessMap:n.rough,vertexColors:!0,roughness:1}),grass:vn({map:s.map,normalMap:s.normal,vertexColors:!0,roughness:1}),roofP:vn({map:r.map,normalMap:r.normal,roughnessMap:r.rough,vertexColors:!0,roughness:1,emissive:"#000000"}),roofF:vn({map:a.map,normalMap:a.normal,roughnessMap:a.rough,vertexColors:!0,roughness:1,emissive:"#000000"}),det:vn({vertexColors:!0,roughness:.82}),leaves:vn({vertexColors:!0,roughness:.95,emissive:"#000000"}),metal:vn({color:"#2a2c31",metalness:.7,roughness:.42}),gold:vn({vertexColors:!0,metalness:1,roughness:.28}),glass:vn({vertexColors:!0,color:"#9fb4c8",metalness:.6,roughness:.06}),lamp:vn({color:"#fff2c8",emissive:"#ffcf7a",emissiveIntensity:.3}),glow:new pn({map:$l(),color:"#ffbe6a",transparent:!0,opacity:0,blending:vi,depthWrite:!1}),ao:new pn({map:Rd(),color:"#000000",transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),sign:vn({map:o.tex,emissiveMap:o.tex,emissive:"#ffffff",emissiveIntensity:0,roughness:.5})};return f.ao.map.repeat.set(1,1),f.ao.color.set("#ffffff"),f.ao.blending=1,f}function Ud(i){let e=new Set,t=Object.values(i).concat(Object.values(i.wall));for(let n of t)if(n&&n.isMaterial){for(let s of["map","normalMap","roughnessMap","emissiveMap"])n[s]&&!e.has(n[s])&&(e.add(n[s]),n[s].dispose());n.dispose()}}function Fd(i,e){for(let n of Object.values(i.wall))n.emissiveIntensity=e.win;i.lamp.emissiveIntensity=e.lamp,i.sign.emissiveIntensity=e.night?.9:e.tod==="sunset"?.35:0,i.glow.opacity=e.glow,i.glow.visible=e.glow>0,i.road.color.set(e.wet?"#7c7c7c":"#ffffff"),i.road.roughness=e.wet?.32:1,i.asph.color.set(e.wet?"#6c6c6c":"#ffffff"),i.asph.roughness=e.wet?.28:1,i.walk.roughness=e.wet?.5:1;let t=e.snow?e.night?.12:.5:0;for(let n of[i.roofP,i.roofF,i.leaves])n.emissive.set(e.snow?"#dfe6ee":"#000000"),n.emissiveIntensity=t;i.road.emissive.set(e.snow?"#4c535b":"#000000"),i.walk.emissive.set(e.snow?"#6a727b":"#000000")}var Id={austro:{fl:[3,4],W:[6.5,10],gap:[.15,.35],D:10,roof:"pitch"},brick:{fl:[2,4],W:[8,13],gap:[.4,2.5],D:10,roof:"pitch"},classic:{fl:[2,3],W:[10,16],gap:[.3,1.5],D:12,roof:"flat"},stalinka:{fl:[6,8],W:[16,26],gap:[.3,2],D:14,roof:"flat"},panel:{fl:[5,9],W:[18,30],gap:[3,8],D:12,roof:"flat"},constructivist:{fl:[5,8],W:[18,28],gap:[1,4],D:14,roof:"flat"},modern:{fl:[12,20],W:[14,20],gap:[4,9],D:16,roof:"flat"}},Da=(i,e=1.12)=>i.map(t=>Math.min(1,t*e+.03)),Kl=(i,e=.62)=>i.map(t=>t*e);function pr(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Xh=(i,[e,t])=>e+i()*(t-e),Na=(()=>{let i=new ia(1,2),e=i.attributes.position,t=pr(99);for(let n=0;n<e.count;n++){let s=.82+t()*.3;e.setXYZ(n,e.getX(n)*s,e.getY(n)*s,e.getZ(n)*s)}return i.computeVertexNormals(),i})(),qh=new Xt(.5,.5,1,8),Ld=new Xt(.5,.5,1,12),e1=new Dt(1,1,1),Dd=new Xt(.35,.5,1,7);function Od(i,e,t,n){let s=e.fac,r={lantern:e.lamp==="lantern"},a={};for(let M of[-1,1]){let b=pr(n*31+(M+2)*7),g=[],y=b()*3;a[M]={list:g,r:b,next:()=>{let R=s[b()*s.length|0],S=Id[R],I=Ia[R].bw,D=Math.max(2,Math.round(Xh(b,S.W)/I)),G=D*I,L={s:y,W:G,fam:R,nb:D,floors:Math.round(Xh(b,S.fl)),pal:b()*1e3|0,seed:b()*1e9|0};g.push(L),y+=G+Xh(b,S.gap)},until(R){for(;!g.length||g[g.length-1].s<R;)this.next()}}}let o=M=>!M||M.type==="corner"||M.type==="square",c=(M,b=0)=>sn.some(g=>g.type==="corner"&&M+b>g.s-7&&M<g.e+7),l=M=>{let b=ps(M);return b?b.type==="square"?"square":b.type==="corner"?"corner":b.kind||"street":"street"};function h(M,b,g,y,R,S,I,D,G,L){for(let k=b;k<g;k+=1){let X=Math.min(k+1,g),C=Nt(k,y,S,{}),V=Nt(k,R,S,{}),U=Nt(X,R,S,{}),F=Nt(X,y,S,{}),H=L?0:y/D,Q=L?1:R/D;M.quad([C.wx,C.wy,C.wz],[V.wx,V.wy,V.wz],[U.wx,U.wy,U.wz],[F.wx,F.wy,F.wz],[0,1,0],[H,k/G],[Q,k/G],[Q,X/G],[H,X/G],I)}}function f(M,b,g,y,R,S){for(let I=b;I<g;I+=1){let D=Math.min(I+1,g),G=Nt(I,y,0,{}),L=Nt(D,y,0,{}),k=Xl(I,{}),X=Tn(ms(0,0,0,k.th),0,0,y>0?-1:1);M.quad([G.wx,G.wy,G.wz],[L.wx,L.wy,L.wz],[L.wx,L.wy+R,L.wz],[G.wx,G.wy+R,G.wz],X,[I/2,0],[D/2,0],[D/2,.07],[I/2,.07],S)}}let u=(M,b=0,g=0)=>{let y=Nt(M,b,g,{});return ms(y.wx,y.wy,y.wz,y.th)},p=(M,b,g,y,R,S,I,D,G,L,k=0)=>M.geo(b,Ra(g,y,R,S,k,I,D,G),L);function _(M,b,g,y,R,S=e.tree,I=Math.random){let D=S==="plane"?Pe("#9a9182"):Pe("#4f3b2a"),G=V=>Pe(V),L=[G("#3f6b2e"),G("#4d7a34"),G("#5a8a3a"),G("#46733a")][I()*4|0];if(S==="poplar"){p(M.det,Dd,b,g,1.5*R,y,.5*R,3*R,.5*R,D),p(M.leaves,Na,b,g,7*R,y,1.5*R,5.5*R,1.5*R,L);return}let k=S==="plane"?3.2:2.6;p(M.det,Dd,b,g,k*R/2,y,.55*R,k*R,.55*R,D);let X=S==="plane"?2.8:S==="linden"?2.1:2.4,C=S==="linden"?1.35:S==="plane"?.75:1;p(M.leaves,Na,b,g,(k+X*C*.8)*R,y,X*R,X*C*R,X*R,L),p(M.leaves,Na,b,g+.9*R,(k+X*C*1.2)*R,y+.5*R,X*.7*R,X*.7*C*R,X*.7*R,Da(L,1.08)),p(M.leaves,Na,b,g-1*R,(k+X*C*.9)*R,y-.6*R,X*.65*R,X*.65*C*R,X*.65*R,Kl(L,.9))}function x(M,b,g){let y=u(b,g),R=-Math.sign(g);r.lantern?(Ve(M.metal,y,-.12,.12,0,.5,-.12,.12,[1,1,1],1,1),Ve(M.metal,y,-.06,.06,0,3.9,-.06,.06,[1,1,1],1,1),Ve(M.metal,y,-.24,.24,4.55,4.68,-.24,.24,[1,1,1],1,1),Ve(M.metal,y,-.06,.06,4.68,4.9,-.06,.06,[1,1,1],1,1),Ve(M.lamp,y,-.17,.17,3.95,4.55,-.17,.17,[1,1,1],1,1)):(p(M.metal,qh,y,0,4,0,.16,8,.16,[1,1,1]),Ve(M.metal,y,-.05,.05,7.9,8,Math.min(0,R*1.7),Math.max(0,R*1.7),[1,1,1],1,1),Ve(M.lamp,y,-.18,.18,7.75,7.88,R*1.4-.32,R*1.4+.32,[1,1,1],1,1));let S=3.6,I=.16,D=R*(r.lantern?.9:1.4);M.glow.quad(Mi(y,-S,I,D-S),Mi(y,S,I,D-S),Mi(y,S,I,D+S),Mi(y,-S,I,D+S),[0,1,0],[0,0],[1,0],[1,1],[0,1],[1,1,1])}function d(M,b,g,y,R=5){let S=u(b,g*R,.14),I=y();if(I<.2){Ve(M.det,S,-.8,.8,.42,.5,-.22,.22,Pe("#7a5232"),1,1),Ve(M.det,S,-.8,.8,.5,.92,g*.2,g*.26,Pe("#7a5232"),1,1);for(let D of[-.7,.7])Ve(M.metal,S,D-.04,D+.04,0,.45,-.2,.2,[1,1,1],1,1)}else if(I<.34)Ve(M.det,S,-.45,.45,0,.55,-.35,.35,Pe("#8d8478"),1,1),p(M.leaves,Na,S,0,.75,0,.45,.3,.45,Pe(["#c0392b","#e67e22","#8e44ad","#d35480"][y()*4|0]));else if(I<.46)p(M.det,qh,S,0,.42,0,.45,.85,.45,Pe("#2f5d3a"));else if(I<.62&&e.cafe){let D=Pe(["#f4efe4","#b8322a","#2c4f86","#e7c25a"][y()*4|0]);Ve(M.metal,S,-.03,.03,0,2.25,-.03,.03,[1,1,1],1,1),p(M.det,Ld,S,0,.74,0,.75,.04,.75,Pe("#e8e2d6")),p(M.det,new Xt(0,1.5,.55,8),S,0,2.33,0,1,1,1,D);for(let G of[-.6,.6])Ve(M.det,S,G-.2,G+.2,.42,.46,-.2,.2,Pe("#3b2b20"),1,1),Ve(M.det,S,G+Math.sign(G)*.17,G+Math.sign(G)*.21,.46,.9,-.2,.2,Pe("#3b2b20"),1,1)}else I<.62?(Ve(M.det,S,-1.2,1.2,0,2.5,-.9,.9,Pe(["#e9e4d8","#c8d6e0","#f0d9a0"][y()*3|0]),1,1),Ve(M.glass,S,-1,1,.9,2.1,-g*.91-.01,-g*.91+.01,[1,1,1],1,1),Ve(M.det,S,-1.3,1.3,2.5,2.65,-1,1,Pe("#b8322a"),1,1)):I<.7&&(Ve(M.metal,S,-.04,.04,0,2.6,-.04,.04,[1,1,1],1,1),Ve(M.det,S,-.5,.5,2.3,2.6,-.03,.03,Pe("#1f4f8a"),1,1))}function m(M,b,g,y,R){let S=Pe(["#b8322a","#1f3f6e","#e8e8e4","#2b2b2e","#8a9096","#3d6b4a","#c9a227"][R()*7|0]);Ve(M.det,b,g-2.1,g+2.1,.32,1,y-.85,y+.85,S,1,1),Ve(M.glass,b,g-1.2,g+1,1,1.5,y-.78,y+.78,[.55,.6,.68],1,1),Ve(M.det,b,g-1.15,g+.95,1.5,1.56,y-.74,y+.74,S,1,1);for(let I of[-1.35,1.35])for(let D of[-.8,.8])Ve(M.det,b,g+I-.33,g+I+.33,.01,.66,y+D-.12,y+D+.12,Pe("#18181a"),1,1);for(let I of[-.55,.55])Ve(M.lamp,b,g+2.1,g+2.14,.72,.86,y+I-.16,y+I+.16,[1,1,1],1,1)}function v(M,b,g,y,R){let S=b.fam,I=Id[S],D=t.fac[S],G=Ia[S],L=G.fh,k=pr(b.seed),X=Math.max(2,b.floors+R),C=b.W,V=I.D,U=I.roof==="pitch",F=X*L+.4,H=b.s+C/2,Q=Xl(H,{}),he=g*(y+V/2),K=Nt(H,he,0,{}),J=ms(K.wx,K.wy,K.wz,Q.th),te=(ve,Re,Ae)=>Mi(J,ve,Re,Ae),ee=Pe(e.pal[b.pal%e.pal.length]),Z=Da(ee),ae=Kl(ee,.7),Xe=Pe("#f2efe9"),ye=S==="modern"?Da(ee,1):ee;Ve(M.wall[S],J,-C/2,C/2,-2.5,F,-V/2,V/2,ye,D.bw,D.fh,!1,0,-C/2);let Fe=-g*V/2,Oe=-g,Ee=(ve,Re,Ae,Ce,je,Mt,At,Gt,O=!0)=>{let Ft=Fe+Oe*Mt,nt=Fe+Oe*At;Ve(ve,J,Re,Ae,Ce,je,Math.min(Ft,nt),Math.max(Ft,nt),Gt,1,1,O)};if(M.ao.quad(te(-C/2,.15,Fe),te(C/2,.15,Fe),te(C/2,.15,Fe+Oe*1.3),te(-C/2,.15,Fe+Oe*1.3),[0,1,0],[0,1],[1,1],[1,0],[0,0],[1,1,1]),U){let Re=Math.min(4.2,V*.36),Ae=-C/2-.2,Ce=C/2+.2,je=-V/2-.35,Mt=V/2+.35,At=S==="brick"&&k()<.5?Pe("#7d8590"):[1,1,1];M.roofP.quad(te(Ae,F,je),te(Ce,F,je),te(Ce,F+Re,0),te(Ae,F+Re,0),Tn(J,0,.8,-.6),[Ae/3,0],[Ce/3,0],[Ce/3,1.9],[Ae/3,1.9],At),M.roofP.quad(te(Ae,F,Mt),te(Ce,F,Mt),te(Ce,F+Re,0),te(Ae,F+Re,0),Tn(J,0,.8,.6),[Ae/3,0],[Ce/3,0],[Ce/3,1.9],[Ae/3,1.9],At);for(let O of[-C/2,C/2])M.det.tri(te(O,F,-V/2),te(O,F,V/2),te(O,F+Re*.93,0),Tn(J,Math.sign(O),0,0),[0,0],[0,0],[0,0],ee);if(C>6.5){let O=-g*2.2;Ve(M.det,J,-.75,.75,F+.3,F+1.9,O-.7,O+.7,ee,1,1),Ve(M.glass,J,-.45,.45,F+.6,F+1.6,O+Oe*.71-.01,O+Oe*.71+.01,[1,1,1],1,1),Ve(M.roofP,J,-.9,.9,F+1.9,F+2.05,O-.85,O+.85,[1,1,1],1,1)}let Gt=Pe("#8a4a3a");for(let O=0,Ft=1+(k()<.5?1:0);O<Ft;O++){let nt=(k()-.5)*(C-2),st=g*k()*2;Ve(M.det,J,nt-.32,nt+.32,F+1,F+Re+.9,st-.32,st+.32,Gt,1,1),Ve(M.det,J,nt-.4,nt+.4,F+Re+.9,F+Re+1.05,st-.4,st+.4,Kl(Gt,.8),1,1)}}else{M.roofF.quad(te(-C/2,F,-V/2),te(C/2,F,-V/2),te(C/2,F,V/2),te(-C/2,F,V/2),[0,1,0],[0,0],[C/8,0],[C/8,V/8],[0,V/8],[1,1,1]);let ve=S==="modern"?Pe("#5f6b78"):Z;for(let[Re,Ae,Ce,je]of[[-C/2,C/2,-V/2,-V/2+.3],[-C/2,C/2,V/2-.3,V/2],[-C/2,-C/2+.3,-V/2,V/2],[C/2-.3,C/2,-V/2,V/2]])Ve(M.det,J,Re,Ae,F,F+.7,Ce,je,ve,1,1);for(let Re=0,Ae=1+(k()*3|0);Re<Ae;Re++){let Ce=(k()-.5)*(C-3),je=(k()-.5)*(V-3);Ve(M.det,J,Ce-.6,Ce+.6,F,F+.9,je-.45,je+.45,Pe("#c9c9c4"),1,1)}if(k()<.5&&p(M.det,Ld,J,(k()-.5)*(C-4),F+1.2,(k()-.5)*(V-4),1.8,2.4,1.8,Pe("#8a8580")),(S==="panel"||S==="modern")&&Ve(M.det,J,-2,2,F,F+2.6,-1.5,1.5,ve,1,1),k()<.4&&Ve(M.metal,J,.5,.58,F,F+5,.5,.58,[1,1,1],1,1),S==="stalinka"&&X>=7&&k()<.35){let Re=C/2-3;Ve(M.wall[S],J,Re-2.4,Re+2.4,F,F+L*1.6,-2.4,2.4,ee,D.bw,D.fh,!1,F,Re-2.4),Ve(M.det,J,Re-2.7,Re+2.7,F+L*1.6,F+L*1.6+.5,-2.7,2.7,Z,1,1),p(M.gold,new Xt(0,1.8,1,8),J,Re,F+L*1.6+4.5,0,1,8,1,Pe("#c9a440"))}}if(Ee(M.det,-C/2,C/2,-2,.65,0,.1,S==="brick"?Pe("#7a6a5c"):ae),S==="austro"||S==="classic"||S==="stalinka"||S==="brick"){for(let ve of[-C/2,C/2-.36])Ee(M.det,ve,ve+.36,.65,F-.3,0,.09,Z);for(let ve=1;ve<X;ve++)(ve===1||S!=="stalinka"||ve===X-1)&&Ee(M.det,-C/2-.04,C/2+.04,ve*L-.16,ve*L+.02,0,.16,Z);Ee(M.det,-C/2-.2,C/2+.2,F-.45,F,0,.42,Z),S==="stalinka"&&Ee(M.det,-C/2,C/2,.65,L,0,.06,Kl(ee,.85))}if(S==="constructivist"){let ve=(k()<.5?-1:1)*(C/2-2.2);Ee(M.glass,ve-1.4,ve+1.4,.6,F-.2,0,.5,[.8,.85,.9]),Ee(M.det,-C/2,C/2,F-.5,F,0,.3,Z)}if(S==="modern"){for(let ve=-C/2;ve<=C/2+.01;ve+=D.bw/2)Ee(M.metal,ve-.06,ve+.06,3,F,0,.25,[1,1,1],!1);Ee(M.glass,-C/2+.5,C/2-.5,.14,3,-.6,.01,[.7,.8,.88]),Ee(M.det,-C/2,C/2,2.9,3.3,0,.6,Pe("#5f6b78"))}let qe=G.bw;if(S==="panel")for(let ve=1;ve<X;ve++)for(let Re=1;Re<b.nb;Re+=2){let Ae=-C/2+Re*qe;Ee(M.det,Ae+.15,Ae+qe-.15,ve*L-.1,ve*L+1,0,1.1,Pe("#d6d3cc"))}else if(S!=="modern"&&S!=="constructivist")for(let ve=1;ve<X;ve++){if(k()>(ve===1?.55:.28))continue;let Re=1+(k()*(b.nb-2)|0),Ae=-C/2+Re*qe,Ce=Ae+qe*(k()<.3&&Re+2<b.nb?2:1),je=ve*L-.1;if(Ee(M.det,Ae-.05,Ce+.05,je,je+.16,0,.8,Pe("#b8b0a2")),S==="stalinka")Ee(M.det,Ae,Ce,je+.16,je+1,.68,.8,Z);else{Ee(M.metal,Ae,Ce,je+1,je+1.05,.74,.8,[1,1,1]);for(let Mt=Ae;Mt<=Ce+.01;Mt+=.24)Ee(M.metal,Mt-.018,Mt+.018,je+.16,je+1,.75,.79,[1,1,1],!1)}}if(S!=="modern")for(let ve=0;ve<b.nb;ve+=2+(k()*2|0)){let Re=-C/2+ve*qe+.3,Ae=Math.min(C/2-.3,Re+qe*2-.6);if(!(Ae-Re<1.2))if(k()<.6){Ee(M.glass,Re,Ae,.15,2.5,0,.04,[.85,.9,1]),Ee(M.det,Re-.1,Ae+.1,2.5,2.62,0,.1,Pe("#3b2b20"));let Ce=t.signsUV(k()*8|0),je=2.66,Mt=3.1,At=Fe+Oe*.09,Gt=Tn(J,0,0,Oe);if(M.sign.quad(te(Re,je,At),te(Ae,je,At),te(Ae,Mt,At),te(Re,Mt,At),Gt,g>0?[Ce[2],Ce[1]]:[Ce[0],Ce[1]],g>0?[Ce[0],Ce[1]]:[Ce[2],Ce[1]],g>0?[Ce[0],Ce[3]]:[Ce[2],Ce[3]],g>0?[Ce[2],Ce[3]]:[Ce[0],Ce[3]],[1,1,1]),e.cafe&&k()<.5){let O=Pe(["#b8322a","#2f6f4f","#2c4f86","#7a3b6e","#c77a1e"][k()*5|0]),Ft=3.2,nt=2.55,st=1.3;M.det.quad(te(Re,Ft,Fe),te(Ae,Ft,Fe),te(Ae,nt,Fe+Oe*st),te(Re,nt,Fe+Oe*st),Tn(J,0,.9,Oe*.45),[0,0],[0,0],[0,0],[0,0],O),M.det.quad(te(Re,nt,Fe+Oe*st),te(Ae,nt,Fe+Oe*st),te(Ae,nt-.25,Fe+Oe*st),te(Re,nt-.25,Fe+Oe*st),Tn(J,0,0,Oe),[0,0],[0,0],[0,0],[0,0],Da(O))}}else{let Ce=(Re+Ae)/2;Ee(M.det,Ce-.6,Ce+.6,.14,2.45,0,.06,Pe("#4a3020")),Ee(M.det,Ce-.78,Ce+.78,2.45,2.7,0,.14,Z),Ee(M.det,Ce-.8,Ce+.8,0,.28,0,.45,Pe("#8f877c"))}}}function A(M){let b=M*Ua,g=b+Ua,y=new It,R=pr(n*7919+M*131+13),S={road:new Ut,asph:new Ut,walk:new Ut,grass:new Ut,roofP:new Ut,roofF:new Ut,det:new Ut,leaves:new Ut,metal:new Ut,gold:new Ut,glass:new Ut,lamp:new Ut,glow:new Ut,ao:new Ut,sign:new Ut,wall:{}};for(let C of Object.keys(t.wall))S.wall[C]=new Ut;let I=[1,1,1],D=Pe("#8f8579"),G=Pe("#8a7a62"),L=[1,1,1];h(S.road,b,g,-3.4,3.4,0,I,6.8,5,!0);for(let C=b;C<g;){let V=ps(C)||{e:g,type:"street",kind:"street"},U=Math.min(V.e,g),F=V.type==="square"?"square":V.kind||"street";for(let H of[-1,1]){if(V.type==="corner"&&H===-V.dir)continue;let Q=(he,K,J,te,ee,Z=2,ae=2)=>h(te,C,U,H>0?he:-K,H>0?K:-he,J,ee,Z,ae,!1);if(V.type==="corner"){Q(3.4,9,.14,S.walk,I),f(S.walk,C,U,H*3.4,.14,Pe("#d8d2c6"));continue}if(F==="square"){Q(3.4,34,.14,S.walk,I),f(S.walk,C,U,H*3.4,.14,Pe("#d8d2c6"));continue}F==="avenue"?(Q(3.4,5.8,.02,S.asph,I,6.8,5),Q(5.8,9,.16,S.walk,I),f(S.walk,C,U,H*5.8,.16,Pe("#d8d2c6")),Q(9,32,.15,S.walk,D)):(Q(3.4,5.8,.14,S.walk,I),f(S.walk,C,U,H*3.4,.14,Pe("#d8d2c6"))),F==="street"&&Q(5.8,30,.13,S.walk,D),F==="boulevard"&&(Q(5.8,9.4,.13,S.grass,L,3,3),Q(9.4,12.5,.14,S.walk,I),Q(12.5,32,.13,S.walk,D)),F==="park"&&Q(5.8,40,.13,S.grass,L,3,3),F==="construction"&&Q(5.8,40,.12,S.walk,G)}C=U}for(let C of[-1,1]){let V=a[C];V.until(g+40);for(let U of V.list){if(U.s<b||U.s>=g)continue;let F=l(U.s),H=l(U.s+U.W),Q=l(U.s+U.W/2);F!==H||F!==Q||!Pa[F]||!Pa[F].bx||c(U.s,U.W)||v(S,U,C,Pa[F].bx,Pa[F].flo||0)}}for(let C=Math.ceil(b/2)*2;C<g;C+=2){let V=ps(C);if(!V||V.type==="corner"||c(C))continue;let U=V.type==="square"?"square":V.kind||"street",F=Math.round(C)%8===0;for(let H of[-1,1]){if(U==="avenue"&&Math.round(C)%9===(H>0?0:4)){let Q=u(C);_(S,Q,0,H*7.2,1.05,e.tree,R),Ve(S.det,Q,-.7,.7,.15,.19,H*7.2-.7,H*7.2+.7,Pe("#5a4a3a"),1,1)}if(U==="avenue"&&Math.round(C)%7===(H>0?1:4)&&R()<.6&&m(S,u(C),0,H*4.6,R),U==="boulevard"&&F&&_(S,u(C+(H>0?0:4)),0,H*7.6,1.1,e.tree,R),U==="boulevard"&&Math.round(C)%16===(H>0?6:14)&&d(S,C,H,R,10.9),U==="park"&&Math.round(C)%6===(H>0?0:3))for(let Q=0;Q<2;Q++)_(S,u(C+R()*4),0,H*(9+R()*22),.9+R()*.4,R()<.3?"chestnut":e.tree,R);if(U==="park"&&Math.round(C)%2===0){let Q=u(C);Ve(S.metal,Q,-1,1,.9,.96,H*6.1-.03,H*6.1+.03,I,1,1),Ve(S.metal,Q,-.04,.04,.13,1,H*6.1-.04,H*6.1+.04,I,1,1)}if(U==="construction"&&Math.round(C)%2===0){let Q=u(C);Ve(S.det,Q,-1,1,.12,2.3,H*6.1-.04,H*6.1+.04,Math.round(C)%12<2?Pe("#c94b2c"):Pe("#5e7a5a"),1,1)}(U==="street"||U==="avenue")&&Math.round(C)%10===(H>0?3:8)&&R()<.55&&d(S,C,H,R,U==="avenue"?8.2:5)}}for(let C of sn)if(!(C.kind!=="construction"||C.type==="corner"||C.type==="square"||C.s+10<b||C.s+10>=g))for(let V of[-1,1]){if(C.e-C.s<40)continue;let U=u(C.s+24,V*18),F=pr(C.s*3+V),H=3+(F()*4|0),Q=Pe("#b5b1a8");for(let he=0;he<=H;he++)Ve(S.det,U,-12,12,he*3.2,he*3.2+.3,-6,6,Q,1,1);for(let he=-12;he<=12;he+=6)for(let K of[-6,0,6])Ve(S.det,U,he-.2,he+.2,0,H*3.2,K-.2,K+.2,Q,1,1);if(V>0){let te=Pe("#e3b23c");for(let ee=0;ee<34;ee+=2)Ve(S.det,U,0-.9,0+.9,ee,ee+.12,10-.9,10+.9,te,1,1);for(let[ee,Z]of[[-.85,-.85],[.85,-.85],[-.85,.85],[.85,.85]])Ve(S.det,U,0+ee-.1,0+ee+.1,0,34,10+Z-.1,10+Z+.1,te,1,1);Ve(S.det,U,-8,26,34,34+1.4,10-.6,10+.6,te,1,1),Ve(S.det,U,-8,-4,34-1.6,34,9,11,Pe("#777"),1,1),Ve(S.det,U,0-1.2,0+1.2,34-2.6,34,10-1.2,10+1.2,Pe("#d9d4c4"),1,1),Ve(S.metal,U,18,0+18.06,20,34,10-.03,10+.03,I,1,1),Ve(S.det,U,0+17.2,0+18.8,19,20,10-.6,10+.6,Pe("#8a5a3a"),1,1)}}let k=14;for(let C=Math.ceil(b/k)*k;C<g;C+=k){let V=ps(C);if(!V||V.type==="corner")continue;let U=V.type==="square"?"square":V.kind||"street",F=U==="avenue"?6.2:3.9;x(S,C,-F),x(S,C+k/2,F)}if(e.tram||e.trolley){let C=e.tram?[0]:[-.35,.35];for(let V=b;V<g;V++)for(let U of C){let F=Nt(V,U,6.6,{}),H=Nt(V+1,U,6.6,{}),Q=Tn(ms(0,0,0,F.th),0,0,.009);S.metal.quad([F.wx-Q[0],F.wy,F.wz-Q[2]],[F.wx+Q[0],F.wy,F.wz+Q[2]],[H.wx+Q[0],H.wy,H.wz+Q[2]],[H.wx-Q[0],H.wy,H.wz-Q[2]],[0,-1,0],[0,0],[0,0],[0,0],[0,0],I)}for(let V=Math.ceil(b/28)*28+3;V<g;V+=28){let U=ps(V);if(o(U)||c(V))continue;let F=U.kind||"street",H=F==="avenue"?5.6:5.55,Q=u(V);for(let he of[-1,1])p(S.metal,qh,Q,0,3.5,he*H,.2,7,.2,I);Ve(S.metal,Q,-.01,.01,6.6,6.63,-H,H,I,1,1)}}for(let C of sn){if(C.type!=="corner"||C.s<b||C.s>=g)continue;let V=u(C.s),U=(ee,Z,ae)=>Mi(V,ee,Z,ae),F=-C.dir,H=[0,1,0],Q=(ee,Z,ae,Xe,ye,Fe,Oe)=>ee.quad(U(Z,Fe,Xe),U(ae,Fe,Xe),U(ae,Fe,ye),U(Z,Fe,ye),H,[Xe/2,Z/2],[Xe/2,ae/2],[ye/2,ae/2],[ye/2,Z/2],Oe);S.road.quad(U(0,-.02,-3.4),U(48,-.02,-3.4),U(48,-.02,3.4),U(0,-.02,3.4),H,[0,0],[0,9.6],[1,9.6],[1,0],I),Q(S.walk,-6,48,F*3.4,F*5.8,.14,I),Q(S.walk,-6,48,F*5.8,F*18,.13,D),Q(S.walk,-6,2*ds-10,C.dir*3.4,C.dir*16,-.05,D),Q(S.walk,2*ds-10,48,C.dir*3.4,C.dir*5.8,.14,I),Q(S.walk,2*ds-10,48,C.dir*5.8,C.dir*16,.13,D);let he=e.fac[0],K=t.fac[he],J=Ia[he].fh,te=pr(C.s|0);for(let ee=4;ee<46;ee+=8.4){let Z=Pe(e.pal[te()*e.pal.length|0]),ae=J*(3+(te()*2|0));Ve(S.wall[he],V,ee,ee+8,-2,ae,-C.dir*15,-C.dir*6,Z,K.bw,K.fh,!1,0,ee),Ve(S.det,V,ee-.1,ee+8.1,ae-.4,ae,-C.dir*6.35,-C.dir*6,Da(Z),1,1),S.roofF.quad(U(ee,ae,-C.dir*15),U(ee+8,ae,-C.dir*15),U(ee+8,ae,-C.dir*6),U(ee,ae,-C.dir*6),H,[0,0],[1,0],[1,1],[0,1],I)}for(let ee=2*ds+4;ee<46;ee+=8.4){let Z=Pe(e.pal[te()*e.pal.length|0]),ae=J*3;Ve(S.wall[he],V,ee,ee+8,-2,ae,C.dir*6,C.dir*15,Z,K.bw,K.fh,!0,0,ee)}_(S,V,6,C.dir*9,1.1,e.tree,te),_(S,V,12,C.dir*11,.9,e.tree,te)}for(let C of sn){if(C.type!=="square"||C.s<b||C.s>=g)continue;let V=e.land,U=[[40,-22],[45,22],[98,-22]];V.forEach((F,H)=>{let[Q,he]=U[H];zh(F,u(C.s+Q,he),Math.sign(he),S)}),V.length<3&&zh("statue",u(C.s+92,16),1,S)}for(let C=Math.ceil(b/12)*12;C<g;C+=12){let V=ps(C);if(!V||V.type!=="square"||C<V.s+6||C>V.e-6)continue;let U=u(C,0,.14),F=[[40,-1],[45,1],[98,-1],[92,1]].slice(0,Math.max(e.land.length,2)+(e.land.length<3?1:0));for(let H of[-1,1])F.some(([Q,he])=>he===H&&Math.abs(C-(V.s+Q))<30)||(_(S,U,0,H*8.5,1+R()*.25,e.tree,R),R()<.5&&d(S,C+4,H,R,6.5))}let X=[["road",t.road,0,1],["asph",t.asph,0,1],["walk",t.walk,0,1],["grass",t.grass,0,1],["roofP",t.roofP,1,1],["roofF",t.roofF,1,1],["det",t.det,1,1],["leaves",t.leaves,1,1],["metal",t.metal,1,0],["gold",t.gold,1,0],["glass",t.glass,0,0],["lamp",t.lamp,0,0],["sign",t.sign,0,0],["ao",t.ao,0,0],["glow",t.glow,0,0]];for(let C of Object.keys(S.wall))X.push([null,t.wall[C],1,1,S.wall[C]]);for(let[C,V,U,F,H]of X){let Q=(H||S[C]).build();if(!Q)continue;let he=new pt(Q,V);he.castShadow=!!U,he.receiveShadow=!!F,U&&(he.customDepthMaterial=jx),(V===t.glow||V===t.ao)&&(he.renderOrder=1),y.add(he)}return i.add(y),y}function E(M){M.traverse(b=>{b.isMesh&&b.geometry.dispose()}),i.remove(M)}return{buildChunk:A,disposeChunk:E}}var Fa=class i extends pt{constructor(){let e=i.SkyShader,t=new zt({name:e.name,uniforms:Xn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:qt,depthWrite:!1});super(new Dt(1,1,1),t),this.isSky=!0}};Fa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new z},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var mr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ev=new as(-1,1,1,-1,0,1),Yh=class extends bt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},tv=new Yh,Vi=class{constructor(e){this._mesh=new pt(tv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ev)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ql=class extends En{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xn.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Oa=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},jl=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ec=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ql(mr),this.copyPass.material.blending=xi,this.timer=new ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Oa!==void 0&&(a instanceof Oa?n=!0:a instanceof jl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var tc=class extends En{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Bd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var gr=class i extends En{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(r,a,{type:Yt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Lt(r,a,{type:Yt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Lt(r,a,{type:Yt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Bd;this.highPassUniforms=Xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xn.clone(mr.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new pn,this._fsQuad=new Vi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new zt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};gr.BlurDirectionX=new Ne(1,0);gr.BlurDirectionY=new Ne(0,1);var Ba={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var nc=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=Xn.clone(Ba.uniforms),this.material=new js({name:Ba.name,uniforms:this.uniforms,vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader}),this._fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===da?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $h={day:["\u0414\u0435\u043D\u044C","\u2600\uFE0F"],sunset:["\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F","\u{1F307}"],night:["\u041D\u0456\u0447","\u{1F319}"]},ic={clear:["\u042F\u0441\u043D\u043E","\u{1F324}\uFE0F"],rain:["\u0414\u043E\u0449","\u{1F327}\uFE0F"],storm:["\u0413\u0440\u043E\u0437\u0430","\u26C8\uFE0F"],snow:["\u0421\u043D\u0456\u0433","\u{1F328}\uFE0F"],fog:["\u0422\u0443\u043C\u0430\u043D","\u{1F32B}\uFE0F"]},vs=["ultra","high","medium","low"],sc={ultra:"\u0423\u043B\u044C\u0442\u0440\u0430",high:"\u0412\u0438\u0441\u043E\u043A\u0456",medium:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456",low:"\u041D\u0438\u0437\u044C\u043A\u0456"},nv={day:{dir:[-.45,.8,.42],sunCol:"#fff3e0",sunI:3.2,hemiSky:"#cfe3ff",hemiGround:"#7a6650",hemiI:.45,envI:1,fog:"#bcd0e2",win:0,lamp:.3,top:"#5f9fd8",hor:"#cfe1ee",turb:2.6,ray:1.1,mie:.004,gain:1},sunset:{dir:[-.82,.12,.56],sunCol:"#ffa65e",sunI:2.8,hemiSky:"#f3c7a6",hemiGround:"#4f3a36",hemiI:.4,envI:.9,fog:"#e2aa84",win:.7,lamp:1.4,top:"#3a4f86",hor:"#e9a77c",turb:6,ray:2.6,mie:.006,gain:1},night:{dir:[.35,.6,-.7],sunCol:"#a9bbff",sunI:.42,hemiSky:"#3c4c7c",hemiGround:"#141420",hemiI:.3,envI:.35,fog:"#141b33",win:1.6,lamp:3.2,top:"#050a1c",hor:"#1c2748"}},iv={clear:{tint:null,mix:0,sun:1,dens:.0055,cover:.32,cden:.35,drops:0},rain:{tint:"#7c8693",mix:.62,sun:.28,dens:.011,cover:.85,cden:.85,drops:1e3,gain:.6},storm:{tint:"#4a525e",mix:.82,sun:.12,dens:.015,cover:.97,cden:1,drops:1600,gain:.38},snow:{tint:"#cfd6df",mix:.55,sun:.42,dens:.013,cover:.85,cden:.7,drops:0,snow:!0,gain:.8},fog:{tint:"#c2c7cd",mix:.8,sun:.3,dens:.034,cover:.7,cden:.6,drops:0,gain:.75}},Zh=1600,Jh=1600,Ct={x:22,y0:-3,y1:20,z:22},_r=(i,e,t)=>{let n=t-e;return i<e?i+n*Math.ceil((e-i)/n):i>=t?i-n*Math.ceil((i-t+1e-6)/n):i};function kd(i,e,t){i.outputColorSpace=Wt,i.toneMapping=cs,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=os;let n=Math.random,s={bakeGain:.05,tod:"day",wx:"clear",tier:"high",sunDir:new z(-.45,.8,.42).normalize(),flash:0,nextBolt:6,camVel:{x:0,y:0,z:0},onThunder:null,state:{}};e.fog=new Xr("#bcd0e2",.0055);let r=new aa("#cfe3ff","#7a6650",.45);e.add(r);let a=new nr("#fff3e0",3.2);e.add(a),e.add(a.target),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:200}),a.shadow.bias=-4e-4,a.shadow.normalBias=.05;let o=new nr("#9ec4ff",.25);e.add(o),e.add(o.target);let c=new ca("#ffd49a",0,16,1.4);e.add(c),Object.assign(s,{hemi:r,sun:a,fill:o,near:c});let h=(()=>{let J=new Fa;return J.scale.setScalar(420),J})();h.material.uniforms.skyGain={value:1},h.material.fragmentShader=`uniform float skyGain;
`+h.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( texColor * skyGain, 1.0 );"),h.material.fog=!1,h.renderOrder=-3,h.frustumCulled=!1,e.add(h);let f=new mn(400,32,16),u=new pn({vertexColors:!0,side:qt,fog:!1,depthWrite:!1}),p=new pt(f,u);p.renderOrder=-3,p.frustumCulled=!1,e.add(p);let _=$l(),x=new pt(new ss(9,24),new pn({map:_,color:"#e6ecff",fog:!1,transparent:!0,depthWrite:!1,blending:vi}));x.renderOrder=-2,e.add(x);let d=new bt,m=new Float32Array(600*3);for(let J=0;J<600;J++){let te=n()*Math.PI*2,ee=.05+n()*1.45,Z=380;m.set([Math.cos(te)*Math.cos(ee)*Z,Math.sin(ee)*Z,Math.sin(te)*Math.cos(ee)*Z],J*3)}d.setAttribute("position",new hn(m,3));let v=new Qs(d,new is({color:"#ffffff",size:1.5,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9,depthWrite:!1}));v.renderOrder=-2,v.frustumCulled=!1,e.add(v);function A(J,te,ee=.12){let Z=f.attributes.position,ae=new Float32Array(Z.count*3),Xe=new z,ye=new ke,Fe=s.sunDir;for(let Oe=0;Oe<Z.count;Oe++){Xe.fromBufferAttribute(Z,Oe).normalize(),ye.copy(te).lerp(J,Math.pow(Math.max(0,Xe.y),.5)),Xe.y<0&&ye.copy(te).multiplyScalar(.7);let Ee=Math.pow(Math.max(0,Xe.dot(Fe)),6)*ee;ye.r+=Ee*.6,ye.g+=Ee*.7,ye.b+=Ee,ae.set([ye.r,ye.g,ye.b],Oe*3)}f.setAttribute("color",new hn(ae,3))}let E=new hr(i),M=new ns,b=new pt(h.geometry,h.material);b.scale.setScalar(100),M.add(b);let g=new pt(f,u);g.scale.setScalar(.25),M.add(g);let y=null,R={};function S(){if(s.photo){let ae=E.fromEquirectangular(s.photo);y&&y.dispose(),y=ae,e.environment=ae.texture;return}b.visible=!!s.phys,g.visible=!s.phys;let J=h.material.uniforms,te=J.skyGain.value,ee=J.showSunDisc.value;J.skyGain.value=te*s.bakeGain,J.showSunDisc.value=0;let Z=E.fromScene(M,0,.5,500);J.skyGain.value=te,J.showSunDisc.value=ee,y&&y.dispose(),y=Z,e.environment=Z.texture}let I=new Float32Array(Zh*3),D=new Float32Array(Zh*6);for(let J=0;J<Zh;J++)I.set([(n()*2-1)*Ct.x,Ct.y0+n()*(Ct.y1-Ct.y0),(n()*2-1)*Ct.z],J*3);let G=new bt;G.setAttribute("position",new hn(D,3).setUsage(Ul));let L=new Kr(G,new Ks({color:"#c3cfdc",transparent:!0,opacity:.45,depthWrite:!1}));L.frustumCulled=!1,L.visible=!1,e.add(L);let k=new Float32Array(Jh*3);for(let J=0;J<Jh;J++)k.set([(n()*2-1)*Ct.x,Ct.y0+n()*(Ct.y1-Ct.y0),(n()*2-1)*Ct.z],J*3);let X=new bt;X.setAttribute("position",new hn(k,3).setUsage(Ul));let C=new Qs(X,new is({color:"#ffffff",map:_,size:.16,transparent:!0,depthWrite:!1,opacity:.95}));C.frustumCulled=!1,C.visible=!1,e.add(C);let V=0,U=.45,F=1,H=1,Q=null,he=null;function K(){let J=i.getDrawingBufferSize(new Ne),te=new Lt(J.x,J.y,{type:Yt,samples:4});Q=new ec(i,te),Q.addPass(new tc(e,t)),he=new gr(new Ne(J.x/2,J.y/2),.3,.4,2.5),Q.addPass(he),Q.addPass(new nc)}return s.apply=function(J,te){J&&(s.tod=J),te&&(s.wx=te);let ee=nv[s.tod],Z=iv[s.wx],ae=s.tod==="night",Xe=ae?.2:s.tod==="sunset"?.65:1,ye=Z.tint?new ke(Z.tint).multiplyScalar(Xe):null,Fe=qe=>{let ve=new ke(qe);return ye&&ve.lerp(ye,Z.mix),ve};s.sunDir.set(...ee.dir).normalize(),e.fog.color.copy(Fe(ee.fog)),e.fog.density=Z.dens*(ae&&s.wx==="clear"?1.2:1);let Oe=!ae&&Z.mix<.5;if(s.phys=Oe,h.visible=Oe,p.visible=!Oe,v.visible=ae&&Z.mix<.5,x.visible=ae&&Z.mix<.6,Oe){let qe=h.material.uniforms;qe.turbidity.value=ee.turb+Z.mix*6,qe.rayleigh.value=ee.ray*(1-Z.mix*.6),qe.mieCoefficient.value=ee.mie,qe.mieDirectionalG.value=.8,qe.sunPosition.value.copy(s.sunDir),qe.cloudCoverage.value=Z.cover,qe.cloudDensity.value=Z.cden,qe.showSunDisc.value=Z.mix<.5?1:0,H=ee.gain*(Z.gain||1),qe.skyGain.value=H}else A(Fe(ee.top),Fe(ee.hor),ae?.12:Z.mix>.5?.05:.3);if(a.color.set(ee.sunCol),a.intensity=ee.sunI*Z.sun,a.shadow.intensity=Z.mix>.5?.4:1,s.photo=null,e.background=null,zi.sky){let qe=ae?Z.mix>.5?"overcast":"night":s.wx==="fog"?"misty":Z.mix>.5?"overcast":s.tod==="sunset"?"sunset":"day",ve=zi.sky[qe];if(ve&&ve.img){if(!R[qe]){let Ce=new nn(ve.img);Ce.colorSpace=Wt,Ce.mapping=or,Ce.needsUpdate=!0,R[qe]=Ce}let Re=ae?Z.mix>.5?.1:1:s.wx==="storm"?.45:s.wx==="rain"?.72:s.wx==="snow"?.95:1;s.photo=R[qe],e.background=s.photo,e.backgroundIntensity=Re,s.bgBase=Re,h.visible=!1,p.visible=!1,v.visible=!1,x.visible=!1,ae||s.sunDir.set(-ve.sun[0],Math.max(.08,ve.sun[1]),-ve.sun[2]).normalize();let Ae=new ke().setRGB(ve.sunCol[0],ve.sunCol[1],ve.sunCol[2]);s.tod==="sunset"&&Ae.lerp(new ke("#ffffff"),.45),!ae&&Z.mix<.5&&a.color.copy(Ae),e.fog.color.setRGB(ve.hor[0],ve.hor[1],ve.hor[2],Wt).multiplyScalar(Re*(ae?.35:1)),Z.tint&&!ae&&qe==="day"&&e.fog.color.lerp(new ke(Z.tint),Z.mix)}}r.color.copy(Fe(ee.hemiSky)),r.groundColor.set(ee.hemiGround),U=ee.hemiI*(Z.mix?1.3:1),r.intensity=U,o.intensity=ae?.08:.22,F=ee.envI*(Z.mix>.5?.75:1),e.environmentIntensity=F,s.photo&&(U*=.35,r.intensity=U,F=(ae?.3:Z.mix>.5?.45:.25)*(ae?1:e.backgroundIntensity),e.environmentIntensity=F,e.fog.density*=.55,ae||(a.intensity*=1.12)),c.intensity=ae?24:s.tod==="sunset"||Z.mix>.7?5:0,V=Z.drops?Math.round(Z.drops*(s.tier==="low"?.5:1)):0,L.visible=V>0,G.setDrawRange(0,V*2),L.material.opacity=ae?.28:.45,C.visible=!!Z.snow,i.toneMappingExposure=(ae?1.15:s.tod==="sunset"?.9:.95)*(s.photo?.9:1);let Ee=Z.mix>.6&&!ae;return s.state={tod:s.tod,wx:s.wx,night:ae,gloom:Ee,wet:s.wx==="rain"||s.wx==="storm",snow:!!Z.snow,win:ee.win+(Ee?.35:0),lamp:ee.lamp+(Z.mix>.7?.9:0),glow:ae?.85:s.tod==="sunset"?.3:Z.mix>.7?.2:0},S(),he&&(he.strength=ae?.5:.2,he.threshold=ae?.9:2.5),s.nextBolt=1.5,s.state},s.setTier=function(J){s.tier=J;let te=window.devicePixelRatio||1;i.setPixelRatio(Math.min(te,{ultra:2,high:1.6,medium:1.3,low:1}[J]));let ee=J==="ultra"||J==="high";(i.shadowMap.enabled!==ee||a.castShadow!==ee)&&(i.shadowMap.enabled=ee,a.castShadow=ee,e.traverse(ae=>{ae.material&&(Array.isArray(ae.material)?ae.material:[ae.material]).forEach(Xe=>{Xe.needsUpdate=!0})}));let Z=J==="ultra"?2048:1024;a.shadow.mapSize.x!==Z&&(a.shadow.mapSize.set(Z,Z),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),J==="ultra"&&!Q&&(K(),s.apply()),J!=="ultra"&&Q&&(Q.dispose(),Q=null,he=null),s.resize()},s.resize=function(){if(!Q)return;let J=i.getDrawingBufferSize(new Ne);Q.setSize(J.x/i.getPixelRatio(),J.y/i.getPixelRatio()),Q.setPixelRatio(i.getPixelRatio())},s.render=function(){Q?Q.render():i.render(e,t)},s.update=function(J,te,ee){let Z=t.position;h.position.copy(Z),p.position.copy(Z),v.position.copy(Z),x.position.copy(Z).addScaledVector(s.sunDir,360),x.lookAt(Z),h.material.uniforms.time.value=te,a.target.position.copy(ee),a.position.copy(ee).addScaledVector(s.sunDir,100),o.target.position.copy(ee),o.position.set(ee.x-s.sunDir.x*50,ee.y+40,ee.z-s.sunDir.z*50);let ae=s.camVel;if(L.visible){let Xe=2.5-ae.x,ye=-24-ae.y,Fe=1-ae.z,Oe=.045;for(let Ee=0;Ee<V;Ee++){let qe=Ee*3,ve=_r(I[qe]+Xe*J,-Ct.x,Ct.x),Re=_r(I[qe+1]+ye*J,Ct.y0,Ct.y1),Ae=_r(I[qe+2]+Fe*J,-Ct.z,Ct.z);I[qe]=ve,I[qe+1]=Re,I[qe+2]=Ae;let Ce=Ee*6;D[Ce]=ve,D[Ce+1]=Re,D[Ce+2]=Ae,D[Ce+3]=ve-Xe*Oe,D[Ce+4]=Re-ye*Oe,D[Ce+5]=Ae-Fe*Oe}G.attributes.position.needsUpdate=!0,L.position.copy(Z)}if(C.visible){for(let Xe=0;Xe<Jh;Xe++){let ye=Xe*3;k[ye]=_r(k[ye]+(Math.sin(te*.9+Xe)*.6-ae.x)*J,-Ct.x,Ct.x),k[ye+1]=_r(k[ye+1]+(-1.4-ae.y)*J,Ct.y0,Ct.y1),k[ye+2]=_r(k[ye+2]+(Math.cos(te*.7+Xe*1.3)*.5-ae.z)*J,-Ct.z,Ct.z)}X.attributes.position.needsUpdate=!0,C.position.copy(Z)}if(s.wx==="storm"&&(s.nextBolt-=J,s.nextBolt<=0&&(s.flash=1,s.nextBolt=4+n()*7,s.onThunder&&s.onThunder(.4+n()*.9))),s.flash>0){s.flash=Math.max(0,s.flash-J*3.2);let Xe=s.flash>.75||s.flash>.3&&s.flash<.5?s.flash:0;r.intensity=U+Xe*4,e.environmentIntensity=F+Xe*2,s.photo&&(e.backgroundIntensity=s.bgBase+Xe*1.5),h.material.uniforms.skyGain.value=H+Xe*2.5}else r.intensity=U,e.environmentIntensity=F,s.photo&&(e.backgroundIntensity=s.bgBase),h.material.uniforms.skyGain.value=H},s.flashNow=()=>{s.flash=1},s}var xr=(i,e,t)=>i<e?e:i>t?t:i,zd=i=>i*i*(3-2*i),Vt={chest:new bn(.2,.32,6,14),belly:new bn(.17,.12,6,14),head:new mn(.15,20,14),neck:new Xt(.06,.07,.12,10),hair:new mn(.158,20,12,0,Math.PI*2,0,Math.PI*.55),nose:new mn(.025,8,6),ear:new mn(.035,8,6),upper:new bn(.068,.24,4,10),fore:new bn(.058,.22,4,10),hand:new mn(.06,10,8),thigh:new bn(.095,.3,4,12),shin:new bn(.075,.32,4,12),shoe:new bn(.07,.17,4,10),cap:new mn(.162,20,10,0,Math.PI*2,0,Math.PI*.5),brim:new Xt(.15,.16,.025,16,1,!1,-Math.PI/2,Math.PI),hood:new rs(.13,.045,8,16,Math.PI),stripe:new Dt(.012,.42,.03),blob:new ss(.55,24),zip:new Dt(.012,.42,.01)},Kh=new Map,Gi=(i,e=.85,t=0)=>{let n=i+e+t;return Kh.has(n)||Kh.set(n,new ei({color:i,roughness:e,metalness:t})),Kh.get(n)},Vd={suit:"#22252d",pants:"#22252d",skin:"#e3b08c",hair:"#3a2a1e",shoe:"#f2f2f0",cap:"#b8312a",trim:"#f2f2f0",hood:!0},rc={suit:"#5c6a3a",pants:"#4b5530",skin:"#dba582",hair:"#2e2418",shoe:"#1b1b1b",cap:"#48522f",boots:!0};function ka(i,e,t,n){let s=Gi(e.suit,.9),r=Gi(e.pants,.92),a=Gi(e.skin,.6),o=Gi(e.hair,.8),c=Gi(e.shoe,.55),l=Gi(e.cap,.85),h=Gi(e.trim||"#ffffff",.7),f=new It,u=new It,p=new It;u.position.y=.95,p.position.y=-.95,f.add(u),u.add(p);let _=(v,A,E,M,b,g,y=0,R=1,S=1,I=1)=>{let D=new pt(A,E);return D.position.set(M,b,g),D.rotation.x=y,D.scale.set(R,S,I),D.castShadow=!0,v.add(D),D};_(p,Vt.chest,s,0,1.36,0,0,1.25,1,.78),_(p,Vt.belly,s,0,1.04,0,0,1.2,1,.82),_(p,Vt.neck,a,0,1.66,0);let x=new It;x.position.set(0,1.8,.01),p.add(x),_(x,Vt.head,e.face?a:o,0,0,0,0,1,1.1,1),_(x,Vt.nose,a,0,-.01,.15);for(let v of[-1,1])_(x,Vt.ear,a,v*.15,0,0);e.face&&_(x,Vt.hair,o,0,.01,-.01),_(x,Vt.cap,l,0,.03,0),_(x,Vt.brim,l,0,.04,.06,0,1,1,1.35),e.hood&&_(p,Vt.hood,s,0,1.62,-.1,-.5,1,1,1.3),e.trim&&_(p,Vt.zip,h,0,1.3,.2);let d=[];for(let v of[-1,1]){let A=new It;A.position.set(v*.11,.95,0),p.add(A),_(A,Vt.thigh,r,0,-.22,0),e.trim&&_(A,Vt.stripe,h,v*.095,-.22,0);let E=new It;E.position.y=-.45,A.add(E),_(E,Vt.shin,r,0,-.2,0),e.trim&&_(E,Vt.stripe,h,v*.075,-.2,0,0,1,.9,1),_(E,Vt.shoe,e.boots?Gi("#1b1b1b",.5):c,0,-.44,.06,Math.PI/2,1.05,1,e.boots?1.3:1);let M=new It;M.position.set(v*.29,1.56,0),p.add(M),_(M,Vt.upper,s,0,-.15,0);let b=new It;b.position.y=-.32,M.add(b),_(b,Vt.fore,s,0,-.14,0),_(b,Vt.hand,a,0,-.31,0),d.push({hip:A,knee:E,sho:M,elb:b,s:v})}if(t){let v=new pt(new zn(.42,.17),new ei({map:La(t,"#5c6a3a","#ffd21f",192,72),roughness:.9}));v.position.set(0,1.36,-.165),v.rotation.y=Math.PI,p.add(v)}let m=new pt(Vt.blob,n);return m.rotation.x=-Math.PI/2,m.position.y=.03,f.add(m),f.userData={pivot:u,limbs:d,blob:m,head:x},i.add(f),f}function Hi(i,e,t,n=0,s=0,r=0){let{pivot:a,limbs:o,head:c}=i.userData,l=.16,h=.95,f=1,u=0,p=-.1;for(let _ of o){let x=e+(_.s>0?0:Math.PI),d=Math.sin(x),m,v,A,E,M=0;if(t==="run")m=-.85*d,v=.25+1.3*Math.max(0,Math.cos(x)),A=.85*d,E=-1.4,u=Math.abs(Math.cos(e))*.07;else if(t==="air"||t==="flip"){let b=Math.sin(Math.PI*xr(n,0,1));m=-.3-(t==="flip"?1.6:1)*b+(_.s>0?-.25:.2)*(1-b),v=.5+(t==="flip"?1.7:1.1)*b,A=t==="flip"?-1-.6*b:-2.5+.4*b,E=t==="flip"?-1.4:-.35,M=t==="flip"?0:.35,l=.1+(t==="flip"?Math.PI*2*zd(xr(n,0,1)):.12*b),p=.2}else if(t==="roll"){let b=Math.sin(Math.PI*xr(n,0,1)),g=xr(n*6,0,1)*xr((1-n)*6,0,1);m=-.4-1.5*g,v=.4+1.9*g,A=-.6-.8*g,E=-1.7*g-.4,p=.5*g,l=.16+Math.PI*2*zd(xr(n,0,1)),h=.95-.42*b,f=1-.27*g}else t==="hands"?(m=0,v=.05,A=-2.9+Math.sin(e*3+_.s)*.1,E=-.2,l=0,M=.25,p=-.25):(m=0,v=.05,A=.05*Math.sin(e*.5),E=-.25,l=0,p=.05*Math.sin(e*.3));_.hip.rotation.set(m,0,0),_.knee.rotation.x=v,_.sho.rotation.set(A,0,_.s*(.06+M)),_.elb.rotation.x=E}c.rotation.x=p,a.rotation.set(l,0,-s),a.position.y=h+u,a.scale.set(f*(1+r*.12),f*(1-r*.2),f*(1+r*.12))}function Gd(i){i.traverse(e=>{e.isMesh&&e.material.map&&(e.material.map.dispose(),e.material.dispose())})}var ct=i=>document.getElementById(i),Cs=2.2,cc=15,sv=36,$d=32,Kd=11.5,Qd=.62,eu=190,rv=2*Kd/$d,pc=(i,e,t)=>i<e?e:i>t?t:i,ai=Math.random,Qh=i=>i[ai()*i.length|0],za={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},Er=ct("c"),Tr,ft="start";function jd(){ct("fail").classList.remove("hidden"),["start","hud","over","pause"].forEach(i=>ct(i).classList.add("hidden")),ft="dead"}try{Tr=new Bl({canvas:Er,antialias:!0,powerPreference:"high-performance"})}catch{Tr=null}if(!Tr)throw jd(),new Error("no WebGL");Er.addEventListener("webglcontextlost",i=>{i.preventDefault(),jd()});var Rn=new ns,yn=new cn(65,1,.3,560),yt=kd(Tr,Rn,yn),ri=i=>new ei({roughness:.8,metalness:0,...i}),Tt={stripe:ri({map:Ad(),roughness:.6}),gatePole:ri({color:"#b5bac2",metalness:.6,roughness:.35}),stij:ri({map:La("\u0421\u0422\u0406\u0419!","#d63028","#ffffff"),side:Ln,roughness:.6}),busBody:ri({map:Cd(),roughness:.45}),white:ri({color:"#eef0f2",roughness:.45}),busPlate:ri({map:La("\u0422\u0426\u041A","#ffd21f","#1b1b1b",192,56)}),glass:ri({color:"#1e2a38",metalness:.5,roughness:.06}),tyre:ri({color:"#1a1a1c",roughness:.9}),headl:ri({color:"#fff7d0",emissive:"#fff0b0",emissiveIntensity:.6}),shadow:new pn({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}),coin:ri({color:"#ffcc33",metalness:1,roughness:.25,emissive:"#7a5200",emissiveIntensity:.25}),sky:new pn({color:"#8090a0",fog:!1})},Cn=null,Mr=null,Sr=null,Wi=null,wi=new Map,hc=new It;Rn.add(hc);function av(){let i=za.get("ukh3d_city");if(i&&Zl[i])return i;try{let e=JSON.parse(za.get("ukh_save_v2")||"{}");if(e.city&&Zl[e.city])return e.city}catch{}return"lviv"}function mc(i){if(Sr)for(let[,s]of wi)Sr.disposeChunk(s);wi.clear(),Mr&&Ud(Mr),Wi&&(hc.remove(Wi),Wi.geometry.dispose(),Wi=null),Cn=Zl[i],za.set("ukh3d_city",i);let e=md(i+":3d");pd(e,Cn.pool),Mr=Nd(Cn),Sr=Od(Rn,Cn,Mr,e);let t=new Ut;vd(Cn.sky,t);let n=t.build();n&&(Wi=new pt(n,Tt.sky),Wi.frustumCulled=!1,Wi.renderOrder=-1,hc.add(Wi)),Rs(),_v()}function Yi(i=!1){let e=Math.max(0,Math.floor((Pt-30)/Ua)),t=Math.floor((Pt+eu)/Ua);for(let[n,s]of wi)(n<e||n>t)&&(Sr.disposeChunk(s),wi.delete(n));for(let n=e;n<=t&&!(!wi.has(n)&&(wi.set(n,Sr.buildChunk(n)),!i));n++);}function Rs(i,e){let t=yt.apply(i,e);Fd(Mr,t),Tt.headl.emissiveIntensity=t.tod==="day"&&!t.gloom?.6:2.2,Tt.coin.emissiveIntensity=t.night?.8:.25,Tt.sky.color.copy(Rn.fog.color).lerp(new ke(t.night?"#05070d":"#46566b"),t.night?.45:yt.photo?.62:.42),ct("btnNight").textContent=$h[yt.tod][1],ct("btnWx").textContent=ic[yt.wx][1],iu(t.wet?yt.wx==="storm"?.07:.045:0)}function ep(){Rs({day:"sunset",sunset:"night",night:"day"}[yt.tod]),Ar($h[yt.tod][0])}function tp(){let i=Object.keys(ic);Rs(null,i[(i.indexOf(yt.wx)+1)%i.length]),Ar(ic[yt.wx][0])}yt.onThunder=i=>mv(i);var bi=ka(Rn,Vd,null,Tt.shadow),ov=[ka(Rn,rc,"\u0422\u0426\u041A",Tt.shadow),ka(Rn,rc,"\u0422\u0426\u041A",Tt.shadow)],qn={bar:new Dt(2,1,.5),pole:new Xt(.08,.08,2.75,10),banner:new zn(2,1.2),bus:new Dt(5.2,2.35,2),wheel:new Xt(.42,.42,.3,18),coin:new Xt(.36,.36,.08,24),wind:new zn(1.8,1.05),plate:new zn(1.5,.42),head:new Dt(.06,.22,.32),roofBox:new Dt(4.6,.12,1.9),mirror:new Dt(.1,.25,.12)},Yn=[],Xi=[],Ts=new $r(qn.coin,Tt.coin,260);Ts.count=0;Ts.frustumCulled=!1;Ts.castShadow=!0;Rn.add(Ts);var ac=new kt,oi={};function Hd(i,e,t,n,s=0){let r=Nt(e,t,n,oi);i.position.set(r.wx,r.wy,r.wz),i.rotation.set(0,Math.PI/2-oi.th+s,0)}function lv(i){let e=new It,t=(n,s,r,a,o)=>{let c=new pt(n,s);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,e.add(c),c};if(i.t==="bar")t(qn.bar,Tt.stripe,0,.5,0).rotation.y=Math.PI/2;else if(i.t==="gate"){for(let n of[-1.05,1.05])t(qn.pole,Tt.gatePole,0,1.37,n);t(qn.banner,Tt.stij,0,1.9,0).rotation.y=-Math.PI/2}else if(i.t==="bus"){t(qn.bus,[Tt.white,Tt.white,Tt.white,Tt.white,Tt.busBody,Tt.busBody],0,1.53,0),t(qn.roofBox,Tt.white,.2,2.76,0),t(qn.wind,Tt.glass,-2.62,1.95,0).rotation.y=-Math.PI/2,t(qn.plate,Tt.busPlate,-2.62,.75,0).rotation.y=-Math.PI/2;for(let n of[-.72,.72])t(qn.head,Tt.headl,-2.62,1.05,n);for(let n of[-1.07,1.07])t(qn.mirror,Tt.tyre,-2.45,2,n);for(let n of[-1.7,1.7])for(let s of[-.9,.9])t(qn.wheel,Tt.tyre,n,.42,s).rotation.x=Math.PI/2}else if(i.t==="patrol"){i.fig=ka(Rn,{...rc,face:!0},null,Tt.shadow);return}Rn.add(e),i.mesh=e}function cv(){for(let i of Yn){let e=i.d+i.len/2;i.mesh&&(Hd(i.mesh,e,i.lane*Cs,0),i.mesh.visible=i.d<Pt+eu),i.fig&&(Hd(i.fig,e,i.lane*Cs,0),i.fig.rotation.y=-oi.th,Hi(i.fig,Ms*2+i.d,"hands"),i.fig.userData.limbs[0].sho.rotation.x=-2.4+Math.sin(Ms*8+i.d)*.5)}}function tu(i){i.mesh&&Rn.remove(i.mesh),i.fig&&(Gd(i.fig),Rn.remove(i.fig))}var br=0,ys=0,Wd=i=>i==="bus"||i==="patrol";function hv(i){return sn.some(e=>e.type==="corner"&&i>e.s-16&&i<e.e+12)}function uv(){let i=br,e=sn.find(_=>_.type==="corner"&&i>_.s-16&&i<_.e+12);if(e){br=e.e+12,ys=Math.max(ys,e.e+4);return}let t=Math.min(1,i/3e3),n=i<180,s=ai(),r=n||s<.42-.22*t?1:s<.88-.08*t?2:3,a=[-1,0,1].sort(()=>ai()-.5).slice(0,r),o={};for(let _ of a){let x=ai();o[_]=n?x<.4?"bar":x<.7?"gate":"bus":x<.3?"bar":x<.55?"gate":x<.83?"bus":"patrol"}if(r===3){let _=a.filter(x=>Wd(o[x]));_.length===3&&(o[Qh(_)]=ai()<.5?"bar":"gate")}let c=[-1,0,1].filter(_=>!o[_]||!Wd(o[_])),l=ys+3,h=i-3,f=Qh(c);if(h-l>4&&ai()<.85)for(let _=Math.max(l,h-30);_<=h;_+=2.2)hv(_)||Xi.push({d:_,x:f*Cs,y:.9,got:!1});let u=.6;for(let _ of a){let x=o[_],d={t:x,lane:_,d:i,len:.5,y0:0,y1:1,hx:1};if(x==="gate"&&Object.assign(d,{len:.35,y0:1.25,y1:2.6}),x==="bus"&&Object.assign(d,{len:5.2,y1:2.7}),x==="patrol"&&Object.assign(d,{len:.6,y1:2.3,hx:.55}),x==="bar"&&ai()<.45)for(let m=-3;m<=3;m++)Xi.push({d:i+.25+m*1.5,x:_*Cs,y:.9+1.4*(1-(m/3.5)**2),got:!1});lv(d),Yn.push(d),u=Math.max(u,d.len)}ys=i+u;let p=Math.max(bs,cc)+1;br=ys+p*(1.3-.45*t)+ai()*p*.45}var Pt=0,qi=0,bs=0,uc=0,Es=0,gc=0,Ms=0,wr=0,fc=0,de={lane:0,prevLane:0,x:0,prevX:0,y:0,vy:0,onGround:!0,slide:0,run:0,inv:0,stumble:0,jt:0,flip:!1,jumps:0,land:0};function Va(){for(let i of Yn)tu(i);Yn=[],Xi=[],Pt=qi=0,bs=0,uc=0,Es=0,gc=0,wr=3,fc=0,Object.assign(de,{lane:0,prevLane:0,x:0,prevX:0,y:0,vy:0,onGround:!0,slide:0,run:0,inv:0,stumble:0,jt:0,flip:!1,jumps:0,land:0}),br=60,ys=6;for(let[,i]of wi)Sr.disposeChunk(i);wi.clear(),$t=null,dc=!0}function ws(i){if(ft==="play")if(i==="left"||i==="right"){let e=pc(de.lane+(i==="left"?-1:1),-1,1);e!==de.lane&&(de.prevLane=de.lane,de.lane=e,As(500,.05,.03))}else i==="up"&&de.onGround?(de.vy=Kd,de.onGround=!1,de.slide=0,de.jt=0,de.jumps++,de.flip=de.jumps%3===0,As(320,.18,.06,760)):i==="down"&&(de.onGround?(de.slide<=0&&As(180,.15,.04,90),de.slide=Qd):de.vy=Math.min(de.vy,-24))}function fv(){if(As(140,.3,.15,45),su(80),wr>0)return np();wr=5,de.stumble=.5,de.inv=.5,Ar("\u0422\u0426\u041A \u041D\u0410 \u0425\u0412\u041E\u0421\u0422\u0406!")}function np(){ft="caught",fc=0,bs=0,As(392,.6,.1,196),su(200)}function dv(){if(de.inv>0)return;let i=de.slide>0?.8:1.75;for(let e of Yn){let t=e.d,n=e.d+e.len;if(Pt+.35<t||qi-.35>n)continue;let s=e.lane*Cs,r=e.hx+.38;if(Math.abs(de.x-s)>=r||de.y+i<=e.y0||de.y>=e.y1)continue;let a=qi+.35>=t&&qi-.35<=n,o=Math.abs(de.prevX-s)<r;a&&!o?(de.lane=de.prevLane,fv()):(Pt=Math.max(qi,e.d-.45),np());return}}var $t=null,dc=!0,vr=0,oc=2.6,Nn={x:0,y:0,z:0},Xd=new z;function pv(i){if(Ms+=i,ft==="play"){uc+=i,bs=cc+(sv-cc)*(1-Math.exp(-uc/110)),qi=Pt,Pt+=bs*i,Es=Math.floor(Pt),wr>0&&(wr-=i),de.inv>0&&(de.inv-=i),de.stumble>0&&(de.stumble-=i),de.land>0&&(de.land-=i),de.prevX=de.x;let _=de.lane*Cs;de.x+=(_-de.x)*(1-Math.exp(-i*16)),(!de.onGround||de.vy>0)&&(de.jt+=i,de.vy-=$d*i,de.y+=de.vy*i,de.y<=0&&(de.y=0,de.vy=0,de.onGround=!0,de.land=.16,vr=.12)),de.slide>0&&(de.slide-=i),de.run+=i*(6+bs*.35),dv();for(let x of Xi)!x.got&&x.d>qi-.9&&x.d<Pt+.9&&Math.abs(x.x-de.x)<1&&x.y>de.y-.4&&x.y<de.y+2.5&&(x.got=!0,gc++,As(1046,.07,.05),As(1568,.1,.05,0,.05));for(;br<Pt+eu;)uv();Yn=Yn.filter(x=>x.d+x.len<Pt-8?(tu(x),!1):!0),Xi=Xi.filter(x=>!x.got&&x.d>Pt-8)}else ft==="caught"&&(fc+=i,fc>1.5&&gv());Yi();let e=Nt(Pt,de.x,de.y,oi);bi.position.set(e.wx,e.wy,e.wz),bi.rotation.y=Math.PI-oi.th;let t=pc((de.lane*Cs-de.x)*.22,-.35,.35)+(de.stumble>0?Math.sin(de.stumble*20)*.25:0);ft==="start"?Hi(bi,Ms*2,"idle"):ft!=="play"?Hi(bi,Ms*3,"hands"):de.slide>0?Hi(bi,de.run,"roll",1-de.slide/Qd,t):de.onGround?Hi(bi,de.run,"run",0,t,de.land>0?Math.sin(de.land/.16*Math.PI):0):Hi(bi,de.run,de.flip?"flip":"air",de.jt/rv,t),bi.userData.blob.position.y=.03-de.y,bi.userData.blob.scale.setScalar(1/(1+de.y*.3));let n=ft!=="play"||wr>0;oc+=((n?ft==="caught"||ft==="over"?.9:2.6:9)-oc)*(1-Math.exp(-i*2.5)),ov.forEach((_,x)=>{let d=Nt(Pt-oc-x*.4,de.x+(x?1.15:-1.15)*(ft==="caught"||ft==="over"?.55:1),0,oi);_.position.set(d.wx,d.wy,d.wz),_.rotation.y=Math.PI-oi.th,Hi(_,de.run+x*1.7,ft==="play"?"run":"idle"),_.visible=oc<8}),cv();let s=0;for(let _ of Xi){if(_.d>Pt+150||s>=260)continue;let x=Nt(_.d,_.x,_.y,oi);ac.position.set(x.wx,x.wy,x.wz),ac.rotation.set(Math.PI/2,0,Ms*4+_.d),ac.updateMatrix(),Ts.setMatrixAt(s++,ac.matrix)}Ts.count=s,Ts.instanceMatrix.needsUpdate=!0;let r=Nt(Math.max(0,Pt-6.5),de.x*.5,4.6+de.y*.3,{}),a=Nt(Pt+9,de.x*.6,1.1+de.y*.5,{});$t||($t={x:r.wx,y:r.wy,z:r.wz}),dc&&(Nn.x=a.wx,Nn.y=a.wy,Nn.z=a.wz,dc=!1);let o=1-Math.exp(-i*7),c=$t.x,l=$t.y,h=$t.z;$t.x+=(r.wx-$t.x)*o,$t.y+=(r.wy-$t.y)*o,$t.z+=(r.wz-$t.z)*o,i>0&&(yt.camVel={x:($t.x-c)/i,y:($t.y-l)/i,z:($t.z-h)/i}),Nn.x+=(a.wx-Nn.x)*Math.min(1,o*1.4),Nn.y+=(a.wy-Nn.y)*Math.min(1,o*1.4),Nn.z+=(a.wz-Nn.z)*Math.min(1,o*1.4),vr>0&&(vr=Math.max(0,vr-i)),yn.position.set($t.x,$t.y-Math.sin(vr*40)*vr*.6,$t.z),yn.lookAt(Nn.x,Nn.y,Nn.z);let f=jh+(bs-cc)*.22;Math.abs(yn.fov-f)>.05&&(yn.fov+=(f-yn.fov)*Math.min(1,i*3),yn.updateProjectionMatrix());let u=Nt(Pt+14,0,0,oi);Xd.set(u.wx,u.wy,u.wz);let p=Nt(Pt-.8,de.x*.5,4,oi);yt.near.position.set(p.wx,p.wy,p.wz),hc.position.set(yn.position.x,e.wy-3,yn.position.z),yt.update(i,Ms,Xd)}var _t=null,yr=null,lc=null;function nu(){try{_t||(_t=new(window.AudioContext||window.webkitAudioContext)),_t.state==="suspended"&&_t.resume()}catch{_t=null}}function As(i,e,t,n,s=0){if(_t)try{let r=_t.currentTime+s,a=_t.createOscillator(),o=_t.createGain();a.type="square",a.frequency.setValueAtTime(i,r),n&&a.frequency.exponentialRampToValueAtTime(n,r+e),o.gain.setValueAtTime(t,r),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(_t.destination),a.start(r),a.stop(r+e+.05)}catch{}}function ip(){if(!lc){lc=_t.createBuffer(1,_t.sampleRate*2,_t.sampleRate);let i=lc.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}return lc}function iu(i){if(_t)try{if(!yr){let e=_t.createBufferSource();e.buffer=ip(),e.loop=!0;let t=_t.createBiquadFilter();t.type="bandpass",t.frequency.value=1400,t.Q.value=.6,yr=_t.createGain(),yr.gain.value=0,e.connect(t),t.connect(yr),yr.connect(_t.destination),e.start()}yr.gain.setTargetAtTime(ft==="play"?i:0,_t.currentTime,.4)}catch{}}function mv(i){if(_t){try{let e=_t.currentTime+i,t=_t.createBufferSource(),n=_t.createBiquadFilter(),s=_t.createGain();t.buffer=ip(),n.type="lowpass",n.frequency.value=160,s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.35,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+1.9),t.connect(n),n.connect(s),s.connect(_t.destination),t.start(e),t.stop(e+2)}catch{}su(40)}}function su(i){try{window.AndroidBridge&&window.AndroidBridge.vibrate?window.AndroidBridge.vibrate(i):navigator.vibrate&&navigator.vibrate(i)}catch{}}function Ar(i){let e=ct("toast");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function Cr(i){for(let e of["start","pause","over"])ct(e).classList.toggle("hidden",e!==i);ct("hud").classList.toggle("hidden",i!==null&&i!=="pause")}function _c(){nu(),Va(),Yi(!0),ft="play",Cr(null),Rs(),Ar(Cn.n+": \u0411\u0406\u0416\u0418!"),Rt.reset()}function Rr(){ft==="play"&&(ft="pause",Cr("pause"),iu(0))}function sp(){ft==="pause"&&(nu(),ft="play",Cr(null),Rs(),Rt.reset())}function gv(){ft="over",ct("oScore").textContent=Es,ct("oCoins").textContent=gc,ct("oCity").textContent=Cn.n,ct("oPerf").textContent=`\u0413\u0440\u0430\u0444\u0456\u043A\u0430: ${sc[yt.tier]} \xB7 ${Rt.avg?Math.round(Rt.avg):"\u2014"} \u043A\u0430\u0434\u0440/\u0441`,Cr("over"),iu(0)}function xc(){location.href="index.html"}function _v(){let i=ct("cities");if(i){i.innerHTML="";for(let e of Yl){let t=document.createElement("button");t.className="chip"+(e.id===Cn.id?" on":""),t.textContent=e.n,t.addEventListener("click",n=>{n.stopPropagation(),e.id!==Cn.id&&(mc(e.id),Va(),Yi(!0))}),i.appendChild(t)}ct("cityName").textContent=Cn.n}}ct("btnGo").addEventListener("click",i=>{i.stopPropagation(),_c()});ct("btnBack1").addEventListener("click",i=>{i.stopPropagation(),xc()});ct("btnAgain").addEventListener("click",_c);ct("btnBack2").addEventListener("click",xc);ct("btnMenu").addEventListener("click",()=>{Va(),Yi(!0),ft="start",Cr("start")});ct("btnResume").addEventListener("click",sp);ct("btnBack3").addEventListener("click",xc);ct("btnPause").addEventListener("click",i=>{i.stopPropagation(),Rr()});ct("btnNight").addEventListener("click",i=>{i.stopPropagation(),ep()});ct("btnWx").addEventListener("click",i=>{i.stopPropagation(),tp()});ct("btnQ").addEventListener("click",i=>{i.stopPropagation(),vc(vs[(vs.indexOf(yt.tier)+1)%vs.length],!0),Ar("\u0413\u0440\u0430\u0444\u0456\u043A\u0430: "+sc[yt.tier])});var An=null,ru=(i,e)=>Math.abs(i)>Math.abs(e)?ws(i>0?"right":"left"):ws(e>0?"down":"up");Er.addEventListener("touchstart",i=>{i.preventDefault(),nu();let e=i.changedTouches[0];An={id:e.identifier,x:e.clientX,y:e.clientY,done:!1}},{passive:!1});Er.addEventListener("touchmove",i=>{if(i.preventDefault(),!(!An||An.done))for(let e of i.changedTouches){if(e.identifier!==An.id)continue;let t=e.clientX-An.x,n=e.clientY-An.y;(Math.abs(t)>22||Math.abs(n)>22)&&(ru(t,n),An.done=!0)}},{passive:!1});Er.addEventListener("touchend",i=>{if(i.preventDefault(),!!An){for(let e of i.changedTouches)if(e.identifier===An.id){if(!An.done){let t=e.clientX-An.x,n=e.clientY-An.y;(Math.abs(t)>10||Math.abs(n)>10)&&ru(t,n)}An=null}}},{passive:!1});document.addEventListener("touchmove",i=>{i.cancelable&&!i.target.closest("#cities")&&i.preventDefault()},{passive:!1});var Ss=null;Er.addEventListener("mousedown",i=>{Ss={x:i.clientX,y:i.clientY,done:!1}});window.addEventListener("mousemove",i=>{if(!Ss||Ss.done)return;let e=i.clientX-Ss.x,t=i.clientY-Ss.y;(Math.abs(e)>24||Math.abs(t)>24)&&(ru(e,t),Ss.done=!0)});window.addEventListener("mouseup",()=>{Ss=null});window.addEventListener("keydown",i=>{let e=i.code;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(e)&&i.preventDefault(),e==="KeyN")return ep();if(e==="KeyM")return tp();ft==="play"?e==="ArrowLeft"||e==="KeyA"?ws("left"):e==="ArrowRight"||e==="KeyD"?ws("right"):e==="ArrowUp"||e==="KeyW"||e==="Space"?ws("up"):e==="ArrowDown"||e==="KeyS"?ws("down"):(e==="KeyP"||e==="Escape")&&Rr():(ft==="start"||ft==="over")&&(e==="Enter"||e==="Space")?_c():ft==="pause"&&(e==="Enter"||e==="KeyP"||e==="Escape")&&sp()});function rp(){Rr();try{_t&&_t.state==="running"&&_t.suspend()}catch{}}document.addEventListener("visibilitychange",()=>{document.hidden&&rp()});window.addEventListener("blur",Rr);window.__appPause=rp;window.__appBack=()=>ft==="play"?(Rr(),"ok"):(ft==="caught"||xc(),"ok");var Rt={t:0,n:0,sum:0,cnt:0,avg:0,locked:!1,reset(){this.t=0,this.n=0}};function vc(i,e=!1){let t=i==="low"||i==="medium"?.5:1,n=Cn&&t!==Zd;Zd=t,bd(t),yt.setTier(i),n&&(mc(Cn.id),Yi(!0)),za.set("ukh3d_q",i),e&&(Rt.locked=!0),ct("btnQ").textContent={ultra:"\u2728",high:"\u2699\uFE0F",medium:"\u{1F505}",low:"\u{1F50B}"}[i],ap()}function xv(i){if(ft!=="play"||i<=0||i>.5||(Rt.t+=i,Rt.n++,Rt.t<4))return;let e=Rt.n/Rt.t;Rt.sum+=e,Rt.cnt++,Rt.avg=Rt.sum/Rt.cnt,Rt.t=0,Rt.n=0,!Rt.locked&&e<45&&yt.tier!=="low"&&(vc(vs[vs.indexOf(yt.tier)+1]),Ar("\u0413\u0440\u0430\u0444\u0456\u043A\u0430: "+sc[yt.tier]+" \u2014 \u0434\u043B\u044F \u043F\u043B\u0430\u0432\u043D\u043E\u0441\u0442\u0456"),Rt.sum=0,Rt.cnt=0)}var jh=70;function ap(){let i=window.innerWidth,e=window.innerHeight;Tr.setSize(i,e,!1),yn.aspect=i/e,jh=pc(2*Math.atan(Math.tan(74*Math.PI/180/2)/yn.aspect)*180/Math.PI,55,92),yn.fov=jh,yn.updateProjectionMatrix(),yt.resize()}window.addEventListener("resize",ap);var qd=performance.now(),Yd=-1;function op(i){let e=(i-qd)/1e3;qd=i;let t=pc(e,0,.05);ft!=="pause"&&ft!=="dead"&&pv(t),ft!=="dead"&&yt.render(),xv(e),Es!==Yd&&(ct("score").textContent=Es,Yd=Es),ct("coinN").textContent=gc,requestAnimationFrame(op)}var Zd=1,Jd=za.get("ukh3d_q");vc(vs.includes(Jd)?Jd:"high");yt.tod=ai()<.6?"day":ai()<.6?"sunset":"night";yt.wx=Qh(["clear","clear","clear","rain","storm","snow","fog"]);ct("btnGo").disabled=!0;ct("btnGo").textContent="\u0417\u0410\u0412\u0410\u041D\u0422\u0410\u0416\u0415\u041D\u041D\u042F\u2026";var vv=performance.now();Md(i=>{ct("btnGo").textContent="\u0417\u0410\u0412\u0410\u041D\u0422\u0410\u0416\u0415\u041D\u041D\u042F "+Math.round(i*100)+"%"}).then(i=>{lp=i,mc(av()),Va(),Cr("start"),Yi(!0),ct("btnGo").disabled=!1,ct("btnGo").textContent="\u0411\u0406\u0413\u0422\u0418 \u25B6",cp=Math.round(performance.now()-vv),requestAnimationFrame(op)});var lp=!1,cp=0;window.__g3={get state(){return ft},get dist(){return Pt},get lane(){return de.lane},get score(){return Es},get p(){return de},act:ws,start:_c,renderer:Tr,camera:yn,scene:Rn,env:yt,frame:i=>Nt(i,0,0,{}),get chunks(){return wi.size},get obs(){return Yn.length},get obsList(){return Yn.map(i=>({t:i.t,lane:i.lane,d:i.d}))},pause:Rr,setEnv(i,e){Rs(i,e)},setNight(i){Rs(i?"night":"day")},setTier:vc,get tier(){return yt.tier},lockTier(){Rt.locked=!0},get perf(){return Rt},city:i=>{mc(i),Va(),Yi(!0)},get M(){return Mr},get photos(){return lp},get bootMs(){return cp},get cityId(){return Cn.id},cities:Yl.map(i=>i.id),warp(i){Pt=qi=i,br=i+40,ys=i+6;for(let e of Yn)tu(e);Yn=[],Xi=[],$t=null,dc=!0,Yi(!0)},segs:sn,setSpeedTime(i){uc=i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
