(()=>{var Gu=0,Jc=1,Hu=2;var rs=1,Wu=2,js=3,Fi=0,Xt=1,In=2,xi=0,er=1,vi=2,$c=3,Kc=4,Xu=5;var as=100,qu=101,Yu=102,Zu=103,Ju=104,$u=200,Ku=201,Qu=202,ju=203,Qc=204,jc=205,ed=206,td=207,nd=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,uo=0,fo=1,po=2,Vs=3,mo=4,go=5,_o=6,xo=7,eh=0,cd=1,hd=2,ti=0,ia=1,sa=2,ra=3,os=4,aa=5,oa=6,la=7;var th=300,ls=301,tr=302,Wo=303,Xo=304,ji=1e3,gn=1001,vo=1002,jt=1003,ud=1004;var ca=1005;var dn=1006,qo=1007;var kn=1008;var _n=1009,nh=1010,ih=1011,nr=1012,Yo=1013,Vn=1014,Ln=1015,qt=1016,Zo=1017,Jo=1018,cs=1020,sh=35902,rh=35899,ah=1021,oh=1022,Gn=1023,mi=1026,yi=1027,$o=1028,Ko=1029,Oi=1030,Qo=1031;var jo=1033,ha=33776,ua=33777,da=33778,fa=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37488,ll=37489,pa=37490,cl=37491,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,xl=37816,vl=37817,yl=37818,Ml=37819,Sl=37820,bl=37821,wl=36492,Tl=36494,El=36495,Al=36283,Cl=36284,ma=36285,Rl=36286;var Ir=2300,yo=2301,co=2302,kc=2303,Vc=2400,Gc=2401,Hc=2402;var dd=3200;var Pl=0,fd=1,Hn="",tn="srgb",Lr="srgb-linear",Dr="linear",lt="srgb";var ho=7680;var pd=519,md=512,gd=513,_d=514,lh=515,xd=516,vd=517,ch=518,hh=519,yd=35044,Il=35048;var uh="300 es",Pn=2e3,Gs=2001;function ip(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Nr("canvas");return i.style.display="block",i}var uu={},Hs=null;function dh(...i){let e="THREE."+i.shift();Hs?Hs("log",e,...i):console.log(e,...i)}function Sd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Sd(i);let e="THREE."+i.shift();if(Hs)Hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Sd(i);let e="THREE."+i.shift();if(Hs)Hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pr(...i){let e=i.join(" ");e in uu||(uu[e]=!0,We(...i))}function bd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wd={[uo]:uo,[po]:_o,[mo]:mo,[Vs]:go,[fo]:fo,[_o]:po,[xo]:xo,[go]:Vs},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _c=Math.PI/180,Mo=180/Math.PI;function ga(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function rp(i,e){return(i%e+e)%e}function xc(i,e,t){return(1-t)*i+t*e}function Td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ap(i,e){if(e.constructor===Float32Array)return i;let t=fh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function op(i,e){if(e.constructor===Float32Array)return i;let t=fh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var xh=class xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;var Ne=xh,$n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==m||h!==g){let f=c*u+l*m+h*g+d*x;f<0&&(u=-u,m=-m,g=-g,x=-x,f=-f);let p=1-o;if(f<.9995){let v=Math.acos(f),A=Math.sin(v);p=Math.sin(p*v)/A,o=Math.sin(o*v)/A,c=c*p+u*o,l=l*p+m*o,h=h*p+g*o,d=d*p+x*o}else{c=c*p+u*o,l=l*p+m*o,h=h*p+g*o,d=d*p+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*m-l*u,e[t+1]=c*g+h*u+l*d-o*m,e[t+2]=l*g+h*m+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var k=vh,vc=new k,du=new $n,yh=class yh{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],x=s[0],f=s[3],p=s[6],v=s[1],A=s[4],E=s[7],M=s[2],b=s[5],_=s[8];return r[0]=a*x+o*v+c*M,r[3]=a*f+o*A+c*b,r[6]=a*p+o*E+c*_,r[1]=l*x+h*v+d*M,r[4]=l*f+h*A+d*b,r[7]=l*p+h*E+d*_,r[2]=u*x+m*v+g*M,r[5]=u*f+m*A+g*b,r[8]=u*p+m*E+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,m=l*r-a*c,g=t*d+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(e,t)),this}rotate(e){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yh.prototype.isMatrix3=!0;var qe=yh,yc=new qe,fu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var nt=lp();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,So=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Nr("canvas")),Es.width=e.width,Es.height=e.height;let s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cp=0,Ws=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mc(s[a].image)):r.push(Mc(s[a]))}else r=Mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?So.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var hp=0,Sc=new k,fn=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gn,s=gn,r=dn,a=kn,o=Gn,c=_n,l=i.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ga(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ji:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ji:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=th;fn.DEFAULT_ANISOTROPY=1;var Mh=class Mh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],x=c[2],f=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,E=(m+1)/2,M=(p+1)/2,b=(h+u)/4,_=(d+x)/4,y=(g+f)/4;return A>E&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=_/n):E>M?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=b/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=_/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;var wt=Mh,bo=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new fn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lt=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ho=class Ho{constructor(e,t,n,s,r,a,o,c,l,h,d,u,m,g,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,m,g,x,f)}set(e,t,n,s,r,a,o,c,l,h,d,u,m,g,x,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=g,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,m=c*d,g=l*h,x=l*d;t[0]=u+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,m=c*d,g=l*h,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,m=a*d,g=o*h,x=o*d;t[0]=c*h,t[4]=g*l-m,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-u*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ei.crossVectors(n,Mn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ei.crossVectors(n,Mn)),Ei.normalize(),Ba.crossVectors(Mn,Ei),s[0]=Ei.x,s[4]=Ba.x,s[8]=Mn.x,s[1]=Ei.y,s[5]=Ba.y,s[9]=Mn.y,s[2]=Ei.z,s[6]=Ba.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],x=n[6],f=n[10],p=n[14],v=n[3],A=n[7],E=n[11],M=n[15],b=s[0],_=s[4],y=s[8],R=s[12],S=s[1],L=s[5],D=s[9],H=s[13],I=s[2],V=s[6],X=s[10],C=s[14],G=s[3],F=s[7],U=s[11],W=s[15];return r[0]=a*b+o*S+c*I+l*G,r[4]=a*_+o*L+c*V+l*F,r[8]=a*y+o*D+c*X+l*U,r[12]=a*R+o*H+c*C+l*W,r[1]=h*b+d*S+u*I+m*G,r[5]=h*_+d*L+u*V+m*F,r[9]=h*y+d*D+u*X+m*U,r[13]=h*R+d*H+u*C+m*W,r[2]=g*b+x*S+f*I+p*G,r[6]=g*_+x*L+f*V+p*F,r[10]=g*y+x*D+f*X+p*U,r[14]=g*R+x*H+f*C+p*W,r[3]=v*b+A*S+E*I+M*G,r[7]=v*_+A*L+E*V+M*F,r[11]=v*y+A*D+E*X+M*U,r[15]=v*R+A*H+E*C+M*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],x=e[7],f=e[11],p=e[15],v=c*m-l*u,A=o*m-l*d,E=o*u-c*d,M=a*m-l*h,b=a*u-c*h,_=a*d-o*h;return t*(x*v-f*A+p*E)-n*(g*v-f*M+p*b)+s*(g*A-x*M+p*_)-r*(g*E-x*b+f*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],x=e[13],f=e[14],p=e[15],v=t*o-n*a,A=t*c-s*a,E=t*l-r*a,M=n*c-s*o,b=n*l-r*o,_=s*l-r*c,y=h*x-d*g,R=h*f-u*g,S=h*p-m*g,L=d*f-u*x,D=d*p-m*x,H=u*p-m*f,I=v*H-A*D+E*L+M*S-b*R+_*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(o*H-c*D+l*L)*V,e[1]=(s*D-n*H-r*L)*V,e[2]=(x*_-f*b+p*M)*V,e[3]=(u*b-d*_-m*M)*V,e[4]=(c*S-a*H-l*R)*V,e[5]=(t*H-s*S+r*R)*V,e[6]=(f*E-g*_-p*A)*V,e[7]=(h*_-u*E+m*A)*V,e[8]=(a*D-o*S+l*y)*V,e[9]=(n*S-t*D-r*y)*V,e[10]=(g*b-x*E+p*v)*V,e[11]=(d*E-h*b-m*v)*V,e[12]=(o*R-a*L-c*y)*V,e[13]=(t*L-n*R+s*y)*V,e[14]=(x*A-g*M-f*v)*V,e[15]=(h*M-d*A+u*v)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,m=r*h,g=r*d,x=a*h,f=a*d,p=o*d,v=c*l,A=c*h,E=c*d,M=n.x,b=n.y,_=n.z;return s[0]=(1-(x+p))*M,s[1]=(m+E)*M,s[2]=(g-A)*M,s[3]=0,s[4]=(m-E)*b,s[5]=(1-(u+p))*b,s[6]=(f+v)*b,s[7]=0,s[8]=(g+A)*_,s[9]=(f-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),c=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let l=1/a,h=1/o,d=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Pn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Gs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Pn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Gs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ho.prototype.isMatrix4=!0;var ct=Ho,As=new k,Un=new ct,up=new k(0,0,0),dp=new k(1,1,1),Ei=new k,Ba=new k,Mn=new k,mu=new ct,gu=new $n,gi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fp=0,_u=new k,Cs=new $n,ci=new ct,za=new k,br=new k,pp=new k,mp=new $n,xu=new k(1,0,0),vu=new k(0,1,0),yu=new k(0,0,1),Mu={type:"added"},gp={type:"removed"},Rs={type:"childadded",child:null},bc={type:"childremoved",child:null},zt=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new gi,n=new $n,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(br,za,this.up):ci.lookAt(za,br,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ci),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new k(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),p=this._getHandJoint(l,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ka={h:0,s:0,l:0};function wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=rp(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wc(a,r,e+1/3),this.g=wc(a,r,e),this.b=wc(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return nt.workingToColorSpace(on.copy(this),e),Math.round(at(on.r*255,0,255))*65536+Math.round(at(on.g*255,0,255))*256+Math.round(at(on.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=tn){nt.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ka);let n=xc(Ai.h,ka.h,t),s=xc(Ai.s,ka.s,t),r=xc(Ai.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ke;ke.NAMES=Ed;var Or=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var es=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new k,hi=new k,Tc=new k,ui=new k,Ps=new k,Is=new k,Su=new k,Ec=new k,Ac=new k,Cc=new k,Rc=new wt,Pc=new wt,Ic=new wt,Ii=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),hi.subVectors(n,t),Tc.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(hi),c=Fn.dot(Tc),l=hi.dot(hi),h=hi.dot(Tc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rc,r.x),a.addScaledVector(Pc,r.y),a.addScaledVector(Ic,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),hi.subVectors(e,t),Fn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ps.subVectors(s,n),Is.subVectors(r,n),Ec.subVectors(e,n);let c=Ps.dot(Ec),l=Is.dot(Ec);if(c<=0&&l<=0)return t.copy(n);Ac.subVectors(e,s);let h=Ps.dot(Ac),d=Is.dot(Ac);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ps,a);Cc.subVectors(e,r);let m=Ps.dot(Cc),g=Is.dot(Cc);if(g>=0&&m<=g)return t.copy(r);let x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Is,o);let f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Su.subVectors(r,s),o=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Su,o);let p=1/(f+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Ga.subVectors(this.max,wr),Ls.subVectors(e.a,wr),Ds.subVectors(e.b,wr),Ns.subVectors(e.c,wr),Ci.subVectors(Ds,Ls),Ri.subVectors(Ns,Ds),Ji.subVectors(Ls,Ns);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Ji.z,Ji.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Ji.z,0,-Ji.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Ji.y,Ji.x,0];return!Lc(t,Ls,Ds,Ns,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,Ls,Ds,Ns,Ga))?!1:(Ha.crossVectors(Ci,Ri),t=[Ha.x,Ha.y,Ha.z],Lc(t,Ls,Ds,Ns,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new k,new k,new k,new k,new k,new k,new k,new k],On=new k,Va=new Kn,Ls=new k,Ds=new k,Ns=new k,Ci=new k,Ri=new k,Ji=new k,wr=new k,Ga=new k,Ha=new k,$i=new k;function Lc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Bt=new k,Wa=new Ne,xp=0,cn=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yd,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?fh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ap(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):op(e,this.array)}};var Br=class extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zr=class extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},vp=new Kn,Tr=new k,Dc=new k,Qn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Dc)),this.expandByPoint(Tr.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yp=0,Rn=new ct,Nc=new zt,Us=new k,Sn=new Kn,Er=new Kn,Qt=new k,St=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?zr:Br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Sn.min,Er.min),Sn.expandByPoint(Qt),Qt.addVectors(Sn.max,Er.max),Sn.expandByPoint(Qt)):(Sn.expandByPoint(Er.min),Sn.expandByPoint(Er.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qt.fromBufferAttribute(o,l),c&&(Us.fromBufferAttribute(e,l),Qt.add(Us)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new k,c[R]=new k;let h=new k,d=new k,u=new k,m=new Ne,g=new Ne,x=new Ne,f=new k,p=new k;function v(R,S,L){l[R]=l[S]=l[L]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,L),m.fromBufferAttribute(r,R),g.fromBufferAttribute(r,S),x.fromBufferAttribute(r,L),d.sub(h),u.sub(h),g.sub(m),x.sub(m);let D=1/(g.x*x.y-x.x*g.y);isFinite(D)&&(f.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(D),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(D),o[R].add(f),o[S].add(f),o[L].add(f),c[R].add(p),c[S].add(p),c[L].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let R=0,S=A.length;R<S;++R){let L=A[R],D=L.start,H=L.count;for(let I=D,V=D+H;I<V;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let E=new k,M=new k,b=new k,_=new k;function y(R){b.fromBufferAttribute(s,R),_.copy(b);let S=o[R];E.copy(S),E.sub(b.multiplyScalar(b.dot(S))).normalize(),M.crossVectors(_,S);let D=M.dot(c[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,D)}for(let R=0,S=n.count;R<S;++R)l[R]&&y(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,h=new k,d=new k;if(e)for(let u=0,m=e.count;u<m;u+=3){let g=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),m=0,g=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[m++]}return new cn(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Uc=new k,Mp=new k,Sp=new qe,Bn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Uc.subVectors(n,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sp.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bp=0,jn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=er,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=jc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new k,Fc=new k,Xa=new k,qa=new k,qs=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),qa.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xa),o=qa.dot(this.direction),c=-qa.dot(Xa),l=qa.lengthSq(),h=Math.abs(1-a*a),d,u,m,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fc).addScaledVector(Xa,u),m}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,m=e.z-a.z,g=t.x-a.x,x=t.y-a.y,f=t.z-a.z,p=n.x-a.x,v=n.y-a.y,A=n.z-a.z,E=Math.abs(c),M=Math.abs(l),b=Math.abs(h),_,y,R,S,L,D,H,I,V,X,C,G;if(E>=M&&E>=b?(R=c,D=d,V=g,G=p,c>=0?(_=l,y=h,S=u,L=m,H=x,I=f,X=v,C=A):(_=h,y=l,S=m,L=u,H=f,I=x,X=A,C=v)):M>=b?(R=l,D=u,V=x,G=v,l>=0?(_=h,y=c,S=m,L=d,H=f,I=g,X=A,C=p):(_=c,y=h,S=d,L=m,H=g,I=f,X=p,C=A)):(R=h,D=m,V=f,G=A,h>=0?(_=c,y=l,S=d,L=u,H=g,I=x,X=p,C=v):(_=l,y=c,S=u,L=d,H=x,I=g,X=v,C=p)),R===0)return null;let F=_/R,U=y/R,W=1/R,te=S-F*D,xe=L-U*D,z=H-F*V,ie=I-U*V,$=X-F*G,K=C-U*G,j=$*ie-K*z,ce=te*K-xe*$,Xe=z*xe-ie*te;if(s){if(j<0||ce<0||Xe<0)return null}else if((j<0||ce<0||Xe<0)&&(j>0||ce>0||Xe>0))return null;let Ee=j+ce+Xe;if(Ee===0)return null;let Ce=W*(j*D+ce*V+Xe*G);return(Ee>0?Ce<0:Ce>0)?null:this.at(Ce/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pn=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bu=new ct,Ki=new qs,Ya=new Qn,wu=new k,Za=new k,Ja=new k,$a=new k,Oc=new k,Ka=new k,Tu=new k,Qa=new k,ft=class extends zt{constructor(e=new St,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Oc.fromBufferAttribute(d,e),a?Ka.addScaledVector(Oc,h):Ka.addScaledVector(Oc.sub(t),h))}t.add(Ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Ya.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Ya,wu)===null||Ki.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(bu.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let f=u[g],p=a[f.materialIndex],v=Math.max(f.start,m.start),A=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=v,M=A;E<M;E+=3){let b=o.getX(E),_=o.getX(E+1),y=o.getX(E+2);s=ja(this,p,e,n,l,h,d,b,_,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){let v=o.getX(f),A=o.getX(f+1),E=o.getX(f+2);s=ja(this,a,e,n,l,h,d,v,A,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let f=u[g],p=a[f.materialIndex],v=Math.max(f.start,m.start),A=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=v,M=A;E<M;E+=3){let b=E,_=E+1,y=E+2;s=ja(this,p,e,n,l,h,d,b,_,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=g,p=x;f<p;f+=3){let v=f,A=f+1,E=f+2;s=ja(this,a,e,n,l,h,d,v,A,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function wp(i,e,t,n,s,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Fi,o),c===null)return null;Qa.copy(o),Qa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Qa);return l<t.near||l>t.far?null:{distance:l,point:Qa.clone(),object:i}}function ja(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Za),i.getVertexPosition(c,Ja),i.getVertexPosition(l,$a);let h=wp(i,e,t,n,Za,Ja,$a,Tu);if(h){let d=new k;Ii.getBarycoord(Tu,Za,Ja,$a,d),s&&(h.uv=Ii.getInterpolatedAttribute(s,o,c,l,d,new Ne)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,c,l,d,new Ne)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,c,l,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new k,materialIndex:0};Ii.getNormal(Za,Ja,$a,u.normal),h.face=u,h.barycoord=d}return h}var kr=class extends fn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=jt,h=jt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new ct,Eu=new ct,eo=[],Au=new Kn,Tp=new ct,Ar=new ft,Cr=new Qn,Gr=class extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Au.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Cr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Eu.multiplyMatrices(n,Fs),Ar.matrixWorld=Eu,Ar.raycast(e,eo);for(let a=0,o=eo.length;a<o;a++){let c=eo[a];c.instanceId=r,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,$o,Ln));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new Qn,Ep=new Ne(.5,.5),to=new k,Li=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],m=r[7],g=r[8],x=r[9],f=r[10],p=r[11],v=r[12],A=r[13],E=r[14],M=r[15];if(s[0].setComponents(l-a,m-h,p-g,M-v).normalize(),s[1].setComponents(l+a,m+h,p+g,M+v).normalize(),s[2].setComponents(l+o,m+d,p+x,M+A).normalize(),s[3].setComponents(l-o,m-d,p-x,M-A).normalize(),n)s[4].setComponents(c,u,f,E).normalize(),s[5].setComponents(l-c,m-u,p-f,M-E).normalize();else if(s[4].setComponents(l-c,m-u,p-f,M-E).normalize(),t===Pn)s[5].setComponents(l+c,m+u,p+f,M+E).normalize();else if(t===Gs)s[5].setComponents(c,u,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=Ep.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cu=new ct,To=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Cu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Li),n[s].setFromProjectionMatrix(Cu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Li),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ys=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eo=new k,Ao=new k,Ru=new ct,Rr=new qs,no=new Qn,Bc=new k,Pu=new k,Co=class extends zt{constructor(e=new St,t=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eo.fromBufferAttribute(t,s-1),Ao.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(Ao);e.setAttribute("lineDistance",new $e(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;Ru.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=m,f=g-1;x<f;x+=l){let p=h.getX(x),v=h.getX(x+1),A=io(this,e,Rr,c,p,v,x);A&&t.push(A)}if(this.isLineLoop){let x=h.getX(g-1),f=h.getX(m),p=io(this,e,Rr,c,x,f,g-1);p&&t.push(p)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=m,f=g-1;x<f;x+=l){let p=io(this,e,Rr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=io(this,e,Rr,c,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function io(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),Ao.fromBufferAttribute(o,r),t.distanceSqToSegment(Eo,Ao,Bc,Pu)>n)return;Bc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Bc);if(!(l<e.near||l>e.far))return{distance:l,point:Pu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Iu=new k,Lu=new k,Hr=class extends Co{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Iu.fromBufferAttribute(t,s),Lu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Iu.distanceTo(Lu);e.setAttribute("lineDistance",new $e(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ts=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Du=new ct,Wc=new qs,so=new Qn,ro=new k,Zs=class extends zt{constructor(e=new St,t=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;Du.copy(s).invert(),Wc.copy(e.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=u,x=m;g<x;g++){let f=l.getX(g);ro.fromBufferAttribute(d,f),Nu(ro,f,c,s,e,t,this)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=u,x=m;g<x;g++)ro.fromBufferAttribute(d,g),Nu(ro,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nu(i,e,t,n,s,r,a){let o=Wc.distanceSqToPoint(i);if(o<t){let c=new k;Wc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wr=class extends fn{constructor(e=[],t=ls,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xr=class extends fn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends fn{constructor(e,t,n=Vn,s,r,a,o=jt,c=jt,l,h=mi,d=1){if(h!==mi&&h!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},qr=class extends _i{constructor(e,t=Vn,n=ls,s,r,a=jt,o=jt,c,l=mi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yr=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dt=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2));function g(x,f,p,v,A,E,M,b,_,y,R){let S=E/_,L=M/y,D=E/2,H=M/2,I=b/2,V=_+1,X=y+1,C=0,G=0,F=new k;for(let U=0;U<X;U++){let W=U*L-H;for(let te=0;te<V;te++){let xe=te*S-D;F[x]=xe*v,F[f]=W*A,F[p]=I,l.push(F.x,F.y,F.z),F[x]=0,F[f]=0,F[p]=b>0?1:-1,h.push(F.x,F.y,F.z),d.push(te/_),d.push(1-U/y),C+=1}}for(let U=0;U<y;U++)for(let W=0;W<_;W++){let te=u+W+V*U,xe=u+W+V*(U+1),z=u+(W+1)+V*(U+1),ie=u+(W+1)+V*U;c.push(te,xe,ie),c.push(xe,z,ie),G+=6}o.addGroup(m,G,R),m+=G,u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bn=class i extends St{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,m=2*d+u,g=n*2+r,x=s+1,f=new k,p=new k;for(let v=0;v<=g;v++){let A=0,E=0,M=0,b=0;if(v<=n){let R=v/n,S=R*Math.PI/2;E=-h-e*Math.cos(S),M=e*Math.sin(S),b=-e*Math.cos(S),A=R*d}else if(v<=n+r){let R=(v-n)/r;E=-h+R*t,M=e,b=0,A=d+R*u}else{let R=(v-n-r)/n,S=R*Math.PI/2;E=h+e*Math.sin(S),M=e*Math.cos(S),b=e*Math.sin(S),A=d+u+R*d}let _=Math.max(0,Math.min(1,A/m)),y=0;v===0?y=.5/s:v===g&&(y=-.5/s);for(let R=0;R<=s;R++){let S=R/s,L=S*Math.PI*2,D=Math.sin(L),H=Math.cos(L);p.x=-M*H,p.y=E,p.z=M*D,o.push(p.x,p.y,p.z),f.set(-M*H,b,M*D),f.normalize(),c.push(f.x,f.y,f.z),l.push(S+y,_)}if(v>0){let R=(v-1)*x;for(let S=0;S<s;S++){let L=R+S,D=R+S+1,H=v*x+S,I=v*x+S+1;a.push(L,D,H),a.push(D,I,H)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ns=class i extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new k,h=new Ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let m=n+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wt=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],g=0,x=[],f=n/2,p=0;v(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(m,2));function v(){let E=new k,M=new k,b=0,_=(t-e)/n;for(let y=0;y<=r;y++){let R=[],S=y/r,L=S*(t-e)+e;for(let D=0;D<=s;D++){let H=D/s,I=H*c+o,V=Math.sin(I),X=Math.cos(I);M.x=L*V,M.y=-S*n+f,M.z=L*X,d.push(M.x,M.y,M.z),E.set(V,_,X).normalize(),u.push(E.x,E.y,E.z),m.push(H,1-S),R.push(g++)}x.push(R)}for(let y=0;y<s;y++)for(let R=0;R<r;R++){let S=x[R][y],L=x[R+1][y],D=x[R+1][y+1],H=x[R][y+1];(e>0||R!==0)&&(h.push(S,L,H),b+=3),(t>0||R!==r-1)&&(h.push(L,D,H),b+=3)}l.addGroup(p,b,0),p+=b}function A(E){let M=g,b=new Ne,_=new k,y=0,R=E===!0?e:t,S=E===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,f*S,0),u.push(0,S,0),m.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let I=D/s*c+o,V=Math.cos(I),X=Math.sin(I);_.x=R*X,_.y=f*S,_.z=R*V,d.push(_.x,_.y,_.z),u.push(0,S,0),b.x=V*.5+.5,b.y=X*.5*S+.5,m.push(b.x,b.y),g++}for(let D=0;D<s;D++){let H=M+D,I=L+D;E===!0?h.push(I,I+1,H):h.push(I+1,I,H),y+=3}l.addGroup(p,y,E===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zr=class i extends Wt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ro=class i extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new k,E=new k,M=new k;for(let b=0;b<t.length;b+=3)m(t[b+0],A),m(t[b+1],E),m(t[b+2],M),c(A,E,M,v)}function c(v,A,E,M){let b=M+1,_=[];for(let y=0;y<=b;y++){_[y]=[];let R=v.clone().lerp(E,y/b),S=A.clone().lerp(E,y/b),L=b-y;for(let D=0;D<=L;D++)D===0&&y===b?_[y][D]=R:_[y][D]=R.clone().lerp(S,D/L)}for(let y=0;y<b;y++)for(let R=0;R<2*(b-y)-1;R++){let S=Math.floor(R/2);R%2===0?(u(_[y][S+1]),u(_[y+1][S]),u(_[y][S])):(u(_[y][S+1]),u(_[y+1][S+1]),u(_[y+1][S]))}}function l(v){let A=new k;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(v),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function h(){let v=new k;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let E=f(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;a.push(E,1-M)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let A=a[v+0],E=a[v+2],M=a[v+4],b=Math.max(A,E,M),_=Math.min(A,E,M);b>.9&&_<.1&&(A<.2&&(a[v+0]+=1),E<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function m(v,A){let E=v*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function g(){let v=new k,A=new k,E=new k,M=new k,b=new Ne,_=new Ne,y=new Ne;for(let R=0,S=0;R<r.length;R+=9,S+=6){v.set(r[R+0],r[R+1],r[R+2]),A.set(r[R+3],r[R+4],r[R+5]),E.set(r[R+6],r[R+7],r[R+8]),b.set(a[S+0],a[S+1]),_.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),M.copy(v).add(A).add(E).divideScalar(3);let L=f(M);x(b,S+0,v,L),x(_,S+2,A,L),x(y,S+4,E,L)}}function x(v,A,E,M){M<0&&v.x===1&&(a[A]=v.x-1),E.x===0&&E.z===0&&(a[A]=M/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Jr=class i extends Ro{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},$r=class i extends St{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,d=new k,u=new Ne,m=new k,g=new k,x=new k,f=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,m.x=p*1,m.y=-f,m.z=p*0,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:f=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(g)}for(let v=0;v<=t;v++){let A=n+v*h*s,E=Math.sin(A),M=Math.cos(A);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*E,d.y=e[b].y,d.z=e[b].x*M,a.push(d.x,d.y,d.z),u.x=v/t,u.y=b/(e.length-1),o.push(u.x,u.y);let _=c[3*b+0]*E,y=c[3*b+1],R=c[3*b+0]*M;l.push(_,y,R)}}for(let v=0;v<t;v++)for(let A=0;A<e.length-1;A++){let E=A+v*e.length,M=E,b=E+e.length,_=E+e.length+1,y=E+1;r.push(M,b,y),r.push(_,y,b)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var zn=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,m=[],g=[],x=[],f=[];for(let p=0;p<h;p++){let v=p*u-a;for(let A=0;A<l;A++){let E=A*d-r;g.push(E,-v,0),x.push(0,0,1),f.push(A/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let A=v+l*p,E=v+l*(p+1),M=v+1+l*(p+1),b=v+1+l*p;m.push(A,E,b),m.push(E,M,b)}this.setIndex(m),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var mn=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new k,u=new k,m=[],g=[],x=[],f=[];for(let p=0;p<=n;p++){let v=[],A=p/n,E=a+A*o,M=e*Math.cos(E),b=Math.sqrt(e*e-M*M),_=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let y=0;y<=t;y++){let R=y/t,S=s+R*r;d.x=-b*Math.cos(S),d.y=M,d.z=b*Math.sin(S),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(R+_,1-A),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let A=h[p][v+1],E=h[p][v],M=h[p+1][v],b=h[p+1][v+1];(p!==0||a>0)&&m.push(A,E,b),(p!==n-1||c<Math.PI)&&m.push(E,M,b)}this.setIndex(m),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var is=class i extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new k,m=new k,g=new k;for(let x=0;x<=n;x++){let f=a+x/n*o;for(let p=0;p<=s;p++){let v=p/s*r;m.x=(e+t*Math.cos(f))*Math.cos(v),m.y=(e+t*Math.cos(f))*Math.sin(v),m.z=t*Math.sin(f),l.push(m.x,m.y,m.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(m,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let f=1;f<=s;f++){let p=(s+1)*x+f-1,v=(s+1)*(x-1)+f-1,A=(s+1)*(x-1)+f,E=(s+1)*x+f;c.push(p,v,E),c.push(v,A,E)}this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Uu(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=hs(i[t]);for(let s in n)e[s]=n[s]}return e}function Uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ap(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Wn={clone:hs,merge:hn},Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ei=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Po=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Io=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ao(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Lo=class extends Di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gc:r=e,o=2*t-n;break;case Hc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gc:a=e,c=2*n-t;break;case Hc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,f=x*g,p=-u*f+2*u*x-u*g,v=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*g+1,A=(-1-m)*f+(1.5+m)*x+.5*g,E=m*f-m*x;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+v*a[l+M]+A*a[c+M]+E*a[d+M];return r}},Do=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},No=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Uo=class extends Di{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),x=1-g;for(let f=0;f!==o;++f)r[f]=a[l+f]*x+a[c+f]*g;return r}let u=o*2,m=e-1;for(let g=0;g!==o;++g){let x=a[l+g],f=a[c+g],p=m*u+g*2,v=d[p],A=d[p+1],E=e*u+g*2,M=h[E],b=h[E+1],_=Ip(n,t,v,M,s);r[g]=Ad(_,x,A,b,f)}return r}};function Ad(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Pp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ip(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ad(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Pp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ao(e.settings)&&(n.settings={inTangents:Os(e.settings.inTangents,Array),outTangents:Os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Uo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ao(this.settings)&&(Fu(this.settings.inTangents,e),Fu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ao(this.settings)&&(Ou(this.settings.inTangents,e),Ou(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&sp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===co,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ao(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ou(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=yo;var Ni=class extends wn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Ir;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Fo.prototype.ValueTypeName="color";var Oo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Oo.prototype.ValueTypeName="number";var Bo=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)$n.slerpFlat(r,0,a,l-o,a,l,c);return r}},Kr=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends wn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Ir;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};zo.prototype.ValueTypeName="vector";var ko=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cd=new ko,Vo=class{constructor(e){this.manager=e!==void 0?e:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qr=class extends $s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zc=new ct,Bu=new k,zu=new k,jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new k,lo=new $n,Zn=new k,ea=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,lo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,lo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new k,ku=new Ne,Vu=new Ne,ln=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,ku,Vu),t.subVectors(Vu,ku)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_c*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Xc=class extends jr{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},ta=class extends $s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qc=class extends jr{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new qc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bs=-90,zs=1,Qs=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Bs,zs,e,t);s.layers=this.layers,this.add(s);let r=new ln(Bs,zs,e,t);r.layers=this.layers,this.add(r);let a=new ln(Bs,zs,e,t);a.layers=this.layers,this.add(a);let o=new ln(Bs,zs,e,t);o.layers=this.layers,this.add(o);let c=new ln(Bs,zs,e,t);c.layers=this.layers,this.add(c);let l=new ln(Bs,zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Go=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},na=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Lp(){this._document.hidden===!1&&this.reset()}var mh="\\[\\]\\.:\\/",Dp=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Np="[^"+mh.replace("\\.","")+"]",Up=/((?:WC+[\/:])*)/.source.replace("WC",gh),Fp=/(WCOD+)?/.source.replace("WCOD",Np),Op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),zp=new RegExp("^"+Up+Fp+Op+Bp+"$"),kp=["material","materials","bones","map"],Yc=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(e){let t=zp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Yc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var Sh=class Sh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Sh.prototype.isMatrix2=!0;var Zc=Sh;function _h(i,e,t,n){let s=Vp(n);switch(t){case ah:return i*e;case $o:return i*e/s.components*s.byteLength;case Ko:return i*e/s.components*s.byteLength;case Oi:return i*e*2/s.components*s.byteLength;case Qo:return i*e*2/s.components*s.byteLength;case oh:return i*e*3/s.components*s.byteLength;case Gn:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(i,16)*Math.max(e,8)/4;case el:case nl:return Math.max(i,8)*Math.max(e,8)/2;case sl:case rl:case ol:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:case pa:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wl:case Tl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Al:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ma:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vp(i){switch(i){case _n:case nh:return{byteLength:1,components:1};case nr:case ih:case qt:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Vn:case Yo:case Ln:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $d(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hp(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let x=d[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Gm=`
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
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
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform float backgroundBlurriness;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:Kp,batching_pars_vertex:Qp,batching_vertex:jp,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:vm,colorspace_pars_fragment:ym,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:bm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Um,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:Am,fog_fragment:Cm,fog_pars_fragment:Rm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Nm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:km,lights_physical_pars_fragment:Vm,lights_fragment_begin:Gm,lights_fragment_maps:Hm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:e0,metalnessmap_pars_fragment:t0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:x0,premultiplied_alpha_fragment:v0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:E0,shadowmap_vertex:A0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:N0,tonemapping_fragment:U0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:k0,uv_vertex:V0,worldpos_vertex:G0,background_vert:H0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:J0,depth_frag:$0,distance_vert:K0,distance_frag:Q0,equirect_vert:j0,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:ag,meshmatcap_vert:og,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:xg,shadow_vert:vg,shadow_frag:yg,sprite_vert:Mg,sprite_frag:Sg},be={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ii={basic:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:hn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:hn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:hn([be.points,be.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:hn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:hn([be.common,be.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:hn([be.sprite,be.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:hn([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:hn([be.lights,be.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ii.physical={uniforms:hn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ll={r:0,b:0,g:0},bg=new ct,Kd=new qe;Kd.set(-1,0,0,0,1,0,0,0,1);function wg(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function m(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let E=v.backgroundBlurriness>0;A=e.get(A,E)}return A}function g(v){let A=!1,E=m(v);E===null?f(a,o):E&&E.isColor&&(f(E,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,A){let E=m(A);E&&E.isCubeTexture?(l===void 0&&(l=new ft(new Dt(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:hs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kd),l.material.toneMapped=nt.getTransfer(E.colorSpace)!==lt,(h!==E||d!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ft(new zn(2,2),new kt({name:"BackgroundMaterial",uniforms:hs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=nt.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,A){v.getRGB(Ll,ph(i)),t.buffers.color.setClear(Ll.r,Ll.g,Ll.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,f(a,o)},render:g,addToRenderList:x,dispose:p}}function Tg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,D,H,I,V){let X=!1,C=d(L,I,H,D);r!==C&&(r=C,l(r.object)),X=m(L,I,H,V),X&&g(L,I,H,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(L,D,H,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,D,H,I){let V=I.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let C=L.isInstancedMesh===!0?L.id:0,G=X[C];G===void 0&&(G={},X[C]=G);let F=G[H.id];F===void 0&&(F={},G[H.id]=F);let U=F[V];return U===void 0&&(U=u(c()),F[V]=U),U}function u(L){let D=[],H=[],I=[];for(let V=0;V<t;V++)D[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,D,H,I){let V=r.attributes,X=D.attributes,C=0,G=H.getAttributes();for(let F in G)if(G[F].location>=0){let W=V[F],te=X[F];if(te===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),W===void 0||W.attribute!==te||te&&W.data!==te.data)return!0;C++}return r.attributesNum!==C||r.index!==I}function g(L,D,H,I){let V={},X=D.attributes,C=0,G=H.getAttributes();for(let F in G)if(G[F].location>=0){let W=X[F];W===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));let te={};te.attribute=W,W&&W.data&&(te.data=W.data),V[F]=te,C++}r.attributes=V,r.attributesNum=C,r.index=I}function x(){let L=r.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function f(L){p(L,0)}function p(L,D){let H=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;H[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),V[L]!==D&&(i.vertexAttribDivisor(L,D),V[L]=D)}function v(){let L=r.newAttributes,D=r.enabledAttributes;for(let H=0,I=D.length;H<I;H++)D[H]!==L[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function A(L,D,H,I,V,X,C){C===!0?i.vertexAttribIPointer(L,D,H,V,X):i.vertexAttribPointer(L,D,H,I,V,X)}function E(L,D,H,I){x();let V=I.attributes,X=H.getAttributes(),C=D.defaultAttributeValues;for(let G in X){let F=X[G];if(F.location>=0){let U=V[G];if(U===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),U!==void 0){let W=U.normalized,te=U.itemSize,xe=e.get(U);if(xe===void 0)continue;let z=xe.buffer,ie=xe.type,$=xe.bytesPerElement,K=ie===i.INT||ie===i.UNSIGNED_INT||U.gpuType===Yo;if(U.isInterleavedBufferAttribute){let j=U.data,ce=j.isInterleavedBuffer===!0?j.stride:j.itemSize,Xe=U.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let Ee=0;Ee<F.locationSize;Ee++)p(F.location+Ee,j.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<F.locationSize;Ee++)f(F.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,z);for(let Ee=0;Ee<F.locationSize;Ee++)A(F.location+Ee,te/F.locationSize,ie,W,ce*$,(Xe+te/F.locationSize*Ee)*$,K)}else{if(U.isInstancedBufferAttribute){for(let j=0;j<F.locationSize;j++)p(F.location+j,U.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let j=0;j<F.locationSize;j++)f(F.location+j);i.bindBuffer(i.ARRAY_BUFFER,z);for(let j=0;j<F.locationSize;j++)A(F.location+j,te/F.locationSize,ie,W,te*$,te/F.locationSize*j*$,K)}}else if(C!==void 0){let W=C[G];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(F.location,W);break;case 3:i.vertexAttrib3fv(F.location,W);break;case 4:i.vertexAttrib4fv(F.location,W);break;default:i.vertexAttrib1fv(F.location,W)}}}}v()}function M(){R();for(let L in n){let D=n[L];for(let H in D){let I=D[H];for(let V in I){let X=I[V];for(let C in X)h(X[C].object),delete X[C];delete I[V]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let H in D){let I=D[H];for(let V in I){let X=I[V];for(let C in X)h(X[C].object),delete X[C];delete I[V]}}delete n[L.id]}function _(L){for(let D in n){let H=n[D];for(let I in H){let V=H[I];if(V[L.id]===void 0)continue;let X=V[L.id];for(let C in X)h(X[C].object),delete X[C];delete V[L.id]}}}function y(L){for(let D in n){let H=n[D],I=L.isInstancedMesh===!0?L.id:0,V=H[I];if(V!==void 0){for(let X in V){let C=V[X];for(let G in C)h(C[G].object),delete C[G];delete V[X]}delete H[I],Object.keys(H).length===0&&delete n[D]}}}function R(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:f,disableUnusedAttributes:v}}function Eg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Gn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let y=_===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==_n&&_!==Ln&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:E,maxSamples:M,samples:b}}function Cg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let v=r?0:n,A=v*4,E=p.clippingState||null;c.value=E,E=h(g,u,A,m);for(let M=0;M!==A;++M)E[M]=t[M];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,g){let x=d!==null?d.length:0,f=null;if(x!==0){if(f=c.value,g!==!0||f===null){let p=m+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,E=m;A!==x;++A,E+=4)a.copy(d[A]).applyMatrix4(v,o),a.normal.toArray(f,E),f[E+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}var va=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:xi});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=dn),new Qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Rd=256,Rg=3,Pg=20,Qd=256,jd=16,Ig=3,Lg=new k,Dg=new ke,sr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qs(1,10,null),this._boxMesh=new ft(new Dt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Dg));let f=new Qs(n,s,h);return f.position.copy(o),f.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rd,Td(e))}_fromTexture(e,t){e.mapping===ls||e.mapping===tr?this._setSize(e.image.length===0?Rd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Pd(e,!1,!1),n=Math.log2(e)-Rg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Pd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ls||e.mapping===tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Id()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ng(),this._integrationMaterial=Ug());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/jd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Ig)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Qd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Pd(i,e,t){return new va(i,{minFilter:kn,generateMipmaps:e,type:qt,colorSpace:Lr,depthBuffer:t})}function ya(i,e,t){return new kt({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Xt,blending:xi,depthTest:!1,depthWrite:!1})}function Ng(){return ya("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qd}u

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
	`)}function Ug(){return ya("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jd}},`

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
	`)}function Fg(){return ya("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pg}
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
	`)}function Id(){return ya("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ld(){return ya("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Og(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Wo||m===Xo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new va(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,g=m===Wo||m===Xo,x=m===ls||m===tr;if(g||x){let f=t.get(u),p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new sr(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new sr(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Wo?u.mapping=ls:m===Xo&&(u.mapping=tr),u}function c(u){let m=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&m++;return m===g}function l(u){let m=u.target;m.removeEventListener("dispose",l);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Bg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pr("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let f in g.attributes)e.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let f in x)e.update(x[f],i.ARRAY_BUFFER)}function d(g){let x=g.index,f=g.attributes.position,p=0;if(f===void 0)return;let v=x!==null?x.array.length:f.array.length/3-1,A=f.count>=65535?zr:Br,E=new A(Math.ceil(v/3)*6,1),M=E.array;if(x!==null){let _=x.array;p=x.version;for(let y=0,R=0;y<v;y+=3){let S=_[y+0],L=_[y+1],D=_[y+2];M[R++]=S,M[R++]=L,M[R++]=L,M[R++]=D,M[R++]=D,M[R++]=S}}else{p=f.version;for(let _=0,y=0;_<v;_+=3){let R=_+0,S=_+1,L=_+2;M[y++]=R,M[y++]=S,M[y++]=S,M[y++]=L,M[y++]=L,M[y++]=R}}E.version=p;let b=r.get(g);b&&e.remove(b),r.set(g,E)}function u(g){let x=r.get(g);if(x){let f=g.index;f!==null&&x.version<f.version&&d(g)}else d(g);return r.get(g)}function m(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function kg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),t.update(u,n,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let x=0;for(let f=0;f<m;f++)x+=u[f];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,e,t){let n=new WeakMap,s=new wt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let R=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;m===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let E=o.attributes.position.count*A,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let b=new Float32Array(E*M*4*d),_=new Ur(b,E,M,d);_.type=Ln,_.needsUpdate=!0;let y=A*4;for(let S=0;S<d;S++){let L=f[S],D=p[S],H=v[S],I=E*M*4*S;for(let V=0;V<L.count;V++){let X=V*y;m===!0&&(s.fromBufferAttribute(L,V),b[I+X+0]=s.x,b[I+X+1]=s.y,b[I+X+2]=s.z,b[I+X+3]=0),g===!0&&(s.fromBufferAttribute(D,V),b[I+X+4]=s.x,b[I+X+5]=s.y,b[I+X+6]=s.z,b[I+X+7]=0),x===!0&&(s.fromBufferAttribute(H,V),b[I+X+8]=s.x,b[I+X+9]=s.y,b[I+X+10]=s.z,b[I+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Ne(E,M)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hg(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Wg={[ia]:"LINEAR_TONE_MAPPING",[sa]:"REINHARD_TONE_MAPPING",[ra]:"CINEON_TONE_MAPPING",[os]:"ACES_FILMIC_TONE_MAPPING",[oa]:"AGX_TONE_MAPPING",[la]:"NEUTRAL_TONE_MAPPING",[aa]:"CUSTOM_TONE_MAPPING"};function Xg(i,e,t,n,s,r){let a=new Lt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new St;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let d=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ft(h,d),m=new ss(-1,1,1,-1,0,1),g=null,x=null,f=!1,p,v=null,A=[],E=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let _=0;_<A.length;_++){let y=A[_];y.setSize&&y.setSize(M,b)}},this.setEffects=function(M){A=M,E=A.length>0&&A[0].isRenderPass===!0;let b=a.width,_=a.height;A.length>0&&o===null&&(o=new Lt(b,_,{type:qt,depthBuffer:!1,stencilBuffer:!1}),c=new Lt(b,_,{type:qt,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&A.some(R=>R.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&l===null&&(l=new _i(b,_),r===!0&&(l.format=yi,l.type=cs)),a.dispose(),a.depthTexture=y?l:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let R=0;R<A.length;R++){let S=A[R];S.setSize&&S.setSize(b,_),y&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(l)}},this.begin=function(M,b){if(f||M.toneMapping===ti&&A.length===0)return!1;if(v=b,b!==null){let _=b.width,y=b.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return E===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=ti,!0},this.hasRenderPass=function(){return E},this.end=function(M,b){M.toneMapping=p,f=!0;let _=a,y=o;for(let R=0;R<A.length;R++){let S=A[R];S.enabled!==!1&&(S.render(M,y,_,b),S.needsSwap!==!1&&(_=y,y=y===o?c:o))}if(g!==M.outputColorSpace||x!==M.toneMapping){g=M.outputColorSpace,x=M.toneMapping,d.defines={},nt.getTransfer(g)===lt&&(d.defines.SRGB_TRANSFER="");let R=Wg[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(v),M.render(u,m),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var ef=new fn,tf=new _i(1,1),nf=new qr(1),sf=new Ur,rf=new wo,af=new Wr,Dd=[],Nd=[],Ud=new Float32Array(16),Fd=new Float32Array(9),Od=new Float32Array(4);function rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dd[s];if(r===void 0&&(r=new Float32Array(s),Dd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ul(i,e){let t=Nd[e];t===void 0&&(t=new Int32Array(e),Nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function $g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Od.set(n),i.uniformMatrix2fv(this.addr,!1,Od),Zt(t,n)}}function Kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Fd.set(n),i.uniformMatrix3fv(this.addr,!1,Fd),Zt(t,n)}}function Qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Ud.set(n),i.uniformMatrix4fv(this.addr,!1,Ud),Zt(t,n)}}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Fl(i){return i.version===0&&(i.compareFunction=hh,i.needsUpdate=!0),i}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Fl(tf):r=ef,t.setTexture2D(e||r,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rf,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Fl(nf):r=af,t.setTextureCube(e||r,s)}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sf,s)}function u_(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return $g;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}function d_(i,e){i.uniform1fv(this.addr,e)}function f_(i,e){let t=rr(e,this.size,2);i.uniform2fv(this.addr,t)}function p_(i,e){let t=rr(e,this.size,3);i.uniform3fv(this.addr,t)}function m_(i,e){let t=rr(e,this.size,4);i.uniform4fv(this.addr,t)}function g_(i,e){let t=rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function __(i,e){let t=rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function x_(i,e){let t=rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v_(i,e){i.uniform1iv(this.addr,e)}function y_(i,e){i.uniform2iv(this.addr,e)}function M_(i,e){i.uniform3iv(this.addr,e)}function S_(i,e){i.uniform4iv(this.addr,e)}function b_(i,e){i.uniform1uiv(this.addr,e)}function w_(i,e){i.uniform2uiv(this.addr,e)}function T_(i,e){i.uniform3uiv(this.addr,e)}function E_(i,e){i.uniform4uiv(this.addr,e)}function A_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fl(tf):a=ef;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function C_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rf,r[a])}function R_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Fl(nf):a=af;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function P_(i,e,t){let n=this.cache,s=e.length,r=Ul(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sf,r[a])}function I_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return b_;case 36294:return w_;case 36295:return T_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}var Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u_(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=I_(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function Bd(i,e){i.seq.push(e),i.map[e.id]=e}function L_(i,e,t){let n=i.name,s=n.length;for(bh.lastIndex=0;;){let r=bh.exec(n),a=bh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Bd(t,l===void 0?new Th(o,i,e):new Eh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ah(o),Bd(t,d)),t=d}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);L_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function zd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var D_=37297,N_=0;function U_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var kd=new qe;function F_(i){nt._getMatrix(kd,nt.workingColorSpace,i);let e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+U_(i.getShaderSource(e),o)}else return r}function O_(i,e){let t=F_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var B_={[ia]:"Linear",[sa]:"Reinhard",[ra]:"Cineon",[os]:"ACESFilmic",[oa]:"AgX",[la]:"Neutral",[aa]:"Custom"};function z_(i,e){let t=B_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dl=new k;function k_(){nt.getLuminanceCoefficients(Dl);let i=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function G_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xa(i){return i!==""}function Gd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(W_,X_)}function X_(i,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ch(t)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(i){return i.replace(q_,Y_)}function Y_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Z_={[rs]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function J_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $_={[tr]:"ENVMAP_MODE_REFRACTION"};function K_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Q_={[eh]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function j_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Q_[i.combine]||"ENVMAP_BLENDING_NONE"}function ex(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=J_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=K_(t),d=j_(t),u=V_(t),m=G_(r),g=s.createProgram(),x,f,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xa).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xa).join(`
`),f.length>0&&(f+=`
`)):(x=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),f=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?et.tonemapping_pars_fragment:"",t.toneMapping!==ti?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),k_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Ch(a),a=Gd(a,t),a=Hd(a,t),o=Ch(o),o=Gd(o,t),o=Hd(o,t),a=Wd(a),o=Wd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=p+x+a,A=p+f+o,E=zd(s,s.VERTEX_SHADER,v),M=zd(s,s.FRAGMENT_SHADER,A);s.attachShader(g,E),s.attachShader(g,M),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(S){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(E)||"",H=s.getShaderInfoLog(M)||"",I=L.trim(),V=D.trim(),X=H.trim(),C=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,M);else{let F=Vd(s,E,"vertex"),U=Vd(s,M,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+F+`
`+U)}else I!==""?We("WebGLProgram: Program Info Log:",I):(V===""||X==="")&&(G=!1);G&&(S.diagnostics={runnable:C,programLog:I,vertexShader:{log:V,prefix:x},fragmentShader:{log:X,prefix:f}})}s.deleteShader(E),s.deleteShader(M),_=new ir(s,g),y=H_(s,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,D_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=M,this}var tx=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=tx++,this.code=e,this.usedTimes=0}};function nx(i){return i===Oi||i===pa||i===ma}function ix(i,e,t,n,s,r){let a=new Fr,o=new Rh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,y,R,S,L,D){let H=S.fog,I=L.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?S.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,C=e.get(_.envMap||V,X),G=u[_.type],F=n.precision;_.precision!==null&&(F=n.getMaxPrecision(_.precision),F!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));let U=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=U!==void 0?U.length:0,te=0;I.morphAttributes.position!==void 0&&(te=1),I.morphAttributes.normal!==void 0&&(te=2),I.morphAttributes.color!==void 0&&(te=3);let xe,z,ie,$;if(G){let Se=ii[G];xe=Se.vertexShader,z=Se.fragmentShader}else{xe=_.vertexShader,z=_.fragmentShader;let Se=o.getVertexShaderStage(_),pt=o.getFragmentShaderStage(_);o.update(_,Se,pt),ie=Se.id,$=pt.id}let K=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ce=L.isInstancedMesh===!0,Xe=L.isBatchedMesh===!0,Ee=!!_.map,Ce=!!_.matcap,Fe=!!C,ye=Fe&&C.isPMREMTexture===!0,ut=!!_.aoMap,Pe=!!_.lightMap,De=!!_.bumpMap&&_.wireframe===!1,Te=!!_.normalMap,ze=!!_.displacementMap,Qe=!!_.emissiveMap,yt=!!_.metalnessMap,At=!!_.roughnessMap,Gt=_.anisotropy>0,O=_.clearcoat>0,Ft=_.diffuseRoughness>0,tt=_.dispersion>0,it=_.retroreflectivity>0,ve=_.iridescence>0,Ht=_.sheen>0,He=_.transmission>0,Ze=Gt&&!!_.anisotropyMap,P=O&&!!_.clearcoatMap,w=O&&!!_.clearcoatNormalMap,Y=O&&!!_.clearcoatRoughnessMap,ae=Ft&&!!_.diffuseRoughnessMap,re=ve&&!!_.iridescenceMap,he=ve&&!!_.iridescenceThicknessMap,ge=Ht&&!!_.sheenColorMap,ee=Ht&&!!_.sheenRoughnessMap,ne=!!_.specularMap,fe=!!_.specularColorMap,N=!!_.specularIntensityMap,se=He&&!!_.transmissionMap,Q=He&&!!_.thicknessMap,pe=!!_.gradientMap,le=!!_.alphaMap,ue=_.alphaTest>0,Oe=!!_.alphaHash,je=!!_.extensions,oe=ti;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Ge=ye?C.isCompressedCubeTexture?C.image[0].mipmaps:C.mipmaps:null,Ke={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:xe,fragmentShader:z,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:Xe,batchingColor:Xe&&L._colorsTexture!==null,instancing:ce,instancingColor:ce&&L.instanceColor!==null,instancingMorph:ce&&L.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:Ce,envMap:Fe,envMapMode:Fe&&C.mapping,envMapPMREM:ye,envMapMaxLod:ye?Ge.length-1:null,envMapSize:ye?Ge[0].width:null,aoMap:ut,lightMap:Pe,bumpMap:De,normalMap:Te,displacementMap:ze,emissiveMap:Qe,normalMapObjectSpace:Te&&_.normalMapType===fd,normalMapTangentSpace:Te&&_.normalMapType===Pl,packedNormalMap:Te&&_.normalMapType===Pl&&nx(_.normalMap.format),metalnessMap:yt,roughnessMap:At,anisotropy:Gt,anisotropyMap:Ze,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:w,clearcoatRoughnessMap:Y,diffuseRoughness:Ft,diffuseRoughnessMap:ae,dispersion:tt,retroreflection:it,iridescence:ve,iridescenceMap:re,iridescenceThicknessMap:he,sheen:Ht,sheenColorMap:ge,sheenRoughnessMap:ee,specularMap:ne,specularColorMap:fe,specularIntensityMap:N,transmission:He,transmissionMap:se,thicknessMap:Q,gradientMap:pe,opaque:_.transparent===!1&&_.blending===er&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Oe,combine:_.combine,mapUv:Ee&&m(_.map.channel),aoMapUv:ut&&m(_.aoMap.channel),lightMapUv:Pe&&m(_.lightMap.channel),bumpMapUv:De&&m(_.bumpMap.channel),normalMapUv:Te&&m(_.normalMap.channel),displacementMapUv:ze&&m(_.displacementMap.channel),emissiveMapUv:Qe&&m(_.emissiveMap.channel),metalnessMapUv:yt&&m(_.metalnessMap.channel),roughnessMapUv:At&&m(_.roughnessMap.channel),anisotropyMapUv:Ze&&m(_.anisotropyMap.channel),clearcoatMapUv:P&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(_.sheenRoughnessMap.channel),specularMapUv:ne&&m(_.specularMap.channel),specularColorMapUv:fe&&m(_.specularColorMap.channel),specularIntensityMapUv:N&&m(_.specularIntensityMap.channel),transmissionMapUv:se&&m(_.transmissionMap.channel),thicknessMapUv:Q&&m(_.thicknessMap.channel),alphaMapUv:le&&m(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||Gt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ee||le),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:te,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Qe&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function x(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)y.push(R),y.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(f(y,_),p(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function f(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function p(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let y=u[_.type],R;if(y){let S=ii[y];R=Wn.clone(S.uniforms)}else R=_.uniforms;return R}function A(_,y){let R=h.get(y);return R!==void 0?++R.usedTimes:(R=new ex(i,y,_,s),l.push(R),h.set(y,R)),R}function E(_){if(--_.usedTimes===0){let y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:M,programs:l,dispose:b}}function sx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function qd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,x,f,p){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:f,group:p},i[e]=v):(v.id=u.id,v.object=u,v.geometry=m,v.material=g,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=f,v.group=p),e++,v}function c(u,m,g,x,f,p,v){v.reversedDepth===!0&&(f=-f);let A=o(u,m,g,x,f,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function l(u,m,g,x,f,p){let v=o(u,m,g,x,f,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,m){t.length>1&&t.sort(u||rx),n.length>1&&n.sort(m||qd),s.length>1&&s.sort(m||qd)}function d(){for(let u=e,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function ax(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Yd,i.set(n,[a])):s>=r.length?(a=new Yd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new ke};break;case"SpotLight":t={position:new k,direction:new k,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cx=0;function hx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ux(i){let e=new ox,t=lx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new ct,a=new ct;function o(l){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,g=0,x=0,f=0,p=0,v=0,A=0,E=0,M=0,b=0,_=0,y=0,R=0,S=0;l.sort(hx);for(let D=0,H=l.length;D<H;D++){let I=l[D],V=I.color,X=I.intensity,C=I.distance,G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Oi?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*X,d+=V.g*X,u+=V.b*X;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],X);S++}else if(I.isSunLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,W=t.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[g]=W,n.sunShadowMap[g]=G;let te=U.getViewportCount();for(let xe=0;xe<te;xe++)n.sunShadowMatrix[x+xe]=U.getMatrix(xe),n.sunShadowCascade[x+xe]=U._cascadeData[xe];x+=te,g++}n.sun[m]=F,m++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let U=I.shadow,W=t.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=F,f++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(V).multiplyScalar(X),F.distance=C,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[v]=F;let U=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,U.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[v]=U.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=G,_++}v++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(V).multiplyScalar(X),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=F,A++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let U=I.shadow,W=t.get(I);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,W.shadowCameraNear=U.camera.near,W.shadowCameraFar=U.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=F,p++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(X),F.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[E]=F,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==m||L.directionalLength!==f||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==A||L.hemiLength!==E||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==_||L.numSpotMaps!==y||L.numLightProbes!==S)&&(n.sun.length=m,n.directional.length=f,n.spot.length=v,n.rectArea.length=A,n.point.length=p,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,L.sunLength=m,L.directionalLength=f,L.pointLength=p,L.spotLength=v,L.rectAreaLength=A,L.hemiLength=E,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=_,L.numSpotMaps=y,L.numLightProbes=S,n.version=cx++)}function c(l,h){let d=0,u=0,m=0,g=0,x=0,f=0,p=h.matrixWorldInverse;for(let v=0,A=l.length;v<A;v++){let E=l[v];if(E.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),d++}else if(E.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(E.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),f++}}}return{setup:o,setupView:c,state:n}}function Zd(i){let e=new ux(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function dx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Zd(i),e.set(s,[o])):r>=a.length?(o=new Zd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`,mx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],gx=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Jd=new ct,_a=new k,wh=new k;function _x(i,e,t){let n=new Li,s=new Ne,r=new Ne,a=new wt,o=new Po,c=new Io,l={},h=t.maxTextureSize,d={[Fi]:Xt,[Xt]:Fi,[In]:In},u=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:fx,fragmentShader:px}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ft(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let p=this.type;this.render=function(b,_,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;this.type===Wu&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let R=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(xi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=p!==this.type;H&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=b.length;I<V;I++){let X=b[I],C=X.shadow;if(C===void 0){We("WebGLShadowMap:",X,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let G=C.getFrameExtents();s.multiply(G),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,C.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=F,C.map===null||H===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===js){if(X.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new Lt(s.x,s.y,{format:Oi,type:qt,minFilter:dn,magFilter:dn,generateMipmaps:!1}),C.map.texture.name=X.name+".shadowMap",C.map.depthTexture=new _i(s.x,s.y,Ln),C.map.depthTexture.name=X.name+".shadowMapDepth",C.map.depthTexture.format=mi,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=jt,C.map.depthTexture.magFilter=jt}else X.isPointLight?(C.map=new va(s.x),C.map.depthTexture=new qr(s.x,Vn)):(C.map=new Lt(s.x,s.y),C.map.depthTexture=new _i(s.x,s.y,Vn)),C.map.depthTexture.name=X.name+".shadowMap",C.map.depthTexture.format=mi,this.type===rs?(C.map.depthTexture.compareFunction=F?ch:lh,C.map.depthTexture.minFilter=dn,C.map.depthTexture.magFilter=dn):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=jt,C.map.depthTexture.magFilter=jt);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==s.x||C.map.height!==s.y)&&C.map.setSize(s.x,s.y);let U=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();X.isPointLight!==!0&&C.updateMatrices(X,y);let W=(C.camera.layers.mask&4294967294)!==0?C.camera.layers:y.layers;for(let te=0;te<U;te++){let xe=C.getCamera(te);if(X.isPointLight){let z=C.camera,ie=C.matrix,$=X.distance||z.far;$!==z.far&&(z.far=$,z.updateProjectionMatrix()),_a.setFromMatrixPosition(X.matrixWorld),z.position.copy(_a),wh.copy(z.position),wh.add(mx[te]),z.up.copy(gx[te]),z.lookAt(wh),z.updateMatrixWorld(),ie.makeTranslation(-_a.x,-_a.y,-_a.z),Jd.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),C._frustum.setFromProjectionMatrix(Jd,z.coordinateSystem,z.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,te),i.clear();else{te===0&&(i.setRenderTarget(C.map),i.clear());let z=C.getViewport(te);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),D.viewport(a)}n=C.getFrustum(te),E(_,y,xe,X,W,this.type)}C.isPointLightShadow!==!0&&this.type===js&&v(C,y),C.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(R,S,L)};function v(b,_){let y=e.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Lt(s.x,s.y,{format:Oi,type:qt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,y,u,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,y,m,x,null)}function A(b,_,y,R){let S=null,L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=y.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=S.uuid,H=_.uuid,I=l[D];I===void 0&&(I={},l[D]=I);let V=I[H];V===void 0&&(V=S.clone(),I[H]=V,_.addEventListener("dispose",M)),S=V}if(S.visible=_.visible,S.wireframe=_.wireframe,R===js?S.side=_.shadowSide!==null?_.shadowSide:_.side:S.side=_.shadowSide!==null?_.shadowSide:d[_.side],S.alphaMap=_.alphaMap,S.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,S.map=_.map,S.clipShadows=_.clipShadows,S.clippingPlanes=_.clippingPlanes,S.clipIntersection=_.clipIntersection,S.displacementMap=_.displacementMap,S.displacementScale=_.displacementScale,S.displacementBias=_.displacementBias,S.wireframeLinewidth=_.wireframeLinewidth,S.linewidth=_.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=i.properties.get(S);D.light=y}return S}function E(b,_,y,R,S,L){if(b.visible===!1)return;if(b.layers.test(S)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===js)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let I=e.update(b),V=b.material;if(Array.isArray(V)){let X=I.groups;for(let C=0,G=X.length;C<G;C++){let F=X[C],U=V[F.materialIndex];if(U&&U.visible){let W=A(b,U,R,L);b.onBeforeShadow(i,b,_,y,I,W,F),i.renderBufferDirect(y,null,I,W,b,F),b.onAfterShadow(i,b,_,y,I,W,F)}}}else if(V.visible){let X=A(b,V,R,L);b.onBeforeShadow(i,b,_,y,I,X,null),i.renderBufferDirect(y,null,I,X,b,null),b.onAfterShadow(i,b,_,y,I,X,null)}}let H=b.children;for(let I=0,V=H.length;I<V;I++)E(H[I],_,y,R,S,L)}function M(b){b.target.removeEventListener("dispose",M);for(let y in l){let R=l[y],S=b.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function xx(i,e){function t(){let N=!1,se=new wt,Q=null,pe=new wt(0,0,0,0);return{setMask:function(le){Q!==le&&!N&&(i.colorMask(le,le,le,le),Q=le)},setLocked:function(le){N=le},setClear:function(le,ue,Oe,je,oe){oe===!0&&(le*=je,ue*=je,Oe*=je),se.set(le,ue,Oe,je),pe.equals(se)===!1&&(i.clearColor(le,ue,Oe,je),pe.copy(se))},reset:function(){N=!1,Q=null,pe.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,Q=null,pe=null,le=null;return{setReversed:function(ue){if(se!==ue){let Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),se=ue;let je=le;le=null,this.setClear(je)}},getReversed:function(){return se},setTest:function(ue){ue?j(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ue){Q!==ue&&!N&&(i.depthMask(ue),Q=ue)},setFunc:function(ue){if(se&&(ue=wd[ue]),pe!==ue){switch(ue){case uo:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=ue}},setLocked:function(ue){N=ue},setClear:function(ue){le!==ue&&(le=ue,se&&(ue=1-ue),i.clearDepth(ue))},reset:function(){N=!1,Q=null,pe=null,le=null,se=!1}}}function s(){let N=!1,se=null,Q=null,pe=null,le=null,ue=null,Oe=null,je=null,oe=null;return{setTest:function(Ge){N||(Ge?j(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Ge){se!==Ge&&!N&&(i.stencilMask(Ge),se=Ge)},setFunc:function(Ge,Ke,Se){(Q!==Ge||pe!==Ke||le!==Se)&&(i.stencilFunc(Ge,Ke,Se),Q=Ge,pe=Ke,le=Se)},setOp:function(Ge,Ke,Se){(ue!==Ge||Oe!==Ke||je!==Se)&&(i.stencilOp(Ge,Ke,Se),ue=Ge,Oe=Ke,je=Se)},setLocked:function(Ge){N=Ge},setClear:function(Ge){oe!==Ge&&(i.clearStencil(Ge),oe=Ge)},reset:function(){N=!1,se=null,Q=null,pe=null,le=null,ue=null,Oe=null,je=null,oe=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},d={},u={},m=new WeakMap,g=[],x=null,f=!1,p=null,v=null,A=null,E=null,M=null,b=null,_=null,y=new ke(0,0,0),R=0,S=!1,L=null,D=null,H=null,I=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,G=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),C=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),C=G>=2);let U=null,W={},te=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),z=new wt().fromArray(te),ie=new wt().fromArray(xe);function $(N,se,Q,pe){let le=new Uint8Array(4),ue=i.createTexture();i.bindTexture(N,ue),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Q;Oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ue}let K={};K[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Vs),De(!1),Te(Jc),j(i.CULL_FACE),ut(xi);function j(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ce(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Xe(N,se){return u[N]!==se?(i.bindFramebuffer(N,se),u[N]=se,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ee(N,se){let Q=g,pe=!1;if(N){Q=m.get(se),Q===void 0&&(Q=[],m.set(se,Q));let le=N.textures;if(Q.length!==le.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Oe=le.length;ue<Oe;ue++)Q[ue]=i.COLOR_ATTACHMENT0+ue;Q.length=le.length,pe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Q)}function Ce(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Fe={[as]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};Fe[Zu]=i.MIN,Fe[Ju]=i.MAX;let ye={[$u]:i.ZERO,[Ku]:i.ONE,[Qu]:i.SRC_COLOR,[Qc]:i.SRC_ALPHA,[sd]:i.SRC_ALPHA_SATURATE,[nd]:i.DST_COLOR,[ed]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[jc]:i.ONE_MINUS_SRC_ALPHA,[id]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[ld]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(N,se,Q,pe,le,ue,Oe,je,oe,Ge){if(N===xi){f===!0&&(ce(i.BLEND),f=!1);return}if(f===!1&&(j(i.BLEND),f=!0),N!==Xu){if(N!==p||Ge!==S){if((v!==as||M!==as)&&(i.blendEquation(i.FUNC_ADD),v=as,M=as),Ge)switch(N){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vi:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}A=null,E=null,b=null,_=null,y.set(0,0,0),R=0,p=N,S=Ge}return}le=le||se,ue=ue||Q,Oe=Oe||pe,(se!==v||le!==M)&&(i.blendEquationSeparate(Fe[se],Fe[le]),v=se,M=le),(Q!==A||pe!==E||ue!==b||Oe!==_)&&(i.blendFuncSeparate(ye[Q],ye[pe],ye[ue],ye[Oe]),A=Q,E=pe,b=ue,_=Oe),(je.equals(y)===!1||oe!==R)&&(i.blendColor(je.r,je.g,je.b,oe),y.copy(je),R=oe),p=N,S=!1}function Pe(N,se){N.side===In?ce(i.CULL_FACE):j(i.CULL_FACE);let Q=N.side===Xt;se&&(Q=!Q),De(Q),N.blending===er&&N.transparent===!1?ut(xi):ut(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function Te(N){N!==Gu?(j(i.CULL_FACE),N!==D&&(N===Jc?i.cullFace(i.BACK):N===Hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),D=N}function ze(N){N!==H&&(C&&i.lineWidth(N),H=N)}function Qe(N,se,Q){N?(j(i.POLYGON_OFFSET_FILL),(I!==se||V!==Q)&&(I=se,V=Q,a.getReversed()&&(se=-se,Q=-Q),i.polygonOffset(se,Q))):ce(i.POLYGON_OFFSET_FILL)}function yt(N){N?j(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function At(N){N===void 0&&(N=i.TEXTURE0+X-1),U!==N&&(i.activeTexture(N),U=N)}function Gt(N,se,Q){Q===void 0&&(U===null?Q=i.TEXTURE0+X-1:Q=U);let pe=W[Q];pe===void 0&&(pe={type:void 0,texture:void 0},W[Q]=pe),(pe.type!==N||pe.texture!==se)&&(U!==Q&&(i.activeTexture(Q),U=Q),i.bindTexture(N,se||K[N]),pe.type=N,pe.texture=se)}function O(){let N=W[U];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function it(){try{i.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ve(){try{i.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Ht(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Ze(){try{i.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function P(){try{i.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function w(){try{i.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Y(){try{i.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ae(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function re(N,se){d[N]!==se&&(i.pixelStorei(N,se),d[N]=se)}function he(N){z.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),z.copy(N))}function ge(N){ie.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function ee(N,se){let Q=l.get(se);Q===void 0&&(Q=new WeakMap,l.set(se,Q));let pe=Q.get(N);pe===void 0&&(pe=i.getUniformBlockIndex(se,N.name),i.uniformBlockBinding(se,pe,pe),Q.set(N,pe))}function ne(N,se,Q){let le=l.get(se).get(N);c[le]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,Q),c[le]=Q)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},U=null,W={},u={},c={},m=new WeakMap,g=[],x=null,f=!1,p=null,v=null,A=null,E=null,M=null,b=null,_=null,y=new ke(0,0,0),R=0,S=!1,L=null,D=null,H=null,I=null,V=null,z.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ce,bindFramebuffer:Xe,drawBuffers:Ee,useProgram:Ce,setBlending:ut,setMaterial:Pe,setFlipSided:De,setCullFace:Te,setLineWidth:ze,setPolygonOffset:Qe,setScissorTest:yt,activeTexture:At,bindTexture:Gt,unbindTexture:O,compressedTexImage2D:Ft,compressedTexImage3D:tt,texImage2D:w,texImage3D:Y,pixelStorei:re,getParameter:ae,updateUBOMapping:ee,uniformBlockBinding:ne,texStorage2D:Ze,texStorage3D:P,texSubImage2D:it,texSubImage3D:ve,compressedTexSubImage2D:Ht,compressedTexSubImage3D:He,scissor:he,viewport:ge,reset:fe}}function vx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,d=new Set,u,m=new WeakMap,g=new Set,x=new FinalizationRegistry(P=>g.delete(P)),f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,w){return f?new OffscreenCanvas(P,w):Nr("canvas")}function v(P,w,Y){let ae=1,re=Ze(P);if((re.width>Y||re.height>Y)&&(ae=Y/Math.max(re.width,re.height)),ae<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let he=Math.floor(ae*re.width),ge=Math.floor(ae*re.height);u===void 0&&(u=p(he,ge));let ee=w?p(he,ge):u;return ee.width=he,ee.height=ge,ee.getContext("2d").drawImage(P,0,0,he,ge),We("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+he+"x"+ge+")."),ee}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function A(P){return P.generateMipmaps}function E(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(P,w,Y,ae,re,he=!1){if(P!==null){if(i[P]!==void 0)return i[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge;ae&&(ge=e.get("EXT_texture_norm16"),ge||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===i.RED&&(Y===i.FLOAT&&(ee=i.R32F),Y===i.HALF_FLOAT&&(ee=i.R16F),Y===i.UNSIGNED_BYTE&&(ee=i.R8),Y===i.UNSIGNED_SHORT&&ge&&(ee=ge.R16_EXT),Y===i.SHORT&&ge&&(ee=ge.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.R8UI),Y===i.UNSIGNED_SHORT&&(ee=i.R16UI),Y===i.UNSIGNED_INT&&(ee=i.R32UI),Y===i.BYTE&&(ee=i.R8I),Y===i.SHORT&&(ee=i.R16I),Y===i.INT&&(ee=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(ee=i.RG32F),Y===i.HALF_FLOAT&&(ee=i.RG16F),Y===i.UNSIGNED_BYTE&&(ee=i.RG8),Y===i.UNSIGNED_SHORT&&ge&&(ee=ge.RG16_EXT),Y===i.SHORT&&ge&&(ee=ge.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Y===i.UNSIGNED_INT&&(ee=i.RG32UI),Y===i.BYTE&&(ee=i.RG8I),Y===i.SHORT&&(ee=i.RG16I),Y===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),Y===i.UNSIGNED_INT&&(ee=i.RGB32UI),Y===i.BYTE&&(ee=i.RGB8I),Y===i.SHORT&&(ee=i.RGB16I),Y===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ee=i.RGBA32UI),Y===i.BYTE&&(ee=i.RGBA8I),Y===i.SHORT&&(ee=i.RGBA16I),Y===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&(Y===i.UNSIGNED_SHORT&&ge&&(ee=ge.RGB16_EXT),Y===i.SHORT&&ge&&(ee=ge.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),w===i.RGBA){let ne=he?Dr:nt.getTransfer(re);Y===i.FLOAT&&(ee=i.RGBA32F),Y===i.HALF_FLOAT&&(ee=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ee=ne===lt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&ge&&(ee=ge.RGBA16_EXT),Y===i.SHORT&&ge&&(ee=ge.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(P,w){let Y;return P?w===null||w===Vn||w===cs?Y=i.DEPTH24_STENCIL8:w===Ln?Y=i.DEPTH32F_STENCIL8:w===nr&&(Y=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vn||w===cs?Y=i.DEPTH_COMPONENT24:w===Ln?Y=i.DEPTH_COMPONENT32F:w===nr&&(Y=i.DEPTH_COMPONENT16),Y}function y(P,w){return A(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==dn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){let w=new WeakRef(P);n.get(P).__ref=w,g.add(w),x.register(P,w,w)}function S(P){let w=n.get(P).__ref;w!==void 0&&(g.delete(w),x.unregister(w))}function L(P){H(P.target)}function D(P){I(P.target)}function H(P){P.removeEventListener("dispose",L),S(P),X(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function I(P){P.removeEventListener("dispose",D),S(P),G(P)}function V(){for(let P of g){let w=P.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):H(w))}g.clear(),d.clear()}function X(P){let w=n.get(P);if(w.__webglInit===void 0)return;let Y=P.source,ae=m.get(Y);if(ae){let re=ae[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(P),Object.keys(ae).length===0&&m.delete(Y)}n.remove(P)}function C(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let Y=P.source,ae=m.get(Y);delete ae[w.__cacheKey],a.memory.textures--}function G(P){let w=n.get(P);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Y=P.depthTexture;if(Y&&Y.renderTarget===P&&H(Y),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let he=0;he<w.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(w.__webglFramebuffer[re][he]);else i.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)i.deleteFramebuffer(w.__webglFramebuffer[re]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ae=P.textures;for(let re=0,he=ae.length;re<he;re++){let ge=n.get(ae[re]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(ae[re])}n.remove(P)}let F=0;function U(){F=0}function W(){return F}function te(P){F=P}function xe(){let P=F;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function z(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.mipmapsAutoUpdate),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ie(P,w){let Y=n.get(P);if(P.isVideoTexture&&Ht(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){let ae=P.image;if(ae===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Y,P,w);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function $(P,w){let Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){Pe(Y,P,w);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function K(P,w){let Y=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){Pe(Y,P,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function j(P,w){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){De(Y,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}let ce={[ji]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},Xe={[jt]:i.NEAREST,[ud]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Ee={[md]:i.NEVER,[hh]:i.ALWAYS,[gd]:i.LESS,[lh]:i.LEQUAL,[_d]:i.EQUAL,[ch]:i.GEQUAL,[xd]:i.GREATER,[vd]:i.NOTEQUAL};function Ce(P,w){if(w.type===Ln&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===dn||w.magFilter===qo||w.magFilter===ca||w.magFilter===kn||w.minFilter===dn||w.minFilter===qo||w.minFilter===ca||w.minFilter===kn)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ce[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ce[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ce[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Xe[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Xe[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jt||w.minFilter!==ca&&w.minFilter!==kn||w.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(P,w){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",L),R(w));let ae=w.source,re=m.get(ae);re===void 0&&(re={},m.set(ae,re));let he=z(w);if(he!==P.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[he].usedTimes++;let ge=re[P.__cacheKey];ge!==void 0&&(re[P.__cacheKey].usedTimes--,ge.usedTimes===0&&C(w)),P.__cacheKey=he,P.__webglTexture=re[he].texture}return Y}function ye(P,w,Y){return Math.floor(Math.floor(P/Y)/w)}function ut(P,w,Y,ae){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Y,ae,w.data);else{he.sort((N,se)=>N.start-se.start);let ge=0;for(let N=1;N<he.length;N++){let se=he[ge],Q=he[N],pe=se.start+se.count,le=ye(Q.start,w.width,4),ue=ye(se.start,w.width,4);Q.start<=pe+1&&le===ue&&ye(Q.start+Q.count-1,w.width,4)===le?se.count=Math.max(se.count,Q.start+Q.count-se.start):(++ge,he[ge]=Q)}he.length=ge+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let N=0,se=he.length;N<se;N++){let Q=he[N],pe=Math.floor(Q.start/4),le=Math.ceil(Q.count/4),ue=pe%w.width,Oe=Math.floor(pe/w.width),je=le,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,ue,Oe,je,oe,Y,ae,w.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Pe(P,w,Y){let ae=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=i.TEXTURE_3D);let re=Fe(P,w),he=w.source;t.bindTexture(ae,P.__webglTexture,i.TEXTURE0+Y);let ge=n.get(he);if(he.version!==ge.__version||re===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap!="undefined"&&w.image instanceof ImageBitmap)===!1){let oe=nt.getPrimaries(nt.workingColorSpace),Ge=w.colorSpace===Hn?null:nt.getPrimaries(w.colorSpace),Ke=w.colorSpace===Hn||oe===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ne=v(w.image,!1,s.maxTextureSize);ne=He(w,ne);let fe=r.convert(w.format,w.colorSpace),N=r.convert(w.type),se=b(w.internalFormat,fe,N,w.normalized,w.colorSpace,w.isVideoTexture);Ce(ae,w);let Q,pe=w.mipmaps,le=w.isVideoTexture!==!0,ue=ge.__version===void 0||re===!0,Oe=he.dataReady,je=y(w,ne);if(w.isDepthTexture)se=_(w.format===yi,w.type),ue&&(le?t.texStorage2D(i.TEXTURE_2D,1,se,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,se,ne.width,ne.height,0,fe,N,null));else if(w.isDataTexture)if(pe.length>0){le&&ue&&t.texStorage2D(i.TEXTURE_2D,je,se,pe[0].width,pe[0].height);for(let oe=0,Ge=pe.length;oe<Ge;oe++)Q=pe[oe],le?Oe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Q.width,Q.height,fe,N,Q.data):t.texImage2D(i.TEXTURE_2D,oe,se,Q.width,Q.height,0,fe,N,Q.data);w.generateMipmaps=!1}else le?(ue&&t.texStorage2D(i.TEXTURE_2D,je,se,ne.width,ne.height),Oe&&ut(w,ne,fe,N)):t.texImage2D(i.TEXTURE_2D,0,se,ne.width,ne.height,0,fe,N,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){le&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,se,pe[0].width,pe[0].height,ne.depth);for(let oe=0,Ge=pe.length;oe<Ge;oe++)if(Q=pe[oe],w.format!==Gn)if(fe!==null)if(le){if(Oe)if(w.layerUpdates.size>0){let Ke=_h(Q.width,Q.height,w.format,w.type);for(let Se of w.layerUpdates){let pt=Q.data.subarray(Se*Ke/Q.data.BYTES_PER_ELEMENT,(Se+1)*Ke/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Se,Q.width,Q.height,1,fe,pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Q.width,Q.height,ne.depth,fe,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,se,Q.width,Q.height,ne.depth,0,Q.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Q.width,Q.height,ne.depth,fe,N,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,se,Q.width,Q.height,ne.depth,0,fe,N,Q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(i.TEXTURE_2D,je,se,pe[0].width,pe[0].height);for(let oe=0,Ge=pe.length;oe<Ge;oe++)Q=pe[oe],w.format!==Gn?fe!==null?le?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Q.width,Q.height,fe,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,se,Q.width,Q.height,0,Q.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Oe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Q.width,Q.height,fe,N,Q.data):t.texImage2D(i.TEXTURE_2D,oe,se,Q.width,Q.height,0,fe,N,Q.data)}else if(w.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,se,ne.width,ne.height,ne.depth),Oe)if(w.layerUpdates.size>0){let oe=_h(ne.width,ne.height,w.format,w.type);for(let Ge of w.layerUpdates){let Ke=ne.data.subarray(Ge*oe/ne.data.BYTES_PER_ELEMENT,(Ge+1)*oe/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,ne.width,ne.height,1,fe,N,Ke)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,N,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ne.width,ne.height,ne.depth,0,fe,N,ne.data);else if(w.isData3DTexture)le?(ue&&t.texStorage3D(i.TEXTURE_3D,je,se,ne.width,ne.height,ne.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,N,ne.data)):t.texImage3D(i.TEXTURE_3D,0,se,ne.width,ne.height,ne.depth,0,fe,N,ne.data);else if(w.isFramebufferTexture){if(ue)if(le)t.texStorage2D(i.TEXTURE_2D,je,se,ne.width,ne.height);else{let oe=ne.width,Ge=ne.height;for(let Ke=0;Ke<je;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,se,oe,Ge,0,fe,N,null),oe>>=1,Ge>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ne.parentNode!==oe){oe.appendChild(ne),d.add(w),oe.onpaint=Ge=>{let Ke=Ge.changedElements;for(let Se of d)Ke.includes(Se.image)&&(Se.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Ke=i.RGBA,Se=i.RGBA,pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Se,pt,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(le&&ue){let oe=Ze(pe[0]);t.texStorage2D(i.TEXTURE_2D,je,se,oe.width,oe.height)}for(let oe=0,Ge=pe.length;oe<Ge;oe++)Q=pe[oe],le?Oe&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe,N,Q):t.texImage2D(i.TEXTURE_2D,oe,se,fe,N,Q);w.generateMipmaps=!1}else if(le){if(ue){let oe=Ze(ne);t.texStorage2D(i.TEXTURE_2D,je,se,oe.width,oe.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,N,ne)}else t.texImage2D(i.TEXTURE_2D,0,se,fe,N,ne);A(w)&&w.mipmapsAutoUpdate===!0&&E(ae),ge.__version=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function De(P,w,Y){if(w.image.length!==6)return;let ae=Fe(P,w),re=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);let he=n.get(re);if(re.version!==he.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y);let ge=nt.getPrimaries(nt.workingColorSpace),ee=w.colorSpace===Hn?null:nt.getPrimaries(w.colorSpace),ne=w.colorSpace===Hn||ge===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let fe=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,se=[];for(let Se=0;Se<6;Se++)!fe&&!N?se[Se]=v(w.image[Se],!0,s.maxCubemapSize):se[Se]=N?w.image[Se].image:w.image[Se],se[Se]=He(w,se[Se]);let Q=se[0],pe=r.convert(w.format,w.colorSpace),le=r.convert(w.type),ue=b(w.internalFormat,pe,le,w.normalized,w.colorSpace),Oe=w.isVideoTexture!==!0,je=he.__version===void 0||ae===!0,oe=re.dataReady,Ge=y(w,Q);Ce(i.TEXTURE_CUBE_MAP,w);let Ke;if(w.isDepthTexture){if(ue=_(w.format===yi,w.type),je)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,Q.width,Q.height);else for(let Se=0;Se<6;Se++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,Q.width,Q.height,0,pe,le,null)}else if(fe){Oe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ue,Q.width,Q.height);for(let Se=0;Se<6;Se++){Ke=se[Se].mipmaps;for(let pt=0;pt<Ke.length;pt++){let $t=Ke[pt];w.format!==Gn?pe!==null?Oe?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt,0,0,$t.width,$t.height,pe,$t.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt,ue,$t.width,$t.height,0,$t.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt,0,0,$t.width,$t.height,pe,le,$t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt,ue,$t.width,$t.height,0,pe,le,$t.data)}}}else{if(Ke=w.mipmaps,Oe&&je){Ke.length>0&&Ge++;let Se=Ze(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ue,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(N){Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,se[Se].width,se[Se].height,pe,le,se[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,se[Se].width,se[Se].height,0,pe,le,se[Se].data);for(let pt=0;pt<Ke.length;pt++){let wi=Ke[pt].image[Se].image;Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt+1,0,0,wi.width,wi.height,pe,le,wi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt+1,ue,wi.width,wi.height,0,pe,le,wi.data)}}else{Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,pe,le,se[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ue,pe,le,se[Se]);for(let pt=0;pt<Ke.length;pt++){let $t=Ke[pt];Oe?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt+1,0,0,pe,le,$t.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,pt+1,ue,pe,le,$t.image[Se])}}}A(w)&&w.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),he.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Te(P,w,Y,ae,re,he){let ge=r.convert(Y.format,Y.colorSpace),ee=r.convert(Y.type),ne=b(Y.internalFormat,ge,ee,Y.normalized,Y.colorSpace),fe=n.get(w),N=n.get(Y);if(N.__renderTarget=w,!fe.__hasExternalTextures){let se=Math.max(1,w.width>>he),Q=Math.max(1,w.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,ne,se,Q,w.depth,0,ge,ee,null):t.texImage2D(re,he,ne,se,Q,0,ge,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,N.__webglTexture,0,it(w)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,N.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(P,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let ae=w.depthTexture,re=ae&&ae.isDepthTexture?ae.type:null,he=_(w.stencilBuffer,re),ge=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(w),he,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(w),he,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,P)}else{let ae=w.textures;for(let re=0;re<ae.length;re++){let he=ae[re],ge=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),ne=b(he.internalFormat,ge,ee,he.normalized,he.colorSpace);ve(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(w),ne,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(w),ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(P,w,Y){let ae=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(w.depthTexture);re.__renderTarget=w;let he=ae?w.depthTexture.image[0]:w.depthTexture.image;(!re.__webglTexture||he.width!==w.width||he.height!==w.height)&&(he.width=w.width,he.height=w.height,w.depthTexture.needsUpdate=!0),ae?j(w.depthTexture,0):ie(w.depthTexture,0);let ge=re.__webglTexture,ee=it(w),ne=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,fe=w.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===mi)ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ne,ge,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ne,ge,0);else if(w.depthTexture.format===yi)ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ne,ge,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yt(P){let w=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let ae=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",re)};ae.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=ae}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let ae=0;ae<6;ae++)Qe(w.__webglFramebuffer[ae],P,ae);else P.texture.mipmaps.length>0?Qe(w.__webglFramebuffer[0],P,0):Qe(w.__webglFramebuffer,P,0);else if(Y){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=i.createRenderbuffer(),ze(w.__webglDepthbuffer[ae],P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ze(w.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(P,w,Y){let ae=n.get(P);w!==void 0&&Te(ae.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&yt(P)}function Gt(P){let w=P.texture,Y=n.get(P),ae=n.get(w);P.addEventListener("dispose",D),R(P);let re=P.textures,he=P.isWebGLCubeRenderTarget===!0,ge=re.length>1;if(ge||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=w.version,a.memory.textures++),he){Y.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0){Y.__webglFramebuffer[ee]=[];for(let ne=0;ne<w.mipmaps.length;ne++)Y.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else Y.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)Y.__webglFramebuffer[ee]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ee=0,ne=re.length;ee<ne;ee++){let fe=n.get(re[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ve(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){let ne=re[ee];Y.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ee]);let fe=r.convert(ne.format,ne.colorSpace),N=r.convert(ne.type),se=b(ne.internalFormat,fe,N,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),Q=it(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,se,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)Te(Y.__webglFramebuffer[ee][ne],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Te(Y.__webglFramebuffer[ee],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);A(w)?E(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let ee=0,ne=re.length;ee<ne;ee++){let fe=re[ee],N=n.get(fe),se=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,N.__webglTexture),Ce(se,fe),Te(Y.__webglFramebuffer,P,fe,i.COLOR_ATTACHMENT0+ee,se,0),A(fe)&&E(se)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,ae.__webglTexture),Ce(ee,w),w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)Te(Y.__webglFramebuffer[ne],P,w,i.COLOR_ATTACHMENT0,ee,ne);else Te(Y.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ee,0);A(w)?E(ee):w.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&yt(P)}function O(P){let w=P.textures;for(let Y=0,ae=w.length;Y<ae;Y++){let re=w[Y];if(A(re)&&re.mipmapsAutoUpdate===!0){let he=M(P),ge=n.get(re).__webglTexture;t.bindTexture(he,ge),E(he),t.unbindTexture()}}}let Ft=[];function tt(P){if(P.samples>0){if(ve(P)===!1){let w=P.textures,Y=P.width,ae=P.height,re=i.COLOR_BUFFER_BIT,he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(P),ee=w.length>1;if(ee)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let N=n.get(w[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,re,i.NEAREST),c===!0&&(Ft.length=0,Ft.push(i.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ft.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let N=n.get(w[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function it(P){return Math.min(s.maxSamples,P.samples)}function ve(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function He(P,w){let Y=P.colorSpace,ae=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Lr&&Y!==Hn&&(nt.getTransfer(Y)===lt?(ae!==Gn||re!==_n)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",Y)),w}function Ze(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=xe,this.resetTextureUnits=U,this.getTextureUnits=W,this.setTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ve,this.dispose=V}function yx(i,e){function t(n,s=Hn){let r,a=nt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===qt)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===oh)return i.RGB;if(n===Gn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Qo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===pa||n===cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ol)return r.COMPRESSED_R11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pa)return r.COMPRESSED_RG11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Tl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===Cl||n===ma||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`,Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null,x=typeof XRWebGLBinding!="undefined",f=new Ih,p={},v=t.getContextAttributes(),A=null,E=null,M=[],b=[],_=new Ne,y=null,R=null,S=new ln;S.viewport=new wt;let L=new ln;L.viewport=new wt;let D=[S,L],H=new Go,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ie=M[z];return ie===void 0&&(ie=new Xs,M[z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(z){let ie=M[z];return ie===void 0&&(ie=new Xs,M[z]=ie),ie.getGripSpace()},this.getHand=function(z){let ie=M[z];return ie===void 0&&(ie=new Xs,M[z]=ie),ie.getHandSpace()};function X(z){let ie=b.indexOf(z.inputSource);if(ie===-1)return;let $=M[ie];$!==void 0&&($.update(z.inputSource,z.frame,l||a),$.dispatchEvent({type:z.type,data:z.inputSource}))}function C(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",G);for(let z=0;z<M.length;z++){let ie=b[z];ie!==null&&(b[z]=null,M[z].disconnect(ie))}I=null,V=null,f.reset();for(let z in p)delete p[z];if(e.setRenderTarget(A),m=null,u=null,d=null,s=null,E=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(_.width,_.height,!1),R!==null){let z=R.camera;z.fov=R.fov,z.zoom=R.zoom,z.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",C),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,K=null,j=null;v.depth&&(j=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?yi:mi,K=v.stencil?cs:Vn);let ce={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ce),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Lt(u.textureWidth,u.textureHeight,{format:Gn,type:_n,depthTexture:new _i(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let $={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Lt(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function G(z){for(let ie=0;ie<z.removed.length;ie++){let $=z.removed[ie],K=b.indexOf($);K>=0&&(b[K]=null,M[K].disconnect($))}for(let ie=0;ie<z.added.length;ie++){let $=z.added[ie],K=b.indexOf($);if(K===-1){for(let ce=0;ce<M.length;ce++)if(ce>=b.length){b.push($),K=ce;break}else if(b[ce]===null){b[ce]=$,K=ce;break}if(K===-1)break}let j=M[K];j&&j.connect($)}}function F(z,ie){ie===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ie.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let ie=z.near,$=z.far;f.texture!==null&&(f.depthNear>0&&(ie=f.depthNear),f.depthFar>0&&($=f.depthFar)),H.near=L.near=S.near=ie,H.far=L.far=S.far=$,(I!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=z.layers.mask|6,S.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let K=z.parent,j=H.cameras;F(H,K);for(let ce=0;ce<j.length;ce++)F(j[ce],K);H.projectionMatrix.copy(S.projectionMatrix),H.projectionMatrixInverse.copy(S.projectionMatrixInverse),R===null&&z.isPerspectiveCamera&&(R={camera:z,fov:z.fov,zoom:z.zoom}),U(z,H,K)};function U(z,ie,$){$===null?z.matrix.copy(ie.matrixWorld):(z.matrix.copy($.matrixWorld),z.matrix.invert(),z.matrix.multiply(ie.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ie.projectionMatrix),z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Mo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(z){c=z,u!==null&&(u.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(z){return p[z]};let W=null;function te(z,ie){if(h=ie.getViewerPose(l||a),g=ie,h!==null){let $=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let K=!1;$.length!==H.cameras.length&&(H.cameras.length=0,K=!0);for(let Ee=0;Ee<$.length;Ee++){let Ce=$[Ee],Fe=null;if(m!==null)Fe=m.getViewport(Ce);else{let ut=d.getViewSubImage(u,Ce);Fe=ut.viewport,Ee===0&&(e.setRenderTargetTextures(E,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(E))}let ye=D[Ee];ye===void 0&&(ye=new ln,ye.layers.enable(Ee),ye.viewport=new wt,D[Ee]=ye),ye.matrix.fromArray(Ce.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ce.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ee===0&&(H.matrix.copy(ye.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),K===!0&&H.cameras.push(ye)}let j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ee=d.getDepthInformation($[0]);Ee&&Ee.isValid&&Ee.texture&&f.init(Ee,s.renderState)}if(j&&j.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ee=0;Ee<$.length;Ee++){let Ce=$[Ee].camera;if(Ce){let Fe=p[Ce];Fe||(Fe=new Yr,p[Ce]=Fe);let ye=d.getCameraImage(Ce);Fe.sourceTexture=ye}}}}for(let $=0;$<M.length;$++){let K=b[$],j=M[$];K!==null&&j!==void 0&&j.update(K,ie,l||a)}W&&W(z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let xe=new $d;xe.setAnimationLoop(te),this.setAnimationLoop=function(z){W=z},this.dispose=function(){}}},bx=new ct,of=new qe;of.set(-1,0,0,0,1,0,0,0,1);function wx(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,ph(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,v,A,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,E)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,v,A):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v=e.get(p),A=v.envMap,E=v.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(of),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,v,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=A*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,v){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){let v=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,e,t,n){let s={},r={};function a(v,A){let E=A.program;n.uniformBlockBinding(v,E,s[v.id])}function o(v,A){let E=s[v.id];E===void 0&&(g(v),E=c(v),s[v.id]=E,v.addEventListener("dispose",f));let M=A.program;n.updateUBOMapping(v,M);let b=e.render.frame;r[v.id]!==b&&(l(v),r[v.id]=b)}function c(v){let A=i.createBuffer(),E=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(v){let A=s[v.id],E=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,_=E.length;b<_;b++){let y=E[b];if(Array.isArray(y))for(let R=0,S=y.length;R<S;R++)h(y[R],b,R,M);else h(y,b,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,A,E,M){if(u(v,A,E,M)===!0){let b=v.__offset,_=v.value;if(Array.isArray(_)){let y=0;for(let R=0;R<_.length;R++){let S=_[R],L=x(S,!0);d(S,v.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function d(v,A,E){typeof v=="number"||typeof v=="boolean"?A[E]=v:v.isMatrix3?(A[E]=v.elements[0],A[E+1]=v.elements[1],A[E+2]=v.elements[2],A[E+3]=0,A[E+4]=v.elements[3],A[E+5]=v.elements[4],A[E+6]=v.elements[5],A[E+7]=0,A[E+8]=v.elements[6],A[E+9]=v.elements[7],A[E+10]=v.elements[8],A[E+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-E),E):v.toArray(A,E)}function u(v,A,E,M){let b=v.value,_=A+"_"+E;if(Array.isArray(b)){M[_]===void 0&&(M[_]=[]);let y=M[_],R=!1;for(let S=0;S<b.length;S++)m(b[S],y,S)===!0&&(R=!0);return R}return m(b,M,_)}function m(v,A,E){if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{let M=A[E];if(typeof v=="number"||typeof v=="boolean"){if(M!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(M.equals(v)===!1)return M.copy(v),!0}}return!1}function g(v){let A=v.uniforms,E=0,M=16;for(let _=0,y=A.length;_<y;_++){let R=Array.isArray(A[_])?A[_]:[A[_]];for(let S=0,L=R.length;S<L;S++){let D=R[S],H=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(A[_])||Array.isArray(D.value),V=E;for(let C=0,G=H.length;C<G;C++){let F=H[C],U=x(F,I),W=E%M,te=W%U.boundary,xe=W+te;E+=te,xe!==0&&M-xe<U.storage&&(E+=M-xe),C===0&&(V=E),E+=U.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((E-V)/Float32Array.BYTES_PER_ELEMENT),D.__offset=V}}let b=E%M;return b>0&&(E+=M-b),v.__size=E,v.__cache={},this}function x(v,A){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=16,E.storage=48):v.isMatrix4?(E.boundary=16,E.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(v){let A=v.target;A.removeEventListener("dispose",f),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Ax(){return ni===null&&(ni=new kr(Ex,16,16,Oi,qt),ni.name="DFG_LUT",ni.minFilter=dn,ni.magFilter=dn,ni.wrapS=gn,ni.wrapT=gn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Nl=class{constructor(e={}){let{canvas:t=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=m,f=new Set([jo,Qo,Ko]),p=new Set([_n,Vn,nr,cs,Zo,Jo]),v=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},M=null,b=null,_=[],y=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,L=!1,D=null,H=null,I=null,V=null;this._outputColorSpace=tn;let X=0,C=0,G=null,F=-1,U=null,W=new wt,te=new wt,xe=null,z=new ke(0),ie=0,$=t.width,K=t.height,j=1,ce=null,Xe=null,Ee=new wt(0,0,$,K),Ce=new wt(0,0,$,K),Fe=!1,ye=new Li,ut=new To,Pe=!1,De=!1,Te=new ct,ze=new k,Qe=new wt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Gt(){return G===null?j:1}let O=n;function Ft(T,B){return t.getContext(T,B)}let tt,it,ve,Ht,He,Ze,P,w,Y,ae,re,he,ge,ee,ne,fe,N,se,Q,pe,le,ue,Oe;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Se,!1),O===null){let B="webgl2";if(O=Ft(B,T),O===null)throw Ft(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(T){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ye("WebGLRenderer: "+T.message),T}function je(){tt=new Bg(O),tt.init(),le=new yx(O,tt),it=new Ag(O,tt,e,le),ve=new xx(O,tt),it.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),H=O.createFramebuffer(),I=O.createFramebuffer(),V=O.createFramebuffer(),Ht=new Vg(O),He=new sx,Ze=new vx(O,tt,ve,He,it,le,Ht),P=new Og(S),w=new Hp(O),ue=new Tg(O,w),Y=new zg(O,w,Ht,ue),ae=new Hg(O,Y,w,ue,Ht),se=new Gg(O,it,Ze),ne=new Cg(He),re=new ix(S,P,tt,it,ue,ne),he=new wx(S,He),ge=new ax,ee=new dx(tt),N=new wg(S,P,ve,ae,g,c),fe=new _x(S,ae,it),Oe=new Tx(O,Ht,it,ve),Q=new Eg(O,tt,Ht),pe=new kg(O,tt,Ht),Ht.programs=re.programs,S.capabilities=it,S.extensions=tt,S.properties=He,S.renderLists=ge,S.shadowMap=fe,S.state=ve,S.info=Ht}x!==_n&&(R=new Xg(x,t.width,t.height,o,s,r));let oe=new Lh(S,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize($,K,!1))},this.getSize=function(T){return T.set($,K)},this.setSize=function(T,B,J=!0){if(oe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,K=B,t.width=Math.floor(T*j),t.height=Math.floor(B*j),J===!0&&(t.style.width=T+"px",t.style.height=B+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set($*j,K*j).floor()},this.setDrawingBufferSize=function(T,B,J){$=T,K=B,j=J,t.width=Math.floor(T*J),t.height=Math.floor(B*J),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===_n){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,B,J,q){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,B,J,q),ve.viewport(W.copy(Ee).multiplyScalar(Gt()).round())},this.getScissor=function(T){return T.copy(Ce)},this.setScissor=function(T,B,J,q){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,B,J,q),ve.scissor(te.copy(Ce).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){ve.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){Xe=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,J=!0){let q=0;if(T){let Z=!1;if(G!==null){let _e=G.texture.format;Z=f.has(_e)}if(Z){let _e=G.texture.type,Re=p.has(_e),me=N.getClearColor(),we=N.getClearAlpha(),Ue=me.r,Je=me.g,st=me.b;Re?(v[0]=Ue,v[1]=Je,v[2]=st,v[3]=we,O.clearBufferuiv(O.COLOR,0,v)):(A[0]=Ue,A[1]=Je,A[2]=st,A[3]=we,O.clearBufferiv(O.COLOR,0,A))}else q|=O.COLOR_BUFFER_BIT}B&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),N.dispose(),ge.dispose(),ee.dispose(),Ze.dispose(),He.dispose(),P.dispose(),ae.dispose(),Y.dispose(),ue.dispose(),Oe.dispose(),re.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",tu),oe.removeEventListener("sessionend",nu),qi.stop()};function Ge(T){T.preventDefault(),dh("WebGLRenderer: Context Lost."),L=!0}function Ke(){dh("WebGLRenderer: Context Restored."),L=!1;let T=Ht.autoReset,B=fe.enabled,J=fe.autoUpdate,q=fe.needsUpdate,Z=fe.type;je(),Ht.autoReset=T,fe.enabled=B,fe.autoUpdate=J,fe.needsUpdate=q,fe.type=Z}function Se(T){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pt(T){let B=T.target;B.removeEventListener("dispose",pt),$t(B)}function $t(T){wi(T),He.remove(T)}function wi(T){let B=He.get(T).programs;B!==void 0&&(B.forEach(function(J){re.releaseProgram(J)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,J,q,Z,_e){B===null&&(B=yt);let Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,me=ep(T,B,J,q,Z);ve.setMaterial(q,Re);let we=J.index,Ue=1;if(q.wireframe===!0){if(we=Y.getWireframeAttribute(J),we===void 0)return;Ue=2}let Je=J.drawRange,st=J.attributes.position,Ie=Je.start*Ue,rt=(Je.start+Je.count)*Ue;_e!==null&&(Ie=Math.max(Ie,_e.start*Ue),rt=Math.min(rt,(_e.start+_e.count)*Ue)),we!==null?(Ie=Math.max(Ie,0),rt=Math.min(rt,we.count)):st!=null&&(Ie=Math.max(Ie,0),rt=Math.min(rt,st.count));let Ot=rt-Ie;if(Ot<0||Ot===1/0)return;ue.setup(Z,q,me,J,we);let vt,_t=Q;if(we!==null&&(vt=w.get(we),_t=pe,_t.setIndex(vt)),Z.isMesh)q.wireframe===!0?(ve.setLineWidth(q.wireframeLinewidth*Gt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(Z.isLine){let sn=q.linewidth;sn===void 0&&(sn=1),ve.setLineWidth(sn*Gt()),Z.isLineSegments?_t.setMode(O.LINES):Z.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else Z.isPoints?_t.setMode(O.POINTS):Z.isSprite&&_t.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))_t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let sn=Z._multiDrawStarts,Le=Z._multiDrawCounts,un=Z._multiDrawCount,dt=we?w.get(we).bytesPerElement:1,Yi=He.get(q).currentProgram.getUniforms();for(let rn=0;rn<un;rn++)Yi.setValue(O,"_gl_DrawID",rn),_t.render(sn[rn]/dt,Le[rn])}else if(Z.isInstancedMesh)_t.renderInstances(Ie,Ot,Z.count);else if(J.isInstancedBufferGeometry){let sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Le=Math.min(J.instanceCount,sn);_t.renderInstances(Ie,Ot,Le)}else _t.render(Ie,Ot)};function eu(T,B,J,q){D!==null&&T.isNodeMaterial&&D.setObject(q,T),Pe===!0&&ne.setState(T,J,!1),T.transparent===!0&&T.side===In&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,Sr(T,B,q),T.side=Fi,T.needsUpdate=!0,Sr(T,B,q),T.side=In):Sr(T,B,q)}this.compile=function(T,B,J=null){J===null&&(J=T),D!==null&&D.renderStart(T,B,J),b=ee.get(J),b.init(B),y.push(b),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),T!==J&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),De=this.localClippingEnabled,Pe=ne.init(this.clippingPlanes,De),Pe===!0&&ne.setGlobalState(this.clippingPlanes,B),D!==null&&fe.render(b.state.shadowsArray,J,B);let q=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let _e=Z.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let me=_e[Re];eu(me,J,B,Z),q.add(me)}else eu(_e,J,B,Z),q.add(_e)}),b=y.pop(),D!==null&&D.renderEnd(),q},this.compileAsync=function(T,B,J=null){let q=this.compile(T,B,J);return new Promise(Z=>{function _e(){if(q.forEach(function(Re){let we=He.get(Re).currentProgram;(we===void 0||we.isReady())&&q.delete(Re)}),q.size===0){Z(T);return}setTimeout(_e,10)}tt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mc=null;function Qf(T){mc&&mc(T)}function tu(){qi.stop()}function nu(){qi.start()}let qi=new $d;qi.setAnimationLoop(Qf),typeof self!="undefined"&&qi.setContext(self),this.setAnimationLoop=function(T){mc=T,oe.setAnimationLoop(T),T===null?qi.stop():qi.start()},oe.addEventListener("sessionstart",tu),oe.addEventListener("sessionend",nu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,B);let J=oe.enabled===!0&&oe.isPresenting===!0,q=R!==null&&(G===null||J)&&R.begin(S,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,G),b=ee.get(T,y.length),b.init(B),b.state.textureUnits=Ze.getTextureUnits(),y.push(b),Te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ut.setFromArrayCamera(B):ye.setFromProjectionMatrix(Te,Pn,B.reversedDepth),De=this.localClippingEnabled,Pe=ne.init(this.clippingPlanes,De),M=ge.get(T,_.length),M.init(),_.push(M),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Re=S.xr.getDepthSensingMesh();Re!==null&&gc(Re,B,-1/0,S.sortObjects)}gc(T,B,0,S.sortObjects),M.finish(),D!==null&&D.updateLights(b.state.lightsArray),S.sortObjects===!0&&M.sort(ce,Xe),At=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,At&&N.addToRenderList(M,T),this.info.autoReset===!0&&this.info.reset(),Pe===!0&&ne.beginShadows();let Z=b.state.shadowsArray;if(fe.render(Z,T,B),Pe===!0&&ne.endShadows(),(q&&R.hasRenderPass())===!1){let Re=M.opaque,me=M.transmissive;if(b.setupLights(),B.isArrayCamera){let we=B.cameras;if(me.length>0)for(let Ue=0,Je=we.length;Ue<Je;Ue++){let st=we[Ue];su(Re,me,T,st)}At&&N.render(T);for(let Ue=0,Je=we.length;Ue<Je;Ue++){let st=we[Ue];iu(M,T,st,st.viewport)}}else me.length>0&&su(Re,me,T,B),At&&N.render(T),iu(M,T,B)}G!==null&&C===0&&(Ze.updateMultisampleRenderTarget(G),Ze.updateRenderTargetMipmap(G)),q&&R.end(S),T.isScene===!0&&T.onAfterRender(S,T,B),ue.resetDefaultState(),F=-1,U=null,y.pop(),y.length>0?(b=y[y.length-1],Ze.setTextureUnits(b.state.textureUnits),Pe===!0&&ne.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,D!==null&&D.renderEnd()};function gc(T,B,J,q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){let Re=B.isArrayCamera?ut:ye;if(!T.frustumCulled||T.intersectsFrustum(Re)){q&&Qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);let me=ae.update(T),we=T.material;we.visible&&M.push(T,me,we,J,Qe.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){let Re=B.isArrayCamera?ut:ye;if(!T.frustumCulled||T.intersectsFrustum(Re)){let me=ae.update(T),we=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qe.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Qe.copy(me.boundingSphere.center)),Qe.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(we)){let Ue=me.groups;for(let Je=0,st=Ue.length;Je<st;Je++){let Ie=Ue[Je],rt=we[Ie.materialIndex];rt&&rt.visible&&M.push(T,me,rt,J,Qe.z,Ie,B)}}else we.visible&&M.push(T,me,we,J,Qe.z,null,B)}}}let _e=T.children;for(let Re=0,me=_e.length;Re<me;Re++)gc(_e[Re],B,J,q)}function iu(T,B,J,q){let{opaque:Z,transmissive:_e,transparent:Re}=T;b.setupLightsView(J),Pe===!0&&ne.setGlobalState(S.clippingPlanes,J),q&&ve.viewport(W.copy(q)),Z.length>0&&Fa(Z,B,J),_e.length>0&&Fa(_e,B,J),Re.length>0&&Fa(Re,B,J),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function su(T,B,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let Ie=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new Lt(1,1,{generateMipmaps:!0,type:Ie?qt:_n,minFilter:kn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let _e=b.state.transmissionRenderTarget[q.id],Re=q.viewport||W;_e.setSize(Re.z*S.transmissionResolutionScale,Re.w*S.transmissionResolutionScale);let me=S.getRenderTarget(),we=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(_e),S.getClearColor(z),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),At&&N.render(J);let Je=S.toneMapping;S.toneMapping=ti;let st=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),Pe===!0&&ne.setGlobalState(S.clippingPlanes,q),Fa(T,J,q),Ze.updateMultisampleRenderTarget(_e),Ze.updateRenderTargetMipmap(_e),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let rt=0,Ot=B.length;rt<Ot;rt++){let vt=B[rt],{object:_t,geometry:sn,material:Le,group:un}=vt;if(Le.side===In&&_t.layers.test(q.layers)){let dt=Le.side;Le.side=Xt,Le.needsUpdate=!0,ru(_t,J,q,sn,Le,un),Le.side=dt,Le.needsUpdate=!0,Ie=!0}}Ie===!0&&(Ze.updateMultisampleRenderTarget(_e),Ze.updateRenderTargetMipmap(_e))}S.setRenderTarget(me,we,Ue),S.setClearColor(z,ie),st!==void 0&&(q.viewport=st),S.toneMapping=Je}function Fa(T,B,J){let q=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,_e=T.length;Z<_e;Z++){let Re=T[Z],{object:me,geometry:we,group:Ue}=Re,Je=Re.material;Je.allowOverride===!0&&q!==null&&(Je=q),me.layers.test(J.layers)&&ru(me,B,J,we,Je,Ue)}}function ru(T,B,J,q,Z,_e){D!==null&&Z.isNodeMaterial&&D.setObject(T,Z),T.onBeforeRender(S,B,J,q,Z,_e),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(S,B,J,q,T,_e),Z.transparent===!0&&Z.side===In&&Z.forceSinglePass===!1?(Z.side=Xt,Z.needsUpdate=!0,S.renderBufferDirect(J,B,q,Z,T,_e),Z.side=Fi,Z.needsUpdate=!0,S.renderBufferDirect(J,B,q,Z,T,_e),Z.side=In):S.renderBufferDirect(J,B,q,Z,T,_e),T.onAfterRender(S,B,J,q,Z,_e)}function au(T){let B=0;for(let J of T)J.texture!==null&&B++;return B}function Sr(T,B,J){B.isScene!==!0&&(B=yt);let q=He.get(T),Z=b.state.lights,_e=b.state.shadowsArray,Re=Z.state.version,me=re.getParameters(T,Z.state,_e,B,J,b.state.lightProbeGridArray),we=re.getProgramCacheKey(me),Ue=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=P.get(T.envMap||q.environment,Je),q.envMapRotation=q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",pt),Ue=new Map,q.programs=Ue,q.programVariants=new Map);let st=Ue.get(we);if(st!==void 0){if(q.currentProgram===st&&q.lightsStateVersion===Re)return lu(T,me),st}else me.uniforms=re.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,J,me),T.onBeforeCompile(me,S),st=re.acquireProgram(me,we),Ue.set(we,st),q.uniforms=me.uniforms;let Ie=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ne.uniform),lu(T,me),q.needsLights=np(T),q.lightsStateVersion=Re,q.needsLights&&(Ie.ambientLightColor.value=Z.state.ambient,Ie.lightProbe.value=Z.state.probe,Ie.sunLights.value=Z.state.sun,Ie.sunLightShadows.value=Z.state.sunShadow,Ie.directionalLights.value=Z.state.directional,Ie.directionalLightShadows.value=Z.state.directionalShadow,Ie.spotLights.value=Z.state.spot,Ie.spotLightShadows.value=Z.state.spotShadow,Ie.rectAreaLights.value=Z.state.rectArea,Ie.ltc_1.value=Z.state.rectAreaLTC1,Ie.ltc_2.value=Z.state.rectAreaLTC2,Ie.pointLights.value=Z.state.point,Ie.pointLightShadows.value=Z.state.pointShadow,Ie.hemisphereLights.value=Z.state.hemi,Ie.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ie.sunShadowCascade.value=Z.state.sunShadowCascade,Ie.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ie.spotLightMatrix.value=Z.state.spotLightMatrix,Ie.spotLightMap.value=Z.state.spotLightMap,Ie.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.numLightProbeGrids=au(b.state.lightProbeGridArray),q.currentProgram=st,q.uniformsList=null,st}function jf(T,B,J,q,Z){let _e=He.get(T),Re=_e.currentProgram.id+","+q+","+Z,me=_e.programVariants.get(Re);return me===void 0?(me=Sr(T,B,J),_e.programVariants.set(Re,me)):(_e.currentProgram=me,_e.uniformsList=null,_e.outputColorSpace=q,_e.toneMapping=Z),me}function ou(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=ir.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function lu(T,B){let J=He.get(T);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function ep(T,B,J,q,Z){B.isScene!==!0&&(B=yt),Ze.resetTextureUnits();let _e=B.fog,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,me=G===null?S.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:nt.workingColorSpace,we=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ue=P.get(q.envMap||Re,we),Je=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,Ot=!!J.morphAttributes.color,vt=ti;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(vt=S.toneMapping);let _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,sn=_t!==void 0?_t.length:0,Le=He.get(q),un=b.state.lights;if(Pe===!0&&(De===!0||T!==U)){let Et=T===U&&q.id===F;ne.setState(q,T,Et)}let dt=!1,Yi=!1;q.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==un.state.version||Z.isBatchedMesh&&Le.batching===!1||!Z.isBatchedMesh&&Le.batching===!0||Z.isBatchedMesh&&Le.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Le.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Le.instancing===!1||!Z.isInstancedMesh&&Le.instancing===!0||Z.isSkinnedMesh&&Le.skinning===!1||!Z.isSkinnedMesh&&Le.skinning===!0||Z.isInstancedMesh&&Le.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Le.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Le.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Le.instancingMorph===!1&&Z.morphTexture!==null||Le.envMap!==Ue||q.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ne.numPlanes||Le.numIntersection!==ne.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==st||Le.morphTargets!==Ie||Le.morphNormals!==rt||Le.morphColors!==Ot||Le.morphTargetsCount!==sn||Le.numLightProbeGrids!==au(b.state.lightProbeGridArray)?dt=!0:(Le.outputColorSpace!==me||Le.toneMapping!==vt)&&(Yi=!0):(dt=!0,Le.__version=q.version);let rn=Le.currentProgram;(dt===!0||Yi===!0)&&(rn=Yi===!0?jf(q,B,Z,me,vt):Sr(q,B,Z),D&&q.isNodeMaterial&&D.onUpdateProgram(q,rn,Le));let Oa=!1,Ti=!1,Zi=!1,ot=rn.getUniforms(),en=Le.uniforms;if(ve.useProgram(rn.program)&&(Oa=!0,Ti=!0,Zi=!0),q.id!==F&&(F=q.id,Ti=!0),Oa||U!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",T.projectionMatrix),ot.setValue(O,"viewMatrix",T.matrixWorldInverse);let Kt=ot.map.cameraPosition;Kt!==void 0&&Kt.setValue(O,ze.setFromMatrixPosition(T.matrixWorld)),it.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ot.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,Ti=!0,Zi=!0)}if(Le.needsLights&&(un.state.sunShadowMap.length>0&&ot.setValue(O,"sunShadowMap",un.state.sunShadowMap,Ze),un.state.directionalShadowMap.length>0&&ot.setValue(O,"directionalShadowMap",un.state.directionalShadowMap,Ze),un.state.spotShadowMap.length>0&&ot.setValue(O,"spotShadowMap",un.state.spotShadowMap,Ze),un.state.pointShadowMap.length>0&&ot.setValue(O,"pointShadowMap",un.state.pointShadowMap,Ze)),Z.isSkinnedMesh){ot.setOptional(O,Z,"bindMatrix"),ot.setOptional(O,Z,"bindMatrixInverse");let Et=Z.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ot.setValue(O,"boneTexture",Et.boneTexture,Ze))}Z.isBatchedMesh&&(ot.setOptional(O,Z,"batchingTexture"),ot.setValue(O,"batchingTexture",Z._matricesTexture,Ze),ot.setOptional(O,Z,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",Z._indirectTexture,Ze),ot.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",Z._colorsTexture,Ze));let Nn=J.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&se.update(Z,J,rn),(Ti||Le.receiveShadow!==Z.receiveShadow)&&(Le.receiveShadow=Z.receiveShadow,ot.setValue(O,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Ax()),Ti){if(ot.setValue(O,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&tp(en,Zi),_e&&q.fog===!0&&he.refreshFogUniforms(en,_e),he.refreshMaterialUniforms(en,q,j,K,b.state.transmissionRenderTarget[T.id]),Le.needsLights&&Le.numLightProbeGrids>0){let Et=E,Kt=0;for(let li of b.state.lightProbeGridArray)li.texture!==null&&(Et.textures[Kt]=li.texture,Et.min[Kt]=li.boundingBox.min,Et.max[Kt]=li.boundingBox.max,Et.resolution[Kt]=li.resolution,Kt++);for(let li in Et)Et[li].length=Kt;en.probesSH.value=Et.textures,en.probesMin.value=Et.min,en.probesMax.value=Et.max,en.probesResolution.value=Et.resolution}ir.upload(O,ou(Le),en,Ze)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ir.upload(O,ou(Le),en,Ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ot.setValue(O,"center",Z.center),ot.setValue(O,"modelViewMatrix",Z.modelViewMatrix),ot.setValue(O,"normalMatrix",Z.normalMatrix),ot.setValue(O,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let Et=q.uniformsGroups;for(let Kt=0,li=Et.length;Kt<li;Kt++){let hu=Et[Kt];Oe.update(hu,rn),Oe.bind(hu,rn)}}return rn}function tp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function np(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,B,J){let q=He.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),He.get(T.texture).__webglTexture=B,He.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let J=He.get(T);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,J=0){G=T,X=B,C=J;let q=null,Z=!1,_e=!1;if(T){let me=He.get(T);if(me.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),W.copy(T.viewport),te.copy(T.scissor),xe=T.scissorTest,ve.viewport(W),ve.scissor(te),ve.setScissorTest(xe),F=-1;return}else if(me.__webglFramebuffer===void 0)Ze.setupRenderTarget(T);else if(me.__hasExternalTextures)Ze.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(me.__boundDepthTexture!==Je){if(Je!==null&&He.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(T)}}let we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);let Ue=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?q=Ue[B][J]:q=Ue[B],Z=!0):T.samples>0&&Ze.useMultisampledRTT(T)===!1?q=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[J]:q=Ue,W.copy(T.viewport),te.copy(T.scissor),xe=T.scissorTest}else W.copy(Ee).multiplyScalar(j).floor(),te.copy(Ce).multiplyScalar(j).floor(),xe=Fe;if(J!==0&&(q=H),ve.bindFramebuffer(O.FRAMEBUFFER,q)&&ve.drawBuffers(T,q),ve.viewport(W),ve.scissor(te),ve.setScissorTest(xe),Z){let me=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,J)}else if(_e){let me=B;for(let we=0;we<T.textures.length;we++){let Ue=He.get(T.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,Ue.__webglTexture,J,me)}}else if(T!==null&&J!==0){let me=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,J)}F=-1};function cu(T){let B=He.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=it.textureFormatReadable(T.format),B.__typeReadable=it.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,J,q,Z,_e,Re,me=0){if(!(T&&T.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(we=we[Re],Array.isArray(we)&&(we=we[0])),we){ve.bindFramebuffer(O.FRAMEBUFFER,we);try{let Ue=T.textures[me],Je=Ue.format,st=Ue.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ie=cu(Ue);if(Ie.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-q&&J>=0&&J<=T.height-Z&&O.readPixels(B,J,q,Z,le.convert(Je),le.convert(st),_e)}finally{let Ue=G!==null?He.get(G).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,B,J,q,Z,_e,Re,me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(we=we[Re],Array.isArray(we)&&(we=we[0])),we)if(B>=0&&B<=T.width-q&&J>=0&&J<=T.height-Z){ve.bindFramebuffer(O.FRAMEBUFFER,we);let Ue=T.textures[me],Je=Ue.format,st=Ue.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ie=cu(Ue);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),O.readPixels(B,J,q,Z,le.convert(Je),le.convert(st),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ot=G!==null?He.get(G).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Ot);let vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bd(O,vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(rt),O.deleteSync(vt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,J=0){let q=Math.pow(2,-J),Z=Math.floor(T.image.width*q),_e=Math.floor(T.image.height*q),Re=B!==null?B.x:0,me=B!==null?B.y:0;Ze.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Re,me,Z,_e),ve.unbindTexture()},this.copyTextureToTexture=function(T,B,J=null,q=null,Z=0,_e=0){let Re,me,we,Ue,Je,st,Ie,rt,Ot,vt=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(J!==null)Re=J.max.x-J.min.x,me=J.max.y-J.min.y,we=J.isBox3?J.max.z-J.min.z:1,Ue=J.min.x,Je=J.min.y,st=J.isBox3?J.min.z:0;else{let ot=Math.pow(2,-Z);Re=Math.floor(vt.width*ot),me=Math.floor(vt.height*ot),T.isDataArrayTexture?we=vt.depth:T.isData3DTexture?we=Math.floor(vt.depth*ot):we=1,Ue=0,Je=0,st=0}q!==null?(Ie=q.x,rt=q.y,Ot=q.z):(Ie=0,rt=0,Ot=0);let _t=le.convert(B.format),sn=le.convert(B.type),Le;B.isData3DTexture?(Ze.setTexture3D(B,0),Le=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ze.setTexture2DArray(B,0),Le=O.TEXTURE_2D_ARRAY):(Ze.setTexture2D(B,0),Le=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let un=ve.getParameter(O.UNPACK_ROW_LENGTH),dt=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),Yi=ve.getParameter(O.UNPACK_SKIP_PIXELS),rn=ve.getParameter(O.UNPACK_SKIP_ROWS),Oa=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Je),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,st);let Ti=T.isDataArrayTexture||T.isData3DTexture,Zi=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let ot=He.get(T),en=He.get(B),Nn=He.get(ot.__renderTarget),Et=He.get(en.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Nn.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Kt=0;Kt<we;Kt++)Ti&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(T).__webglTexture,Z,st+Kt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(B).__webglTexture,_e,Ot+Kt)),O.blitFramebuffer(Ue,Je,Ue+Re,Je+me,Ie,rt,Ie+Re,rt+me,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||He.has(T)){let ot=He.get(T),en=He.get(B);ve.bindFramebuffer(O.READ_FRAMEBUFFER,I),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let Nn=0;Nn<we;Nn++)Ti?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.__webglTexture,Z,st+Nn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ot.__webglTexture,Z),Zi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,_e,Ot+Nn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,_e),Z!==0?O.blitFramebuffer(Ue,Je,Ue+Re,Je+me,Ie,rt,Ie+Re,rt+me,O.COLOR_BUFFER_BIT,O.NEAREST):Zi?O.copyTexSubImage3D(Le,_e,Ie,rt,Ot+Nn,Ue,Je,Re,me):O.copyTexSubImage2D(Le,_e,Ie,rt,Ue,Je,Re,me);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Zi?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Le,_e,Ie,rt,Ot,Re,me,we,_t,sn,vt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,_e,Ie,rt,Ot,Re,me,we,_t,vt.data):O.texSubImage3D(Le,_e,Ie,rt,Ot,Re,me,we,_t,sn,vt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,Ie,rt,Re,me,_t,sn,vt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,Ie,rt,vt.width,vt.height,_t,vt.data):O.texSubImage2D(O.TEXTURE_2D,_e,Ie,rt,Re,me,_t,sn,vt);ve.pixelStorei(O.UNPACK_ROW_LENGTH,un),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Yi),ve.pixelStorei(O.UNPACK_SKIP_ROWS,rn),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,Oa),_e===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(Le),ve.unbindTexture()},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&Ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ze.setTextureCube(T,0):T.isData3DTexture?Ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ze.setTexture2DArray(T,0):Ze.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){X=0,C=0,G=null,ve.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Ol=new Float32Array(20002),Bl=new Float32Array(20002),zl=new Float32Array(20002),kl=new Float32Array(20002),nn=[],Dh=0;function Cx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var us=16;function lf(i=1709,e=["street"]){let t=Cx(i);nn.length=0;let n=0,s=0,r=e[0],a=(f,p,v=0,A=0)=>{nn.push({s:n,e:n+f,type:p,k:v,dir:A,kind:r}),n+=f},o=()=>{let f;do f=e[t()*e.length|0];while(f===r&&e.length>1&&t()<.7);r=f};for(a(150,"street");n<19600;){let f=t()<.5?-1:1;a(Math.PI/2*us,"corner",f/us,f),s++,s%2===1&&a(120,"square"),o(),a(40+t()*40,"street");let p=t()<.5?-1:1;a(70,"bend",p*(.35+t()*.25)/70,p),t()<.5&&o(),a(60+t()*60,"street")}let c=nn.filter(f=>f.type==="corner"),l=0,h=f=>{for(;l<c.length-1&&f>c[l].e+25;)l++;let p=c[l];if(!p)return 1;let v=Math.max(p.s-10-f,f-p.e-10,0),A=Math.min(1,v/20);return A*A*(3-2*A)},d=0,u=0,m=0,g=0,x=0;for(let f=0;f<=20001;f++){for(;g<nn.length-1&&f>=nn[g].e;)g++;let p=nn[g];Ol[f]=u,Bl[f]=m,kl[f]=d,zl[f]=x;let v=5.5/230*Math.cos(f/230)+2.6/97*Math.cos(f/97+1)+1.2/41*Math.cos(f/41);x+=v*1*h(f);let A=p&&f>=p.s&&f<p.e?p.k:0;d+=A*1,u+=Math.sin(d)*1,m+=-Math.cos(d)*1}Dh=2e4}function ds(i){let e=0,t=nn.length-1;for(;e<=t;){let n=e+t>>1,s=nn[n];if(i<s.s)t=n-1;else if(i>=s.e)e=n+1;else return s}return null}function Vl(i,e){i<0&&(i=0),i>Dh-1&&(i=Dh-1);let t=i|0,n=i-t;return e.x=Ol[t]+(Ol[t+1]-Ol[t])*n,e.z=Bl[t]+(Bl[t+1]-Bl[t])*n,e.y=zl[t]+(zl[t+1]-zl[t])*n,e.th=kl[t]+(kl[t+1]-kl[t])*n,e}function Nt(i,e,t,n){let s=Vl(i,n),r=Math.cos(s.th),a=Math.sin(s.th);return n.wx=s.x+r*e,n.wz=s.z+a*e,n.wy=s.y+t,n}var Gl=new ke;function Ae(i){return Gl.set(i),[Gl.r,Gl.g,Gl.b]}var Ut=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(e,t,n,s,r,a,o,c){let l=t[0]-e[0],h=t[1]-e[1],d=t[2]-e[2],u=n[0]-e[0],m=n[1]-e[1],g=n[2]-e[2],x=h*g-d*m,f=d*u-l*g,p=l*m-h*u;if(x*s[0]+f*s[1]+p*s[2]<0){let v=t;t=n,n=v;let A=a;a=o,o=A}this.p.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this.n.push(s[0],s[1],s[2],s[0],s[1],s[2],s[0],s[1],s[2]),this.u.push(r[0],r[1],a[0],a[1],o[0],o[1]),this.c.push(c[0],c[1],c[2],c[0],c[1],c[2],c[0],c[1],c[2])}quad(e,t,n,s,r,a,o,c,l,h){this.tri(e,t,n,r,a,o,c,h),this.tri(e,n,s,r,a,c,l,h)}geo(e,t,n){let s=e.index?e.toNonIndexed():e,r=s.attributes.position,a=s.attributes.normal,o=s.attributes.uv,c=new qe().getNormalMatrix(t),l=new k;for(let h=0;h<r.count;h++)l.fromBufferAttribute(r,h).applyMatrix4(t),this.p.push(l.x,l.y,l.z),l.fromBufferAttribute(a,h).applyMatrix3(c).normalize(),this.n.push(l.x,l.y,l.z),this.u.push(o?o.getX(h):0,o?o.getY(h):0),this.c.push(n[0],n[1],n[2]);s!==e&&s.dispose()}get empty(){return!this.p.length}build(){if(!this.p.length)return null;let e=new St;return e.setAttribute("position",new $e(this.p,3)),e.setAttribute("normal",new $e(this.n,3)),e.setAttribute("uv",new $e(this.u,2)),e.setAttribute("color",new $e(this.c,3)),e.computeBoundingSphere(),e}};function fs(i,e,t,n){let s=Math.sin(n),r=Math.cos(n);return{ox:i,oy:e,oz:t,fx:s,fz:-r,nx:r,nz:s}}function Mi(i,e,t,n){return[i.ox+i.fx*e+i.nx*n,i.oy+t,i.oz+i.fz*e+i.nz*n]}function Tn(i,e,t,n){return[i.fx*e+i.nx*n,t,i.fz*e+i.nz*n]}function Ma(i,e,t,n,s=0,r=1,a=1,o=1){let c=Mi(i,e,t,n),l=Math.PI/2-Math.atan2(i.fx,-i.fz)+s;return new ct().makeRotationY(l).setPosition(c[0],c[1],c[2]).multiply(new ct().makeScale(r,a,o))}function Ve(i,e,t,n,s,r,a,o,c,l=1.9,h=3.3,d=!0,u=s,m=0){let g=(p,v,A)=>Mi(e,p,v,A),x=p=>(p-m)/l,f=p=>(p-u)/h;i.quad(g(t,s,a),g(n,s,a),g(n,r,a),g(t,r,a),Tn(e,0,0,-1),[x(t),f(s)],[x(n),f(s)],[x(n),f(r)],[x(t),f(r)],c),i.quad(g(t,s,o),g(n,s,o),g(n,r,o),g(t,r,o),Tn(e,0,0,1),[-x(t),f(s)],[-x(n),f(s)],[-x(n),f(r)],[-x(t),f(r)],c),i.quad(g(t,s,a),g(t,s,o),g(t,r,o),g(t,r,a),Tn(e,-1,0,0),[-x(a),f(s)],[-x(o),f(s)],[-x(o),f(r)],[-x(a),f(r)],c),i.quad(g(n,s,a),g(n,s,o),g(n,r,o),g(n,r,a),Tn(e,1,0,0),[x(a),f(s)],[x(o),f(s)],[x(o),f(r)],[x(a),f(r)],c),d&&i.quad(g(t,r,a),g(n,r,a),g(n,r,o),g(t,r,o),[0,1,0],[x(t),x(a)],[x(n),x(a)],[x(n),x(o)],[x(t),x(o)],c)}var Rx=i=>"#"+i.map(e=>e.toString(16).padStart(2,"0")).join(""),xn=(...i)=>i.map(Rx),Hl=[{id:"kyiv",n:"\u041A\u0438\u0457\u0432",fac:["stalinka","stalinka","panel","modern"],pal:xn([232,212,176],[216,186,152],[240,228,204],[206,178,144],[226,202,172]),tree:"chestnut",lamp:"city",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","column"],sky:["motherland","belltower","tv"],ads:["\u0412\u0410\u0420\u0415\u041D\u0418\u041A\u0418","\u041A\u0418\u0407\u0412","\u041A\u0410\u0428\u0422\u0410\u041D","\u041C\u0415\u0422\u0420\u041E \u2192","\u041A\u0410\u0412\u0410","\u0410\u041F\u0422\u0415\u041A\u0410"],pool:["avenue","avenue","boulevard","street","park","construction"]},{id:"lviv",n:"\u041B\u044C\u0432\u0456\u0432",fac:["austro"],pal:xn([238,208,162],[200,222,212],[242,192,172],[222,204,232],[250,232,174],[192,212,232],[236,186,150]),tree:"linden",lamp:"lantern",tram:1,trolley:0,cobble:1,cafe:1,land:["opera","gothic","ratusha"],sky:["spires","ratusha","domes"],ads:["\u041A\u0410\u0412\u0410","\u041F\u041B\u042F\u0426\u041A\u0418","\u0428\u041E\u041A\u041E\u041B\u0410\u0414","\u041B\u0415\u0412","\u041A\u0420\u0415\u041C-\u0411\u0420\u042E\u041B\u0415","\u041F\u0418\u0412\u041E"],pool:["street","street","boulevard","park"]},{id:"odesa",n:"\u041E\u0434\u0435\u0441\u0430",fac:["classic","classic","panel"],pal:xn([242,216,160],[248,232,194],[230,200,152],[240,224,202],[234,208,178]),tree:"plane",lamp:"lantern",tram:1,trolley:1,cobble:1,cafe:1,land:["opera","statue"],sky:["cranes","lighthouse"],ads:["\u041F\u0420\u0418\u0412\u041E\u0417","\u0411\u0418\u0427\u041A\u0418","\u0428\u0410\u041B\u0410\u041D\u0414\u0418","\u041C\u041E\u0420\u0415 \u0422\u0410\u041C \u2192","\u0412\u0410\u041C \u041A\u0423\u0414\u0418?","\u041A\u0410\u0412\u0410"],pool:["boulevard","street","street","park"]},{id:"kharkiv",n:"\u0425\u0430\u0440\u043A\u0456\u0432",fac:["constructivist","stalinka","panel"],pal:xn([206,204,196],[218,210,194],[188,188,184],[230,218,194]),tree:"linden",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["gosprom","domes"],sky:["gosprom","belltower","wheel"],ads:["\u0413\u041E\u0421\u041F\u0420\u041E\u041C","\u041C\u0415\u0422\u0420\u041E \u2192","\u0421\u0422\u0423\u0414\u0415\u041D\u0422","\u0428\u0410\u0423\u0420\u041C\u0410","\u041A\u041D\u0418\u0413\u0418"],pool:["avenue","avenue","street","park","construction"]},{id:"dnipro",n:"\u0414\u043D\u0456\u043F\u0440\u043E",fac:["modern","panel","stalinka"],pal:xn([150,192,222],[202,204,210],[228,216,192],[132,172,212]),tree:"poplar",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["highrise","statue"],sky:["highrises","chimneys"],ads:["\u041D\u0410\u0411\u0415\u0420\u0415\u0416\u041D\u0410","\u041C\u0415\u0422\u0420\u041E \u2192","\u0414\u041D\u0406\u041F\u0420\u041E","\u0421\u0423\u0428\u0406"],pool:["avenue","avenue","street","construction","park"]},{id:"zaporizhzhia",n:"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F",fac:["panel","stalinka"],pal:xn([216,208,192],[202,192,172],[228,216,198]),tree:"poplar",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["statue"],sky:["chimneys","dam"],ads:["\u0425\u041E\u0420\u0422\u0418\u0426\u042F","\u0414\u041D\u0406\u041F\u0420\u041E\u0413\u0415\u0421","\u041C\u041E\u0422\u041E\u0420","\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418"],pool:["avenue","street","construction","park"]},{id:"vinnytsia",n:"\u0412\u0456\u043D\u043D\u0438\u0446\u044F",fac:["brick","classic","panel"],pal:xn([192,96,72],[238,216,172],[216,192,162]),tree:"chestnut",lamp:"lantern",tram:1,trolley:1,cobble:0,cafe:1,land:["watertower","domes"],sky:["watertower","domes"],ads:["\u0412\u0406\u041D\u041D\u0418\u0426\u042F","\u0424\u041E\u041D\u0422\u0410\u041D","\u041F\u041E\u0414\u0406\u041B\u041B\u042F","\u041A\u0410\u0412\u0410"],pool:["street","boulevard","park","avenue"]},{id:"mykolaiv",n:"\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432",fac:["classic","panel"],pal:xn([238,218,178],[228,206,172],[216,202,182]),tree:"plane",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["statue"],sky:["cranes"],ads:["\u0412\u0415\u0420\u0424","\u041C\u0418\u041A\u041E\u041B\u0410\u0407\u0412","\u0420\u0418\u0411\u0410","\u0410\u041F\u0422\u0415\u041A\u0410"],pool:["avenue","street","boulevard","park"]},{id:"zhytomyr",n:"\u0416\u0438\u0442\u043E\u043C\u0438\u0440",fac:["brick","classic","panel"],pal:xn([188,98,74],[234,216,182],[212,198,178]),tree:"linden",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["rocket","domes"],sky:["rocket","domes"],ads:["\u041A\u041E\u0421\u041C\u041E\u0421","\u0416\u0418\u0422\u041E\u041C\u0418\u0420","\u041A\u041E\u0420\u041E\u041B\u042C\u041E\u0412"],pool:["street","avenue","park"]},{id:"chernihiv",n:"\u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432",fac:["brick","panel","classic"],pal:xn([186,94,72],[234,222,198],[212,202,188]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","domes"],sky:["domes","domes"],ads:["\u0427\u0415\u0420\u041D\u0406\u0413\u0406\u0412","\u0412\u0410\u041B","\u0425\u041B\u0406\u0411"],pool:["street","boulevard","park"]},{id:"poltava",n:"\u041F\u043E\u043B\u0442\u0430\u0432\u0430",fac:["classic","classic","panel"],pal:xn([246,222,152],[248,238,208],[238,208,152]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:0,cafe:0,land:["column","domes"],sky:["column","domes"],ads:["\u0413\u0410\u041B\u0423\u0428\u041A\u0418","\u041F\u041E\u041B\u0422\u0410\u0412\u0410","\u041A\u0410\u0412\u0410"],pool:["boulevard","street","park"]},{id:"sumy",n:"\u0421\u0443\u043C\u0438",fac:["classic","brick","panel"],pal:xn([238,222,192],[192,102,82],[216,206,192]),tree:"linden",lamp:"city",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","statue"],sky:["domes"],ads:["\u0421\u0423\u041C\u0418","\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418"],pool:["street","avenue","park"]},{id:"lutsk",n:"\u041B\u0443\u0446\u044C\u043A",fac:["brick","austro","panel"],pal:xn([182,98,74],[232,212,182],[212,202,192]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:1,cafe:1,land:["castle","domes"],sky:["castle","domes"],ads:["\u041B\u0423\u0426\u042C\u041A","\u0417\u0410\u041C\u041E\u041A \u2192","\u041A\u0410\u0412\u0410"],pool:["street","street","park","boulevard"]},{id:"frankivsk",n:"\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A",fac:["austro","classic"],pal:xn([238,210,166],[208,224,214],[238,198,178],[224,208,234]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:1,cafe:1,land:["ratusha","domes"],sky:["ratusha","mountains"],ads:["\u0424\u0420\u0410\u041D\u0418\u041A","\u041A\u0410\u0412\u0410","\u041A\u0410\u0420\u041F\u0410\u0422\u0418 \u2192","\u0411\u0410\u041D\u041E\u0428"],pool:["street","street","boulevard","park"]}],Wl=Object.fromEntries(Hl.map(i=>[i.id,i])),Sa={street:{walk:5.8,bx:5.8,flo:0},avenue:{walk:8.6,bx:9,flo:2,park:!0},boulevard:{walk:5.8,bx:12.5,flo:0,alley:!0},park:{walk:5.8,bx:0},construction:{walk:5.8,bx:0}};function cf(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1000003+1}var Me={cream:Ae("#efe4c8"),white:Ae("#f4f1ea"),stone:Ae("#a39a8c"),grey:Ae("#8a8a88"),dark:Ae("#4b4744"),green:Ae("#5f9d8c"),brick:Ae("#9a4b36"),red:Ae("#b8322a"),granite:Ae("#6e625a"),bronze:Ae("#4f5a3c"),blue:Ae("#3d5a8a"),concrete:Ae("#b9b6ae"),yellow:Ae("#e3b23c"),steel:Ae("#c9ccd1")},hf={},Bi=(i,e)=>hf[i]||(hf[i]=e()),Px=()=>Bi("box",()=>new Dt(1,1,1)),Ix=(i=16)=>Bi("cyl"+i,()=>new Wt(.5,.5,1,i)),Lx=(i=16)=>Bi("cone"+i,()=>new Zr(.5,1,i)),Dx=()=>Bi("sph",()=>new mn(.5,18,12)),Nx=()=>Bi("hemi",()=>new mn(.5,18,8,0,Math.PI*2,0,Math.PI/2)),Ux=()=>Bi("onion",()=>{let i=[];for(let e=0;e<=16;e++){let t=e/16;i.push(new Ne(Math.max(.001,.5*Math.sin(Math.PI*Math.pow(t,.7))*(1-.3*t)),t*1.4))}return new $r(i,18)}),Fx=()=>Bi("caps",()=>new bn(.5,1,4,10));function uf(i,e){let t=(n,s,r,a,o,c,l,h,d,u=0)=>n.geo(s,Ma(i,r,a,o,u,c,l,h),d);return{box:(n,s,r,a,o,c,l,h=e.det,d=0)=>t(h,Px(),n,s+o/2,r,a,o,c,l,d),cyl:(n,s,r,a,o,c,l=e.det,h=16)=>t(l,Ix(h),n,s+o/2,r,a*2,o,a*2,c),cone:(n,s,r,a,o,c,l=e.det,h=16,d=0)=>t(l,Lx(h),n,s+o/2,r,a*2,o,a*2,c,d),sph:(n,s,r,a,o,c=e.det,l=1)=>t(c,Dx(),n,s,r,a*2,a*2*l,a*2,o),dome:(n,s,r,a,o,c=e.det,l=1)=>t(c,Nx(),n,s,r,a*2,a*2*l,a*2,o),onion:(n,s,r,a,o,c=e.gold)=>t(c,Ux(),n,s,r,a*2,a*2,a*2,o),caps:(n,s,r,a,o,c,l=e.det,h=0)=>t(l,Fx(),n,s,r,a*2,o,a*2,c,h)}}function df(i,e,t,n,s){let r=s||Me.white;i.box(e,0,t,16*n,12*n,10*n,r),i.box(e,0,t,10*n,12*n,16*n,r),i.box(e,12*n,t,16.4*n,.6*n,10.4*n,Me.cream),i.box(e,12*n,t,10.4*n,.6*n,16.4*n,Me.cream),i.cyl(e,12*n,t,3*n,6*n,r),i.onion(e,18*n,t,3.4*n,Me.yellow),i.box(e,22.3*n,t,.2*n,2.4*n,.2*n,Me.yellow,void 0),i.box(e,23.3*n,t,.2*n,.2*n,1.2*n,Me.yellow);for(let[a,o]of[[-5,-5],[5,-5],[-5,5],[5,5]])i.cyl(e+a*n,12*n,t+o*n,1.4*n,3*n,r),i.onion(e+a*n,15*n,t+o*n,1.7*n,Me.yellow);i.box(e-12*n,0,t,5*n,18*n,5*n,r),i.box(e-12*n,18*n,t,4*n,4*n,4*n,r),i.onion(e-12*n,22*n,t,2*n,Me.yellow)}function Xl(i,e,t,n,s,r,a){i.caps(e,t+1.5*s,n,.45*s,1.6*s,r,a),i.sph(e,t+2.75*s,n,.32*s,r,a),i.caps(e+.1*s,t+2.3*s,n+.55*s,.13*s,1.1*s,r,a),i.caps(e,t+1.8*s,n-.55*s,.13*s,.9*s,r,a)}function Nh(i,e,t,n){let s=uf(e,n),r=-t;switch(i){case"opera":s.box(0,0,0,30,15,20,Me.cream),s.box(0,14.6,0,31,.8,21,Me.white),s.box(0,0,r*10.5,20,1.2,3,Me.stone),s.box(0,15,r*8.5,18,3,3,Me.cream);for(let a=0;a<8;a++)s.cyl(-10.5+a*3,1.2,r*10.6,.48,10,Me.white);s.box(0,11.2,r*10.6,24,1.2,1.4,Me.white);for(let a of[-13,13])Xl(s,a,15.4,r*8.5,1.4,Me.yellow,n.gold);s.cyl(0,15,0,6.3,1.2,Me.white),s.dome(0,16.2,0,6,Me.green),s.cyl(0,22,0,.35,2.6,Me.yellow,n.gold),Xl(s,0,24.2,0,1.2,Me.yellow,n.gold);break;case"gothic":s.box(0,0,-r*4,14,14,24,Me.stone),s.box(0,14,-r*4,.1,.1,.1,Me.dark),s.cone(0,14,-r*4,9.8,6,Me.dark,n.det,4,Math.PI/4);for(let a of[-5,5])s.box(a,0,r*8,4.4,28,4.4,Me.stone),s.cone(a,28,r*8,3,18,Me.dark,n.det,4,Math.PI/4),s.sph(a,46.3,r*8,.35,Me.yellow,n.gold);s.cyl(0,10,r*10.1,2.1,.2,Me.blue),s.box(0,0,r*10.1,2.6,4.5,.4,Me.dark);break;case"ratusha":s.box(0,0,0,24,13,22,Me.cream),s.box(0,12.8,0,25,.7,23,Me.white),s.box(0,13,0,5.5,20,5.5,Me.cream),s.box(0,33,0,6.4,.6,6.4,Me.white),s.cyl(0,33.6,0,2.6,2.5,Me.cream),s.cone(0,36,0,3.6,5.4,Me.green,n.det,8);for(let[a,o]of[[0,2.8],[0,-2.8],[2.8,0],[-2.8,0]])s.cyl(a,29.5,o,1.25,.1,Me.white);s.cyl(0,41.4,0,.08,5,Me.dark,n.metal,6),s.box(1.3,44.6,0,2.6,.8,.05,Me.yellow),s.box(1.3,45.4,0,2.6,.8,.05,Me.blue);break;case"domes":df(s,0,0,1.1);break;case"column":s.box(0,0,0,9,1,9,Me.granite),s.box(0,1,0,5,5,5,Me.white),s.cyl(0,6,0,1.3,34,Me.white,n.det,20),s.cyl(0,40,0,2,1.5,Me.white),Xl(s,0,41.5,0,2.2,Me.yellow,n.gold);for(let a=0;a<4;a++)s.cyl(Math.cos(a*1.57)*7,0,Math.sin(a*1.57)*7,.4,3.5,Me.dark,n.metal,8);break;case"statue":s.box(0,0,0,7,.8,7,Me.granite),s.box(0,.8,0,3.4,4.5,3.4,Me.granite),s.box(0,5.3,0,3.8,.5,3.8,Me.granite),Xl(s,0,5.8,0,2.3,Me.bronze,n.metal);break;case"gosprom":for(let[a,o,c]of[[-26,18,26],[-8,16,44],[8,16,50],[26,18,30]]){s.box(a,0,0,o,c,18,Me.concrete);for(let l=3;l<c-2;l+=3.4)s.box(a,l,r*9.05,o-1,1.6,.2,Me.blue,n.glass)}s.box(0,20,r*2,52,3,4,Me.concrete),s.box(-17,14,r*2,4,3,4,Me.concrete),s.cyl(8,50,0,.25,12,Me.dark,n.metal,6);break;case"highrise":s.box(0,0,0,22,6,22,Me.grey),s.box(0,6,0,18,74,18,Me.blue,n.glass),s.box(0,80,0,19,1,19,Me.steel,n.metal);for(let a=9;a<80;a+=3)s.box(0,a,r*9.02,18.2,.25,.1,Me.steel,n.metal);s.cyl(0,81,0,.3,14,Me.steel,n.metal,6);break;case"watertower":s.box(0,0,0,7,24,7,Me.brick),s.box(0,24,0,8.5,6,8.5,Me.brick),s.box(0,30,0,9,.6,9,Me.white);for(let[a,o]of[[0,4.3],[0,-4.3],[4.3,0],[-4.3,0]])s.cyl(a,26.4,o,1.4,.1,Me.white);s.cone(0,30.6,0,5.8,6,Me.dark,n.det,4,Math.PI/4),s.cyl(0,36.6,0,.15,3,Me.yellow,n.gold,6);break;case"rocket":s.box(0,0,0,8,1.2,8,Me.granite);for(let a of[0,2.09,4.19])s.box(Math.cos(a)*2,1.2,Math.sin(a)*2,.5,9,.5,Me.steel,n.metal,a);s.cyl(0,6,0,1.4,16,Me.white),s.cone(0,22,0,1.4,5,Me.white),s.cyl(0,6,0,1.45,1.2,Me.red);for(let a of[0,1.57,3.14,4.71])s.box(Math.cos(a)*1.8,6,Math.sin(a)*1.8,.2,4,1.8,Me.white,n.det,a);break;case"castle":s.box(0,0,0,36,9,2,Me.brick),s.box(0,0,r*14,36,9,2,Me.brick),s.box(-18,0,r*7,2,9,14,Me.brick),s.box(18,0,r*7,2,9,14,Me.brick);for(let a=-17;a<=17;a+=2.4)s.box(a,9,0,1.2,1,2.2,Me.brick);for(let[a,o]of[[-18,22],[0,28],[18,18]])s.box(a,0,0,8,o,8,Me.brick),s.cone(a,o,0,6.2,6,Me.red,n.det,4,Math.PI/4);break}}function ff(i,e){let t=i.length;i.forEach((n,s)=>{let r=-.6+(s-(t-1)/2)*.95+s%2*.2,a=330,o=fs(Math.sin(r)*a,0,-Math.cos(r)*a,r+Math.PI/2),c={det:e,gold:e,glass:e,metal:e},l=uf(o,c),h=[1,1,1];switch(n){case"motherland":l.box(0,0,0,20,30,20,h),l.caps(0,62,0,5,50,h),l.sph(0,92,0,3,h),l.box(4,78,6,1.2,38,1.2,h,e,.2),l.cyl(-6,74,0,6,1.2,h);break;case"belltower":l.box(0,0,0,22,30,22,h),l.box(0,30,0,16,24,16,h),l.cyl(0,54,0,6,18,h),l.onion(0,72,0,7,h,e),l.cone(0,81,0,1,12,h);break;case"tv":l.cone(0,0,0,14,160,h,e,6),l.cyl(0,160,0,1,40,h),l.box(0,100,0,12,4,12,h);break;case"spires":for(let d of[-8,8])l.box(d,0,0,7,50,7,h),l.cone(d,50,0,5,32,h,e,4);l.box(0,0,18,18,28,30,h);break;case"ratusha":l.box(0,0,0,40,22,30,h),l.box(0,22,0,10,40,10,h),l.cone(0,62,0,7,12,h,e,8);break;case"domes":df(l,0,0,2.2,h);break;case"cranes":for(let d of[-30,0,30])l.box(d,0,0,3,50,3,h),l.box(d+14,48,0,46,3,2,h,e,.15);break;case"lighthouse":l.cone(0,0,0,8,50,h,e,12),l.cyl(0,50,0,4,8,h),l.cone(0,58,0,4.5,4,h);break;case"gosprom":for(let[d,u]of[[-40,50],[-14,80],[14,90],[40,56]])l.box(d,0,0,24,u,24,h);break;case"wheel":{let d=Bi("torus",()=>new is(30,1.2,6,40));e.geo(d,Ma(o,0,36,0,Math.PI/2),h),l.box(0,0,0,2,36,6,h);for(let u=0;u<6;u++)l.box(0,36,0,.8,60,.8,h,e);break}case"highrises":for(let[d,u,m]of[[-50,110,22],[-20,150,26],[14,130,22],[46,90,30]])l.box(d,0,0,m,u,m,h);break;case"chimneys":for(let[d,u]of[[-30,110],[0,130],[28,100]])l.cone(d,0,0,6,u,h,e,12);l.box(0,0,20,90,30,30,h);break;case"dam":l.box(0,0,0,320,40,12,h);for(let d=-150;d<=150;d+=20)l.box(d,40,0,6,14,10,h);break;case"watertower":l.box(0,0,0,12,60,12,h),l.box(0,60,0,16,14,16,h),l.cone(0,74,0,11,14,h,e,4);break;case"rocket":l.cyl(0,0,0,5,60,h),l.cone(0,60,0,5,20,h);break;case"castle":for(let[d,u]of[[-40,40],[0,56],[40,34]])l.box(d,0,0,18,u,18,h),l.cone(d,u,0,13,14,h,e,4);l.box(0,0,0,90,22,8,h);break;case"column":l.cyl(0,0,0,3,90,h),l.caps(0,98,0,3,8,h);break;case"mountains":for(let[d,u,m]of[[-120,120,180],[0,160,220],[130,110,200]])l.cone(d,0,60,m/2,u,h,e,7);break}})}function zi(i,e,t){let n=document.createElement("canvas");return n.width=i,n.height=e,t&&t(n.getContext("2d"),i,e),n}function si(i,{srgb:e=!0,repeatU:t=!0,repeatV:n=!0,aniso:s=8}={}){let r=new Xr(i);return r.colorSpace=e?tn:Hn,r.wrapS=t?ji:gn,r.wrapT=n?ji:gn,r.minFilter=kn,r.anisotropy=s,r}var Uh=7,xt=()=>(Uh=Uh*16807%2147483647)/2147483647;function pf(i){Uh=i%2147483646+1}function Ox(i,e=2,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,a=zi(n,s),o=a.getContext("2d"),c=o.createImageData(n,s),l=c.data,h=(d,u)=>(t?(d=(d+n)%n,u=(u+s)%s):(d=Math.max(0,Math.min(n-1,d)),u=Math.max(0,Math.min(s-1,u))),r[(u*n+d)*4]/255);for(let d=0;d<s;d++)for(let u=0;u<n;u++){let m=h(u+1,d-1)+2*h(u+1,d)+h(u+1,d+1)-(h(u-1,d-1)+2*h(u-1,d)+h(u-1,d+1)),g=h(u-1,d+1)+2*h(u,d+1)+h(u+1,d+1)-(h(u-1,d-1)+2*h(u,d-1)+h(u+1,d-1)),x=-m*e,f=g*e,p=1,v=Math.hypot(x,f,p);x/=v,f/=v,p/=v;let A=(d*n+u)*4;l[A]=(x*.5+.5)*255,l[A+1]=(f*.5+.5)*255,l[A+2]=(p*.5+.5)*255,l[A+3]=255}return o.putImageData(c,0,0),a}function ba(i,e,t){let n={};for(let s of["c","h","r","e"]){n[s]=zi(i,e);let r=n[s].getContext("2d");r.fillStyle=t[s],r.fillRect(0,0,i,e),n[s+"g"]=r}return n.rect=(s,r,a,o,c)=>{for(let l of["c","h","r","e"])c[l]!=null&&(n[l+"g"].fillStyle=c[l],n[l+"g"].fillRect(s,r,a,o))},n.path=(s,r)=>{for(let a of["c","h","r","e"])if(r[a]!=null){let o=n[a+"g"];o.fillStyle=r[a],o.beginPath(),s(o),o.fill()}},n.noise=(s,r,a=2600,o=2)=>{let c=n[s+"g"];for(let l=0;l<a;l++){let h=xt();c.fillStyle=`rgba(${h<.5?"0,0,0":"255,255,255"},${r*xt()})`,c.fillRect(xt()*i,xt()*e,o,o)}},n}var Be=i=>`rgb(${i|0},${i|0},${i|0})`;function wa(i,{normal:e=2.2,srgbE:t=!0}={}){return{map:si(i.c),normal:si(Ox(i.h,e),{srgb:!1}),rough:si(i.r,{srgb:!1}),emissive:si(i.e,{srgb:t})}}function Fh({cobble:i,rails:e,markings:t}){let r=ba(512,384,{c:i?"#6f655b":"#4a4b4e",h:Be(90),r:Be(i?200:225),e:"#000"});if(i){let c=21.333333333333332;for(let l=0;l<18;l++){let h=l%2*9-9;for(;h<512;){let d=18+xt()*12,u=100+xt()*50|0,m=150+xt()*60;r.path(g=>g.roundRect(h+1.5,l*c+1.5,d-3,c-3,6),{c:`rgb(${u+12},${u+2},${u-10})`,h:Be(m),r:Be(150+xt()*60)}),r.path(g=>g.roundRect(h+5,l*c+4,d-10,c-9,5),{h:Be(m+25)}),h+=d}}}else{r.noise("c",.25,26e3,2),r.noise("h",.5,3e4,1),r.noise("r",.3,9e3,3);for(let o=0;o<6;o++){let c=xt()*512,l=xt()*384;r.path(h=>h.ellipse(c,l,20+xt()*50,8+xt()*20,xt()*3,0,7),{c:"rgba(30,30,32,0.25)"})}if(t)for(let o of[-1.1,1.1]){let c=(o+3.4)/6.8*512;r.rect(c-3,0,6,384*.6,{c:"#d8d8d2",h:Be(110),r:Be(150)})}for(let o of[.6,6.2]){let c=o/6.8*512;r.rect(c-2.5,0,5,384,{c:"#cfcfc8",h:Be(105),r:Be(160)})}}if(e)for(let o of[-2.2,0,2.2])for(let c of[-.72,.72]){let l=(o+c+3.4)/6.8*512;r.rect(l-6,0,12,384,{c:"#3f3c3a",h:Be(60),r:Be(170)}),r.rect(l-2.5,0,5,384,{c:"#b9bcc0",h:Be(140),r:Be(55)})}let a=wa(r,{normal:i?3:1.4});for(let o of["map","normal","rough"])a[o].wrapS=gn;return a}function mf(i){let n=ba(256,256,{c:i?"#c3baac":"#b9b6b0",h:Be(150),r:Be(215),e:"#000"}),s=i?4:8,r=256/s;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let c=(i?175:182)+xt()*30|0;n.rect(a*r+2,o*r+2,r-4,r-4,{c:`rgb(${c+6},${c},${c-8})`,h:Be(170+xt()*30)})}return n.noise("c",.12,9e3,2),n.noise("h",.25,9e3,1),wa(n,{normal:2})}function gf(){let t=ba(256,256,{c:"#5d7f3a",h:Be(120),r:Be(240),e:"#000"});for(let n=0;n<9e3;n++){let s=xt();t.rect(xt()*256,xt()*256,2,3,{c:s<.5?"#4b6d2e":"#6f9446",h:Be(80+s*120)})}return wa(t,{normal:1.5})}var Ta={austro:{bw:1.9,fh:3.3},stalinka:{bw:2.4,fh:3.3},classic:{bw:2.2,fh:3.6},panel:{bw:2.6,fh:2.8},constructivist:{bw:3,fh:3.1},modern:{bw:1.6,fh:3},brick:{bw:1.9,fh:3.2}};function _f(i){let e=Ta[i],t=96,n=Math.round(t*e.fh/e.bw),s=t*4,r=n*2,a=ba(s,r,{c:"#f2efe9",h:Be(150),r:Be(230),e:"#000"});if(i==="brick"){let c=Math.round(r/7);for(let l=0;l<c;l++)for(let h=l%2*-6;h<s;h+=12){let d=170+xt()*60|0;a.rect(h+.5,l*7+.5,11,6,{c:`rgb(${d},${d-20},${d-30})`,h:Be(165+xt()*25)})}}else i!=="modern"&&(a.noise("c",.07,14e3,2),a.noise("h",.18,12e3,2));let o=(c,l,h,d,u,m)=>{a.rect(c,l,h,d,{c:"#2c3a4c",h:Be(70),r:Be(35),e:u?xt()<.5?"#ffc977":"#ffe0a8":"#000"}),m&&a.rect(c+2,l+2,h*(.3+xt()*.3),d-4,{c:m,r:Be(200),e:u?"#e8a05a":null}),a.rect(c+h*.08,l+3,h*.18,d-6,{c:"rgba(160,190,220,0.25)"})};for(let c=0;c<2;c++)for(let l=0;l<4;l++){let h=l*t,d=c*n,u=xt()<.55,m=xt()<.5?Bx(["#e9e2d0","#d9c7a8","#c9d4dc","#b98b7a"]):null;if(i==="austro"||i==="brick"||i==="classic"||i==="stalinka"){let g=t*(i==="stalinka"?.46:i==="classic"?.44:.5),x=n*(i==="classic"?.6:.55),f=h+(t-g)/2,p=d+n*.2;i==="brick"?a.path(v=>{v.moveTo(f-6,p+2),v.arc(f+g/2,p+2,g/2+6,Math.PI,0),v.closePath()},{c:"#8c4a36",h:Be(185)}):a.rect(f-8,p-16,g+16,9,{c:"#f8f5ee",h:Be(220)}),i==="classic"&&a.path(v=>{v.moveTo(f-10,p-16),v.lineTo(f+g/2,p-34),v.lineTo(f+g+10,p-16),v.closePath()},{c:"#f8f5ee",h:Be(225)}),a.rect(f-5,p-5,g+10,x+10,{c:"#fbf8f2",h:Be(200),r:Be(170)}),o(f,p,g,x,u,m),a.rect(f+g/2-2,p,4,x,{c:"#f4f1ea",h:Be(190),r:Be(170),e:"#000"}),a.rect(f,p+x*.36,g,4,{c:"#f4f1ea",h:Be(190),r:Be(170),e:"#000"}),a.rect(f-9,p+x+4,g+18,7,{c:"#e3ddd0",h:Be(230)}),i==="stalinka"&&(a.rect(f-4,p+x+16,g+8,n*.12,{c:"#e9e3d6",h:Be(185)}),a.rect(h,d+n-5,t,5,{h:Be(110)}))}else if(i==="panel"){let g=t*.52,x=n*.46,f=h+(t-g)/2,p=d+n*.24;a.rect(h,d,2,n,{c:"#9c9a94",h:Be(80)}),a.rect(h,d,t,2,{c:"#9c9a94",h:Be(80)}),a.rect(f-3,p-3,g+6,x+6,{c:"#eeeeea",h:Be(120),r:Be(170)}),o(f,p,g,x,u,m),a.rect(f+g*.6,p,3,x,{c:"#eeeeea",e:"#000"}),l%2===1&&a.rect(h+4,p+x+6,t-8,n*.2,{c:"#d9d6cf",h:Be(205)})}else if(i==="constructivist"){let g=d+n*.28,x=n*.42;o(h,g,t,x,u,m);for(let f=0;f<4;f++)a.rect(h+f*t/4,g,3,x,{c:"#e9e6df",h:Be(190),r:Be(170),e:"#000"});a.rect(h,g-4,t,4,{c:"#e9e6df",h:Be(200)}),a.rect(h,g+x,t,5,{c:"#e9e6df",h:Be(210)})}else i==="modern"&&(a.rect(h,d,t,n,{c:"#a8bccf",h:Be(120),r:Be(18),e:u&&xt()<.7?"#f3e6c8":"#000"}),a.rect(h+6,d+6,t*.3,n-20,{c:"rgba(255,255,255,0.18)"}),a.rect(h,d+n-14,t,14,{c:"#5f6b78",h:Be(160),r:Be(80),e:"#000"}),a.rect(h,d,3,n,{c:"#3a434d",h:Be(185),r:Be(60),e:"#000"}))}return{...wa(a,{normal:i==="modern"?.6:2.4}),bw:e.bw*4,fh:e.fh*2}}function Bx(i){return i[xt()*i.length|0]}function Oh(i){let n=ba(256,256,{c:i?"#6c6a66":"#a8492f",h:Be(120),r:Be(i?235:160),e:"#000"});if(i){n.noise("c",.3,2e4,2),n.noise("h",.5,2e4,2);for(let s=0;s<4;s++)n.rect(0,s*64,256,2,{c:"#56544f",h:Be(170)})}else for(let s=0;s<10;s++)for(let r=0;r<11;r++){let a=r*24+s%2*12,o=s*26,c=xt();n.path(l=>{l.moveTo(a-12,o),l.lineTo(a+12,o),l.lineTo(a+12,o+20),l.arc(a,o+20,12,0,Math.PI),l.closePath()},{c:`rgb(${150+c*40|0},${62+c*18|0},${40+c*10|0})`,h:Be(120+c*40)}),n.path(l=>{l.moveTo(a-8,o+2),l.lineTo(a+2,o+2),l.lineTo(a+2,o+24),l.lineTo(a-8,o+20),l.closePath()},{h:Be(200)})}return wa(n,{normal:i?1.2:3})}function xf(){return si(zi(128,32,(i,e,t)=>{i.fillStyle="#f5f5f5",i.fillRect(0,0,e,t),i.fillStyle="#d63028";for(let n=-t;n<e+t;n+=32)i.beginPath(),i.moveTo(n,t),i.lineTo(n+16,t),i.lineTo(n+16+t,0),i.lineTo(n+t,0),i.closePath(),i.fill()}))}function Ea(i,e,t,n=256,s=96){return si(zi(n,s,r=>{r.fillStyle=e,r.fillRect(0,0,n,s),r.fillStyle=t,r.font=`900 ${s*.55}px Rubik, system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,n/2,s/2+2)}),{repeatU:!1,repeatV:!1})}function vf(){return si(zi(256,128,(i,e,t)=>{i.fillStyle="#eef0f2",i.fillRect(0,0,e,t),i.fillStyle="#2b3a4e";for(let n=0;n<5;n++)i.fillRect(10+n*49,22,40,40);i.fillStyle="#c9ced4",i.fillRect(0,92,e,6)}),{repeatU:!1,repeatV:!1})}function ql(){return si(zi(128,128,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}),{repeatU:!1,repeatV:!1})}function yf(){return si(zi(8,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.4,"rgba(0,0,0,0.18)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}),{repeatU:!0,repeatV:!1})}function Mf(i){let r=zi(512,256,o=>{let c=["#7a1f1a","#1f4a36","#1d355f","#4b2a55","#5a3a1a","#1b1b1b","#6b5a18","#234a55"];for(let l=0;l<8;l++){let h=l%2*256,d=(l>>1)*64,u=i[l%i.length]||"\u041A\u0410\u0412\u0410";o.fillStyle=c[l],o.fillRect(h,d,256,64),o.strokeStyle="#e8c878",o.lineWidth=3,o.strokeRect(h+4,d+4,248,56),o.fillStyle="#f6e7b8",o.font=`800 ${u.length>9?26:34}px Rubik, system-ui, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(u,h+128,d+32+2)}});return{tex:si(r,{repeatU:!1,repeatV:!1}),uv:o=>{let c=o%2/2,l=1-((o>>1)+1)/4;return[c,l,c+.5,l+.25]}}}var Ra=50,vn=i=>new ei({roughness:.9,metalness:0,...i});function Tf(i){pf(i.id.length*977+i.id.charCodeAt(0));let e=Fh({cobble:!!i.cobble,rails:!!i.tram,markings:!i.cobble}),t=Fh({cobble:!1,rails:!1,markings:!1}),n=mf(!!i.cobble),s=gf(),r=Oh(!1),a=Oh(!0),o=Mf(i.ads),c=[...new Set(i.fac.concat(["panel"]))],l={},h={};for(let u of c)l[u]=_f(u),h[u]=vn({map:l[u].map,normalMap:l[u].normal,roughnessMap:l[u].rough,emissiveMap:l[u].emissive,emissive:"#ffffff",emissiveIntensity:0,vertexColors:!0,metalness:u==="modern"?.55:0,roughness:1});let d={fac:l,wall:h,signsUV:o.uv,road:vn({map:e.map,normalMap:e.normal,roughnessMap:e.rough,roughness:1}),asph:vn({map:t.map,normalMap:t.normal,roughnessMap:t.rough,roughness:1}),walk:vn({map:n.map,normalMap:n.normal,roughnessMap:n.rough,vertexColors:!0,roughness:1}),grass:vn({map:s.map,normalMap:s.normal,vertexColors:!0,roughness:1}),roofP:vn({map:r.map,normalMap:r.normal,roughnessMap:r.rough,vertexColors:!0,roughness:1,emissive:"#000000"}),roofF:vn({map:a.map,normalMap:a.normal,roughnessMap:a.rough,vertexColors:!0,roughness:1,emissive:"#000000"}),det:vn({vertexColors:!0,roughness:.82}),leaves:vn({vertexColors:!0,roughness:.95,emissive:"#000000"}),metal:vn({color:"#2a2c31",metalness:.7,roughness:.42}),gold:vn({vertexColors:!0,metalness:1,roughness:.28}),glass:vn({vertexColors:!0,color:"#9fb4c8",metalness:.6,roughness:.06}),lamp:vn({color:"#fff2c8",emissive:"#ffcf7a",emissiveIntensity:.3}),glow:new pn({map:ql(),color:"#ffbe6a",transparent:!0,opacity:0,blending:vi,depthWrite:!1}),ao:new pn({map:yf(),color:"#000000",transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),sign:vn({map:o.tex,emissiveMap:o.tex,emissive:"#ffffff",emissiveIntensity:0,roughness:.5})};return d.ao.map.repeat.set(1,1),d.ao.color.set("#ffffff"),d.ao.blending=1,d}function Ef(i){let e=new Set,t=Object.values(i).concat(Object.values(i.wall));for(let n of t)if(n&&n.isMaterial){for(let s of["map","normalMap","roughnessMap","emissiveMap"])n[s]&&!e.has(n[s])&&(e.add(n[s]),n[s].dispose());n.dispose()}}function Af(i,e){for(let n of Object.values(i.wall))n.emissiveIntensity=e.win;i.lamp.emissiveIntensity=e.lamp,i.sign.emissiveIntensity=e.night?.9:e.tod==="sunset"?.35:0,i.glow.opacity=e.glow,i.glow.visible=e.glow>0,i.road.color.set(e.wet?"#7c7c7c":"#ffffff"),i.road.roughness=e.wet?.32:1,i.asph.color.set(e.wet?"#6c6c6c":"#ffffff"),i.asph.roughness=e.wet?.28:1,i.walk.roughness=e.wet?.5:1;let t=e.snow?e.night?.12:.5:0;for(let n of[i.roofP,i.roofF,i.leaves])n.emissive.set(e.snow?"#dfe6ee":"#000000"),n.emissiveIntensity=t;i.road.emissive.set(e.snow?"#4c535b":"#000000"),i.walk.emissive.set(e.snow?"#6a727b":"#000000")}var Sf={austro:{fl:[3,4],W:[6.5,10],gap:[.15,.35],D:10,roof:"pitch"},brick:{fl:[2,4],W:[8,13],gap:[.4,2.5],D:10,roof:"pitch"},classic:{fl:[2,3],W:[10,16],gap:[.3,1.5],D:12,roof:"flat"},stalinka:{fl:[6,8],W:[16,26],gap:[.3,2],D:14,roof:"flat"},panel:{fl:[5,9],W:[18,30],gap:[3,8],D:12,roof:"flat"},constructivist:{fl:[5,8],W:[18,28],gap:[1,4],D:14,roof:"flat"},modern:{fl:[12,20],W:[14,20],gap:[4,9],D:16,roof:"flat"}},Aa=(i,e=1.12)=>i.map(t=>Math.min(1,t*e+.03)),Yl=(i,e=.62)=>i.map(t=>t*e);function ar(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Bh=(i,[e,t])=>e+i()*(t-e),Ca=(()=>{let i=new Jr(1,2),e=i.attributes.position,t=ar(99);for(let n=0;n<e.count;n++){let s=.82+t()*.3;e.setXYZ(n,e.getX(n)*s,e.getY(n)*s,e.getZ(n)*s)}return i.computeVertexNormals(),i})(),zh=new Wt(.5,.5,1,8),bf=new Wt(.5,.5,1,12),BS=new Dt(1,1,1),wf=new Wt(.35,.5,1,7);function Cf(i,e,t,n){let s=e.fac,r={lantern:e.lamp==="lantern"},a={};for(let M of[-1,1]){let b=ar(n*31+(M+2)*7),_=[],y=b()*3;a[M]={list:_,r:b,next:()=>{let R=s[b()*s.length|0],S=Sf[R],L=Ta[R].bw,D=Math.max(2,Math.round(Bh(b,S.W)/L)),H=D*L,I={s:y,W:H,fam:R,nb:D,floors:Math.round(Bh(b,S.fl)),pal:b()*1e3|0,seed:b()*1e9|0};_.push(I),y+=H+Bh(b,S.gap)},until(R){for(;!_.length||_[_.length-1].s<R;)this.next()}}}let o=M=>!M||M.type==="corner"||M.type==="square",c=(M,b=0)=>nn.some(_=>_.type==="corner"&&M+b>_.s-7&&M<_.e+7),l=M=>{let b=ds(M);return b?b.type==="square"?"square":b.type==="corner"?"corner":b.kind||"street":"street"};function h(M,b,_,y,R,S,L,D,H,I){for(let V=b;V<_;V+=1){let X=Math.min(V+1,_),C=Nt(V,y,S,{}),G=Nt(V,R,S,{}),F=Nt(X,R,S,{}),U=Nt(X,y,S,{}),W=I?0:y/D,te=I?1:R/D;M.quad([C.wx,C.wy,C.wz],[G.wx,G.wy,G.wz],[F.wx,F.wy,F.wz],[U.wx,U.wy,U.wz],[0,1,0],[W,V/H],[te,V/H],[te,X/H],[W,X/H],L)}}function d(M,b,_,y,R,S){for(let L=b;L<_;L+=1){let D=Math.min(L+1,_),H=Nt(L,y,0,{}),I=Nt(D,y,0,{}),V=Vl(L,{}),X=Tn(fs(0,0,0,V.th),0,0,y>0?-1:1);M.quad([H.wx,H.wy,H.wz],[I.wx,I.wy,I.wz],[I.wx,I.wy+R,I.wz],[H.wx,H.wy+R,H.wz],X,[L/2,0],[D/2,0],[D/2,.07],[L/2,.07],S)}}let u=(M,b=0,_=0)=>{let y=Nt(M,b,_,{});return fs(y.wx,y.wy,y.wz,y.th)},m=(M,b,_,y,R,S,L,D,H,I,V=0)=>M.geo(b,Ma(_,y,R,S,V,L,D,H),I);function g(M,b,_,y,R,S=e.tree,L=Math.random){let D=S==="plane"?Ae("#9a9182"):Ae("#4f3b2a"),H=G=>Ae(G),I=[H("#3f6b2e"),H("#4d7a34"),H("#5a8a3a"),H("#46733a")][L()*4|0];if(S==="poplar"){m(M.det,wf,b,_,1.5*R,y,.5*R,3*R,.5*R,D),m(M.leaves,Ca,b,_,7*R,y,1.5*R,5.5*R,1.5*R,I);return}let V=S==="plane"?3.2:2.6;m(M.det,wf,b,_,V*R/2,y,.55*R,V*R,.55*R,D);let X=S==="plane"?2.8:S==="linden"?2.1:2.4,C=S==="linden"?1.35:S==="plane"?.75:1;m(M.leaves,Ca,b,_,(V+X*C*.8)*R,y,X*R,X*C*R,X*R,I),m(M.leaves,Ca,b,_+.9*R,(V+X*C*1.2)*R,y+.5*R,X*.7*R,X*.7*C*R,X*.7*R,Aa(I,1.08)),m(M.leaves,Ca,b,_-1*R,(V+X*C*.9)*R,y-.6*R,X*.65*R,X*.65*C*R,X*.65*R,Yl(I,.9))}function x(M,b,_){let y=u(b,_),R=-Math.sign(_);r.lantern?(Ve(M.metal,y,-.12,.12,0,.5,-.12,.12,[1,1,1],1,1),Ve(M.metal,y,-.06,.06,0,3.9,-.06,.06,[1,1,1],1,1),Ve(M.metal,y,-.24,.24,4.55,4.68,-.24,.24,[1,1,1],1,1),Ve(M.metal,y,-.06,.06,4.68,4.9,-.06,.06,[1,1,1],1,1),Ve(M.lamp,y,-.17,.17,3.95,4.55,-.17,.17,[1,1,1],1,1)):(m(M.metal,zh,y,0,4,0,.16,8,.16,[1,1,1]),Ve(M.metal,y,-.05,.05,7.9,8,Math.min(0,R*1.7),Math.max(0,R*1.7),[1,1,1],1,1),Ve(M.lamp,y,-.18,.18,7.75,7.88,R*1.4-.32,R*1.4+.32,[1,1,1],1,1));let S=3.6,L=.16,D=R*(r.lantern?.9:1.4);M.glow.quad(Mi(y,-S,L,D-S),Mi(y,S,L,D-S),Mi(y,S,L,D+S),Mi(y,-S,L,D+S),[0,1,0],[0,0],[1,0],[1,1],[0,1],[1,1,1])}function f(M,b,_,y,R=5){let S=u(b,_*R,.14),L=y();if(L<.2){Ve(M.det,S,-.8,.8,.42,.5,-.22,.22,Ae("#7a5232"),1,1),Ve(M.det,S,-.8,.8,.5,.92,_*.2,_*.26,Ae("#7a5232"),1,1);for(let D of[-.7,.7])Ve(M.metal,S,D-.04,D+.04,0,.45,-.2,.2,[1,1,1],1,1)}else if(L<.34)Ve(M.det,S,-.45,.45,0,.55,-.35,.35,Ae("#8d8478"),1,1),m(M.leaves,Ca,S,0,.75,0,.45,.3,.45,Ae(["#c0392b","#e67e22","#8e44ad","#d35480"][y()*4|0]));else if(L<.46)m(M.det,zh,S,0,.42,0,.45,.85,.45,Ae("#2f5d3a"));else if(L<.62&&e.cafe){let D=Ae(["#f4efe4","#b8322a","#2c4f86","#e7c25a"][y()*4|0]);Ve(M.metal,S,-.03,.03,0,2.25,-.03,.03,[1,1,1],1,1),m(M.det,bf,S,0,.74,0,.75,.04,.75,Ae("#e8e2d6")),m(M.det,new Wt(0,1.5,.55,8),S,0,2.33,0,1,1,1,D);for(let H of[-.6,.6])Ve(M.det,S,H-.2,H+.2,.42,.46,-.2,.2,Ae("#3b2b20"),1,1),Ve(M.det,S,H+Math.sign(H)*.17,H+Math.sign(H)*.21,.46,.9,-.2,.2,Ae("#3b2b20"),1,1)}else L<.62?(Ve(M.det,S,-1.2,1.2,0,2.5,-.9,.9,Ae(["#e9e4d8","#c8d6e0","#f0d9a0"][y()*3|0]),1,1),Ve(M.glass,S,-1,1,.9,2.1,-_*.91-.01,-_*.91+.01,[1,1,1],1,1),Ve(M.det,S,-1.3,1.3,2.5,2.65,-1,1,Ae("#b8322a"),1,1)):L<.7&&(Ve(M.metal,S,-.04,.04,0,2.6,-.04,.04,[1,1,1],1,1),Ve(M.det,S,-.5,.5,2.3,2.6,-.03,.03,Ae("#1f4f8a"),1,1))}function p(M,b,_,y,R){let S=Ae(["#b8322a","#1f3f6e","#e8e8e4","#2b2b2e","#8a9096","#3d6b4a","#c9a227"][R()*7|0]);Ve(M.det,b,_-2.1,_+2.1,.32,1,y-.85,y+.85,S,1,1),Ve(M.glass,b,_-1.2,_+1,1,1.5,y-.78,y+.78,[.55,.6,.68],1,1),Ve(M.det,b,_-1.15,_+.95,1.5,1.56,y-.74,y+.74,S,1,1);for(let L of[-1.35,1.35])for(let D of[-.8,.8])Ve(M.det,b,_+L-.33,_+L+.33,.01,.66,y+D-.12,y+D+.12,Ae("#18181a"),1,1);for(let L of[-.55,.55])Ve(M.lamp,b,_+2.1,_+2.14,.72,.86,y+L-.16,y+L+.16,[1,1,1],1,1)}function v(M,b,_,y,R){let S=b.fam,L=Sf[S],D=t.fac[S],H=Ta[S],I=H.fh,V=ar(b.seed),X=Math.max(2,b.floors+R),C=b.W,G=L.D,F=L.roof==="pitch",U=X*I+.4,W=b.s+C/2,te=Vl(W,{}),xe=_*(y+G/2),z=Nt(W,xe,0,{}),ie=fs(z.wx,z.wy,z.wz,te.th),$=(Pe,De,Te)=>Mi(ie,Pe,De,Te),K=Ae(e.pal[b.pal%e.pal.length]),j=Aa(K),ce=Yl(K,.7),Xe=Ae("#f2efe9"),Ee=S==="modern"?Aa(K,1):K;Ve(M.wall[S],ie,-C/2,C/2,-2.5,U,-G/2,G/2,Ee,D.bw,D.fh,!1,0,-C/2);let Ce=-_*G/2,Fe=-_,ye=(Pe,De,Te,ze,Qe,yt,At,Gt,O=!0)=>{let Ft=Ce+Fe*yt,tt=Ce+Fe*At;Ve(Pe,ie,De,Te,ze,Qe,Math.min(Ft,tt),Math.max(Ft,tt),Gt,1,1,O)};if(M.ao.quad($(-C/2,.15,Ce),$(C/2,.15,Ce),$(C/2,.15,Ce+Fe*1.3),$(-C/2,.15,Ce+Fe*1.3),[0,1,0],[0,1],[1,1],[1,0],[0,0],[1,1,1]),F){let De=Math.min(4.2,G*.36),Te=-C/2-.2,ze=C/2+.2,Qe=-G/2-.35,yt=G/2+.35,At=S==="brick"&&V()<.5?Ae("#7d8590"):[1,1,1];M.roofP.quad($(Te,U,Qe),$(ze,U,Qe),$(ze,U+De,0),$(Te,U+De,0),Tn(ie,0,.8,-.6),[Te/3,0],[ze/3,0],[ze/3,1.9],[Te/3,1.9],At),M.roofP.quad($(Te,U,yt),$(ze,U,yt),$(ze,U+De,0),$(Te,U+De,0),Tn(ie,0,.8,.6),[Te/3,0],[ze/3,0],[ze/3,1.9],[Te/3,1.9],At);for(let O of[-C/2,C/2])M.det.tri($(O,U,-G/2),$(O,U,G/2),$(O,U+De*.93,0),Tn(ie,Math.sign(O),0,0),[0,0],[0,0],[0,0],K);if(C>6.5){let O=-_*2.2;Ve(M.det,ie,-.75,.75,U+.3,U+1.9,O-.7,O+.7,K,1,1),Ve(M.glass,ie,-.45,.45,U+.6,U+1.6,O+Fe*.71-.01,O+Fe*.71+.01,[1,1,1],1,1),Ve(M.roofP,ie,-.9,.9,U+1.9,U+2.05,O-.85,O+.85,[1,1,1],1,1)}let Gt=Ae("#8a4a3a");for(let O=0,Ft=1+(V()<.5?1:0);O<Ft;O++){let tt=(V()-.5)*(C-2),it=_*V()*2;Ve(M.det,ie,tt-.32,tt+.32,U+1,U+De+.9,it-.32,it+.32,Gt,1,1),Ve(M.det,ie,tt-.4,tt+.4,U+De+.9,U+De+1.05,it-.4,it+.4,Yl(Gt,.8),1,1)}}else{M.roofF.quad($(-C/2,U,-G/2),$(C/2,U,-G/2),$(C/2,U,G/2),$(-C/2,U,G/2),[0,1,0],[0,0],[C/8,0],[C/8,G/8],[0,G/8],[1,1,1]);let Pe=S==="modern"?Ae("#5f6b78"):j;for(let[De,Te,ze,Qe]of[[-C/2,C/2,-G/2,-G/2+.3],[-C/2,C/2,G/2-.3,G/2],[-C/2,-C/2+.3,-G/2,G/2],[C/2-.3,C/2,-G/2,G/2]])Ve(M.det,ie,De,Te,U,U+.7,ze,Qe,Pe,1,1);for(let De=0,Te=1+(V()*3|0);De<Te;De++){let ze=(V()-.5)*(C-3),Qe=(V()-.5)*(G-3);Ve(M.det,ie,ze-.6,ze+.6,U,U+.9,Qe-.45,Qe+.45,Ae("#c9c9c4"),1,1)}if(V()<.5&&m(M.det,bf,ie,(V()-.5)*(C-4),U+1.2,(V()-.5)*(G-4),1.8,2.4,1.8,Ae("#8a8580")),(S==="panel"||S==="modern")&&Ve(M.det,ie,-2,2,U,U+2.6,-1.5,1.5,Pe,1,1),V()<.4&&Ve(M.metal,ie,.5,.58,U,U+5,.5,.58,[1,1,1],1,1),S==="stalinka"&&X>=7&&V()<.35){let De=C/2-3;Ve(M.wall[S],ie,De-2.4,De+2.4,U,U+I*1.6,-2.4,2.4,K,D.bw,D.fh,!1,U,De-2.4),Ve(M.det,ie,De-2.7,De+2.7,U+I*1.6,U+I*1.6+.5,-2.7,2.7,j,1,1),m(M.gold,new Wt(0,1.8,1,8),ie,De,U+I*1.6+4.5,0,1,8,1,Ae("#c9a440"))}}if(ye(M.det,-C/2,C/2,-2,.65,0,.1,S==="brick"?Ae("#7a6a5c"):ce),S==="austro"||S==="classic"||S==="stalinka"||S==="brick"){for(let Pe of[-C/2,C/2-.36])ye(M.det,Pe,Pe+.36,.65,U-.3,0,.09,j);for(let Pe=1;Pe<X;Pe++)(Pe===1||S!=="stalinka"||Pe===X-1)&&ye(M.det,-C/2-.04,C/2+.04,Pe*I-.16,Pe*I+.02,0,.16,j);ye(M.det,-C/2-.2,C/2+.2,U-.45,U,0,.42,j),S==="stalinka"&&ye(M.det,-C/2,C/2,.65,I,0,.06,Yl(K,.85))}if(S==="constructivist"){let Pe=(V()<.5?-1:1)*(C/2-2.2);ye(M.glass,Pe-1.4,Pe+1.4,.6,U-.2,0,.5,[.8,.85,.9]),ye(M.det,-C/2,C/2,U-.5,U,0,.3,j)}if(S==="modern"){for(let Pe=-C/2;Pe<=C/2+.01;Pe+=D.bw/2)ye(M.metal,Pe-.06,Pe+.06,3,U,0,.25,[1,1,1],!1);ye(M.glass,-C/2+.5,C/2-.5,.14,3,-.6,.01,[.7,.8,.88]),ye(M.det,-C/2,C/2,2.9,3.3,0,.6,Ae("#5f6b78"))}let ut=H.bw;if(S==="panel")for(let Pe=1;Pe<X;Pe++)for(let De=1;De<b.nb;De+=2){let Te=-C/2+De*ut;ye(M.det,Te+.15,Te+ut-.15,Pe*I-.1,Pe*I+1,0,1.1,Ae("#d6d3cc"))}else if(S!=="modern"&&S!=="constructivist")for(let Pe=1;Pe<X;Pe++){if(V()>(Pe===1?.55:.28))continue;let De=1+(V()*(b.nb-2)|0),Te=-C/2+De*ut,ze=Te+ut*(V()<.3&&De+2<b.nb?2:1),Qe=Pe*I-.1;if(ye(M.det,Te-.05,ze+.05,Qe,Qe+.16,0,.8,Ae("#b8b0a2")),S==="stalinka")ye(M.det,Te,ze,Qe+.16,Qe+1,.68,.8,j);else{ye(M.metal,Te,ze,Qe+1,Qe+1.05,.74,.8,[1,1,1]);for(let yt=Te;yt<=ze+.01;yt+=.24)ye(M.metal,yt-.018,yt+.018,Qe+.16,Qe+1,.75,.79,[1,1,1],!1)}}if(S!=="modern")for(let Pe=0;Pe<b.nb;Pe+=2+(V()*2|0)){let De=-C/2+Pe*ut+.3,Te=Math.min(C/2-.3,De+ut*2-.6);if(!(Te-De<1.2))if(V()<.6){ye(M.glass,De,Te,.15,2.5,0,.04,[.85,.9,1]),ye(M.det,De-.1,Te+.1,2.5,2.62,0,.1,Ae("#3b2b20"));let ze=t.signsUV(V()*8|0),Qe=2.66,yt=3.1,At=Ce+Fe*.09,Gt=Tn(ie,0,0,Fe);if(M.sign.quad($(De,Qe,At),$(Te,Qe,At),$(Te,yt,At),$(De,yt,At),Gt,_>0?[ze[2],ze[1]]:[ze[0],ze[1]],_>0?[ze[0],ze[1]]:[ze[2],ze[1]],_>0?[ze[0],ze[3]]:[ze[2],ze[3]],_>0?[ze[2],ze[3]]:[ze[0],ze[3]],[1,1,1]),e.cafe&&V()<.5){let O=Ae(["#b8322a","#2f6f4f","#2c4f86","#7a3b6e","#c77a1e"][V()*5|0]),Ft=3.2,tt=2.55,it=1.3;M.det.quad($(De,Ft,Ce),$(Te,Ft,Ce),$(Te,tt,Ce+Fe*it),$(De,tt,Ce+Fe*it),Tn(ie,0,.9,Fe*.45),[0,0],[0,0],[0,0],[0,0],O),M.det.quad($(De,tt,Ce+Fe*it),$(Te,tt,Ce+Fe*it),$(Te,tt-.25,Ce+Fe*it),$(De,tt-.25,Ce+Fe*it),Tn(ie,0,0,Fe),[0,0],[0,0],[0,0],[0,0],Aa(O))}}else{let ze=(De+Te)/2;ye(M.det,ze-.6,ze+.6,.14,2.45,0,.06,Ae("#4a3020")),ye(M.det,ze-.78,ze+.78,2.45,2.7,0,.14,j),ye(M.det,ze-.8,ze+.8,0,.28,0,.45,Ae("#8f877c"))}}}function A(M){let b=M*Ra,_=b+Ra,y=new It,R=ar(n*7919+M*131+13),S={road:new Ut,asph:new Ut,walk:new Ut,grass:new Ut,roofP:new Ut,roofF:new Ut,det:new Ut,leaves:new Ut,metal:new Ut,gold:new Ut,glass:new Ut,lamp:new Ut,glow:new Ut,ao:new Ut,sign:new Ut,wall:{}};for(let C of Object.keys(t.wall))S.wall[C]=new Ut;let L=[1,1,1],D=Ae("#8f8579"),H=Ae("#8a7a62"),I=[1,1,1];h(S.road,b,_,-3.4,3.4,0,L,6.8,5,!0);for(let C=b;C<_;){let G=ds(C)||{e:_,type:"street",kind:"street"},F=Math.min(G.e,_),U=G.type==="square"?"square":G.kind||"street";for(let W of[-1,1]){if(G.type==="corner"&&W===-G.dir)continue;let te=(xe,z,ie,$,K,j=2,ce=2)=>h($,C,F,W>0?xe:-z,W>0?z:-xe,ie,K,j,ce,!1);if(G.type==="corner"){te(3.4,9,.14,S.walk,L),d(S.walk,C,F,W*3.4,.14,Ae("#d8d2c6"));continue}if(U==="square"){te(3.4,34,.14,S.walk,L),d(S.walk,C,F,W*3.4,.14,Ae("#d8d2c6"));continue}U==="avenue"?(te(3.4,5.8,.02,S.asph,L,6.8,5),te(5.8,9,.16,S.walk,L),d(S.walk,C,F,W*5.8,.16,Ae("#d8d2c6")),te(9,32,.15,S.walk,D)):(te(3.4,5.8,.14,S.walk,L),d(S.walk,C,F,W*3.4,.14,Ae("#d8d2c6"))),U==="street"&&te(5.8,30,.13,S.walk,D),U==="boulevard"&&(te(5.8,9.4,.13,S.grass,I,3,3),te(9.4,12.5,.14,S.walk,L),te(12.5,32,.13,S.walk,D)),U==="park"&&te(5.8,40,.13,S.grass,I,3,3),U==="construction"&&te(5.8,40,.12,S.walk,H)}C=F}for(let C of[-1,1]){let G=a[C];G.until(_+40);for(let F of G.list){if(F.s<b||F.s>=_)continue;let U=l(F.s),W=l(F.s+F.W),te=l(F.s+F.W/2);U!==W||U!==te||!Sa[U]||!Sa[U].bx||c(F.s,F.W)||v(S,F,C,Sa[U].bx,Sa[U].flo||0)}}for(let C=Math.ceil(b/2)*2;C<_;C+=2){let G=ds(C);if(!G||G.type==="corner"||c(C))continue;let F=G.type==="square"?"square":G.kind||"street",U=Math.round(C)%8===0;for(let W of[-1,1]){if(F==="avenue"&&Math.round(C)%9===(W>0?0:4)){let te=u(C);g(S,te,0,W*7.2,1.05,e.tree,R),Ve(S.det,te,-.7,.7,.15,.19,W*7.2-.7,W*7.2+.7,Ae("#5a4a3a"),1,1)}if(F==="avenue"&&Math.round(C)%7===(W>0?1:4)&&R()<.6&&p(S,u(C),0,W*4.6,R),F==="boulevard"&&U&&g(S,u(C+(W>0?0:4)),0,W*7.6,1.1,e.tree,R),F==="boulevard"&&Math.round(C)%16===(W>0?6:14)&&f(S,C,W,R,10.9),F==="park"&&Math.round(C)%6===(W>0?0:3))for(let te=0;te<2;te++)g(S,u(C+R()*4),0,W*(9+R()*22),.9+R()*.4,R()<.3?"chestnut":e.tree,R);if(F==="park"&&Math.round(C)%2===0){let te=u(C);Ve(S.metal,te,-1,1,.9,.96,W*6.1-.03,W*6.1+.03,L,1,1),Ve(S.metal,te,-.04,.04,.13,1,W*6.1-.04,W*6.1+.04,L,1,1)}if(F==="construction"&&Math.round(C)%2===0){let te=u(C);Ve(S.det,te,-1,1,.12,2.3,W*6.1-.04,W*6.1+.04,Math.round(C)%12<2?Ae("#c94b2c"):Ae("#5e7a5a"),1,1)}(F==="street"||F==="avenue")&&Math.round(C)%10===(W>0?3:8)&&R()<.55&&f(S,C,W,R,F==="avenue"?8.2:5)}}for(let C of nn)if(!(C.kind!=="construction"||C.type==="corner"||C.type==="square"||C.s+10<b||C.s+10>=_))for(let G of[-1,1]){if(C.e-C.s<40)continue;let F=u(C.s+24,G*18),U=ar(C.s*3+G),W=3+(U()*4|0),te=Ae("#b5b1a8");for(let xe=0;xe<=W;xe++)Ve(S.det,F,-12,12,xe*3.2,xe*3.2+.3,-6,6,te,1,1);for(let xe=-12;xe<=12;xe+=6)for(let z of[-6,0,6])Ve(S.det,F,xe-.2,xe+.2,0,W*3.2,z-.2,z+.2,te,1,1);if(G>0){let $=Ae("#e3b23c");for(let K=0;K<34;K+=2)Ve(S.det,F,0-.9,0+.9,K,K+.12,10-.9,10+.9,$,1,1);for(let[K,j]of[[-.85,-.85],[.85,-.85],[-.85,.85],[.85,.85]])Ve(S.det,F,0+K-.1,0+K+.1,0,34,10+j-.1,10+j+.1,$,1,1);Ve(S.det,F,-8,26,34,34+1.4,10-.6,10+.6,$,1,1),Ve(S.det,F,-8,-4,34-1.6,34,9,11,Ae("#777"),1,1),Ve(S.det,F,0-1.2,0+1.2,34-2.6,34,10-1.2,10+1.2,Ae("#d9d4c4"),1,1),Ve(S.metal,F,18,0+18.06,20,34,10-.03,10+.03,L,1,1),Ve(S.det,F,0+17.2,0+18.8,19,20,10-.6,10+.6,Ae("#8a5a3a"),1,1)}}let V=14;for(let C=Math.ceil(b/V)*V;C<_;C+=V){let G=ds(C);if(!G||G.type==="corner")continue;let F=G.type==="square"?"square":G.kind||"street",U=F==="avenue"?6.2:3.9;x(S,C,-U),x(S,C+V/2,U)}if(e.tram||e.trolley){let C=e.tram?[0]:[-.35,.35];for(let G=b;G<_;G++)for(let F of C){let U=Nt(G,F,6.6,{}),W=Nt(G+1,F,6.6,{}),te=Tn(fs(0,0,0,U.th),0,0,.009);S.metal.quad([U.wx-te[0],U.wy,U.wz-te[2]],[U.wx+te[0],U.wy,U.wz+te[2]],[W.wx+te[0],W.wy,W.wz+te[2]],[W.wx-te[0],W.wy,W.wz-te[2]],[0,-1,0],[0,0],[0,0],[0,0],[0,0],L)}for(let G=Math.ceil(b/28)*28+3;G<_;G+=28){let F=ds(G);if(o(F)||c(G))continue;let U=F.kind||"street",W=U==="avenue"?5.6:5.55,te=u(G);for(let xe of[-1,1])m(S.metal,zh,te,0,3.5,xe*W,.2,7,.2,L);Ve(S.metal,te,-.01,.01,6.6,6.63,-W,W,L,1,1)}}for(let C of nn){if(C.type!=="corner"||C.s<b||C.s>=_)continue;let G=u(C.s),F=(K,j,ce)=>Mi(G,K,j,ce),U=-C.dir,W=[0,1,0],te=(K,j,ce,Xe,Ee,Ce,Fe)=>K.quad(F(j,Ce,Xe),F(ce,Ce,Xe),F(ce,Ce,Ee),F(j,Ce,Ee),W,[Xe/2,j/2],[Xe/2,ce/2],[Ee/2,ce/2],[Ee/2,j/2],Fe);S.road.quad(F(0,-.02,-3.4),F(48,-.02,-3.4),F(48,-.02,3.4),F(0,-.02,3.4),W,[0,0],[0,9.6],[1,9.6],[1,0],L),te(S.walk,-6,48,U*3.4,U*5.8,.14,L),te(S.walk,-6,48,U*5.8,U*18,.13,D),te(S.walk,-6,2*us-10,C.dir*3.4,C.dir*16,-.05,D),te(S.walk,2*us-10,48,C.dir*3.4,C.dir*5.8,.14,L),te(S.walk,2*us-10,48,C.dir*5.8,C.dir*16,.13,D);let xe=e.fac[0],z=t.fac[xe],ie=Ta[xe].fh,$=ar(C.s|0);for(let K=4;K<46;K+=8.4){let j=Ae(e.pal[$()*e.pal.length|0]),ce=ie*(3+($()*2|0));Ve(S.wall[xe],G,K,K+8,-2,ce,-C.dir*15,-C.dir*6,j,z.bw,z.fh,!1,0,K),Ve(S.det,G,K-.1,K+8.1,ce-.4,ce,-C.dir*6.35,-C.dir*6,Aa(j),1,1),S.roofF.quad(F(K,ce,-C.dir*15),F(K+8,ce,-C.dir*15),F(K+8,ce,-C.dir*6),F(K,ce,-C.dir*6),W,[0,0],[1,0],[1,1],[0,1],L)}for(let K=2*us+4;K<46;K+=8.4){let j=Ae(e.pal[$()*e.pal.length|0]),ce=ie*3;Ve(S.wall[xe],G,K,K+8,-2,ce,C.dir*6,C.dir*15,j,z.bw,z.fh,!0,0,K)}g(S,G,6,C.dir*9,1.1,e.tree,$),g(S,G,12,C.dir*11,.9,e.tree,$)}for(let C of nn){if(C.type!=="square"||C.s<b||C.s>=_)continue;let G=e.land,F=[[40,-22],[45,22],[98,-22]];G.forEach((U,W)=>{let[te,xe]=F[W];Nh(U,u(C.s+te,xe),Math.sign(xe),S)}),G.length<3&&Nh("statue",u(C.s+92,16),1,S)}for(let C=Math.ceil(b/12)*12;C<_;C+=12){let G=ds(C);if(!G||G.type!=="square"||C<G.s+6||C>G.e-6)continue;let F=u(C,0,.14),U=[[40,-1],[45,1],[98,-1],[92,1]].slice(0,Math.max(e.land.length,2)+(e.land.length<3?1:0));for(let W of[-1,1])U.some(([te,xe])=>xe===W&&Math.abs(C-(G.s+te))<30)||(g(S,F,0,W*8.5,1+R()*.25,e.tree,R),R()<.5&&f(S,C+4,W,R,6.5))}let X=[["road",t.road,0,1],["asph",t.asph,0,1],["walk",t.walk,0,1],["grass",t.grass,0,1],["roofP",t.roofP,1,1],["roofF",t.roofF,1,1],["det",t.det,1,1],["leaves",t.leaves,1,1],["metal",t.metal,1,0],["gold",t.gold,1,0],["glass",t.glass,0,0],["lamp",t.lamp,0,0],["sign",t.sign,0,0],["ao",t.ao,0,0],["glow",t.glow,0,0]];for(let C of Object.keys(S.wall))X.push([null,t.wall[C],1,1,S.wall[C]]);for(let[C,G,F,U,W]of X){let te=(W||S[C]).build();if(!te)continue;let xe=new ft(te,G);xe.castShadow=!!F,xe.receiveShadow=!!U,(G===t.glow||G===t.ao)&&(xe.renderOrder=1),y.add(xe)}return i.add(y),y}function E(M){M.traverse(b=>{b.isMesh&&b.geometry.dispose()}),i.remove(M)}return{buildChunk:A,disposeChunk:E}}var Pa=class i extends ft{constructor(){let e=i.SkyShader,t=new kt({name:e.name,uniforms:Wn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Xt,depthWrite:!1});super(new Dt(1,1,1),t),this.isSky=!0}};Pa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new k},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kx=new ss(-1,1,1,-1,0,1),kh=class extends St{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},Vx=new kh,ki=class{constructor(e){this._mesh=new ft(Vx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Zl=class extends En{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wn.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ia=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jl=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $l=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zl(or),this.copyPass.material.blending=xi,this.timer=new na}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ia!==void 0&&(a instanceof Ia?n=!0:a instanceof Jl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kl=class extends En{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Rf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var lr=class i extends En{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(r,a,{type:qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Lt(r,a,{type:qt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Lt(r,a,{type:qt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Rf;this.highPassUniforms=Wn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wn.clone(or.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new pn,this._fsQuad=new ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new kt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};lr.BlurDirectionX=new Ne(1,0);lr.BlurDirectionY=new Ne(0,1);var La={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ql=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wn.clone(La.uniforms),this.material=new Js({name:La.name,uniforms:this.uniforms,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this._fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===la?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===aa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Hh={day:["\u0414\u0435\u043D\u044C","\u2600\uFE0F"],sunset:["\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F","\u{1F307}"],night:["\u041D\u0456\u0447","\u{1F319}"]},jl={clear:["\u042F\u0441\u043D\u043E","\u{1F324}\uFE0F"],rain:["\u0414\u043E\u0449","\u{1F327}\uFE0F"],storm:["\u0413\u0440\u043E\u0437\u0430","\u26C8\uFE0F"],snow:["\u0421\u043D\u0456\u0433","\u{1F328}\uFE0F"],fog:["\u0422\u0443\u043C\u0430\u043D","\u{1F32B}\uFE0F"]},ps=["ultra","high","medium","low"],ec={ultra:"\u0423\u043B\u044C\u0442\u0440\u0430",high:"\u0412\u0438\u0441\u043E\u043A\u0456",medium:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456",low:"\u041D\u0438\u0437\u044C\u043A\u0456"},Gx={day:{dir:[-.45,.8,.42],sunCol:"#fff3e0",sunI:3.2,hemiSky:"#cfe3ff",hemiGround:"#7a6650",hemiI:.45,envI:1,fog:"#bcd0e2",win:0,lamp:.3,top:"#5f9fd8",hor:"#cfe1ee",turb:2.6,ray:1.1,mie:.004,gain:1},sunset:{dir:[-.82,.12,.56],sunCol:"#ffa65e",sunI:2.8,hemiSky:"#f3c7a6",hemiGround:"#4f3a36",hemiI:.4,envI:.9,fog:"#e2aa84",win:.7,lamp:1.4,top:"#3a4f86",hor:"#e9a77c",turb:6,ray:2.6,mie:.006,gain:1},night:{dir:[.35,.6,-.7],sunCol:"#a9bbff",sunI:.42,hemiSky:"#3c4c7c",hemiGround:"#141420",hemiI:.3,envI:.35,fog:"#141b33",win:1.6,lamp:3.2,top:"#050a1c",hor:"#1c2748"}},Hx={clear:{tint:null,mix:0,sun:1,dens:.0055,cover:.32,cden:.35,drops:0},rain:{tint:"#7c8693",mix:.62,sun:.28,dens:.011,cover:.85,cden:.85,drops:1e3,gain:.6},storm:{tint:"#4a525e",mix:.82,sun:.12,dens:.015,cover:.97,cden:1,drops:1600,gain:.38},snow:{tint:"#cfd6df",mix:.55,sun:.42,dens:.013,cover:.85,cden:.7,drops:0,snow:!0,gain:.8},fog:{tint:"#c2c7cd",mix:.8,sun:.3,dens:.034,cover:.7,cden:.6,drops:0,gain:.75}},Vh=1600,Gh=1600,Ct={x:22,y0:-3,y1:20,z:22},cr=(i,e,t)=>{let n=t-e;return i<e?i+n*Math.ceil((e-i)/n):i>=t?i-n*Math.ceil((i-t+1e-6)/n):i};function Pf(i,e,t){i.outputColorSpace=tn,i.toneMapping=os,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=rs;let n=Math.random,s={bakeGain:.05,tod:"day",wx:"clear",tier:"high",sunDir:new k(-.45,.8,.42).normalize(),flash:0,nextBolt:6,camVel:{x:0,y:0,z:0},onThunder:null,state:{}};e.fog=new Or("#bcd0e2",.0055);let r=new Qr("#cfe3ff","#7a6650",.45);e.add(r);let a=new Ks("#fff3e0",3.2);e.add(a),e.add(a.target),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:200}),a.shadow.bias=-4e-4,a.shadow.normalBias=.05;let o=new Ks("#9ec4ff",.25);e.add(o),e.add(o.target);let c=new ta("#ffd49a",0,16,1.4);e.add(c),Object.assign(s,{hemi:r,sun:a,fill:o,near:c});let h=(()=>{let z=new Pa;return z.scale.setScalar(420),z})();h.material.uniforms.skyGain={value:1},h.material.fragmentShader=`uniform float skyGain;
`+h.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( texColor * skyGain, 1.0 );"),h.material.fog=!1,h.renderOrder=-3,h.frustumCulled=!1,e.add(h);let d=new mn(400,32,16),u=new pn({vertexColors:!0,side:Xt,fog:!1,depthWrite:!1}),m=new ft(d,u);m.renderOrder=-3,m.frustumCulled=!1,e.add(m);let g=ql(),x=new ft(new ns(9,24),new pn({map:g,color:"#e6ecff",fog:!1,transparent:!0,depthWrite:!1,blending:vi}));x.renderOrder=-2,e.add(x);let f=new St,p=new Float32Array(600*3);for(let z=0;z<600;z++){let ie=n()*Math.PI*2,$=.05+n()*1.45,K=380;p.set([Math.cos(ie)*Math.cos($)*K,Math.sin($)*K,Math.sin(ie)*Math.cos($)*K],z*3)}f.setAttribute("position",new cn(p,3));let v=new Zs(f,new ts({color:"#ffffff",size:1.5,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9,depthWrite:!1}));v.renderOrder=-2,v.frustumCulled=!1,e.add(v);function A(z,ie,$=.12){let K=d.attributes.position,j=new Float32Array(K.count*3),ce=new k,Xe=new ke,Ee=s.sunDir;for(let Ce=0;Ce<K.count;Ce++){ce.fromBufferAttribute(K,Ce).normalize(),Xe.copy(ie).lerp(z,Math.pow(Math.max(0,ce.y),.5)),ce.y<0&&Xe.copy(ie).multiplyScalar(.7);let Fe=Math.pow(Math.max(0,ce.dot(Ee)),6)*$;Xe.r+=Fe*.6,Xe.g+=Fe*.7,Xe.b+=Fe,j.set([Xe.r,Xe.g,Xe.b],Ce*3)}d.setAttribute("color",new cn(j,3))}let E=new sr(i),M=new es,b=new ft(h.geometry,h.material);b.scale.setScalar(100),M.add(b);let _=new ft(d,u);_.scale.setScalar(.25),M.add(_);let y=null;function R(){b.visible=!!s.phys,_.visible=!s.phys;let z=h.material.uniforms,ie=z.skyGain.value,$=z.showSunDisc.value;z.skyGain.value=ie*s.bakeGain,z.showSunDisc.value=0;let K=E.fromScene(M,0,.5,500);z.skyGain.value=ie,z.showSunDisc.value=$,y&&y.dispose(),y=K,e.environment=K.texture}let S=new Float32Array(Vh*3),L=new Float32Array(Vh*6);for(let z=0;z<Vh;z++)S.set([(n()*2-1)*Ct.x,Ct.y0+n()*(Ct.y1-Ct.y0),(n()*2-1)*Ct.z],z*3);let D=new St;D.setAttribute("position",new cn(L,3).setUsage(Il));let H=new Hr(D,new Ys({color:"#c3cfdc",transparent:!0,opacity:.45,depthWrite:!1}));H.frustumCulled=!1,H.visible=!1,e.add(H);let I=new Float32Array(Gh*3);for(let z=0;z<Gh;z++)I.set([(n()*2-1)*Ct.x,Ct.y0+n()*(Ct.y1-Ct.y0),(n()*2-1)*Ct.z],z*3);let V=new St;V.setAttribute("position",new cn(I,3).setUsage(Il));let X=new Zs(V,new ts({color:"#ffffff",map:g,size:.16,transparent:!0,depthWrite:!1,opacity:.95}));X.frustumCulled=!1,X.visible=!1,e.add(X);let C=0,G=.45,F=1,U=1,W=null,te=null;function xe(){let z=i.getDrawingBufferSize(new Ne),ie=new Lt(z.x,z.y,{type:qt,samples:4});W=new $l(i,ie),W.addPass(new Kl(e,t)),te=new lr(new Ne(z.x/2,z.y/2),.3,.4,2.5),W.addPass(te),W.addPass(new Ql)}return s.apply=function(z,ie){z&&(s.tod=z),ie&&(s.wx=ie);let $=Gx[s.tod],K=Hx[s.wx],j=s.tod==="night",ce=j?.2:s.tod==="sunset"?.65:1,Xe=K.tint?new ke(K.tint).multiplyScalar(ce):null,Ee=ye=>{let ut=new ke(ye);return Xe&&ut.lerp(Xe,K.mix),ut};s.sunDir.set(...$.dir).normalize(),e.fog.color.copy(Ee($.fog)),e.fog.density=K.dens*(j&&s.wx==="clear"?1.2:1);let Ce=!j&&K.mix<.5;if(s.phys=Ce,h.visible=Ce,m.visible=!Ce,v.visible=j&&K.mix<.5,x.visible=j&&K.mix<.6,Ce){let ye=h.material.uniforms;ye.turbidity.value=$.turb+K.mix*6,ye.rayleigh.value=$.ray*(1-K.mix*.6),ye.mieCoefficient.value=$.mie,ye.mieDirectionalG.value=.8,ye.sunPosition.value.copy(s.sunDir),ye.cloudCoverage.value=K.cover,ye.cloudDensity.value=K.cden,ye.showSunDisc.value=K.mix<.5?1:0,U=$.gain*(K.gain||1),ye.skyGain.value=U}else A(Ee($.top),Ee($.hor),j?.12:K.mix>.5?.05:.3);a.color.set($.sunCol),a.intensity=$.sunI*K.sun,a.shadow.intensity=K.mix>.5?.4:1,r.color.copy(Ee($.hemiSky)),r.groundColor.set($.hemiGround),G=$.hemiI*(K.mix?1.3:1),r.intensity=G,o.intensity=j?.08:.22,F=$.envI*(K.mix>.5?.75:1),e.environmentIntensity=F,c.intensity=j?24:s.tod==="sunset"||K.mix>.7?5:0,C=K.drops?Math.round(K.drops*(s.tier==="low"?.5:1)):0,H.visible=C>0,D.setDrawRange(0,C*2),H.material.opacity=j?.28:.45,X.visible=!!K.snow,i.toneMappingExposure=j?1.15:s.tod==="sunset"?.9:.95;let Fe=K.mix>.6&&!j;return s.state={tod:s.tod,wx:s.wx,night:j,gloom:Fe,wet:s.wx==="rain"||s.wx==="storm",snow:!!K.snow,win:$.win+(Fe?.35:0),lamp:$.lamp+(K.mix>.7?.9:0),glow:j?.85:s.tod==="sunset"?.3:K.mix>.7?.2:0},R(),te&&(te.strength=j?.5:.2,te.threshold=j?.9:2.5),s.nextBolt=1.5,s.state},s.setTier=function(z){s.tier=z;let ie=window.devicePixelRatio||1;i.setPixelRatio(Math.min(ie,{ultra:2,high:1.6,medium:1.3,low:1}[z]));let $=z==="ultra"||z==="high";(i.shadowMap.enabled!==$||a.castShadow!==$)&&(i.shadowMap.enabled=$,a.castShadow=$,e.traverse(j=>{j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(ce=>{ce.needsUpdate=!0})}));let K=z==="ultra"?2048:1024;a.shadow.mapSize.x!==K&&(a.shadow.mapSize.set(K,K),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),z==="ultra"&&!W&&(xe(),s.apply()),z!=="ultra"&&W&&(W.dispose(),W=null,te=null),s.resize()},s.resize=function(){if(!W)return;let z=i.getDrawingBufferSize(new Ne);W.setSize(z.x/i.getPixelRatio(),z.y/i.getPixelRatio()),W.setPixelRatio(i.getPixelRatio())},s.render=function(){W?W.render():i.render(e,t)},s.update=function(z,ie,$){let K=t.position;h.position.copy(K),m.position.copy(K),v.position.copy(K),x.position.copy(K).addScaledVector(s.sunDir,360),x.lookAt(K),h.material.uniforms.time.value=ie,a.target.position.copy($),a.position.copy($).addScaledVector(s.sunDir,100),o.target.position.copy($),o.position.set($.x-s.sunDir.x*50,$.y+40,$.z-s.sunDir.z*50);let j=s.camVel;if(H.visible){let ce=2.5-j.x,Xe=-24-j.y,Ee=1-j.z,Ce=.045;for(let Fe=0;Fe<C;Fe++){let ye=Fe*3,ut=cr(S[ye]+ce*z,-Ct.x,Ct.x),Pe=cr(S[ye+1]+Xe*z,Ct.y0,Ct.y1),De=cr(S[ye+2]+Ee*z,-Ct.z,Ct.z);S[ye]=ut,S[ye+1]=Pe,S[ye+2]=De;let Te=Fe*6;L[Te]=ut,L[Te+1]=Pe,L[Te+2]=De,L[Te+3]=ut-ce*Ce,L[Te+4]=Pe-Xe*Ce,L[Te+5]=De-Ee*Ce}D.attributes.position.needsUpdate=!0,H.position.copy(K)}if(X.visible){for(let ce=0;ce<Gh;ce++){let Xe=ce*3;I[Xe]=cr(I[Xe]+(Math.sin(ie*.9+ce)*.6-j.x)*z,-Ct.x,Ct.x),I[Xe+1]=cr(I[Xe+1]+(-1.4-j.y)*z,Ct.y0,Ct.y1),I[Xe+2]=cr(I[Xe+2]+(Math.cos(ie*.7+ce*1.3)*.5-j.z)*z,-Ct.z,Ct.z)}V.attributes.position.needsUpdate=!0,X.position.copy(K)}if(s.wx==="storm"&&(s.nextBolt-=z,s.nextBolt<=0&&(s.flash=1,s.nextBolt=4+n()*7,s.onThunder&&s.onThunder(.4+n()*.9))),s.flash>0){s.flash=Math.max(0,s.flash-z*3.2);let ce=s.flash>.75||s.flash>.3&&s.flash<.5?s.flash:0;r.intensity=G+ce*4,e.environmentIntensity=F+ce*2,h.material.uniforms.skyGain.value=U+ce*2.5}else r.intensity=G,e.environmentIntensity=F,h.material.uniforms.skyGain.value=U},s.flashNow=()=>{s.flash=1},s}var hr=(i,e,t)=>i<e?e:i>t?t:i,If=i=>i*i*(3-2*i),Vt={chest:new bn(.2,.32,6,14),belly:new bn(.17,.12,6,14),head:new mn(.15,20,14),neck:new Wt(.06,.07,.12,10),hair:new mn(.158,20,12,0,Math.PI*2,0,Math.PI*.55),nose:new mn(.025,8,6),ear:new mn(.035,8,6),upper:new bn(.068,.24,4,10),fore:new bn(.058,.22,4,10),hand:new mn(.06,10,8),thigh:new bn(.095,.3,4,12),shin:new bn(.075,.32,4,12),shoe:new bn(.07,.17,4,10),cap:new mn(.162,20,10,0,Math.PI*2,0,Math.PI*.5),brim:new Wt(.15,.16,.025,16,1,!1,-Math.PI/2,Math.PI),hood:new is(.13,.045,8,16,Math.PI),stripe:new Dt(.012,.42,.03),blob:new ns(.55,24),zip:new Dt(.012,.42,.01)},Wh=new Map,Vi=(i,e=.85,t=0)=>{let n=i+e+t;return Wh.has(n)||Wh.set(n,new ei({color:i,roughness:e,metalness:t})),Wh.get(n)},Lf={suit:"#22252d",pants:"#22252d",skin:"#e3b08c",hair:"#3a2a1e",shoe:"#f2f2f0",cap:"#b8312a",trim:"#f2f2f0",hood:!0},tc={suit:"#5c6a3a",pants:"#4b5530",skin:"#dba582",hair:"#2e2418",shoe:"#1b1b1b",cap:"#48522f",boots:!0};function Da(i,e,t,n){let s=Vi(e.suit,.9),r=Vi(e.pants,.92),a=Vi(e.skin,.6),o=Vi(e.hair,.8),c=Vi(e.shoe,.55),l=Vi(e.cap,.85),h=Vi(e.trim||"#ffffff",.7),d=new It,u=new It,m=new It;u.position.y=.95,m.position.y=-.95,d.add(u),u.add(m);let g=(v,A,E,M,b,_,y=0,R=1,S=1,L=1)=>{let D=new ft(A,E);return D.position.set(M,b,_),D.rotation.x=y,D.scale.set(R,S,L),D.castShadow=!0,v.add(D),D};g(m,Vt.chest,s,0,1.36,0,0,1.25,1,.78),g(m,Vt.belly,s,0,1.04,0,0,1.2,1,.82),g(m,Vt.neck,a,0,1.66,0);let x=new It;x.position.set(0,1.8,.01),m.add(x),g(x,Vt.head,e.face?a:o,0,0,0,0,1,1.1,1),g(x,Vt.nose,a,0,-.01,.15);for(let v of[-1,1])g(x,Vt.ear,a,v*.15,0,0);e.face&&g(x,Vt.hair,o,0,.01,-.01),g(x,Vt.cap,l,0,.03,0),g(x,Vt.brim,l,0,.04,.06,0,1,1,1.35),e.hood&&g(m,Vt.hood,s,0,1.62,-.1,-.5,1,1,1.3),e.trim&&g(m,Vt.zip,h,0,1.3,.2);let f=[];for(let v of[-1,1]){let A=new It;A.position.set(v*.11,.95,0),m.add(A),g(A,Vt.thigh,r,0,-.22,0),e.trim&&g(A,Vt.stripe,h,v*.095,-.22,0);let E=new It;E.position.y=-.45,A.add(E),g(E,Vt.shin,r,0,-.2,0),e.trim&&g(E,Vt.stripe,h,v*.075,-.2,0,0,1,.9,1),g(E,Vt.shoe,e.boots?Vi("#1b1b1b",.5):c,0,-.44,.06,Math.PI/2,1.05,1,e.boots?1.3:1);let M=new It;M.position.set(v*.29,1.56,0),m.add(M),g(M,Vt.upper,s,0,-.15,0);let b=new It;b.position.y=-.32,M.add(b),g(b,Vt.fore,s,0,-.14,0),g(b,Vt.hand,a,0,-.31,0),f.push({hip:A,knee:E,sho:M,elb:b,s:v})}if(t){let v=new ft(new zn(.42,.17),new ei({map:Ea(t,"#5c6a3a","#ffd21f",192,72),roughness:.9}));v.position.set(0,1.36,-.165),v.rotation.y=Math.PI,m.add(v)}let p=new ft(Vt.blob,n);return p.rotation.x=-Math.PI/2,p.position.y=.03,d.add(p),d.userData={pivot:u,limbs:f,blob:p,head:x},i.add(d),d}function Gi(i,e,t,n=0,s=0,r=0){let{pivot:a,limbs:o,head:c}=i.userData,l=.16,h=.95,d=1,u=0,m=-.1;for(let g of o){let x=e+(g.s>0?0:Math.PI),f=Math.sin(x),p,v,A,E,M=0;if(t==="run")p=-.85*f,v=.25+1.3*Math.max(0,Math.cos(x)),A=.85*f,E=-1.4,u=Math.abs(Math.cos(e))*.07;else if(t==="air"||t==="flip"){let b=Math.sin(Math.PI*hr(n,0,1));p=-.3-(t==="flip"?1.6:1)*b+(g.s>0?-.25:.2)*(1-b),v=.5+(t==="flip"?1.7:1.1)*b,A=t==="flip"?-1-.6*b:-2.5+.4*b,E=t==="flip"?-1.4:-.35,M=t==="flip"?0:.35,l=.1+(t==="flip"?Math.PI*2*If(hr(n,0,1)):.12*b),m=.2}else if(t==="roll"){let b=Math.sin(Math.PI*hr(n,0,1)),_=hr(n*6,0,1)*hr((1-n)*6,0,1);p=-.4-1.5*_,v=.4+1.9*_,A=-.6-.8*_,E=-1.7*_-.4,m=.5*_,l=.16+Math.PI*2*If(hr(n,0,1)),h=.95-.42*b,d=1-.27*_}else t==="hands"?(p=0,v=.05,A=-2.9+Math.sin(e*3+g.s)*.1,E=-.2,l=0,M=.25,m=-.25):(p=0,v=.05,A=.05*Math.sin(e*.5),E=-.25,l=0,m=.05*Math.sin(e*.3));g.hip.rotation.set(p,0,0),g.knee.rotation.x=v,g.sho.rotation.set(A,0,g.s*(.06+M)),g.elb.rotation.x=E}c.rotation.x=m,a.rotation.set(l,0,-s),a.position.y=h+u,a.scale.set(d*(1+r*.12),d*(1-r*.2),d*(1+r*.12))}function Df(i){i.traverse(e=>{e.isMesh&&e.material.map&&(e.material.map.dispose(),e.material.dispose())})}var gt=i=>document.getElementById(i),bs=2.2,rc=15,Wx=36,kf=32,Vf=11.5,Gf=.62,Yh=190,Xx=2*Vf/kf,hc=(i,e,t)=>i<e?e:i>t?t:i,ai=Math.random,Xh=i=>i[ai()*i.length|0],Na={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},xr=gt("c"),_r,ht="start";function Hf(){gt("fail").classList.remove("hidden"),["start","hud","over","pause"].forEach(i=>gt(i).classList.add("hidden")),ht="dead"}try{_r=new Nl({canvas:xr,antialias:!0,powerPreference:"high-performance"})}catch{_r=null}if(!_r)throw Hf(),new Error("no WebGL");xr.addEventListener("webglcontextlost",i=>{i.preventDefault(),Hf()});var Cn=new es,yn=new ln(65,1,.3,560),bt=Pf(_r,Cn,yn),ri=i=>new ei({roughness:.8,metalness:0,...i}),Tt={stripe:ri({map:xf(),roughness:.6}),gatePole:ri({color:"#b5bac2",metalness:.6,roughness:.35}),stij:ri({map:Ea("\u0421\u0422\u0406\u0419!","#d63028","#ffffff"),side:In,roughness:.6}),busBody:ri({map:vf(),roughness:.45}),white:ri({color:"#eef0f2",roughness:.45}),busPlate:ri({map:Ea("\u0422\u0426\u041A","#ffd21f","#1b1b1b",192,56)}),glass:ri({color:"#1e2a38",metalness:.5,roughness:.06}),tyre:ri({color:"#1a1a1c",roughness:.9}),headl:ri({color:"#fff7d0",emissive:"#fff0b0",emissiveIntensity:.6}),shadow:new pn({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}),coin:ri({color:"#ffcc33",metalness:1,roughness:.25,emissive:"#7a5200",emissiveIntensity:.25}),sky:new pn({color:"#8090a0",fog:!1})},qn=null,fr=null,pr=null,Hi=null,bi=new Map,ac=new It;Cn.add(ac);function qx(){let i=Na.get("ukh3d_city");if(i&&Wl[i])return i;try{let e=JSON.parse(Na.get("ukh_save_v2")||"{}");if(e.city&&Wl[e.city])return e.city}catch{}return"lviv"}function Zh(i){if(pr)for(let[,s]of bi)pr.disposeChunk(s);bi.clear(),fr&&Ef(fr),Hi&&(ac.remove(Hi),Hi.geometry.dispose(),Hi=null),qn=Wl[i],Na.set("ukh3d_city",i);let e=cf(i+":3d");lf(e,qn.pool),fr=Tf(qn),pr=Cf(Cn,qn,fr,e);let t=new Ut;ff(qn.sky,t);let n=t.build();n&&(Hi=new ft(n,Tt.sky),Hi.frustumCulled=!1,Hi.renderOrder=-1,ac.add(Hi)),Ts(),iv()}function ws(i=!1){let e=Math.max(0,Math.floor((Pt-30)/Ra)),t=Math.floor((Pt+Yh)/Ra);for(let[n,s]of bi)(n<e||n>t)&&(pr.disposeChunk(s),bi.delete(n));for(let n=e;n<=t&&!(!bi.has(n)&&(bi.set(n,pr.buildChunk(n)),!i));n++);}function Ts(i,e){let t=bt.apply(i,e);Af(fr,t),Tt.headl.emissiveIntensity=t.tod==="day"&&!t.gloom?.6:2.2,Tt.coin.emissiveIntensity=t.night?.8:.25,Tt.sky.color.copy(Cn.fog.color).lerp(new ke(t.night?"#05070d":"#4c5663"),t.night?.45:.42),gt("btnNight").textContent=Hh[bt.tod][1],gt("btnWx").textContent=jl[bt.wx][1],Kh(t.wet?bt.wx==="storm"?.07:.045:0)}function Wf(){Ts({day:"sunset",sunset:"night",night:"day"}[bt.tod]),vr(Hh[bt.tod][0])}function Xf(){let i=Object.keys(jl);Ts(null,i[(i.indexOf(bt.wx)+1)%i.length]),vr(jl[bt.wx][0])}bt.onThunder=i=>tv(i);var Si=Da(Cn,Lf,null,Tt.shadow),Yx=[Da(Cn,tc,"\u0422\u0426\u041A",Tt.shadow),Da(Cn,tc,"\u0422\u0426\u041A",Tt.shadow)],Xn={bar:new Dt(2,1,.5),pole:new Wt(.08,.08,2.75,10),banner:new zn(2,1.2),bus:new Dt(5.2,2.35,2),wheel:new Wt(.42,.42,.3,18),coin:new Wt(.36,.36,.08,24),wind:new zn(1.8,1.05),plate:new zn(1.5,.42),head:new Dt(.06,.22,.32),roofBox:new Dt(4.6,.12,1.9),mirror:new Dt(.1,.25,.12)},Yn=[],Wi=[],ys=new Gr(Xn.coin,Tt.coin,260);ys.count=0;ys.frustumCulled=!1;ys.castShadow=!0;Cn.add(ys);var nc=new zt,oi={};function Nf(i,e,t,n,s=0){let r=Nt(e,t,n,oi);i.position.set(r.wx,r.wy,r.wz),i.rotation.set(0,Math.PI/2-oi.th+s,0)}function Zx(i){let e=new It,t=(n,s,r,a,o)=>{let c=new ft(n,s);return c.position.set(r,a,o),c.castShadow=!0,c.receiveShadow=!0,e.add(c),c};if(i.t==="bar")t(Xn.bar,Tt.stripe,0,.5,0).rotation.y=Math.PI/2;else if(i.t==="gate"){for(let n of[-1.05,1.05])t(Xn.pole,Tt.gatePole,0,1.37,n);t(Xn.banner,Tt.stij,0,1.9,0).rotation.y=-Math.PI/2}else if(i.t==="bus"){t(Xn.bus,[Tt.white,Tt.white,Tt.white,Tt.white,Tt.busBody,Tt.busBody],0,1.53,0),t(Xn.roofBox,Tt.white,.2,2.76,0),t(Xn.wind,Tt.glass,-2.62,1.95,0).rotation.y=-Math.PI/2,t(Xn.plate,Tt.busPlate,-2.62,.75,0).rotation.y=-Math.PI/2;for(let n of[-.72,.72])t(Xn.head,Tt.headl,-2.62,1.05,n);for(let n of[-1.07,1.07])t(Xn.mirror,Tt.tyre,-2.45,2,n);for(let n of[-1.7,1.7])for(let s of[-.9,.9])t(Xn.wheel,Tt.tyre,n,.42,s).rotation.x=Math.PI/2}else if(i.t==="patrol"){i.fig=Da(Cn,{...tc,face:!0},null,Tt.shadow);return}Cn.add(e),i.mesh=e}function Jx(){for(let i of Yn){let e=i.d+i.len/2;i.mesh&&(Nf(i.mesh,e,i.lane*bs,0),i.mesh.visible=i.d<Pt+Yh),i.fig&&(Nf(i.fig,e,i.lane*bs,0),i.fig.rotation.y=-oi.th,Gi(i.fig,gs*2+i.d,"hands"),i.fig.userData.limbs[0].sho.rotation.x=-2.4+Math.sin(gs*8+i.d)*.5)}}function Jh(i){i.mesh&&Cn.remove(i.mesh),i.fig&&(Df(i.fig),Cn.remove(i.fig))}var mr=0,ms=0,Uf=i=>i==="bus"||i==="patrol";function $x(i){return nn.some(e=>e.type==="corner"&&i>e.s-16&&i<e.e+12)}function Kx(){let i=mr,e=nn.find(g=>g.type==="corner"&&i>g.s-16&&i<g.e+12);if(e){mr=e.e+12,ms=Math.max(ms,e.e+4);return}let t=Math.min(1,i/3e3),n=i<180,s=ai(),r=n||s<.42-.22*t?1:s<.88-.08*t?2:3,a=[-1,0,1].sort(()=>ai()-.5).slice(0,r),o={};for(let g of a){let x=ai();o[g]=n?x<.4?"bar":x<.7?"gate":"bus":x<.3?"bar":x<.55?"gate":x<.83?"bus":"patrol"}if(r===3){let g=a.filter(x=>Uf(o[x]));g.length===3&&(o[Xh(g)]=ai()<.5?"bar":"gate")}let c=[-1,0,1].filter(g=>!o[g]||!Uf(o[g])),l=ms+3,h=i-3,d=Xh(c);if(h-l>4&&ai()<.85)for(let g=Math.max(l,h-30);g<=h;g+=2.2)$x(g)||Wi.push({d:g,x:d*bs,y:.9,got:!1});let u=.6;for(let g of a){let x=o[g],f={t:x,lane:g,d:i,len:.5,y0:0,y1:1,hx:1};if(x==="gate"&&Object.assign(f,{len:.35,y0:1.25,y1:2.6}),x==="bus"&&Object.assign(f,{len:5.2,y1:2.7}),x==="patrol"&&Object.assign(f,{len:.6,y1:2.3,hx:.55}),x==="bar"&&ai()<.45)for(let p=-3;p<=3;p++)Wi.push({d:i+.25+p*1.5,x:g*bs,y:.9+1.4*(1-(p/3.5)**2),got:!1});Zx(f),Yn.push(f),u=Math.max(u,f.len)}ms=i+u;let m=Math.max(xs,rc)+1;mr=ms+m*(1.3-.45*t)+ai()*m*.45}var Pt=0,Xi=0,xs=0,oc=0,Ms=0,uc=0,gs=0,gr=0,lc=0,de={lane:0,prevLane:0,x:0,prevX:0,y:0,vy:0,onGround:!0,slide:0,run:0,inv:0,stumble:0,jt:0,flip:!1,jumps:0,land:0};function Ua(){for(let i of Yn)Jh(i);Yn=[],Wi=[],Pt=Xi=0,xs=0,oc=0,Ms=0,uc=0,gr=3,lc=0,Object.assign(de,{lane:0,prevLane:0,x:0,prevX:0,y:0,vy:0,onGround:!0,slide:0,run:0,inv:0,stumble:0,jt:0,flip:!1,jumps:0,land:0}),mr=60,ms=6;for(let[,i]of bi)pr.disposeChunk(i);bi.clear(),Jt=null,cc=!0}function vs(i){if(ht==="play")if(i==="left"||i==="right"){let e=hc(de.lane+(i==="left"?-1:1),-1,1);e!==de.lane&&(de.prevLane=de.lane,de.lane=e,Ss(500,.05,.03))}else i==="up"&&de.onGround?(de.vy=Vf,de.onGround=!1,de.slide=0,de.jt=0,de.jumps++,de.flip=de.jumps%3===0,Ss(320,.18,.06,760)):i==="down"&&(de.onGround?(de.slide<=0&&Ss(180,.15,.04,90),de.slide=Gf):de.vy=Math.min(de.vy,-24))}function Qx(){if(Ss(140,.3,.15,45),Qh(80),gr>0)return qf();gr=5,de.stumble=.5,de.inv=.5,vr("\u0422\u0426\u041A \u041D\u0410 \u0425\u0412\u041E\u0421\u0422\u0406!")}function qf(){ht="caught",lc=0,xs=0,Ss(392,.6,.1,196),Qh(200)}function jx(){if(de.inv>0)return;let i=de.slide>0?.8:1.75;for(let e of Yn){let t=e.d,n=e.d+e.len;if(Pt+.35<t||Xi-.35>n)continue;let s=e.lane*bs,r=e.hx+.38;if(Math.abs(de.x-s)>=r||de.y+i<=e.y0||de.y>=e.y1)continue;let a=Xi+.35>=t&&Xi-.35<=n,o=Math.abs(de.prevX-s)<r;a&&!o?(de.lane=de.prevLane,Qx()):(Pt=Math.max(Xi,e.d-.45),qf());return}}var Jt=null,cc=!0,ur=0,ic=2.6,Dn={x:0,y:0,z:0},Ff=new k;function ev(i){if(gs+=i,ht==="play"){oc+=i,xs=rc+(Wx-rc)*(1-Math.exp(-oc/110)),Xi=Pt,Pt+=xs*i,Ms=Math.floor(Pt),gr>0&&(gr-=i),de.inv>0&&(de.inv-=i),de.stumble>0&&(de.stumble-=i),de.land>0&&(de.land-=i),de.prevX=de.x;let g=de.lane*bs;de.x+=(g-de.x)*(1-Math.exp(-i*16)),(!de.onGround||de.vy>0)&&(de.jt+=i,de.vy-=kf*i,de.y+=de.vy*i,de.y<=0&&(de.y=0,de.vy=0,de.onGround=!0,de.land=.16,ur=.12)),de.slide>0&&(de.slide-=i),de.run+=i*(6+xs*.35),jx();for(let x of Wi)!x.got&&x.d>Xi-.9&&x.d<Pt+.9&&Math.abs(x.x-de.x)<1&&x.y>de.y-.4&&x.y<de.y+2.5&&(x.got=!0,uc++,Ss(1046,.07,.05),Ss(1568,.1,.05,0,.05));for(;mr<Pt+Yh;)Kx();Yn=Yn.filter(x=>x.d+x.len<Pt-8?(Jh(x),!1):!0),Wi=Wi.filter(x=>!x.got&&x.d>Pt-8)}else ht==="caught"&&(lc+=i,lc>1.5&&nv());ws();let e=Nt(Pt,de.x,de.y,oi);Si.position.set(e.wx,e.wy,e.wz),Si.rotation.y=Math.PI-oi.th;let t=hc((de.lane*bs-de.x)*.22,-.35,.35)+(de.stumble>0?Math.sin(de.stumble*20)*.25:0);ht==="start"?Gi(Si,gs*2,"idle"):ht!=="play"?Gi(Si,gs*3,"hands"):de.slide>0?Gi(Si,de.run,"roll",1-de.slide/Gf,t):de.onGround?Gi(Si,de.run,"run",0,t,de.land>0?Math.sin(de.land/.16*Math.PI):0):Gi(Si,de.run,de.flip?"flip":"air",de.jt/Xx,t),Si.userData.blob.position.y=.03-de.y,Si.userData.blob.scale.setScalar(1/(1+de.y*.3));let n=ht!=="play"||gr>0;ic+=((n?ht==="caught"||ht==="over"?.9:2.6:9)-ic)*(1-Math.exp(-i*2.5)),Yx.forEach((g,x)=>{let f=Nt(Pt-ic-x*.4,de.x+(x?1.15:-1.15)*(ht==="caught"||ht==="over"?.55:1),0,oi);g.position.set(f.wx,f.wy,f.wz),g.rotation.y=Math.PI-oi.th,Gi(g,de.run+x*1.7,ht==="play"?"run":"idle"),g.visible=ic<8}),Jx();let s=0;for(let g of Wi){if(g.d>Pt+150||s>=260)continue;let x=Nt(g.d,g.x,g.y,oi);nc.position.set(x.wx,x.wy,x.wz),nc.rotation.set(Math.PI/2,0,gs*4+g.d),nc.updateMatrix(),ys.setMatrixAt(s++,nc.matrix)}ys.count=s,ys.instanceMatrix.needsUpdate=!0;let r=Nt(Math.max(0,Pt-6.5),de.x*.5,4.6+de.y*.3,{}),a=Nt(Pt+9,de.x*.6,1.1+de.y*.5,{});Jt||(Jt={x:r.wx,y:r.wy,z:r.wz}),cc&&(Dn.x=a.wx,Dn.y=a.wy,Dn.z=a.wz,cc=!1);let o=1-Math.exp(-i*7),c=Jt.x,l=Jt.y,h=Jt.z;Jt.x+=(r.wx-Jt.x)*o,Jt.y+=(r.wy-Jt.y)*o,Jt.z+=(r.wz-Jt.z)*o,i>0&&(bt.camVel={x:(Jt.x-c)/i,y:(Jt.y-l)/i,z:(Jt.z-h)/i}),Dn.x+=(a.wx-Dn.x)*Math.min(1,o*1.4),Dn.y+=(a.wy-Dn.y)*Math.min(1,o*1.4),Dn.z+=(a.wz-Dn.z)*Math.min(1,o*1.4),ur>0&&(ur=Math.max(0,ur-i)),yn.position.set(Jt.x,Jt.y-Math.sin(ur*40)*ur*.6,Jt.z),yn.lookAt(Dn.x,Dn.y,Dn.z);let d=qh+(xs-rc)*.22;Math.abs(yn.fov-d)>.05&&(yn.fov+=(d-yn.fov)*Math.min(1,i*3),yn.updateProjectionMatrix());let u=Nt(Pt+14,0,0,oi);Ff.set(u.wx,u.wy,u.wz);let m=Nt(Pt-.8,de.x*.5,4,oi);bt.near.position.set(m.wx,m.wy,m.wz),ac.position.set(yn.position.x,e.wy-3,yn.position.z),bt.update(i,gs,Ff)}var mt=null,dr=null,sc=null;function $h(){try{mt||(mt=new(window.AudioContext||window.webkitAudioContext)),mt.state==="suspended"&&mt.resume()}catch{mt=null}}function Ss(i,e,t,n,s=0){if(mt)try{let r=mt.currentTime+s,a=mt.createOscillator(),o=mt.createGain();a.type="square",a.frequency.setValueAtTime(i,r),n&&a.frequency.exponentialRampToValueAtTime(n,r+e),o.gain.setValueAtTime(t,r),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(mt.destination),a.start(r),a.stop(r+e+.05)}catch{}}function Yf(){if(!sc){sc=mt.createBuffer(1,mt.sampleRate*2,mt.sampleRate);let i=sc.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}return sc}function Kh(i){if(mt)try{if(!dr){let e=mt.createBufferSource();e.buffer=Yf(),e.loop=!0;let t=mt.createBiquadFilter();t.type="bandpass",t.frequency.value=1400,t.Q.value=.6,dr=mt.createGain(),dr.gain.value=0,e.connect(t),t.connect(dr),dr.connect(mt.destination),e.start()}dr.gain.setTargetAtTime(ht==="play"?i:0,mt.currentTime,.4)}catch{}}function tv(i){if(mt){try{let e=mt.currentTime+i,t=mt.createBufferSource(),n=mt.createBiquadFilter(),s=mt.createGain();t.buffer=Yf(),n.type="lowpass",n.frequency.value=160,s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.35,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+1.9),t.connect(n),n.connect(s),s.connect(mt.destination),t.start(e),t.stop(e+2)}catch{}Qh(40)}}function Qh(i){try{window.AndroidBridge&&window.AndroidBridge.vibrate?window.AndroidBridge.vibrate(i):navigator.vibrate&&navigator.vibrate(i)}catch{}}function vr(i){let e=gt("toast");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function yr(i){for(let e of["start","pause","over"])gt(e).classList.toggle("hidden",e!==i);gt("hud").classList.toggle("hidden",i!==null&&i!=="pause")}function dc(){$h(),Ua(),ws(!0),ht="play",yr(null),Ts(),vr(qn.n+": \u0411\u0406\u0416\u0418!"),Rt.reset()}function Mr(){ht==="play"&&(ht="pause",yr("pause"),Kh(0))}function Zf(){ht==="pause"&&($h(),ht="play",yr(null),Ts(),Rt.reset())}function nv(){ht="over",gt("oScore").textContent=Ms,gt("oCoins").textContent=uc,gt("oCity").textContent=qn.n,gt("oPerf").textContent=`\u0413\u0440\u0430\u0444\u0456\u043A\u0430: ${ec[bt.tier]} \xB7 ${Rt.avg?Math.round(Rt.avg):"\u2014"} \u043A\u0430\u0434\u0440/\u0441`,yr("over"),Kh(0)}function fc(){location.href="index.html"}function iv(){let i=gt("cities");if(i){i.innerHTML="";for(let e of Hl){let t=document.createElement("button");t.className="chip"+(e.id===qn.id?" on":""),t.textContent=e.n,t.addEventListener("click",n=>{n.stopPropagation(),e.id!==qn.id&&(Zh(e.id),Ua(),ws(!0))}),i.appendChild(t)}gt("cityName").textContent=qn.n}}gt("btnGo").addEventListener("click",i=>{i.stopPropagation(),dc()});gt("btnBack1").addEventListener("click",i=>{i.stopPropagation(),fc()});gt("btnAgain").addEventListener("click",dc);gt("btnBack2").addEventListener("click",fc);gt("btnMenu").addEventListener("click",()=>{Ua(),ws(!0),ht="start",yr("start")});gt("btnResume").addEventListener("click",Zf);gt("btnBack3").addEventListener("click",fc);gt("btnPause").addEventListener("click",i=>{i.stopPropagation(),Mr()});gt("btnNight").addEventListener("click",i=>{i.stopPropagation(),Wf()});gt("btnWx").addEventListener("click",i=>{i.stopPropagation(),Xf()});gt("btnQ").addEventListener("click",i=>{i.stopPropagation(),pc(ps[(ps.indexOf(bt.tier)+1)%ps.length],!0),vr("\u0413\u0440\u0430\u0444\u0456\u043A\u0430: "+ec[bt.tier])});var An=null,jh=(i,e)=>Math.abs(i)>Math.abs(e)?vs(i>0?"right":"left"):vs(e>0?"down":"up");xr.addEventListener("touchstart",i=>{i.preventDefault(),$h();let e=i.changedTouches[0];An={id:e.identifier,x:e.clientX,y:e.clientY,done:!1}},{passive:!1});xr.addEventListener("touchmove",i=>{if(i.preventDefault(),!(!An||An.done))for(let e of i.changedTouches){if(e.identifier!==An.id)continue;let t=e.clientX-An.x,n=e.clientY-An.y;(Math.abs(t)>22||Math.abs(n)>22)&&(jh(t,n),An.done=!0)}},{passive:!1});xr.addEventListener("touchend",i=>{if(i.preventDefault(),!!An){for(let e of i.changedTouches)if(e.identifier===An.id){if(!An.done){let t=e.clientX-An.x,n=e.clientY-An.y;(Math.abs(t)>10||Math.abs(n)>10)&&jh(t,n)}An=null}}},{passive:!1});document.addEventListener("touchmove",i=>{i.cancelable&&!i.target.closest("#cities")&&i.preventDefault()},{passive:!1});var _s=null;xr.addEventListener("mousedown",i=>{_s={x:i.clientX,y:i.clientY,done:!1}});window.addEventListener("mousemove",i=>{if(!_s||_s.done)return;let e=i.clientX-_s.x,t=i.clientY-_s.y;(Math.abs(e)>24||Math.abs(t)>24)&&(jh(e,t),_s.done=!0)});window.addEventListener("mouseup",()=>{_s=null});window.addEventListener("keydown",i=>{let e=i.code;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(e)&&i.preventDefault(),e==="KeyN")return Wf();if(e==="KeyM")return Xf();ht==="play"?e==="ArrowLeft"||e==="KeyA"?vs("left"):e==="ArrowRight"||e==="KeyD"?vs("right"):e==="ArrowUp"||e==="KeyW"||e==="Space"?vs("up"):e==="ArrowDown"||e==="KeyS"?vs("down"):(e==="KeyP"||e==="Escape")&&Mr():(ht==="start"||ht==="over")&&(e==="Enter"||e==="Space")?dc():ht==="pause"&&(e==="Enter"||e==="KeyP"||e==="Escape")&&Zf()});function Jf(){Mr();try{mt&&mt.state==="running"&&mt.suspend()}catch{}}document.addEventListener("visibilitychange",()=>{document.hidden&&Jf()});window.addEventListener("blur",Mr);window.__appPause=Jf;window.__appBack=()=>ht==="play"?(Mr(),"ok"):(ht==="caught"||fc(),"ok");var Rt={t:0,n:0,sum:0,cnt:0,avg:0,locked:!1,reset(){this.t=0,this.n=0}};function pc(i,e=!1){bt.setTier(i),Na.set("ukh3d_q",i),e&&(Rt.locked=!0),gt("btnQ").textContent={ultra:"\u2728",high:"\u2699\uFE0F",medium:"\u{1F505}",low:"\u{1F50B}"}[i],$f()}function sv(i){if(ht!=="play"||i<=0||i>.5||(Rt.t+=i,Rt.n++,Rt.t<4))return;let e=Rt.n/Rt.t;Rt.sum+=e,Rt.cnt++,Rt.avg=Rt.sum/Rt.cnt,Rt.t=0,Rt.n=0,!Rt.locked&&e<45&&bt.tier!=="low"&&(pc(ps[ps.indexOf(bt.tier)+1]),vr("\u0413\u0440\u0430\u0444\u0456\u043A\u0430: "+ec[bt.tier]+" \u2014 \u0434\u043B\u044F \u043F\u043B\u0430\u0432\u043D\u043E\u0441\u0442\u0456"),Rt.sum=0,Rt.cnt=0)}var qh=70;function $f(){let i=window.innerWidth,e=window.innerHeight;_r.setSize(i,e,!1),yn.aspect=i/e,qh=hc(2*Math.atan(Math.tan(74*Math.PI/180/2)/yn.aspect)*180/Math.PI,55,92),yn.fov=qh,yn.updateProjectionMatrix(),bt.resize()}window.addEventListener("resize",$f);var Of=performance.now(),Bf=-1;function Kf(i){let e=(i-Of)/1e3;Of=i;let t=hc(e,0,.05);ht!=="pause"&&ht!=="dead"&&ev(t),ht!=="dead"&&bt.render(),sv(e),Ms!==Bf&&(gt("score").textContent=Ms,Bf=Ms),gt("coinN").textContent=uc,requestAnimationFrame(Kf)}var zf=Na.get("ukh3d_q");pc(ps.includes(zf)?zf:"high");bt.tod=ai()<.6?"day":ai()<.6?"sunset":"night";bt.wx=Xh(["clear","clear","clear","rain","storm","snow","fog"]);Zh(qx());Ua();yr("start");ws(!0);requestAnimationFrame(Kf);window.__g3={get state(){return ht},get dist(){return Pt},get lane(){return de.lane},get score(){return Ms},get p(){return de},act:vs,start:dc,renderer:_r,camera:yn,scene:Cn,env:bt,frame:i=>Nt(i,0,0,{}),get chunks(){return bi.size},get obs(){return Yn.length},get obsList(){return Yn.map(i=>({t:i.t,lane:i.lane,d:i.d}))},pause:Mr,setEnv(i,e){Ts(i,e)},setNight(i){Ts(i?"night":"day")},setTier:pc,get tier(){return bt.tier},lockTier(){Rt.locked=!0},get perf(){return Rt},city:i=>{Zh(i),Ua(),ws(!0)},get M(){return fr},get cityId(){return qn.id},cities:Hl.map(i=>i.id),warp(i){Pt=Xi=i,mr=i+40,ms=i+6;for(let e of Yn)Jh(e);Yn=[],Wi=[],Jt=null,cc=!0,ws(!0)},segs:nn,setSpeedTime(i){oc=i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
