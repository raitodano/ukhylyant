(()=>{var tp=0,iu=1,np=2;var qs=1,ip=2,Zr=3,di=0,nn=1,Pn=2,Wi=0,Jr=1,Xi=2,su=3,ru=4,sp=5;var Ys=100,rp=101,op=102,ap=103,lp=104,cp=200,hp=201,up=202,fp=203,ou=204,au=205,dp=206,pp=207,mp=208,gp=209,xp=210,_p=211,vp=212,yp=213,Mp=214,xl=0,_l=1,vl=2,Nr=3,yl=4,Ml=5,Sl=6,bl=7,lu=0,Sp=1,bp=2,pi=0,ca=1,ha=2,ua=3,Ks=4,fa=5,da=6,pa=7,Kh="attached",wp="detached",cu=300,Zs=301,$r=302,jr=303,Hl=304,ii=1e3,Mn=1001,Dr=1002,Vt=1003,Vl=1004;var Js=1005;var en=1006,Qr=1007;var Ln=1008;var Nn=1009,hu=1010,uu=1011,eo=1012,Wl=1013,ri=1014,zn=1015,sn=1016,Xl=1017,ql=1018,$s=1020,fu=35902,du=35899,pu=1021,mu=1022,Kn=1023,Li=1026,qi=1027,Yl=1028,Kl=1029,hs=1030,Zl=1031;var Jl=1033,ma=33776,ga=33777,xa=33778,_a=33779,$l=35840,jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37488,rc=37489,va=37490,oc=37491,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,xc=37818,_c=37819,vc=37820,yc=37821,Mc=36492,Sc=36494,bc=36495,wc=36283,Tc=36284,ya=36285,Ac=36286,Ec=2200,Tp=2201,Ap=2202,Ls=2300,Ns=2301,ml=2302,Zh=2303,Cs=2400,Is=2401,Bo=2402,Rc=2500,Ep=2501,gu=0,Ma=1,to=2,Rp=3200,xu=3201;var Cc=0,Cp=1,Gn="",wt="srgb",Tn="srgb-linear",ko="linear",pt="srgb";var gl=7680;var Ip=519,Pp=512,Lp=513,Np=514,_u=515,Dp=516,Up=517,vu=518,yu=519,Mu=35044,Ic=35048;var Su="300 es",Yn=2e3,Ur=2001;function G0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function H0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){let i=Fr("canvas");return i.style.display="block",i}var md={},Or=null;function zo(...i){let e="THREE."+i.shift();Or?Or("log",e,...i):console.log(e,...i)}function Op(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Op(i);let e="THREE."+i.shift();if(Or)Or("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Op(i);let e="THREE."+i.shift();if(Or)Or("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ps(...i){let e=i.join(" ");e in md||(md[e]=!0,ke(...i))}function Bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kp={[xl]:xl,[vl]:Sl,[yl]:yl,[Nr]:Ml,[_l]:_l,[Sl]:vl,[bl]:bl,[Ml]:Nr},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=1234567,Fo=Math.PI/180,Ds=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function bu(i,e){return(i%e+e)%e}function V0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function W0(i,e,t){return i!==e?(t-i)/(e-i):0}function Oo(i,e,t){return(1-t)*i+t*e}function X0(i,e,t,n){return Oo(i,e,1-Math.exp(-t*n))}function q0(i,e=1){return e-Math.abs(bu(i,e*2)-e)}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function K0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Z0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function J0(i,e){return i+Math.random()*(e-i)}function $0(i){return i*(.5-Math.random())}function j0(i){i!==void 0&&(gd=i);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q0(i){return i*Fo}function eg(i){return i*Ds}function tg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ng(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ig(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tu(i,e){if(e.constructor===Float32Array)return i;let t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Au(i,e){if(e.constructor===Float32Array)return i;let t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Lc={DEG2RAD:Fo,RAD2DEG:Ds,generateUUID:mi,clamp:at,euclideanModulo:bu,mapLinear:V0,inverseLerp:W0,lerp:Oo,damp:X0,pingpong:q0,smoothstep:Y0,smootherstep:K0,randInt:Z0,randFloat:J0,randFloatSpread:$0,seededRandom:j0,degToRad:Q0,radToDeg:eg,isPowerOfTwo:tg,ceilPowerOfTwo:ng,floorPowerOfTwo:wu,setQuaternionFromProperEuler:ig,normalize:Au,denormalize:Tu},Pu=class Pu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pu.prototype.isVector2=!0;var Ce=Pu,Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||l!==f||c!==d||h!==m){let p=l*f+c*d+h*m+u*_;p<0&&(f=-f,d=-d,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+_*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lu=class Lu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lu.prototype.isVector3=!0;var U=Lu,wh=new U,xd=new Zt,Nu=class Nu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],p=s[3],g=s[6],v=s[1],b=s[4],M=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*_+a*v+l*E,r[3]=o*p+a*b+l*T,r[6]=o*g+a*M+l*x,r[1]=c*_+h*v+u*E,r[4]=c*p+h*b+u*T,r[7]=c*g+h*M+u*x,r[2]=f*_+d*v+m*E,r[5]=f*p+d*b+m*T,r[8]=f*g+d*M+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nu.prototype.isMatrix3=!0;var Ke=Nu,Th=new Ke,_d=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sg(){let i={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tn]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:_d,fromXYZ:vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:_d,fromXYZ:vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}var nt=sg();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,wl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=Fr("canvas")),_r.width=e.width,_r.height=e.height;let s=_r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rg=0,Br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ah(s[o].image)):r.push(Ah(s[o]))}else r=Ah(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ah(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var og=0,Eh=new U,Ot=class i extends si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=en,o=Ln,a=Kn,l=Nn,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=mi(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=cu;Ot.DEFAULT_ANISOTROPY=1;var Du=class Du{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(d+1)/2,E=(g+1)/2,T=(h+f)/4,x=(u+_)/4,y=(m+p)/4;return b>M&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Du.prototype.isVector4=!0;var Tt=Du,Tl=class extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ot({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Al=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gl=class Gl{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,_,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,_,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,lg)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),ji.crossVectors(n,On),ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ji.crossVectors(n,On)),ji.normalize(),Wa.crossVectors(On,ji),s[0]=ji.x,s[4]=Wa.x,s[8]=On.x,s[1]=ji.y,s[5]=Wa.y,s[9]=On.y,s[2]=ji.z,s[6]=Wa.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],b=n[7],M=n[11],E=n[15],T=s[0],x=s[4],y=s[8],I=s[12],C=s[1],P=s[5],A=s[9],B=s[13],N=s[2],G=s[6],q=s[10],z=s[14],j=s[3],R=s[7],F=s[11],H=s[15];return r[0]=o*T+a*C+l*N+c*j,r[4]=o*x+a*P+l*G+c*R,r[8]=o*y+a*A+l*q+c*F,r[12]=o*I+a*B+l*z+c*H,r[1]=h*T+u*C+f*N+d*j,r[5]=h*x+u*P+f*G+d*R,r[9]=h*y+u*A+f*q+d*F,r[13]=h*I+u*B+f*z+d*H,r[2]=m*T+_*C+p*N+g*j,r[6]=m*x+_*P+p*G+g*R,r[10]=m*y+_*A+p*q+g*F,r[14]=m*I+_*B+p*z+g*H,r[3]=v*T+b*C+M*N+E*j,r[7]=v*x+b*P+M*G+E*R,r[11]=v*y+b*A+M*q+E*F,r[15]=v*I+b*B+M*z+E*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],p=e[11],g=e[15],v=l*d-c*f,b=a*d-c*u,M=a*f-l*u,E=o*d-c*h,T=o*f-l*h,x=o*u-a*h;return t*(_*v-p*b+g*M)-n*(m*v-p*E+g*T)+s*(m*b-_*E+g*x)-r*(m*M-_*T+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],p=e[14],g=e[15],v=t*a-n*o,b=t*l-s*o,M=t*c-r*o,E=n*l-s*a,T=n*c-r*a,x=s*c-r*l,y=h*_-u*m,I=h*p-f*m,C=h*g-d*m,P=u*p-f*_,A=u*g-d*_,B=f*g-d*p,N=v*B-b*A+M*P+E*C-T*I+x*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return e[0]=(a*B-l*A+c*P)*G,e[1]=(s*A-n*B-r*P)*G,e[2]=(_*x-p*T+g*E)*G,e[3]=(f*T-u*x-d*E)*G,e[4]=(l*C-o*B-c*I)*G,e[5]=(t*B-s*C+r*I)*G,e[6]=(p*M-m*x-g*b)*G,e[7]=(h*x-f*M+d*b)*G,e[8]=(o*A-a*C+c*y)*G,e[9]=(n*C-t*A-r*y)*G,e[10]=(m*T-_*M+g*v)*G,e[11]=(u*M-h*T-d*v)*G,e[12]=(a*I-o*P-l*y)*G,e[13]=(t*P-n*I+s*y)*G,e[14]=(_*b-m*E-p*v)*G,e[15]=(h*E-u*b+f*v)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,_=o*h,p=o*u,g=a*u,v=l*c,b=l*h,M=l*u,E=n.x,T=n.y,x=n.z;return s[0]=(1-(_+g))*E,s[1]=(d+M)*E,s[2]=(m-b)*E,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+g))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(m+b)*x,s[9]=(p-v)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Qn.copy(this);let c=1/o,h=1/a,u=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Yn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ur)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Yn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ur)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Gl.prototype.isMatrix4=!0;var Ye=Gl,vr=new U,Qn=new Ye,ag=new U(0,0,0),lg=new U(1,1,1),ji=new U,Wa=new U,On=new U,yd=new Ye,Md=new Zt,Ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cg=0,Sd=new U,yr=new Zt,Ti=new Ye,Xa=new U,Eo=new U,hg=new U,ug=new Zt,bd=new U(1,0,0),wd=new U(0,1,0),Td=new U(0,0,1),Ad={type:"added"},fg={type:"removed"},Mr={type:"childadded",child:null},Rh={type:"childremoved",child:null},Lt=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Ni,n=new Zt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Td,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xa.copy(e):Xa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Eo,Xa,this.up):Ti.lookAt(Xa,Eo,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Ti),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fg),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,hg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _t=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dg={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=bu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ch(o,r,e+1/3),this.g=Ch(o,r,e),this.b=Ch(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=zp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return nt.workingToColorSpace(yn.copy(this),e),Math.round(at(yn.r*255,0,255))*65536+Math.round(at(yn.g*255,0,255))*256+Math.round(at(yn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=wt){nt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(qa);let n=Oo(Qi.h,qa.h,t),s=Oo(Qi.s,qa.s,t),r=Oo(Qi.l,qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Re;Re.NAMES=zp;var Vo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Us=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new U,Ai=new U,Ih=new U,Ei=new U,Sr=new U,br=new U,Ed=new U,Ph=new U,Lh=new U,Nh=new U,Dh=new Tt,Uh=new Tt,Fh=new Tt,ss=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ai.subVectors(n,t),Ih.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(Ai),l=ei.dot(Ih),c=Ai.dot(Ai),h=Ai.dot(Ih),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dh.setScalar(0),Uh.setScalar(0),Fh.setScalar(0),Dh.fromBufferAttribute(e,t),Uh.fromBufferAttribute(e,n),Fh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dh,r.x),o.addScaledVector(Uh,r.y),o.addScaledVector(Fh,r.z),o}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ai.subVectors(e,t),ei.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Sr.subVectors(s,n),br.subVectors(r,n),Ph.subVectors(e,n);let l=Sr.dot(Ph),c=br.dot(Ph);if(l<=0&&c<=0)return t.copy(n);Lh.subVectors(e,s);let h=Sr.dot(Lh),u=br.dot(Lh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Sr,o);Nh.subVectors(e,r);let d=Sr.dot(Nh),m=br.dot(Nh);if(m>=0&&d<=m)return t.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(br,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Ed.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(Ed,a);let g=1/(p+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Sr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},An=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ka.subVectors(this.max,Ro),wr.subVectors(e.a,Ro),Tr.subVectors(e.b,Ro),Ar.subVectors(e.c,Ro),es.subVectors(Tr,wr),ts.subVectors(Ar,Tr),Ts.subVectors(wr,Ar);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ts.z,Ts.y,es.z,0,-es.x,ts.z,0,-ts.x,Ts.z,0,-Ts.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ts.y,Ts.x,0];return!Oh(t,wr,Tr,Ar,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Oh(t,wr,Tr,Ar,Ka))?!1:(Za.crossVectors(es,ts),t=[Za.x,Za.y,Za.z],Oh(t,wr,Tr,Ar,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new U,new U,new U,new U,new U,new U,new U,new U],ti=new U,Ya=new An,wr=new U,Tr=new U,Ar=new U,es=new U,ts=new U,Ts=new U,Ro=new U,Ka=new U,Za=new U,As=new U;function Oh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){As.fromArray(i,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Kt=new U,Ja=new Ce,pg=0,kt=class extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=e!==void 0?Pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Au(e,this.array)}};var Wo=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},mg=new An,Co=new U,Bh=new U,Rn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);let t=Co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Co,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Bh)),this.expandByPoint(Co.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gg=0,qn=new Ye,kh=new Lt,Er=new U,Bn=new An,Io=new An,hn=new U,vt=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Bn.min,Io.min),Bn.expandByPoint(hn),hn.addVectors(Bn.max,Io.max),Bn.expandByPoint(hn)):(Bn.expandByPoint(Io.min),Bn.expandByPoint(Io.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),hn.add(Er)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new U,l[I]=new U;let h=new U,u=new U,f=new U,d=new Ce,m=new Ce,_=new Ce,p=new U,g=new U;function v(I,C,P){c[I]=c[C]=c[P]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,C),_.fromBufferAttribute(r,P),u.sub(h),f.sub(h),m.sub(d),_.sub(d);let A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(A),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(A),a[I].add(p),a[C].add(p),a[P].add(p),l[I].add(g),l[C].add(g),l[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,C=b.length;I<C;++I){let P=b[I],A=P.start,B=P.count;for(let N=A,G=A+B;N<G;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new U,E=new U,T=new U,x=new U;function y(I){T.fromBufferAttribute(s,I),x.copy(T);let C=a[I];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(x,C);let A=E.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,A)}for(let I=0,C=n.count;I<C;++I)c[I]&&y(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new kt(f,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Rd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var wn=new U,Gr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Au(e,this.data.array)}},zh=new U,xg=new U,_g=new Ke,ni=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zh.subVectors(n,t).cross(xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_g.getNormalMatrix(e),s=this.coplanarPoint(zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vg=0,Cn=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Jr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gl,this.stencilZFail=gl,this.stencilZPass=gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new U,Gh=new U,$a=new U,ja=new U,Fs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gh.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),ja.copy(this.origin).sub(Gh);let r=e.distanceTo(t)*.5,o=-this.direction.dot($a),a=ja.dot(this.direction),l=-ja.dot($a),c=ja.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gh).addScaledVector($a,f),d}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,_=t.y-o.y,p=t.z-o.z,g=n.x-o.x,v=n.y-o.y,b=n.z-o.z,M=Math.abs(l),E=Math.abs(c),T=Math.abs(h),x,y,I,C,P,A,B,N,G,q,z,j;if(M>=E&&M>=T?(I=l,A=u,G=m,j=g,l>=0?(x=c,y=h,C=f,P=d,B=_,N=p,q=v,z=b):(x=h,y=c,C=d,P=f,B=p,N=_,q=b,z=v)):E>=T?(I=c,A=f,G=_,j=v,c>=0?(x=h,y=l,C=d,P=u,B=p,N=m,q=b,z=g):(x=l,y=h,C=u,P=d,B=m,N=p,q=g,z=b)):(I=h,A=d,G=p,j=b,h>=0?(x=l,y=c,C=u,P=f,B=m,N=_,q=g,z=v):(x=c,y=l,C=f,P=u,B=_,N=m,q=v,z=g)),I===0)return null;let R=x/I,F=y/I,H=1/I,X=C-R*A,oe=P-F*A,W=B-R*G,Y=N-F*G,ae=q-R*j,ee=z-F*j,V=ae*Y-ee*W,te=X*ee-oe*ae,Ae=W*oe-Y*X;if(s){if(V<0||te<0||Ae<0)return null}else if((V<0||te<0||Ae<0)&&(V>0||te>0||Ae>0))return null;let he=V+te+Ae;if(he===0)return null;let $e=H*(V*A+te*G+Ae*j);return(he>0?$e<0:$e>0)?null:this.at($e/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cd=new Ye,Es=new Fs,Qa=new Rn,Id=new U,el=new U,tl=new U,nl=new U,Hh=new U,il=new U,Pd=new U,sl=new U,st=class extends Lt{constructor(e=new vt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){il.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Hh.fromBufferAttribute(u,e),o?il.addScaledVector(Hh,h):il.addScaledVector(Hh.sub(t),h))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Qa.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Qa,Id)===null||Es.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Cd.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,E=b;M<E;M+=3){let T=a.getX(M),x=a.getX(M+1),y=a.getX(M+2);s=rl(this,g,e,n,c,h,u,T,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);s=rl(this,o,e,n,c,h,u,v,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,E=b;M<E;M+=3){let T=M,x=M+1,y=M+2;s=rl(this,g,e,n,c,h,u,T,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=m,g=_;p<g;p+=3){let v=p,b=p+1,M=p+2;s=rl(this,o,e,n,c,h,u,v,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function yg(i,e,t,n,s,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;sl.copy(a),sl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:i}}function rl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,el),i.getVertexPosition(l,tl),i.getVertexPosition(c,nl);let h=yg(i,e,t,n,el,tl,nl,Pd);if(h){let u=new U;ss.getBarycoord(Pd,el,tl,nl,u),s&&(h.uv=ss.getInterpolatedAttribute(s,a,l,c,u,new Ce)),r&&(h.uv1=ss.getInterpolatedAttribute(r,a,l,c,u,new Ce)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};ss.getNormal(el,tl,nl,f.normal),h.face=f,h.barycoord=u}return h}var Po=new Tt,Ld=new Tt,Nd=new Tt,Mg=new Tt,Dd=new Ye,ol=new U,Vh=new Rn,Ud=new Ye,Wh=new Fs,qo=class extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingBox.expandByPoint(ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ol),this.boundingSphere.expandByPoint(ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vh.copy(this.boundingSphere),Vh.applyMatrix4(s),e.ray.intersectsSphere(Vh)!==!1&&(Ud.copy(s).invert(),Wh.copy(e.ray).applyMatrix4(Ud),!(this.boundingBox!==null&&Wh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ld.fromBufferAttribute(s.attributes.skinIndex,e),Nd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Po.copy(t),t.set(0,0,0,0)):(Po.set(t.x,t.y,t.z,1),t.set(0,0,0)),Po.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Nd.getComponent(r);if(o!==0){let a=Ld.getComponent(r);Dd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Mg.copy(Po).applyMatrix4(Dd),o)}}return t.isVector4&&(t.w=Po.w),t.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vr=class extends Ot{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Vt,h=Vt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fd=new Ye,Sg=new Ye,Yo=class i{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Sg;Fd.multiplyMatrices(a,t[r]),Fd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vr(t,e,e,Kn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(ke("Skeleton: No bone found with UUID:",r),o=new Hr),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Di=class extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rr=new Ye,Od=new Ye,al=[],Bd=new An,bg=new Ye,Lo=new st,No=new Rn,Os=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),Bd.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(Bd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),No.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(No)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),e.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),Od.multiplyMatrices(n,Rr),Lo.matrixWorld=Od,Lo.raycast(e,al);for(let o=0,a=al.length;o<a;o++){let l=al[o];l.instanceId=r,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,Yl,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Rn,wg=new Ce(.5,.5),ll=new U,rs=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],b=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,g-m,E-v).normalize(),s[1].setComponents(c+o,d+h,g+m,E+v).normalize(),s[2].setComponents(c+a,d+u,g+_,E+b).normalize(),s[3].setComponents(c-a,d-u,g-_,E-b).normalize(),n)s[4].setComponents(l,f,p,M).normalize(),s[5].setComponents(c-l,d-f,g-p,E-M).normalize();else if(s[4].setComponents(c-l,d-f,g-p,E-M).normalize(),t===Yn)s[5].setComponents(c+l,d+f,g+p,E+M).normalize();else if(t===Ur)s[5].setComponents(l,f,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=wg.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kd=new Ye,El=class i{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];kd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new rs),n[s].setFromProjectionMatrix(kd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new rs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var os=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rl=new U,Cl=new U,zd=new Ye,Do=new Fs,cl=new Rn,Xh=new U,Gd=new U,Bs=class extends Lt{constructor(e=new vt,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rl.fromBufferAttribute(t,s-1),Cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rl.distanceTo(Cl);e.setAttribute("lineDistance",new Je(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;zd.copy(s).invert(),Do.copy(e.ray).applyMatrix4(zd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=h.getX(_),v=h.getX(_+1),b=hl(this,e,Do,l,g,v,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(m-1),p=h.getX(d),g=hl(this,e,Do,l,_,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,p=m-1;_<p;_+=c){let g=hl(this,e,Do,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=hl(this,e,Do,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Rl.fromBufferAttribute(a,s),Cl.fromBufferAttribute(a,r),t.distanceSqToSegment(Rl,Cl,Xh,Gd)>n)return;Xh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xh);if(!(c<e.near||c>e.far))return{distance:c,point:Gd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hd=new U,Vd=new U,ks=class extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hd.fromBufferAttribute(t,s),Vd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hd.distanceTo(Vd);e.setAttribute("lineDistance",new Je(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ko=class extends Bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ui=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wd=new Ye,Jh=new Fs,ul=new Rn,fl=new U,as=class extends Lt{constructor(e=new vt,t=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Wd.copy(s).invert(),Jh.copy(e.ray).applyMatrix4(Wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){let p=c.getX(m);fl.fromBufferAttribute(u,p),Xd(fl,p,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)fl.fromBufferAttribute(u,m),Xd(fl,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xd(i,e,t,n,s,r,o){let a=Jh.distanceSqToPoint(i);if(a<t){let l=new U;Jh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Zo=class extends Ot{constructor(e=[],t=Zs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zs=class extends Ot{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends Ot{constructor(e,t,n=ri,s,r,o,a=Vt,l=Vt,c,h=Li,u=1){if(h!==Li&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jo=class extends Fi{constructor(e,t=ri,n=Zs,s,r,o=Vt,a=Vt,l,c=Li){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$o=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(_,p,g,v,b,M,E,T,x,y,I){let C=M/x,P=E/y,A=M/2,B=E/2,N=T/2,G=x+1,q=y+1,z=0,j=0,R=new U;for(let F=0;F<q;F++){let H=F*P-B;for(let X=0;X<G;X++){let oe=X*C-A;R[_]=oe*v,R[p]=H*b,R[g]=N,c.push(R.x,R.y,R.z),R[_]=0,R[p]=0,R[g]=T>0?1:-1,h.push(R.x,R.y,R.z),u.push(X/x),u.push(1-F/y),z+=1}}for(let F=0;F<y;F++)for(let H=0;H<x;H++){let X=f+H+G*F,oe=f+H+G*(F+1),W=f+(H+1)+G*(F+1),Y=f+(H+1)+G*F;l.push(X,oe,Y),l.push(oe,W,Y),j+=6}a.addGroup(d,j,I),d+=j,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},kn=class i extends vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,_=s+1,p=new U,g=new U;for(let v=0;v<=m;v++){let b=0,M=0,E=0,T=0;if(v<=n){let I=v/n,C=I*Math.PI/2;M=-h-e*Math.cos(C),E=e*Math.sin(C),T=-e*Math.cos(C),b=I*u}else if(v<=n+r){let I=(v-n)/r;M=-h+I*t,E=e,T=0,b=u+I*f}else{let I=(v-n-r)/n,C=I*Math.PI/2;M=h+e*Math.sin(C),E=e*Math.cos(C),T=e*Math.sin(C),b=u+f+I*u}let x=Math.max(0,Math.min(1,b/d)),y=0;v===0?y=.5/s:v===m&&(y=-.5/s);for(let I=0;I<=s;I++){let C=I/s,P=C*Math.PI*2,A=Math.sin(P),B=Math.cos(P);g.x=-E*B,g.y=M,g.z=E*A,a.push(g.x,g.y,g.z),p.set(-E*B,T,E*A),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+y,x)}if(v>0){let I=(v-1)*_;for(let C=0;C<s;C++){let P=I+C,A=I+C+1,B=v*_+C,N=v*_+C+1;o.push(P,A,B),o.push(A,N,B)}}}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Oi=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ut=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],p=n/2,g=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function v(){let M=new U,E=new U,T=0,x=(t-e)/n;for(let y=0;y<=r;y++){let I=[],C=y/r,P=C*(t-e)+e;for(let A=0;A<=s;A++){let B=A/s,N=B*l+a,G=Math.sin(N),q=Math.cos(N);E.x=P*G,E.y=-C*n+p,E.z=P*q,u.push(E.x,E.y,E.z),M.set(G,x,q).normalize(),f.push(M.x,M.y,M.z),d.push(B,1-C),I.push(m++)}_.push(I)}for(let y=0;y<s;y++)for(let I=0;I<r;I++){let C=_[I][y],P=_[I+1][y],A=_[I+1][y+1],B=_[I][y+1];(e>0||I!==0)&&(h.push(C,P,B),T+=3),(t>0||I!==r-1)&&(h.push(P,A,B),T+=3)}c.addGroup(g,T,0),g+=T}function b(M){let E=m,T=new Ce,x=new U,y=0,I=M===!0?e:t,C=M===!0?1:-1;for(let A=1;A<=s;A++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),m++;let P=m;for(let A=0;A<=s;A++){let N=A/s*l+a,G=Math.cos(N),q=Math.sin(N);x.x=I*q,x.y=p*C,x.z=I*G,u.push(x.x,x.y,x.z),f.push(0,C,0),T.x=G*.5+.5,T.y=q*.5*C+.5,d.push(T.x,T.y),m++}for(let A=0;A<s;A++){let B=E+A,N=P+A;M===!0?h.push(N,N+1,B):h.push(N+1,N,B),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class i extends Ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Il=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new U,M=new U,E=new U;for(let T=0;T<t.length;T+=3)d(t[T+0],b),d(t[T+1],M),d(t[T+2],E),l(b,M,E,v)}function l(v,b,M,E){let T=E+1,x=[];for(let y=0;y<=T;y++){x[y]=[];let I=v.clone().lerp(M,y/T),C=b.clone().lerp(M,y/T),P=T-y;for(let A=0;A<=P;A++)A===0&&y===T?x[y][A]=I:x[y][A]=I.clone().lerp(C,A/P)}for(let y=0;y<T;y++)for(let I=0;I<2*(T-y)-1;I++){let C=Math.floor(I/2);I%2===0?(f(x[y][C+1]),f(x[y+1][C]),f(x[y][C])):(f(x[y][C+1]),f(x[y+1][C+1]),f(x[y+1][C]))}}function c(v){let b=new U;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(v),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let v=new U;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let M=p(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;o.push(M,1-E)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],M=o[v+2],E=o[v+4],T=Math.max(b,M,E),x=Math.min(b,M,E);T>.9&&x<.1&&(b<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,b){let M=v*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function m(){let v=new U,b=new U,M=new U,E=new U,T=new Ce,x=new Ce,y=new Ce;for(let I=0,C=0;I<r.length;I+=9,C+=6){v.set(r[I+0],r[I+1],r[I+2]),b.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),T.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),y.set(o[C+4],o[C+5]),E.copy(v).add(b).add(M).divideScalar(3);let P=p(E);_(T,C+0,v,P),_(x,C+2,b,P),_(y,C+4,M,P)}}function _(v,b,M,E){E<0&&v.x===1&&(o[b]=v.x-1),M.x===0&&M.z===0&&(o[b]=E/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Qo=class i extends Il{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Gs=class i extends vt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new U,f=new Ce,d=new U,m=new U,_=new U,p=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:p=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let v=0;v<=t;v++){let b=n+v*h*s,M=Math.sin(b),E=Math.cos(b);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*E,o.push(u.x,u.y,u.z),f.x=v/t,f.y=T/(e.length-1),a.push(f.x,f.y);let x=l[3*T+0]*M,y=l[3*T+1],I=l[3*T+0]*E;c.push(x,y,I)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let M=b+v*e.length,E=M,T=M+e.length,x=M+e.length+1,y=M+1;r.push(E,T,y),r.push(x,y,T)}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var En=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-o;for(let b=0;b<c;b++){let M=b*u-r;m.push(M,-v,0),_.push(0,0,1),p.push(b/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,M=v+c*(g+1),E=v+1+c*(g+1),T=v+1+c*g;d.push(b,M,T),d.push(M,E,T)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var tn=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){let v=[],b=g/n,M=o+b*a,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let I=y/t,C=s+I*r;u.x=-T*Math.cos(C),u.y=E,u.z=T*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(I+x,1-b),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let b=h[g][v+1],M=h[g][v],E=h[g+1][v],T=h[g+1][v+1];(g!==0||o>0)&&d.push(b,M,T),(g!==n-1||l<Math.PI)&&d.push(M,E,T)}this.setIndex(d),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hs=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new U,d=new U,m=new U;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let g=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,b=(s+1)*(_-1)+p,M=(s+1)*_+p;l.push(g,v,M),l.push(v,b,M)}this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(qd(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(qd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Sn(i){let e={};for(let t=0;t<i.length;t++){let n=js(i[t]);for(let s in n)e[s]=n[s]}return e}function qd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var oi={clone:js,merge:Sn},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wr=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},At=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ps('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xr=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Rg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Cg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Is:r=e,a=2*t-n;break;case Bo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Is:o=e,l=2*n-t;break;case Bo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-d)*p+(1.5+d)*_+.5*m,M=d*p-d*_;for(let E=0;E!==a;++E)r[E]=g*o[h+E]+v*o[c+E]+b*o[l+E]+M*o[u+E];return r}},ea=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Nl=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dl=class extends ui{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=d*f+m*2,v=u[g],b=u[g+1],M=e*f+m*2,E=h[M],T=h[M+1],x=Pg(n,t,v,E,s);r[m]=Gp(x,_,b,T,p)}return r}};function Gp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ig(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Pg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Gp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ig(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Uo(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break;case Zh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return ml;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Uo(this.settings)&&(Kd(this.settings.inTangents,e),Kd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Uo(this.settings)&&(Zd(this.settings.inTangents,e),Zd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&H0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ml,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Uo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Zd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ns;var Bi=class extends In{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ls;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};ta.prototype.ValueTypeName="color";var ki=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};ki.prototype.ValueTypeName="number";var Ul=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},zi=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends In{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ls;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};ls.prototype.ValueTypeName="vector";var Vs=class{constructor(e="",t=-1,n=[],s=Rc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ng(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Rg(l);l=Yd(l,1,h),c=Yd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ki(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Lg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return ta;case"quaternion":return zi;case"bool":case"boolean":return Bi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ng(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Lg(i.type);if(i.times===void 0){let n=[],s=[];Cg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Uo(i.settings)&&(t.settings={inTangents:is(i.settings.inTangents,Float32Array),outTangents:is(i.settings.outTangents,Float32Array)}),t}var hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Jd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Jd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Jd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Fl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hp=new Fl,fi=class{constructor(e){this.manager=e!==void 0?e:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},$h=class extends Error{constructor(e,t){super(e),this.response=t}},qr=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ii[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,_=0,p=new ReadableStream({start(g){v();function v(){u.read().then(({done:b,value:M})=>{if(b)g.close();else{_+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let T=0,x=h.length;T<x;T++){let y=h[T];y.onProgress&&y.onProgress(E)}g.enqueue(M),v()}},b=>{g.error(b)})}}});return new Response(p)}else throw new $h(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{hi.add(`file:${e}`,c);let h=Ii[e];delete Ii[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=new WeakMap,Ol=class extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Cr.get(o);u===void 0&&(u=[],Cr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Fr("img");function l(){h(),t&&t(this);let u=Cr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),hi.remove(`image:${e}`);let f=Cr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var na=class extends fi{constructor(e){super(e)}load(e,t,n,s){let r=new Ot,o=new Ol(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ws=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ia=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},qh=new Ye,$d=new U,jd=new U,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(qh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=new U,pl=new Zt,ci=new U,sa=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,pl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dl,pl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new U,Qd=new Ce,ep=new Ce,Qt=class extends sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,ep),t.subVectors(ep,Qd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jh=class extends Yr{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ra=class extends Ws{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Qh=class extends Yr{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},Xs=class extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hi=class extends sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eu=class extends Yr{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Yh=new WeakMap,oa=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Yh.has(o)===!0?(s&&s(Yh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Yh.set(l,c),hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=-90,Pr=1,Kr=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Ir,Pr,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Ir,Pr,e,t);r.layers=this.layers,this.add(r);let o=new Qt(Ir,Pr,e,t);o.layers=this.layers,this.add(o);let a=new Qt(Ir,Pr,e,t);a.layers=this.layers,this.add(a);let l=new Qt(Ir,Pr,e,t);l.layers=this.layers,this.add(l);let c=new Qt(Ir,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Bl=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},aa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Dg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Dg(){this._document.hidden===!1&&this.reset()}var kl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Zt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,o,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Ru="\\[\\]\\.:\\/",Ug=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",Fg="[^"+Ru.replace("\\.","")+"]",Og=/((?:WC+[\/:])*)/.source.replace("WC",Cu),Bg=/(WCOD+)?/.source.replace("WCOD",Fg),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),Gg=new RegExp("^"+Og+Bg+kg+zg+"$"),Hg=["material","materials","bones","map"],tu=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){let t=Gg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=tu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Cs,endingEnd:Cs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Tp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ep:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Rc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Ap;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Ec){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Is,s.endingEnd=Is):(e?s.endingStart=this.zeroSlopeAtStart?Is:Cs:s.endingStart=Bo,t?s.endingEnd=this.zeroSlopeAtEnd?Is:Cs:s.endingEnd=Bo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Vg=new Float32Array(1),la=class extends si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=s[u],d=f.name,m=h[d];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;m=new kl(Et.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ea(new Float32Array(2),new Float32Array(2),1,Vg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Vs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Rc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new zl(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Vs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Uu=class Uu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Uu.prototype.isMatrix2=!0;var nu=Uu;function Iu(i,e,t,n){let s=Wg(n);switch(t){case pu:return i*e;case Yl:return i*e/s.components*s.byteLength;case Kl:return i*e/s.components*s.byteLength;case hs:return i*e*2/s.components*s.byteLength;case Zl:return i*e*2/s.components*s.byteLength;case mu:return i*e*3/s.components*s.byteLength;case Kn:return i*e*4/s.components*s.byteLength;case Jl:return i*e*4/s.components*s.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:case ec:return Math.max(i,16)*Math.max(e,8)/4;case $l:case Ql:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:case va:case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Sc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wc:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ya:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wg(i){switch(i){case Nn:case hu:return{byteLength:1,components:1};case eo:case uu:case sn:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case ri:case Wl:case zn:return{byteLength:4,components:1};case fu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function hm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,ax=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gx=`#define PI 3.141592653589793
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
} // validated`,xx=`vec3 transformedNormal = objectNormal;
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
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",bx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
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
}`,Dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bx=`#ifdef USE_ENVMAP
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
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
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
#endif`,Wx=`uniform sampler2D dfgLUT;
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
}`,Xx=`
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n_=`#if defined( USE_POINTS_UV )
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
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o_=`#if defined( USE_MORPHCOLORS )
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
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,c_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P_=`float getShadowMask() {
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
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,D_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform float backgroundBlurriness;
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,fv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,_v=`#define TOON
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
}`,vv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,bv=`uniform vec3 color;
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
}`,wv=`uniform float rotation;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Yg,alphahash_pars_fragment:Kg,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:$g,alphatest_pars_fragment:jg,aomap_fragment:Qg,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:sx,bsdfs:rx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:hx,clipping_planes_vertex:ux,color_fragment:fx,color_pars_fragment:dx,color_pars_vertex:px,color_vertex:mx,common:gx,defaultnormal_vertex:xx,displacementmap_pars_vertex:_x,displacementmap_vertex:vx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:Sx,colorspace_pars_fragment:bx,envmap_fragment:wx,envmap_common_pars_fragment:Tx,envmap_pars_fragment:Ax,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Bx,envmap_vertex:Rx,fog_vertex:Cx,fog_pars_vertex:Ix,fog_fragment:Px,fog_pars_fragment:Lx,gradientmap_pars_fragment:Nx,lightmap_pars_fragment:Dx,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ox,lights_toon_fragment:kx,lights_toon_pars_fragment:zx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Wx,lights_fragment_begin:Xx,lights_fragment_maps:qx,lights_fragment_end:Yx,lightprobes_pars_fragment:Kx,logdepthbuf_fragment:Zx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:jx,map_fragment:Qx,map_pars_fragment:e_,map_particle_fragment:t_,map_particle_pars_fragment:n_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:s_,morphinstance_vertex:r_,morphcolor_vertex:o_,morphnormal_vertex:a_,morphtarget_pars_vertex:l_,morphtarget_vertex:c_,normal_fragment_begin:h_,normal_fragment_maps:u_,normal_pars_fragment:f_,normal_pars_vertex:d_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:__,iridescence_pars_fragment:v_,opaque_fragment:y_,packing:M_,premultiplied_alpha_fragment:S_,project_vertex:b_,dithering_fragment:w_,dithering_pars_fragment:T_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:I_,shadowmask_pars_fragment:P_,skinbase_vertex:L_,skinning_pars_vertex:N_,skinning_vertex:D_,skinnormal_vertex:U_,specularmap_fragment:F_,specularmap_pars_fragment:O_,tonemapping_fragment:B_,tonemapping_pars_fragment:k_,transmission_fragment:z_,transmission_pars_fragment:G_,uv_pars_fragment:H_,uv_pars_vertex:V_,uv_vertex:W_,worldpos_vertex:X_,background_vert:q_,background_frag:Y_,backgroundCube_vert:K_,backgroundCube_frag:Z_,cube_vert:J_,cube_frag:$_,depth_vert:j_,depth_frag:Q_,distance_vert:ev,distance_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:hv,meshmatcap_frag:uv,meshnormal_vert:fv,meshnormal_frag:dv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:xv,meshtoon_vert:_v,meshtoon_frag:vv,points_vert:yv,points_frag:Mv,shadow_vert:Sv,shadow_frag:bv,sprite_vert:wv,sprite_frag:Tv},be={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},xi={basic:{uniforms:Sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Sn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Sn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Re(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Sn([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Sn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Sn([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Sn([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Sn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Sn([be.lights,be.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};xi.physical={uniforms:Sn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Nc={r:0,b:0,g:0},Av=new Ye,um=new Ke;um.set(-1,0,0,0,1,0,0,0,1);function Ev(i,e,t,n,s,r){let o=new Re(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function m(v){let b=!1,M=d(v);M===null?p(o,a):M&&M.isColor&&(p(M,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){let M=d(b);M&&M.isCubeTexture?(c===void 0&&(c=new st(new Dt(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:js(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(um),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new st(new En(2,2),new Jt({name:"BackgroundMaterial",uniforms:js(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,b){v.getRGB(Nc,Eu(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Rv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,A,B,N,G){let q=!1,z=u(P,N,B,A);r!==z&&(r=z,c(r.object)),q=d(P,N,B,G),q&&m(P,N,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(P,A,B,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,A,B,N){let G=N.wireframe===!0,q=n[A.id];q===void 0&&(q={},n[A.id]=q);let z=P.isInstancedMesh===!0?P.id:0,j=q[z];j===void 0&&(j={},q[z]=j);let R=j[B.id];R===void 0&&(R={},j[B.id]=R);let F=R[G];return F===void 0&&(F=f(l()),R[G]=F),F}function f(P){let A=[],B=[],N=[];for(let G=0;G<t;G++)A[G]=0,B[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:N,object:P,attributes:{},index:null}}function d(P,A,B,N){let G=r.attributes,q=A.attributes,z=0,j=B.getAttributes();for(let R in j)if(j[R].location>=0){let H=G[R],X=q[R];if(X===void 0&&(R==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),R==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),H===void 0||H.attribute!==X||X&&H.data!==X.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function m(P,A,B,N){let G={},q=A.attributes,z=0,j=B.getAttributes();for(let R in j)if(j[R].location>=0){let H=q[R];H===void 0&&(R==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),R==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let X={};X.attribute=H,H&&H.data&&(X.data=H.data),G[R]=X,z++}r.attributes=G,r.attributesNum=z,r.index=N}function _(){let P=r.newAttributes;for(let A=0,B=P.length;A<B;A++)P[A]=0}function p(P){g(P,0)}function g(P,A){let B=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;B[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),G[P]!==A&&(i.vertexAttribDivisor(P,A),G[P]=A)}function v(){let P=r.newAttributes,A=r.enabledAttributes;for(let B=0,N=A.length;B<N;B++)A[B]!==P[B]&&(i.disableVertexAttribArray(B),A[B]=0)}function b(P,A,B,N,G,q,z){z===!0?i.vertexAttribIPointer(P,A,B,G,q):i.vertexAttribPointer(P,A,B,N,G,q)}function M(P,A,B,N){_();let G=N.attributes,q=B.getAttributes(),z=A.defaultAttributeValues;for(let j in q){let R=q[j];if(R.location>=0){let F=G[j];if(F===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(F=P.instanceColor)),F!==void 0){let H=F.normalized,X=F.itemSize,oe=e.get(F);if(oe===void 0)continue;let W=oe.buffer,Y=oe.type,ae=oe.bytesPerElement,ee=Y===i.INT||Y===i.UNSIGNED_INT||F.gpuType===Wl;if(F.isInterleavedBufferAttribute){let V=F.data,te=V.isInterleavedBuffer===!0?V.stride:V.itemSize,Ae=F.offset;if(V.isInstancedInterleavedBuffer||V.isInstancedBufferAttribute){for(let he=0;he<R.locationSize;he++)g(R.location+he,V.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let he=0;he<R.locationSize;he++)p(R.location+he);i.bindBuffer(i.ARRAY_BUFFER,W);for(let he=0;he<R.locationSize;he++)b(R.location+he,X/R.locationSize,Y,H,te*ae,(Ae+X/R.locationSize*he)*ae,ee)}else{if(F.isInstancedBufferAttribute){for(let V=0;V<R.locationSize;V++)g(R.location+V,F.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let V=0;V<R.locationSize;V++)p(R.location+V);i.bindBuffer(i.ARRAY_BUFFER,W);for(let V=0;V<R.locationSize;V++)b(R.location+V,X/R.locationSize,Y,H,X*ae,X/R.locationSize*V*ae,ee)}}else if(z!==void 0){let H=z[j];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(R.location,H);break;case 3:i.vertexAttrib3fv(R.location,H);break;case 4:i.vertexAttrib4fv(R.location,H);break;default:i.vertexAttrib1fv(R.location,H)}}}}v()}function E(){I();for(let P in n){let A=n[P];for(let B in A){let N=A[B];for(let G in N){let q=N[G];for(let z in q)h(q[z].object),delete q[z];delete N[G]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let A=n[P.id];for(let B in A){let N=A[B];for(let G in N){let q=N[G];for(let z in q)h(q[z].object),delete q[z];delete N[G]}}delete n[P.id]}function x(P){for(let A in n){let B=n[A];for(let N in B){let G=B[N];if(G[P.id]===void 0)continue;let q=G[P.id];for(let z in q)h(q[z].object),delete q[z];delete G[P.id]}}}function y(P){for(let A in n){let B=n[A],N=P.isInstancedMesh===!0?P.id:0,G=B[N];if(G!==void 0){for(let q in G){let z=G[q];for(let j in z)h(z[j].object),delete z[j];delete G[q]}delete B[N],Object.keys(B).length===0&&delete n[A]}}}function I(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Cv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Iv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Kn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let y=x===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Nn&&x!==zn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:E,samples:T}}function Pv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ni,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,b=v*4,M=g.clippingState||null;l.value=M,M=h(m,f,b,d);for(let E=0;E!==b;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,M=d;b!==_;++b,M+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var wa=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Wi});r.uniforms.tEquirect.value=t;let o=new st(s,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=en),new Kr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Vp=256,Lv=3,Nv=20,fm=256,dm=16,Dv=3,Uv=new U,Fv=new Re,io=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kr(1,10,null),this._boxMesh=new st(new Dt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Uv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Fv));let p=new Kr(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Vp,wu(e))}_fromTexture(e,t){e.mapping===Zs||e.mapping===$r?this._setSize(e.image.length===0?Vp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Wp(e,!1,!1),n=Math.log2(e)-Lv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Wp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Zs||e.mapping===$r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ov(),this._integrationMaterial=Bv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/dm);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Dv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(fm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Wp(i,e,t){return new wa(i,{minFilter:Ln,generateMipmaps:e,type:sn,colorSpace:Tn,depthBuffer:t})}function Ta(i,e,t){return new Jt({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:nn,blending:Wi,depthTest:!1,depthWrite:!1})}function Ov(){return Ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fm}u

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
	`)}function Bv(){return Ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dm}},`

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
	`)}function kv(){return Ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nv}
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
	`)}function Xp(){return Ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function qp(){return Ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===jr||d===Hl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new wa(m.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===jr||d===Hl,_=d===Zs||d===$r;if(m||_){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new io(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new io(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===jr?f.mapping=Zs:d===Hl&&(f.mapping=$r),f}function l(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Gv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function Hv(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function u(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,b=p.count>=65535?Xo:Wo,M=new b(Math.ceil(v/3)*6,1),E=M.array;if(_!==null){let x=_.array;g=_.version;for(let y=0,I=0;y<v;y+=3){let C=x[y+0],P=x[y+1],A=x[y+2];E[I++]=C,E[I++]=P,E[I++]=P,E[I++]=A,E[I++]=A,E[I++]=C}}else{g=p.version;for(let x=0,y=0;x<v;x+=3){let I=x+0,C=x+1,P=x+2;E[y++]=I,E[y++]=C,E[y++]=C,E[y++]=P,E[y++]=P,E[y++]=I}}M.version=g;let T=r.get(m);T&&e.remove(T),r.set(m,M)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return r.get(m)}function d(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Vv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xv(i,e,t){let n=new WeakMap,s=new Tt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let I=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*E*4*u),x=new Go(T,M,E,u);x.type=zn,x.needsUpdate=!0;let y=b*4;for(let C=0;C<u;C++){let P=p[C],A=g[C],B=v[C],N=M*E*4*C;for(let G=0;G<P.count;G++){let q=G*y;d===!0&&(s.fromBufferAttribute(P,G),T[N+q+0]=s.x,T[N+q+1]=s.y,T[N+q+2]=s.z,T[N+q+3]=0),m===!0&&(s.fromBufferAttribute(A,G),T[N+q+4]=s.x,T[N+q+5]=s.y,T[N+q+6]=s.z,T[N+q+7]=0),_===!0&&(s.fromBufferAttribute(B,G),T[N+q+8]=s.x,T[N+q+9]=s.y,T[N+q+10]=s.z,T[N+q+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new Ce(M,E)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Yv={[ca]:"LINEAR_TONE_MAPPING",[ha]:"REINHARD_TONE_MAPPING",[ua]:"CINEON_TONE_MAPPING",[Ks]:"ACES_FILMIC_TONE_MAPPING",[da]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[fa]:"CUSTOM_TONE_MAPPING"};function Kv(i,e,t,n,s,r){let o=new Wt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new vt;h.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Je([0,2,0,0,2,0],2));let u=new Wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new st(h,u),d=new Hi(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,b=[],M=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<b.length;x++){let y=b[x];y.setSize&&y.setSize(E,T)}},this.setEffects=function(E){b=E,M=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new Wt(T,x,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(T,x,{type:sn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&b.some(I=>I.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Fi(T,x),r===!0&&(c.format=qi,c.type=$s)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let I=0;I<b.length;I++){let C=b[I];C.setSize&&C.setSize(T,x),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(p||E.toneMapping===pi&&b.length===0)return!1;if(v=T,T!==null){let x=T.width,y=T.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return M===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=pi,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=g,p=!0;let x=o,y=a;for(let I=0;I<b.length;I++){let C=b[I];C.enabled!==!1&&(C.render(E,y,x,T),C.needsSwap!==!1&&(x=y,y=y===a?l:a))}if(m!==E.outputColorSpace||_!==E.toneMapping){m=E.outputColorSpace,_=E.toneMapping,u.defines={},nt.getTransfer(m)===pt&&(u.defines.SRGB_TRANSFER="");let I=Yv[_];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(f,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var pm=new Ot,mm=new Fi(1,1),gm=new Jo(1),xm=new Go,_m=new Al,vm=new Zo,Yp=[],Kp=[],Zp=new Float32Array(16),Jp=new Float32Array(9),$p=new Float32Array(4);function so(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yp[s];if(r===void 0&&(r=new Float32Array(s),Yp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fc(i,e){let t=Kp[e];t===void 0&&(t=new Int32Array(e),Kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function Qv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;$p.set(n),i.uniformMatrix2fv(this.addr,!1,$p),on(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Jp.set(n),i.uniformMatrix3fv(this.addr,!1,Jp),on(t,n)}}function ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Zp.set(n),i.uniformMatrix4fv(this.addr,!1,Zp),on(t,n)}}function ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function Oc(i){return i.version===0&&(i.compareFunction=yu,i.needsUpdate=!0),i}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Oc(mm):r=pm,t.setTexture2D(e||r,s)}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_m,s)}function fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Oc(gm):r=vm,t.setTextureCube(e||r,s)}function dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xm,s)}function py(i){switch(i){case 5126:return Zv;case 35664:return Jv;case 35665:return $v;case 35666:return jv;case 35674:return Qv;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return dy}}function my(i,e){i.uniform1fv(this.addr,e)}function gy(i,e){let t=so(e,this.size,2);i.uniform2fv(this.addr,t)}function xy(i,e){let t=so(e,this.size,3);i.uniform3fv(this.addr,t)}function _y(i,e){let t=so(e,this.size,4);i.uniform4fv(this.addr,t)}function vy(i,e){let t=so(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yy(i,e){let t=so(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function My(i,e){let t=so(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sy(i,e){i.uniform1iv(this.addr,e)}function by(i,e){i.uniform2iv(this.addr,e)}function wy(i,e){i.uniform3iv(this.addr,e)}function Ty(i,e){i.uniform4iv(this.addr,e)}function Ay(i,e){i.uniform1uiv(this.addr,e)}function Ey(i,e){i.uniform2uiv(this.addr,e)}function Ry(i,e){i.uniform3uiv(this.addr,e)}function Cy(i,e){i.uniform4uiv(this.addr,e)}function Iy(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Oc(mm):o=pm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Py(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_m,r[o])}function Ly(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Oc(gm):o=vm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ny(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xm,r[o])}function Dy(i){switch(i){case 5126:return my;case 35664:return gy;case 35665:return xy;case 35666:return _y;case 35674:return vy;case 35675:return yy;case 35676:return My;case 5124:case 35670:return Sy;case 35667:case 35671:return by;case 35668:case 35672:return wy;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ey;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Ny}}var Bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=py(t.type)}},ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dy(t.type)}},zu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function jp(i,e){i.seq.push(e),i.map[e.id]=e}function Uy(i,e,t){let n=i.name,s=n.length;for(Fu.lastIndex=0;;){let r=Fu.exec(n),o=Fu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jp(t,c===void 0?new Bu(a,i,e):new ku(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new zu(a),jp(t,u)),t=u}}}var no=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Uy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fy=37297,Oy=0;function By(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var em=new Ke;function ky(i){nt._getMatrix(em,nt.workingColorSpace,i);let e=`mat3( ${em.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case ko:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+By(i.getShaderSource(e),a)}else return r}function zy(i,e){let t=ky(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Gy={[ca]:"Linear",[ha]:"Reinhard",[ua]:"Cineon",[Ks]:"ACESFilmic",[da]:"AgX",[pa]:"Neutral",[fa]:"Custom"};function Hy(i,e){let t=Gy[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dc=new U;function Vy(){nt.getLuminanceCoefficients(Dc);let i=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function Xy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ba(i){return i!==""}function nm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function im(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(i){return i.replace(Yy,Ky)}function Ky(i,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gu(t)}var Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(i){return i.replace(Zy,Jy)}function Jy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var $y={[qs]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function jy(i){return $y[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qy={[$r]:"ENVMAP_MODE_REFRACTION"};function eM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tM={[lu]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function nM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tM[i.combine]||"ENVMAP_BLENDING_NONE"}function iM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=eM(t),u=nM(t),f=Wy(t),d=Xy(r),m=s.createProgram(),_,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ba).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(_=[rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?rt.tonemapping_pars_fragment:"",t.toneMapping!==pi?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,zy("linearToOutputTexel",t.outputColorSpace),Vy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),o=Gu(o),o=nm(o,t),o=im(o,t),a=Gu(a),a=nm(a,t),a=im(a,t),o=sm(o),a=sm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,b=g+p+a,M=Qp(s,s.VERTEX_SHADER,v),E=Qp(s,s.FRAGMENT_SHADER,b);s.attachShader(m,M),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",A=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(E)||"",N=P.trim(),G=A.trim(),q=B.trim(),z=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,E);else{let R=tm(s,M,"vertex"),F=tm(s,E,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+R+`
`+F)}else N!==""?ke("WebGLProgram: Program Info Log:",N):(G===""||q==="")&&(j=!1);j&&(C.diagnostics={runnable:z,programLog:N,vertexShader:{log:G,prefix:_},fragmentShader:{log:q,prefix:p}})}s.deleteShader(M),s.deleteShader(E),x=new no(s,m),y=qy(s,m)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,Fy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}var sM=0,Hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vu(e),t.set(e,n)),n}},Vu=class{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}};function rM(i){return i===hs||i===va||i===ya}function oM(i,e,t,n,s,r){let o=new Ho,a=new Hu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,I,C,P,A){let B=C.fog,N=P.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||G,q),j=f[x.type],R=n.precision;x.precision!==null&&(R=n.getMaxPrecision(x.precision),R!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",R,"instead."));let F=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,H=F!==void 0?F.length:0,X=0;N.morphAttributes.position!==void 0&&(X=1),N.morphAttributes.normal!==void 0&&(X=2),N.morphAttributes.color!==void 0&&(X=3);let oe,W,Y,ae;if(j){let Se=xi[j];oe=Se.vertexShader,W=Se.fragmentShader}else{oe=x.vertexShader,W=x.fragmentShader;let Se=a.getVertexShaderStage(x),bt=a.getFragmentShaderStage(x);a.update(x,Se,bt),Y=Se.id,ae=bt.id}let ee=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),te=P.isInstancedMesh===!0,Ae=P.isBatchedMesh===!0,he=!!x.map,$e=!!x.matcap,qe=!!z,Ee=qe&&z.isPMREMTexture===!0,Ue=!!x.aoMap,Oe=!!x.lightMap,St=!!x.bumpMap&&x.wireframe===!1,Te=!!x.normalMap,Ie=!!x.displacementMap,Ve=!!x.emissiveMap,ze=!!x.metalnessMap,ht=!!x.roughnessMap,Nt=x.anisotropy>0,k=x.clearcoat>0,jt=x.diffuseRoughness>0,Qe=x.dispersion>0,dt=x.retroreflectivity>0,ce=x.iridescence>0,gt=x.sheen>0,Xe=x.transmission>0,je=Nt&&!!x.anisotropyMap,L=k&&!!x.clearcoatMap,S=k&&!!x.clearcoatNormalMap,Z=k&&!!x.clearcoatRoughnessMap,le=jt&&!!x.diffuseRoughnessMap,re=ce&&!!x.iridescenceMap,de=ce&&!!x.iridescenceThicknessMap,ve=gt&&!!x.sheenColorMap,ne=gt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,ge=!!x.specularColorMap,D=!!x.specularIntensityMap,se=Xe&&!!x.transmissionMap,Q=Xe&&!!x.thicknessMap,xe=!!x.gradientMap,fe=!!x.alphaMap,pe=x.alphaTest>0,Ge=!!x.alphaHash,it=!!x.extensions,ue=pi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ue=i.toneMapping);let We=Ee?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,tt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:W,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:R,batching:Ae,batchingColor:Ae&&P._colorsTexture!==null,instancing:te,instancingColor:te&&P.instanceColor!==null,instancingMorph:te&&P.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:he,matcap:$e,envMap:qe,envMapMode:qe&&z.mapping,envMapPMREM:Ee,envMapMaxLod:Ee?We.length-1:null,envMapSize:Ee?We[0].width:null,aoMap:Ue,lightMap:Oe,bumpMap:St,normalMap:Te,displacementMap:Ie,emissiveMap:Ve,normalMapObjectSpace:Te&&x.normalMapType===Cp,normalMapTangentSpace:Te&&x.normalMapType===Cc,packedNormalMap:Te&&x.normalMapType===Cc&&rM(x.normalMap.format),metalnessMap:ze,roughnessMap:ht,anisotropy:Nt,anisotropyMap:je,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:S,clearcoatRoughnessMap:Z,diffuseRoughness:jt,diffuseRoughnessMap:le,dispersion:Qe,retroreflection:dt,iridescence:ce,iridescenceMap:re,iridescenceThicknessMap:de,sheen:gt,sheenColorMap:ve,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:ge,specularIntensityMap:D,transmission:Xe,transmissionMap:se,thicknessMap:Q,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Jr&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:pe,alphaHash:Ge,combine:x.combine,mapUv:he&&d(x.map.channel),aoMapUv:Ue&&d(x.aoMap.channel),lightMapUv:Oe&&d(x.lightMap.channel),bumpMapUv:St&&d(x.bumpMap.channel),normalMapUv:Te&&d(x.normalMap.channel),displacementMapUv:Ie&&d(x.displacementMap.channel),emissiveMapUv:Ve&&d(x.emissiveMap.channel),metalnessMapUv:ze&&d(x.metalnessMap.channel),roughnessMapUv:ht&&d(x.roughnessMap.channel),anisotropyMapUv:je&&d(x.anisotropyMap.channel),clearcoatMapUv:L&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&d(x.sheenRoughnessMap.channel),specularMapUv:ie&&d(x.specularMap.channel),specularColorMapUv:ge&&d(x.specularColorMap.channel),specularIntensityMapUv:D&&d(x.specularIntensityMap.channel),transmissionMapUv:se&&d(x.transmissionMap.channel),thicknessMapUv:Q&&d(x.thicknessMap.channel),alphaMapUv:fe&&d(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Te||Nt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(he||fe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:X,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:A.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function _(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(y,x),g(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let y=f[x.type],I;if(y){let C=xi[y];I=oi.clone(C.uniforms)}else I=x.uniforms;return I}function b(x,y){let I=h.get(y);return I!==void 0?++I.usedTimes:(I=new iM(i,y,x,s),c.push(I),h.set(y,I)),I}function M(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:T}}function aM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function am(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,_,p,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),e++,v}function l(f,d,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let b=a(f,d,m,_,p,g);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function c(f,d,m,_,p,g){let v=a(f,d,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||lM),n.length>1&&n.sort(d||om),s.length>1&&s.sort(d||om)}function u(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function cM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new am,i.set(n,[o])):s>=r.length?(o=new am,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function uM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fM=0;function dM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pM(i){let e=new hM,t=uM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Ye,o=new Ye;function a(c){let h=0,u=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,_=0,p=0,g=0,v=0,b=0,M=0,E=0,T=0,x=0,y=0,I=0,C=0;c.sort(dM);for(let A=0,B=c.length;A<B;A++){let N=c[A],G=N.color,q=N.intensity,z=N.distance,j=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===hs?j=N.shadow.map.texture:j=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=G.r*q,u+=G.g*q,f+=G.b*q;else if(N.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(N.sh.coefficients[R],q);C++}else if(N.isSunLight){let R=e.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let F=N.shadow,H=t.get(N);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize.copy(F.mapSize).multiply(F.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=j;let X=F.getViewportCount();for(let oe=0;oe<X;oe++)n.sunShadowMatrix[_+oe]=F.getMatrix(oe),n.sunShadowCascade[_+oe]=F._cascadeData[oe];_+=X,m++}n.sun[d]=R,d++}else if(N.isDirectionalLight){let R=e.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let F=N.shadow,H=t.get(N);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=N.shadow.matrix,E++}n.directional[p]=R,p++}else if(N.isSpotLight){let R=e.get(N);R.position.setFromMatrixPosition(N.matrixWorld),R.color.copy(G).multiplyScalar(q),R.distance=z,R.coneCos=Math.cos(N.angle),R.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),R.decay=N.decay,n.spot[v]=R;let F=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,F.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[v]=F.matrix,N.castShadow){let H=t.get(N);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=j,x++}v++}else if(N.isRectAreaLight){let R=e.get(N);R.color.copy(G).multiplyScalar(q),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=R,b++}else if(N.isPointLight){let R=e.get(N);if(R.color.copy(N.color).multiplyScalar(N.intensity),R.distance=N.distance,R.decay=N.decay,N.castShadow){let F=N.shadow,H=t.get(N);H.shadowIntensity=F.intensity,H.shadowBias=F.bias,H.shadowNormalBias=F.normalBias,H.shadowRadius=F.radius,H.shadowMapSize=F.mapSize,H.shadowCameraNear=F.camera.near,H.shadowCameraFar=F.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=N.shadow.matrix,T++}n.point[g]=R,g++}else if(N.isHemisphereLight){let R=e.get(N);R.skyColor.copy(N.color).multiplyScalar(q),R.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[M]=R,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==M||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==x||P.numSpotMaps!==y||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,P.sunLength=d,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=M,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=x,P.numSpotMaps=y,P.numLightProbes=C,n.version=fM++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let M=c[v];if(M.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(M.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function lm(i){let e=new pM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new lm(i),e.set(s,[a])):r>=o.length?(a=new lm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
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
}`,_M=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],vM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],cm=new Ye,Sa=new U,Ou=new U;function yM(i,e,t){let n=new rs,s=new Ce,r=new Ce,o=new Tt,a=new Xr,l=new Pl,c={},h=t.maxTextureSize,u={[di]:nn,[nn]:di,[Pn]:Pn},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:gM,fragmentShader:xM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new st(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let g=this.type;this.render=function(T,x,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===ip&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Wi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let B=g!==this.type;B&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=T.length;N<G;N++){let q=T[N],z=q.shadow;if(z===void 0){ke("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let j=z.getFrameExtents();s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y));let R=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=R,z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zr){if(q.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Wt(s.x,s.y,{format:hs,type:sn,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Fi(s.x,s.y,zn),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Li,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt}else q.isPointLight?(z.map=new wa(s.x),z.map.depthTexture=new Jo(s.x,ri)):(z.map=new Wt(s.x,s.y),z.map.depthTexture=new Fi(s.x,s.y,ri)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Li,this.type===qs?(z.map.depthTexture.compareFunction=R?vu:_u,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let F=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,y);let H=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let X=0;X<F;X++){let oe=z.getCamera(X);if(q.isPointLight){let W=z.camera,Y=z.matrix,ae=q.distance||W.far;ae!==W.far&&(W.far=ae,W.updateProjectionMatrix()),Sa.setFromMatrixPosition(q.matrixWorld),W.position.copy(Sa),Ou.copy(W.position),Ou.add(_M[X]),W.up.copy(vM[X]),W.lookAt(Ou),W.updateMatrixWorld(),Y.makeTranslation(-Sa.x,-Sa.y,-Sa.z),cm.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(cm,W.coordinateSystem,W.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,X),i.clear();else{X===0&&(i.setRenderTarget(z.map),i.clear());let W=z.getViewport(X);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),A.viewport(o)}n=z.getFrustum(X),M(x,y,oe,q,H,this.type)}z.isPointLightShadow!==!0&&this.type===Zr&&v(z,y),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,C,P)};function v(T,x){let y=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Wt(s.x,s.y,{format:hs,type:sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,y,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,y,d,_,null)}function b(T,x,y,I){let C=null,P=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)C=P;else if(C=y.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let A=C.uuid,B=x.uuid,N=c[A];N===void 0&&(N={},c[A]=N);let G=N[B];G===void 0&&(G=C.clone(),N[B]=G,x.addEventListener("dispose",E)),C=G}if(C.visible=x.visible,C.wireframe=x.wireframe,I===Zr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let A=i.properties.get(C);A.light=y}return C}function M(T,x,y,I,C,P){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Zr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let N=e.update(T),G=T.material;if(Array.isArray(G)){let q=N.groups;for(let z=0,j=q.length;z<j;z++){let R=q[z],F=G[R.materialIndex];if(F&&F.visible){let H=b(T,F,I,P);T.onBeforeShadow(i,T,x,y,N,H,R),i.renderBufferDirect(y,null,N,H,T,R),T.onAfterShadow(i,T,x,y,N,H,R)}}}else if(G.visible){let q=b(T,G,I,P);T.onBeforeShadow(i,T,x,y,N,q,null),i.renderBufferDirect(y,null,N,q,T,null),T.onAfterShadow(i,T,x,y,N,q,null)}}let B=T.children;for(let N=0,G=B.length;N<G;N++)M(B[N],x,y,I,C,P)}function E(T){T.target.removeEventListener("dispose",E);for(let y in c){let I=c[y],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function MM(i,e){function t(){let D=!1,se=new Tt,Q=null,xe=new Tt(0,0,0,0);return{setMask:function(fe){Q!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){D=fe},setClear:function(fe,pe,Ge,it,ue){ue===!0&&(fe*=it,pe*=it,Ge*=it),se.set(fe,pe,Ge,it),xe.equals(se)===!1&&(i.clearColor(fe,pe,Ge,it),xe.copy(se))},reset:function(){D=!1,Q=null,xe.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,Q=null,xe=null,fe=null;return{setReversed:function(pe){if(se!==pe){let Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),se=pe;let it=fe;fe=null,this.setClear(it)}},getReversed:function(){return se},setTest:function(pe){pe?V(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(pe){Q!==pe&&!D&&(i.depthMask(pe),Q=pe)},setFunc:function(pe){if(se&&(pe=kp[pe]),xe!==pe){switch(pe){case xl:i.depthFunc(i.NEVER);break;case _l:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=pe}},setLocked:function(pe){D=pe},setClear:function(pe){fe!==pe&&(fe=pe,se&&(pe=1-pe),i.clearDepth(pe))},reset:function(){D=!1,Q=null,xe=null,fe=null,se=!1}}}function s(){let D=!1,se=null,Q=null,xe=null,fe=null,pe=null,Ge=null,it=null,ue=null;return{setTest:function(We){D||(We?V(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(We){se!==We&&!D&&(i.stencilMask(We),se=We)},setFunc:function(We,tt,Se){(Q!==We||xe!==tt||fe!==Se)&&(i.stencilFunc(We,tt,Se),Q=We,xe=tt,fe=Se)},setOp:function(We,tt,Se){(pe!==We||Ge!==tt||it!==Se)&&(i.stencilOp(We,tt,Se),pe=We,Ge=tt,it=Se)},setLocked:function(We){D=We},setClear:function(We){ue!==We&&(i.clearStencil(We),ue=We)},reset:function(){D=!1,se=null,Q=null,xe=null,fe=null,pe=null,Ge=null,it=null,ue=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,M=null,E=null,T=null,x=null,y=new Re(0,0,0),I=0,C=!1,P=null,A=null,B=null,N=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,j=0,R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(R)[1]),z=j>=1):R.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),z=j>=2);let F=null,H={},X=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),W=new Tt().fromArray(X),Y=new Tt().fromArray(oe);function ae(D,se,Q,xe){let fe=new Uint8Array(4),pe=i.createTexture();i.bindTexture(D,pe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Q;Ge++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(se+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return pe}let ee={};ee[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(Nr),St(!1),Te(iu),V(i.CULL_FACE),Ue(Wi);function V(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function te(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ae(D,se){return f[D]!==se?(i.bindFramebuffer(D,se),f[D]=se,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=se),!0):!1}function he(D,se){let Q=m,xe=!1;if(D){Q=d.get(se),Q===void 0&&(Q=[],d.set(se,Q));let fe=D.textures;if(Q.length!==fe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ge=fe.length;pe<Ge;pe++)Q[pe]=i.COLOR_ATTACHMENT0+pe;Q.length=fe.length,xe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,xe=!0);xe&&i.drawBuffers(Q)}function $e(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let qe={[Ys]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[op]:i.FUNC_REVERSE_SUBTRACT};qe[ap]=i.MIN,qe[lp]=i.MAX;let Ee={[cp]:i.ZERO,[hp]:i.ONE,[up]:i.SRC_COLOR,[ou]:i.SRC_ALPHA,[xp]:i.SRC_ALPHA_SATURATE,[mp]:i.DST_COLOR,[dp]:i.DST_ALPHA,[fp]:i.ONE_MINUS_SRC_COLOR,[au]:i.ONE_MINUS_SRC_ALPHA,[gp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[yp]:i.CONSTANT_ALPHA,[Mp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(D,se,Q,xe,fe,pe,Ge,it,ue,We){if(D===Wi){p===!0&&(te(i.BLEND),p=!1);return}if(p===!1&&(V(i.BLEND),p=!0),D!==sp){if(D!==g||We!==C){if((v!==Ys||E!==Ys)&&(i.blendEquation(i.FUNC_ADD),v=Ys,E=Ys),We)switch(D){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case su:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}b=null,M=null,T=null,x=null,y.set(0,0,0),I=0,g=D,C=We}return}fe=fe||se,pe=pe||Q,Ge=Ge||xe,(se!==v||fe!==E)&&(i.blendEquationSeparate(qe[se],qe[fe]),v=se,E=fe),(Q!==b||xe!==M||pe!==T||Ge!==x)&&(i.blendFuncSeparate(Ee[Q],Ee[xe],Ee[pe],Ee[Ge]),b=Q,M=xe,T=pe,x=Ge),(it.equals(y)===!1||ue!==I)&&(i.blendColor(it.r,it.g,it.b,ue),y.copy(it),I=ue),g=D,C=!1}function Oe(D,se){D.side===Pn?te(i.CULL_FACE):V(i.CULL_FACE);let Q=D.side===nn;se&&(Q=!Q),St(Q),D.blending===Jr&&D.transparent===!1?Ue(Wi):Ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let xe=D.stencilWrite;a.setTest(xe),xe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function Te(D){D!==tp?(V(i.CULL_FACE),D!==A&&(D===iu?i.cullFace(i.BACK):D===np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),A=D}function Ie(D){D!==B&&(z&&i.lineWidth(D),B=D)}function Ve(D,se,Q){D?(V(i.POLYGON_OFFSET_FILL),(N!==se||G!==Q)&&(N=se,G=Q,o.getReversed()&&(se=-se,Q=-Q),i.polygonOffset(se,Q))):te(i.POLYGON_OFFSET_FILL)}function ze(D){D?V(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function ht(D){D===void 0&&(D=i.TEXTURE0+q-1),F!==D&&(i.activeTexture(D),F=D)}function Nt(D,se,Q){Q===void 0&&(F===null?Q=i.TEXTURE0+q-1:Q=F);let xe=H[Q];xe===void 0&&(xe={type:void 0,texture:void 0},H[Q]=xe),(xe.type!==D||xe.texture!==se)&&(F!==Q&&(i.activeTexture(Q),F=Q),i.bindTexture(D,se||ee[D]),xe.type=D,xe.texture=se)}function k(){let D=H[F];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Qe(){try{i.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function dt(){try{i.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function ce(){try{i.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function je(){try{i.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function L(){try{i.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function S(){try{i.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Z(){try{i.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function le(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function re(D,se){u[D]!==se&&(i.pixelStorei(D,se),u[D]=se)}function de(D){W.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function ve(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function ne(D,se){let Q=c.get(se);Q===void 0&&(Q=new WeakMap,c.set(se,Q));let xe=Q.get(D);xe===void 0&&(xe=i.getUniformBlockIndex(se,D.name),i.uniformBlockBinding(se,xe,xe),Q.set(D,xe))}function ie(D,se,Q){let fe=c.get(se).get(D);l[fe]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,fe,Q),l[fe]=Q)}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},F=null,H={},f={},l={},d=new WeakMap,m=[],_=null,p=!1,g=null,v=null,b=null,M=null,E=null,T=null,x=null,y=new Re(0,0,0),I=0,C=!1,P=null,A=null,B=null,N=null,G=null,W.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:te,bindFramebuffer:Ae,drawBuffers:he,useProgram:$e,setBlending:Ue,setMaterial:Oe,setFlipSided:St,setCullFace:Te,setLineWidth:Ie,setPolygonOffset:Ve,setScissorTest:ze,activeTexture:ht,bindTexture:Nt,unbindTexture:k,compressedTexImage2D:jt,compressedTexImage3D:Qe,texImage2D:S,texImage3D:Z,pixelStorei:re,getParameter:le,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:je,texStorage3D:L,texSubImage2D:dt,texSubImage3D:ce,compressedTexSubImage2D:gt,compressedTexSubImage3D:Xe,scissor:de,viewport:ve,reset:ge}}function SM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,u=new Set,f,d=new WeakMap,m=new Set,_=new FinalizationRegistry(L=>m.delete(L)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return p?new OffscreenCanvas(L,S):Fr("canvas")}function v(L,S,Z){let le=1,re=je(L);if((re.width>Z||re.height>Z)&&(le=Z/Math.max(re.width,re.height)),le<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let de=Math.floor(le*re.width),ve=Math.floor(le*re.height);f===void 0&&(f=g(de,ve));let ne=S?g(de,ve):f;return ne.width=de,ne.height=ve,ne.getContext("2d").drawImage(L,0,0,de,ve),ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+ve+")."),ne}else return"data"in L&&ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function b(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(L,S,Z,le,re,de=!1){if(L!==null){if(i[L]!==void 0)return i[L];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ve;le&&(ve=e.get("EXT_texture_norm16"),ve||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===i.RED&&(Z===i.FLOAT&&(ne=i.R32F),Z===i.HALF_FLOAT&&(ne=i.R16F),Z===i.UNSIGNED_BYTE&&(ne=i.R8),Z===i.UNSIGNED_SHORT&&ve&&(ne=ve.R16_EXT),Z===i.SHORT&&ve&&(ne=ve.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ne=i.R8UI),Z===i.UNSIGNED_SHORT&&(ne=i.R16UI),Z===i.UNSIGNED_INT&&(ne=i.R32UI),Z===i.BYTE&&(ne=i.R8I),Z===i.SHORT&&(ne=i.R16I),Z===i.INT&&(ne=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(ne=i.RG32F),Z===i.HALF_FLOAT&&(ne=i.RG16F),Z===i.UNSIGNED_BYTE&&(ne=i.RG8),Z===i.UNSIGNED_SHORT&&ve&&(ne=ve.RG16_EXT),Z===i.SHORT&&ve&&(ne=ve.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ne=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ne=i.RG16UI),Z===i.UNSIGNED_INT&&(ne=i.RG32UI),Z===i.BYTE&&(ne=i.RG8I),Z===i.SHORT&&(ne=i.RG16I),Z===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),Z===i.UNSIGNED_INT&&(ne=i.RGB32UI),Z===i.BYTE&&(ne=i.RGB8I),Z===i.SHORT&&(ne=i.RGB16I),Z===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ne=i.RGBA32UI),Z===i.BYTE&&(ne=i.RGBA8I),Z===i.SHORT&&(ne=i.RGBA16I),Z===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&(Z===i.UNSIGNED_SHORT&&ve&&(ne=ve.RGB16_EXT),Z===i.SHORT&&ve&&(ne=ve.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){let ie=de?ko:nt.getTransfer(re);Z===i.FLOAT&&(ne=i.RGBA32F),Z===i.HALF_FLOAT&&(ne=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ne=ie===pt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&ve&&(ne=ve.RGBA16_EXT),Z===i.SHORT&&ve&&(ne=ve.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(L,S){let Z;return L?S===null||S===ri||S===$s?Z=i.DEPTH24_STENCIL8:S===zn?Z=i.DEPTH32F_STENCIL8:S===eo&&(Z=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===$s?Z=i.DEPTH_COMPONENT24:S===zn?Z=i.DEPTH_COMPONENT32F:S===eo&&(Z=i.DEPTH_COMPONENT16),Z}function y(L,S){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Vt&&L.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function I(L){let S=new WeakRef(L);n.get(L).__ref=S,m.add(S),_.register(L,S,S)}function C(L){let S=n.get(L).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function P(L){B(L.target)}function A(L){N(L.target)}function B(L){L.removeEventListener("dispose",P),C(L),q(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function N(L){L.removeEventListener("dispose",A),C(L),j(L)}function G(){for(let L of m){let S=L.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):B(S))}m.clear(),u.clear()}function q(L){let S=n.get(L);if(S.__webglInit===void 0)return;let Z=L.source,le=d.get(Z);if(le){let re=le[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(L),Object.keys(le).length===0&&d.delete(Z)}n.remove(L)}function z(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let Z=L.source,le=d.get(Z);delete le[S.__cacheKey],o.memory.textures--}function j(L){let S=n.get(L);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Z=L.depthTexture;if(Z&&Z.renderTarget===L&&B(Z),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let de=0;de<S.__webglFramebuffer[re].length;de++)i.deleteFramebuffer(S.__webglFramebuffer[re][de]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let le=L.textures;for(let re=0,de=le.length;re<de;re++){let ve=n.get(le[re]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(le[re])}n.remove(L)}let R=0;function F(){R=0}function H(){return R}function X(L){R=L}function oe(){let L=R;return L>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function W(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.mipmapsAutoUpdate),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function Y(L,S){let Z=n.get(L);if(L.isVideoTexture&&gt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let le=L.image;if(le===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(Z,L,S);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function ae(L,S){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Oe(Z,L,S);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function ee(L,S){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Oe(Z,L,S);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function V(L,S){let Z=n.get(L);if(L.version>0&&Z.__version!==L.version){St(Z,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}let te={[ii]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},Ae={[Vt]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},he={[Pp]:i.NEVER,[yu]:i.ALWAYS,[Lp]:i.LESS,[_u]:i.LEQUAL,[Np]:i.EQUAL,[vu]:i.GEQUAL,[Dp]:i.GREATER,[Up]:i.NOTEQUAL};function $e(L,S){if(S.type===zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===Qr||S.magFilter===Js||S.magFilter===Ln||S.minFilter===en||S.minFilter===Qr||S.minFilter===Js||S.minFilter===Ln)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,te[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,te[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,te[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Ae[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==Js&&S.minFilter!==Ln||S.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qe(L,S){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",P),I(S));let le=S.source,re=d.get(le);re===void 0&&(re={},d.set(le,re));let de=W(S);if(de!==L.__cacheKey){re[de]===void 0&&(re[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),re[de].usedTimes++;let ve=re[L.__cacheKey];ve!==void 0&&(re[L.__cacheKey].usedTimes--,ve.usedTimes===0&&z(S)),L.__cacheKey=de,L.__webglTexture=re[de].texture}return Z}function Ee(L,S,Z){return Math.floor(Math.floor(L/Z)/S)}function Ue(L,S,Z,le){let de=L.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Z,le,S.data);else{de.sort((D,se)=>D.start-se.start);let ve=0;for(let D=1;D<de.length;D++){let se=de[ve],Q=de[D],xe=se.start+se.count,fe=Ee(Q.start,S.width,4),pe=Ee(se.start,S.width,4);Q.start<=xe+1&&fe===pe&&Ee(Q.start+Q.count-1,S.width,4)===fe?se.count=Math.max(se.count,Q.start+Q.count-se.start):(++ve,de[ve]=Q)}de.length=ve+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let D=0,se=de.length;D<se;D++){let Q=de[D],xe=Math.floor(Q.start/4),fe=Math.ceil(Q.count/4),pe=xe%S.width,Ge=Math.floor(xe/S.width),it=fe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,pe,Ge,it,ue,Z,le,S.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function Oe(L,S,Z){let le=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(le=i.TEXTURE_3D);let re=qe(L,S),de=S.source;t.bindTexture(le,L.__webglTexture,i.TEXTURE0+Z);let ve=n.get(de);if(de.version!==ve.__version||re===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let ue=nt.getPrimaries(nt.workingColorSpace),We=S.colorSpace===Gn?null:nt.getPrimaries(S.colorSpace),tt=S.colorSpace===Gn||ue===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=v(S.image,!1,s.maxTextureSize);ie=Xe(S,ie);let ge=r.convert(S.format,S.colorSpace),D=r.convert(S.type),se=T(S.internalFormat,ge,D,S.normalized,S.colorSpace,S.isVideoTexture);$e(le,S);let Q,xe=S.mipmaps,fe=S.isVideoTexture!==!0,pe=ve.__version===void 0||re===!0,Ge=de.dataReady,it=y(S,ie);if(S.isDepthTexture)se=x(S.format===qi,S.type),pe&&(fe?t.texStorage2D(i.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,ge,D,null));else if(S.isDataTexture)if(xe.length>0){fe&&pe&&t.texStorage2D(i.TEXTURE_2D,it,se,xe[0].width,xe[0].height);for(let ue=0,We=xe.length;ue<We;ue++)Q=xe[ue],fe?Ge&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Q.width,Q.height,ge,D,Q.data):t.texImage2D(i.TEXTURE_2D,ue,se,Q.width,Q.height,0,ge,D,Q.data);S.generateMipmaps=!1}else fe?(pe&&t.texStorage2D(i.TEXTURE_2D,it,se,ie.width,ie.height),Ge&&Ue(S,ie,ge,D)):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,ge,D,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){fe&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,se,xe[0].width,xe[0].height,ie.depth);for(let ue=0,We=xe.length;ue<We;ue++)if(Q=xe[ue],S.format!==Kn)if(ge!==null)if(fe){if(Ge)if(S.layerUpdates.size>0){let tt=Iu(Q.width,Q.height,S.format,S.type);for(let Se of S.layerUpdates){let bt=Q.data.subarray(Se*tt/Q.data.BYTES_PER_ELEMENT,(Se+1)*tt/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Se,Q.width,Q.height,1,ge,bt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Q.width,Q.height,ie.depth,ge,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,se,Q.width,Q.height,ie.depth,0,Q.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Q.width,Q.height,ie.depth,ge,D,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,se,Q.width,Q.height,ie.depth,0,ge,D,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{fe&&pe&&t.texStorage2D(i.TEXTURE_2D,it,se,xe[0].width,xe[0].height);for(let ue=0,We=xe.length;ue<We;ue++)Q=xe[ue],S.format!==Kn?ge!==null?fe?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Q.width,Q.height,ge,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,se,Q.width,Q.height,0,Q.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ge&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Q.width,Q.height,ge,D,Q.data):t.texImage2D(i.TEXTURE_2D,ue,se,Q.width,Q.height,0,ge,D,Q.data)}else if(S.isDataArrayTexture)if(fe){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,se,ie.width,ie.height,ie.depth),Ge)if(S.layerUpdates.size>0){let ue=Iu(ie.width,ie.height,S.format,S.type);for(let We of S.layerUpdates){let tt=ie.data.subarray(We*ue/ie.data.BYTES_PER_ELEMENT,(We+1)*ue/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,ie.width,ie.height,1,ge,D,tt)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,D,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,ge,D,ie.data);else if(S.isData3DTexture)fe?(pe&&t.texStorage3D(i.TEXTURE_3D,it,se,ie.width,ie.height,ie.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,D,ie.data)):t.texImage3D(i.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,ge,D,ie.data);else if(S.isFramebufferTexture){if(pe)if(fe)t.texStorage2D(i.TEXTURE_2D,it,se,ie.width,ie.height);else{let ue=ie.width,We=ie.height;for(let tt=0;tt<it;tt++)t.texImage2D(i.TEXTURE_2D,tt,se,ue,We,0,ge,D,null),ue>>=1,We>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),ie.parentNode!==ue){ue.appendChild(ie),u.add(S),ue.onpaint=We=>{let tt=We.changedElements;for(let Se of u)tt.includes(Se.image)&&(Se.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let tt=i.RGBA,Se=i.RGBA,bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Se,bt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(fe&&pe){let ue=je(xe[0]);t.texStorage2D(i.TEXTURE_2D,it,se,ue.width,ue.height)}for(let ue=0,We=xe.length;ue<We;ue++)Q=xe[ue],fe?Ge&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ge,D,Q):t.texImage2D(i.TEXTURE_2D,ue,se,ge,D,Q);S.generateMipmaps=!1}else if(fe){if(pe){let ue=je(ie);t.texStorage2D(i.TEXTURE_2D,it,se,ue.width,ue.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,D,ie)}else t.texImage2D(i.TEXTURE_2D,0,se,ge,D,ie);b(S)&&S.mipmapsAutoUpdate===!0&&M(le),ve.__version=de.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function St(L,S,Z){if(S.image.length!==6)return;let le=qe(L,S),re=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);let de=n.get(re);if(re.version!==de.__version||le===!0){t.activeTexture(i.TEXTURE0+Z);let ve=nt.getPrimaries(nt.workingColorSpace),ne=S.colorSpace===Gn?null:nt.getPrimaries(S.colorSpace),ie=S.colorSpace===Gn||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ge=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,se=[];for(let Se=0;Se<6;Se++)!ge&&!D?se[Se]=v(S.image[Se],!0,s.maxCubemapSize):se[Se]=D?S.image[Se].image:S.image[Se],se[Se]=Xe(S,se[Se]);let Q=se[0],xe=r.convert(S.format,S.colorSpace),fe=r.convert(S.type),pe=T(S.internalFormat,xe,fe,S.normalized,S.colorSpace),Ge=S.isVideoTexture!==!0,it=de.__version===void 0||le===!0,ue=re.dataReady,We=y(S,Q);$e(i.TEXTURE_CUBE_MAP,S);let tt;if(S.isDepthTexture){if(pe=x(S.format===qi,S.type),it)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,pe,Q.width,Q.height);else for(let Se=0;Se<6;Se++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,Q.width,Q.height,0,xe,fe,null)}else if(ge){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,pe,Q.width,Q.height);for(let Se=0;Se<6;Se++){tt=se[Se].mipmaps;for(let bt=0;bt<tt.length;bt++){let ln=tt[bt];S.format!==Kn?xe!==null?Ge?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt,0,0,ln.width,ln.height,xe,ln.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt,pe,ln.width,ln.height,0,ln.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt,0,0,ln.width,ln.height,xe,fe,ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt,pe,ln.width,ln.height,0,xe,fe,ln.data)}}}else{if(tt=S.mipmaps,Ge&&it){tt.length>0&&We++;let Se=je(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,pe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(D){Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,se[Se].width,se[Se].height,xe,fe,se[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,se[Se].width,se[Se].height,0,xe,fe,se[Se].data);for(let bt=0;bt<tt.length;bt++){let Ji=tt[bt].image[Se].image;Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt+1,0,0,Ji.width,Ji.height,xe,fe,Ji.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt+1,pe,Ji.width,Ji.height,0,xe,fe,Ji.data)}}else{Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,xe,fe,se[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,pe,xe,fe,se[Se]);for(let bt=0;bt<tt.length;bt++){let ln=tt[bt];Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt+1,0,0,xe,fe,ln.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,bt+1,pe,xe,fe,ln.image[Se])}}}b(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),de.__version=re.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Te(L,S,Z,le,re,de){let ve=r.convert(Z.format,Z.colorSpace),ne=r.convert(Z.type),ie=T(Z.internalFormat,ve,ne,Z.normalized,Z.colorSpace),ge=n.get(S),D=n.get(Z);if(D.__renderTarget=S,!ge.__hasExternalTextures){let se=Math.max(1,S.width>>de),Q=Math.max(1,S.height>>de);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,de,ie,se,Q,S.depth,0,ve,ne,null):t.texImage2D(re,de,ie,se,Q,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,re,D.__webglTexture,0,dt(S)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,re,D.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(L,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let le=S.depthTexture,re=le&&le.isDepthTexture?le.type:null,de=x(S.stencilBuffer,re),ve=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(S),de,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,L)}else{let le=S.textures;for(let re=0;re<le.length;re++){let de=le[re],ve=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),ie=T(de.internalFormat,ve,ne,de.normalized,de.colorSpace);ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(S),ie,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(S),ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(L,S,Z){let le=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(S.depthTexture);re.__renderTarget=S;let de=le?S.depthTexture.image[0]:S.depthTexture.image;(!re.__webglTexture||de.width!==S.width||de.height!==S.height)&&(de.width=S.width,de.height=S.height,S.depthTexture.needsUpdate=!0),le?V(S.depthTexture,0):Y(S.depthTexture,0);let ve=re.__webglTexture,ne=dt(S),ie=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ge=S.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Li)ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ie,ve,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ie,ve,0);else if(S.depthTexture.format===qi)ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ie,ve,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ie,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(L){let S=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let le=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),le){let re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,le.removeEventListener("dispose",re)};le.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=le}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let le=0;le<6;le++)Ve(S.__webglFramebuffer[le],L,le);else L.texture.mipmaps.length>0?Ve(S.__webglFramebuffer[0],L,0):Ve(S.__webglFramebuffer,L,0);else if(Z){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]===void 0)S.__webglDepthbuffer[le]=i.createRenderbuffer(),Ie(S.__webglDepthbuffer[le],L,!1);else{let re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ie(S.__webglDepthbuffer,L,!1);else{let re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(L,S,Z){let le=n.get(L);S!==void 0&&Te(le.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&ze(L)}function Nt(L){let S=L.texture,Z=n.get(L),le=n.get(S);L.addEventListener("dispose",A),I(L);let re=L.textures,de=L.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=S.version,o.memory.textures++),de){Z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0){Z.__webglFramebuffer[ne]=[];for(let ie=0;ie<S.mipmaps.length;ie++)Z.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else Z.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)Z.__webglFramebuffer[ne]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,ie=re.length;ne<ie;ne++){let ge=n.get(re[ne]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let ie=re[ne];Z.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[ne]);let ge=r.convert(ie.format,ie.colorSpace),D=r.convert(ie.type),se=T(ie.internalFormat,ge,D,ie.normalized,ie.colorSpace,L.isXRRenderTarget===!0),Q=dt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,se,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),$e(i.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)Te(Z.__webglFramebuffer[ne][ie],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else Te(Z.__webglFramebuffer[ne],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);b(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ve){for(let ne=0,ie=re.length;ne<ie;ne++){let ge=re[ne],D=n.get(ge),se=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,D.__webglTexture),$e(se,ge),Te(Z.__webglFramebuffer,L,ge,i.COLOR_ATTACHMENT0+ne,se,0),b(ge)&&M(se)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,le.__webglTexture),$e(ne,S),S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)Te(Z.__webglFramebuffer[ie],L,S,i.COLOR_ATTACHMENT0,ne,ie);else Te(Z.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,ne,0);b(S)?M(ne):S.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&ze(L)}function k(L){let S=L.textures;for(let Z=0,le=S.length;Z<le;Z++){let re=S[Z];if(b(re)&&re.mipmapsAutoUpdate===!0){let de=E(L),ve=n.get(re).__webglTexture;t.bindTexture(de,ve),M(de),t.unbindTexture()}}}let jt=[];function Qe(L){if(L.samples>0){if(ce(L)===!1){let S=L.textures,Z=L.width,le=L.height,re=i.COLOR_BUFFER_BIT,de=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(L),ne=S.length>1;if(ne)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let D=n.get(S[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,Z,le,0,0,Z,le,re,i.NEAREST),l===!0&&(jt.length=0,jt.push(i.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&jt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);let D=n.get(S[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function dt(L){return Math.min(s.maxSamples,L.samples)}function ce(L){let S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(L){let S=o.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Xe(L,S){let Z=L.colorSpace,le=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Tn&&Z!==Gn&&(nt.getTransfer(Z)===pt?(le!==Kn||re!==Nn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",Z)),S}function je(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=oe,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=X,this.setTexture2D=Y,this.setTexture2DArray=ae,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=ht,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ce,this.dispose=G}function bM(i,e){function t(n,s=Gn){let r,o=nt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===uu)return i.SHORT;if(n===eo)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===Kn)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===Kl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Zl)return i.RG_INTEGER;if(n===Jl)return i.RGBA_INTEGER;if(n===ma||n===ga||n===xa||n===_a)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===jl||n===Ql||n===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===va||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===nc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sc)return r.COMPRESSED_R11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===va)return r.COMPRESSED_RG11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Sc||n===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Tc||n===ya||n===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
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

}`,Wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $o(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:wM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xu=class extends si{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding!="undefined",p=new Wu,g={},v=t.getContextAttributes(),b=null,M=null,E=[],T=[],x=new Ce,y=null,I=null,C=new Qt;C.viewport=new Tt;let P=new Qt;P.viewport=new Tt;let A=[C,P],B=new Bl,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=E[W];return Y===void 0&&(Y=new kr,E[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=E[W];return Y===void 0&&(Y=new kr,E[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=E[W];return Y===void 0&&(Y=new kr,E[W]=Y),Y.getHandSpace()};function q(W){let Y=T.indexOf(W.inputSource);if(Y===-1)return;let ae=E[Y];ae!==void 0&&(ae.update(W.inputSource,W.frame,c||o),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",j);for(let W=0;W<E.length;W++){let Y=T[W];Y!==null&&(T[W]=null,E[W].disconnect(Y))}N=null,G=null,p.reset();for(let W in g)delete g[W];if(e.setRenderTarget(b),d=null,f=null,u=null,s=null,M=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),I!==null){let W=I.camera;W.fov=I.fov,W.zoom=I.zoom,W.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ee=null,V=null;v.depth&&(V=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?qi:Li,ee=v.stencil?$s:ri);let te={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Wt(f.textureWidth,f.textureHeight,{format:Kn,type:Nn,depthTexture:new Fi(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Wt(d.framebufferWidth,d.framebufferHeight,{format:Kn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(W){for(let Y=0;Y<W.removed.length;Y++){let ae=W.removed[Y],ee=T.indexOf(ae);ee>=0&&(T[ee]=null,E[ee].disconnect(ae))}for(let Y=0;Y<W.added.length;Y++){let ae=W.added[Y],ee=T.indexOf(ae);if(ee===-1){for(let te=0;te<E.length;te++)if(te>=T.length){T.push(ae),ee=te;break}else if(T[te]===null){T[te]=ae,ee=te;break}if(ee===-1)break}let V=E[ee];V&&V.connect(ae)}}function R(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Y=W.near,ae=W.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),B.near=P.near=C.near=Y,B.far=P.far=C.far=ae,(N!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,G=B.far),B.layers.mask=W.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let ee=W.parent,V=B.cameras;R(B,ee);for(let te=0;te<V.length;te++)R(V[te],ee);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&W.isPerspectiveCamera&&(I={camera:W,fov:W.fov,zoom:W.zoom}),F(W,B,ee)};function F(W,Y,ae){ae===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ds*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(W){return g[W]};let H=null;function X(W,Y){if(h=Y.getViewerPose(c||o),m=Y,h!==null){let ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ee=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,ee=!0);for(let he=0;he<ae.length;he++){let $e=ae[he],qe=null;if(d!==null)qe=d.getViewport($e);else{let Ue=u.getViewSubImage(f,$e);qe=Ue.viewport,he===0&&(e.setRenderTargetTextures(M,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(M))}let Ee=A[he];Ee===void 0&&(Ee=new Qt,Ee.layers.enable(he),Ee.viewport=new Tt,A[he]=Ee),Ee.matrix.fromArray($e.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray($e.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(qe.x,qe.y,qe.width,qe.height),he===0&&(B.matrix.copy(Ee.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ee===!0&&B.cameras.push(Ee)}let V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let he=u.getDepthInformation(ae[0]);he&&he.isValid&&he.texture&&p.init(he,s.renderState)}if(V&&V.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let he=0;he<ae.length;he++){let $e=ae[he].camera;if($e){let qe=g[$e];qe||(qe=new $o,g[$e]=qe);let Ee=u.getCameraImage($e);qe.sourceTexture=Ee}}}}for(let ae=0;ae<E.length;ae++){let ee=T[ae],V=E[ae];ee!==null&&V!==void 0&&V.update(ee,Y,c||o)}H&&H(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let oe=new hm;oe.setAnimationLoop(X),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}},AM=new Ye,ym=new Ke;ym.set(-1,0,0,0,1,0,0,0,1);function EM(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Eu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,M=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ym),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=b*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function RM(i,e,t,n){let s={},r={};function o(v,b){let M=b.program;n.uniformBlockBinding(v,M,s[v.id])}function a(v,b){let M=s[v.id];M===void 0&&(m(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(v,E);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let b=i.createBuffer(),M=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],M=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,x=M.length;T<x;T++){let y=M[T];if(Array.isArray(y))for(let I=0,C=y.length;I<C;I++)h(y[I],T,I,E);else h(y,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,b,M,E){if(f(v,b,M,E)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let I=0;I<x.length;I++){let C=x[I],P=_(C,!0);u(C,v.__data,y),y+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function u(v,b,M){typeof v=="number"||typeof v=="boolean"?b[M]=v:v.isMatrix3?(b[M]=v.elements[0],b[M+1]=v.elements[1],b[M+2]=v.elements[2],b[M+3]=0,b[M+4]=v.elements[3],b[M+5]=v.elements[4],b[M+6]=v.elements[5],b[M+7]=0,b[M+8]=v.elements[6],b[M+9]=v.elements[7],b[M+10]=v.elements[8],b[M+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-M),M):v.toArray(b,M)}function f(v,b,M,E){let T=v.value,x=b+"_"+M;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);let y=E[x],I=!1;for(let C=0;C<T.length;C++)d(T[C],y,C)===!0&&(I=!0);return I}return d(T,E,x)}function d(v,b,M){if(b[M]===void 0)return typeof v=="number"||typeof v=="boolean"?b[M]=v:ArrayBuffer.isView(v)?b[M]=v.slice():b[M]=v.clone(),!0;{let E=b[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return b[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function m(v){let b=v.uniforms,M=0,E=16;for(let x=0,y=b.length;x<y;x++){let I=Array.isArray(b[x])?b[x]:[b[x]];for(let C=0,P=I.length;C<P;C++){let A=I[C],B=Array.isArray(A.value)?A.value:[A.value],N=Array.isArray(b[x])||Array.isArray(A.value),G=M;for(let z=0,j=B.length;z<j;z++){let R=B[z],F=_(R,N),H=M%E,X=H%F.boundary,oe=H+X;M+=X,oe!==0&&E-oe<F.storage&&(M+=E-oe),z===0&&(G=M),M+=F.storage}let q=A.type==="int"?Int32Array:A.type==="uint"?Uint32Array:Float32Array;A.__data=new q((M-G)/Float32Array.BYTES_PER_ELEMENT),A.__offset=G}}let T=M%E;return T>0&&(M+=E-T),v.__size=M,v.__cache={},this}function _(v,b){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(v){let b=v.target;b.removeEventListener("dispose",p),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var CM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function IM(){return gi===null&&(gi=new Vr(CM,16,16,hs,sn),gi.name="DFG_LUT",gi.minFilter=en,gi.magFilter=en,gi.wrapS=Mn,gi.wrapT=Mn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Uc=class{constructor(e={}){let{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,p=new Set([Jl,Zl,Kl]),g=new Set([Nn,ri,eo,$s,Xl,ql]),v=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,T=null,x=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,A=null,B=null,N=null,G=null;this._outputColorSpace=wt;let q=0,z=0,j=null,R=-1,F=null,H=new Tt,X=new Tt,oe=null,W=new Re(0),Y=0,ae=t.width,ee=t.height,V=1,te=null,Ae=null,he=new Tt(0,0,ae,ee),$e=new Tt(0,0,ae,ee),qe=!1,Ee=new rs,Ue=new El,Oe=!1,St=!1,Te=new Ye,Ie=new U,Ve=new Tt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function Nt(){return j===null?V:1}let k=n;function jt(w,O){return t.getContext(w,O)}let Qe,dt,ce,gt,Xe,je,L,S,Z,le,re,de,ve,ne,ie,ge,D,se,Q,xe,fe,pe,Ge;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){let O="webgl2";if(k=jt(O,w),k===null)throw jt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(w){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ze("WebGLRenderer: "+w.message),w}function it(){Qe=new Gv(k),Qe.init(),fe=new bM(k,Qe),dt=new Iv(k,Qe,e,fe),ce=new MM(k,Qe),dt.reversedDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),B=k.createFramebuffer(),N=k.createFramebuffer(),G=k.createFramebuffer(),gt=new Wv(k),Xe=new aM,je=new SM(k,Qe,ce,Xe,dt,fe,gt),L=new zv(C),S=new qg(k),pe=new Rv(k,S),Z=new Hv(k,S,gt,pe),le=new qv(k,Z,S,pe,gt),se=new Xv(k,dt,je),ie=new Pv(Xe),re=new oM(C,L,Qe,dt,pe,ie),de=new EM(C,Xe),ve=new cM,ne=new mM(Qe),D=new Ev(C,L,ce,le,m,l),ge=new yM(C,le,dt),Ge=new RM(k,gt,dt,ce),Q=new Cv(k,Qe,gt),xe=new Vv(k,Qe,gt),gt.programs=re.programs,C.capabilities=dt,C.extensions=Qe,C.properties=Xe,C.renderLists=ve,C.shadowMap=ge,C.state=ce,C.info=gt}_!==Nn&&(I=new Kv(_,t.width,t.height,a,s,r));let ue=new Xu(C,k);this.xr=ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=Qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(ae,ee,!1))},this.getSize=function(w){return w.set(ae,ee)},this.setSize=function(w,O,$=!0){if(ue.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,ee=O,t.width=Math.floor(w*V),t.height=Math.floor(O*V),$===!0&&(t.style.width=w+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ae*V,ee*V).floor()},this.setDrawingBufferSize=function(w,O,$){ae=w,ee=O,V=$,t.width=Math.floor(w*$),t.height=Math.floor(O*$),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===Nn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(he)},this.setViewport=function(w,O,$,K){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,O,$,K),ce.viewport(H.copy(he).multiplyScalar(Nt()).round())},this.getScissor=function(w){return w.copy($e)},this.setScissor=function(w,O,$,K){w.isVector4?$e.set(w.x,w.y,w.z,w.w):$e.set(w,O,$,K),ce.scissor(X.copy($e).multiplyScalar(Nt()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(w){ce.setScissorTest(qe=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){Ae=w},this.getClearColor=function(w){return w.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,$=!0){let K=0;if(w){let J=!1;if(j!==null){let ye=j.texture.format;J=p.has(ye)}if(J){let ye=j.texture.type,Le=g.has(ye),_e=D.getClearColor(),we=D.getClearAlpha(),Be=_e.r,et=_e.g,lt=_e.b;Le?(v[0]=Be,v[1]=et,v[2]=lt,v[3]=we,k.clearBufferuiv(k.COLOR,0,v)):(b[0]=Be,b[1]=et,b[2]=lt,b[3]=we,k.clearBufferiv(k.COLOR,0,b))}else K|=k.COLOR_BUFFER_BIT}O&&(K|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),A=w},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),D.dispose(),ve.dispose(),ne.dispose(),je.dispose(),Xe.dispose(),L.dispose(),le.dispose(),Z.dispose(),pe.dispose(),Ge.dispose(),re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",rd),ue.removeEventListener("sessionend",od),Ss.stop()};function We(w){w.preventDefault(),zo("WebGLRenderer: Context Lost."),P=!0}function tt(){zo("WebGLRenderer: Context Restored."),P=!1;let w=gt.autoReset,O=ge.enabled,$=ge.autoUpdate,K=ge.needsUpdate,J=ge.type;it(),gt.autoReset=w,ge.enabled=O,ge.autoUpdate=$,ge.needsUpdate=K,ge.type=J}function Se(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function bt(w){let O=w.target;O.removeEventListener("dispose",bt),ln(O)}function ln(w){Ji(w),Xe.remove(w)}function Ji(w){let O=Xe.get(w).programs;O!==void 0&&(O.forEach(function($){re.releaseProgram($)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,$,K,J,ye){O===null&&(O=ze);let Le=J.isMesh&&J.matrixWorld.determinantAffine()<0,_e=B0(w,O,$,K,J);ce.setMaterial(K,Le);let we=$.index,Be=1;if(K.wireframe===!0){if(we=Z.getWireframeAttribute($),we===void 0)return;Be=2}let et=$.drawRange,lt=$.attributes.position,Ne=et.start*Be,ct=(et.start+et.count)*Be;ye!==null&&(Ne=Math.max(Ne,ye.start*Be),ct=Math.min(ct,(ye.start+ye.count)*Be)),we!==null?(Ne=Math.max(Ne,0),ct=Math.min(ct,we.count)):lt!=null&&(Ne=Math.max(Ne,0),ct=Math.min(ct,lt.count));let Yt=ct-Ne;if(Yt<0||Yt===1/0)return;pe.setup(J,K,_e,$,we);let Pt,Ct=Q;if(we!==null&&(Pt=S.get(we),Ct=xe,Ct.setIndex(Pt)),J.isMesh)K.wireframe===!0?(ce.setLineWidth(K.wireframeLinewidth*Nt()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(J.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),ce.setLineWidth(xn*Nt()),J.isLineSegments?Ct.setMode(k.LINES):J.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else J.isPoints?Ct.setMode(k.POINTS):J.isSprite&&Ct.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let xn=J._multiDrawStarts,De=J._multiDrawCounts,bn=J._multiDrawCount,xt=we?S.get(we).bytesPerElement:1,bs=Xe.get(K).currentProgram.getUniforms();for(let _n=0;_n<bn;_n++)bs.setValue(k,"_gl_DrawID",_n),Ct.render(xn[_n]/xt,De[_n])}else if(J.isInstancedMesh)Ct.renderInstances(Ne,Yt,J.count);else if($.isInstancedBufferGeometry){let xn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,De=Math.min($.instanceCount,xn);Ct.renderInstances(Ne,Yt,De)}else Ct.render(Ne,Yt)};function sd(w,O,$,K){A!==null&&w.isNodeMaterial&&A.setObject(K,w),Oe===!0&&ie.setState(w,$,!1),w.transparent===!0&&w.side===Pn&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Ao(w,O,K),w.side=di,w.needsUpdate=!0,Ao(w,O,K),w.side=Pn):Ao(w,O,K)}this.compile=function(w,O,$=null){$===null&&($=w),A!==null&&A.renderStart(w,O,$),T=ne.get($),T.init(O),y.push(T),$.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),w!==$&&w.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),A!==null&&A.updateLights(T.state.lightsArray),St=this.localClippingEnabled,Oe=ie.init(this.clippingPlanes,St),Oe===!0&&ie.setGlobalState(this.clippingPlanes,O),A!==null&&ge.render(T.state.shadowsArray,$,O);let K=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ye=J.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){let _e=ye[Le];sd(_e,$,O,J),K.add(_e)}else sd(ye,$,O,J),K.add(ye)}),T=y.pop(),A!==null&&A.renderEnd(),K},this.compileAsync=function(w,O,$=null){let K=this.compile(w,O,$);return new Promise(J=>{function ye(){if(K.forEach(function(Le){let we=Xe.get(Le).currentProgram;(we===void 0||we.isReady())&&K.delete(Le)}),K.size===0){J(w);return}setTimeout(ye,10)}Qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Sh=null;function F0(w){Sh&&Sh(w)}function rd(){Ss.stop()}function od(){Ss.start()}let Ss=new hm;Ss.setAnimationLoop(F0),typeof self!="undefined"&&Ss.setContext(self),this.setAnimationLoop=function(w){Sh=w,ue.setAnimationLoop(w),w===null?Ss.stop():Ss.start()},ue.addEventListener("sessionstart",rd),ue.addEventListener("sessionend",od),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;A!==null&&A.renderStart(w,O);let $=ue.enabled===!0&&ue.isPresenting===!0,K=I!==null&&(j===null||$)&&I.begin(C,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,O,j),T=ne.get(w,y.length),T.init(O),T.state.textureUnits=je.getTextureUnits(),y.push(T),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ue.setFromArrayCamera(O):Ee.setFromProjectionMatrix(Te,Yn,O.reversedDepth),St=this.localClippingEnabled,Oe=ie.init(this.clippingPlanes,St),E=ve.get(w,x.length),E.init(),x.push(E),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&bh(Le,O,-1/0,C.sortObjects)}bh(w,O,0,C.sortObjects),E.finish(),A!==null&&A.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(te,Ae),ht=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ht&&D.addToRenderList(E,w),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&ie.beginShadows();let J=T.state.shadowsArray;if(ge.render(J,w,O),Oe===!0&&ie.endShadows(),(K&&I.hasRenderPass())===!1){let Le=E.opaque,_e=E.transmissive;if(T.setupLights(),O.isArrayCamera){let we=O.cameras;if(_e.length>0)for(let Be=0,et=we.length;Be<et;Be++){let lt=we[Be];ld(Le,_e,w,lt)}ht&&D.render(w);for(let Be=0,et=we.length;Be<et;Be++){let lt=we[Be];ad(E,w,lt,lt.viewport)}}else _e.length>0&&ld(Le,_e,w,O),ht&&D.render(w),ad(E,w,O)}j!==null&&z===0&&(je.updateMultisampleRenderTarget(j),je.updateRenderTargetMipmap(j)),K&&I.end(C),w.isScene===!0&&w.onAfterRender(C,w,O),pe.resetDefaultState(),R=-1,F=null,y.pop(),y.length>0?(T=y[y.length-1],je.setTextureUnits(T.state.textureUnits),Oe===!0&&ie.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,A!==null&&A.renderEnd()};function bh(w,O,$,K){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Le=O.isArrayCamera?Ue:Ee;if(!w.frustumCulled||w.intersectsFrustum(Le)){K&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);let _e=le.update(w),we=w.material;we.visible&&E.push(w,_e,we,$,Ve.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){let Le=O.isArrayCamera?Ue:Ee;if(!w.frustumCulled||w.intersectsFrustum(Le)){let _e=le.update(w),we=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ve.copy(_e.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(we)){let Be=_e.groups;for(let et=0,lt=Be.length;et<lt;et++){let Ne=Be[et],ct=we[Ne.materialIndex];ct&&ct.visible&&E.push(w,_e,ct,$,Ve.z,Ne,O)}}else we.visible&&E.push(w,_e,we,$,Ve.z,null,O)}}}let ye=w.children;for(let Le=0,_e=ye.length;Le<_e;Le++)bh(ye[Le],O,$,K)}function ad(w,O,$,K){let{opaque:J,transmissive:ye,transparent:Le}=w;T.setupLightsView($),Oe===!0&&ie.setGlobalState(C.clippingPlanes,$),K&&ce.viewport(H.copy(K)),J.length>0&&Ha(J,O,$),ye.length>0&&Ha(ye,O,$),Le.length>0&&Ha(Le,O,$),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function ld(w,O,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Ne=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Wt(1,1,{generateMipmaps:!0,type:Ne?sn:Nn,minFilter:Ln,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let ye=T.state.transmissionRenderTarget[K.id],Le=K.viewport||H;ye.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),we=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(W),Y=C.getClearAlpha(),Y<1&&C.setClearColor(16777215,.5),C.clear(),ht&&D.render($);let et=C.toneMapping;C.toneMapping=pi;let lt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),Oe===!0&&ie.setGlobalState(C.clippingPlanes,K),Ha(w,$,K),je.updateMultisampleRenderTarget(ye),je.updateRenderTargetMipmap(ye),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ct=0,Yt=O.length;ct<Yt;ct++){let Pt=O[ct],{object:Ct,geometry:xn,material:De,group:bn}=Pt;if(De.side===Pn&&Ct.layers.test(K.layers)){let xt=De.side;De.side=nn,De.needsUpdate=!0,cd(Ct,$,K,xn,De,bn),De.side=xt,De.needsUpdate=!0,Ne=!0}}Ne===!0&&(je.updateMultisampleRenderTarget(ye),je.updateRenderTargetMipmap(ye))}C.setRenderTarget(_e,we,Be),C.setClearColor(W,Y),lt!==void 0&&(K.viewport=lt),C.toneMapping=et}function Ha(w,O,$){let K=O.isScene===!0?O.overrideMaterial:null;for(let J=0,ye=w.length;J<ye;J++){let Le=w[J],{object:_e,geometry:we,group:Be}=Le,et=Le.material;et.allowOverride===!0&&K!==null&&(et=K),_e.layers.test($.layers)&&cd(_e,O,$,we,et,Be)}}function cd(w,O,$,K,J,ye){A!==null&&J.isNodeMaterial&&A.setObject(w,J),w.onBeforeRender(C,O,$,K,J,ye),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(C,O,$,K,w,ye),J.transparent===!0&&J.side===Pn&&J.forceSinglePass===!1?(J.side=nn,J.needsUpdate=!0,C.renderBufferDirect($,O,K,J,w,ye),J.side=di,J.needsUpdate=!0,C.renderBufferDirect($,O,K,J,w,ye),J.side=Pn):C.renderBufferDirect($,O,K,J,w,ye),w.onAfterRender(C,O,$,K,J,ye)}function hd(w){let O=0;for(let $ of w)$.texture!==null&&O++;return O}function Ao(w,O,$){O.isScene!==!0&&(O=ze);let K=Xe.get(w),J=T.state.lights,ye=T.state.shadowsArray,Le=J.state.version,_e=re.getParameters(w,J.state,ye,O,$,T.state.lightProbeGridArray),we=re.getProgramCacheKey(_e),Be=K.programs;K.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,K.fog=O.fog;let et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;K.envMap=L.get(w.envMap||K.environment,et),K.envMapRotation=K.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",bt),Be=new Map,K.programs=Be,K.programVariants=new Map);let lt=Be.get(we);if(lt!==void 0){if(K.currentProgram===lt&&K.lightsStateVersion===Le)return fd(w,_e),lt}else _e.uniforms=re.getUniforms(w),A!==null&&w.isNodeMaterial&&A.build(w,$,_e),w.onBeforeCompile(_e,C),lt=re.acquireProgram(_e,we),Be.set(we,lt),K.uniforms=_e.uniforms;let Ne=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),fd(w,_e),K.needsLights=z0(w),K.lightsStateVersion=Le,K.needsLights&&(Ne.ambientLightColor.value=J.state.ambient,Ne.lightProbe.value=J.state.probe,Ne.sunLights.value=J.state.sun,Ne.sunLightShadows.value=J.state.sunShadow,Ne.directionalLights.value=J.state.directional,Ne.directionalLightShadows.value=J.state.directionalShadow,Ne.spotLights.value=J.state.spot,Ne.spotLightShadows.value=J.state.spotShadow,Ne.rectAreaLights.value=J.state.rectArea,Ne.ltc_1.value=J.state.rectAreaLTC1,Ne.ltc_2.value=J.state.rectAreaLTC2,Ne.pointLights.value=J.state.point,Ne.pointLightShadows.value=J.state.pointShadow,Ne.hemisphereLights.value=J.state.hemi,Ne.sunShadowMatrix.value=J.state.sunShadowMatrix,Ne.sunShadowCascade.value=J.state.sunShadowCascade,Ne.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ne.spotLightMatrix.value=J.state.spotLightMatrix,Ne.spotLightMap.value=J.state.spotLightMap,Ne.pointShadowMatrix.value=J.state.pointShadowMatrix),K.numLightProbeGrids=hd(T.state.lightProbeGridArray),K.currentProgram=lt,K.uniformsList=null,lt}function O0(w,O,$,K,J){let ye=Xe.get(w),Le=ye.currentProgram.id+","+K+","+J,_e=ye.programVariants.get(Le);return _e===void 0?(_e=Ao(w,O,$),ye.programVariants.set(Le,_e)):(ye.currentProgram=_e,ye.uniformsList=null,ye.outputColorSpace=K,ye.toneMapping=J),_e}function ud(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=no.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function fd(w,O){let $=Xe.get(w);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function B0(w,O,$,K,J){O.isScene!==!0&&(O=ze),je.resetTextureUnits();let ye=O.fog,Le=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?O.environment:null,_e=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:nt.workingColorSpace,we=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Be=L.get(K.envMap||Le,we),et=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Yt=!!$.morphAttributes.color,Pt=pi;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pt=C.toneMapping);let Ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xn=Ct!==void 0?Ct.length:0,De=Xe.get(K),bn=T.state.lights;if(Oe===!0&&(St===!0||w!==F)){let Ft=w===F&&K.id===R;ie.setState(K,w,Ft)}let xt=!1,bs=!1;K.version===De.__version?De.needsLights&&De.lightsStateVersion!==bn.state.version||J.isBatchedMesh&&De.batching===!1||!J.isBatchedMesh&&De.batching===!0||J.isBatchedMesh&&De.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&De.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&De.instancing===!1||!J.isInstancedMesh&&De.instancing===!0||J.isSkinnedMesh&&De.skinning===!1||!J.isSkinnedMesh&&De.skinning===!0||J.isInstancedMesh&&De.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&De.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&De.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&De.instancingMorph===!1&&J.morphTexture!==null||De.envMap!==Be||K.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==et||De.vertexTangents!==lt||De.morphTargets!==Ne||De.morphNormals!==ct||De.morphColors!==Yt||De.morphTargetsCount!==xn||De.numLightProbeGrids!==hd(T.state.lightProbeGridArray)?xt=!0:(De.outputColorSpace!==_e||De.toneMapping!==Pt)&&(bs=!0):(xt=!0,De.__version=K.version);let _n=De.currentProgram;(xt===!0||bs===!0)&&(_n=bs===!0?O0(K,O,J,_e,Pt):Ao(K,O,J),A&&K.isNodeMaterial&&A.onUpdateProgram(K,_n,De));let Va=!1,$i=!1,ws=!1,ut=_n.getUniforms(),fn=De.uniforms;if(ce.useProgram(_n.program)&&(Va=!0,$i=!0,ws=!0),K.id!==R&&(R=K.id,$i=!0),Va||F!==w){ce.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",w.projectionMatrix),ut.setValue(k,"viewMatrix",w.matrixWorldInverse);let cn=ut.map.cameraPosition;cn!==void 0&&cn.setValue(k,Ie.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ut.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,$i=!0,ws=!0)}if(De.needsLights&&(bn.state.sunShadowMap.length>0&&ut.setValue(k,"sunShadowMap",bn.state.sunShadowMap,je),bn.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",bn.state.directionalShadowMap,je),bn.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",bn.state.spotShadowMap,je),bn.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",bn.state.pointShadowMap,je)),J.isSkinnedMesh){ut.setOptional(k,J,"bindMatrix"),ut.setOptional(k,J,"bindMatrixInverse");let Ft=J.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ut.setValue(k,"boneTexture",Ft.boneTexture,je))}J.isBatchedMesh&&(ut.setOptional(k,J,"batchingTexture"),ut.setValue(k,"batchingTexture",J._matricesTexture,je),ut.setOptional(k,J,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",J._indirectTexture,je),ut.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",J._colorsTexture,je));let jn=$.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&se.update(J,$,_n),($i||De.receiveShadow!==J.receiveShadow)&&(De.receiveShadow=J.receiveShadow,ut.setValue(k,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&O.environment!==null&&(fn.envMapIntensity.value=O.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=IM()),$i){if(ut.setValue(k,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&k0(fn,ws),ye&&K.fog===!0&&de.refreshFogUniforms(fn,ye),de.refreshMaterialUniforms(fn,K,V,ee,T.state.transmissionRenderTarget[w.id]),De.needsLights&&De.numLightProbeGrids>0){let Ft=M,cn=0;for(let wi of T.state.lightProbeGridArray)wi.texture!==null&&(Ft.textures[cn]=wi.texture,Ft.min[cn]=wi.boundingBox.min,Ft.max[cn]=wi.boundingBox.max,Ft.resolution[cn]=wi.resolution,cn++);for(let wi in Ft)Ft[wi].length=cn;fn.probesSH.value=Ft.textures,fn.probesMin.value=Ft.min,fn.probesMax.value=Ft.max,fn.probesResolution.value=Ft.resolution}no.upload(k,ud(De),fn,je)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(no.upload(k,ud(De),fn,je),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ut.setValue(k,"center",J.center),ut.setValue(k,"modelViewMatrix",J.modelViewMatrix),ut.setValue(k,"normalMatrix",J.normalMatrix),ut.setValue(k,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let Ft=K.uniformsGroups;for(let cn=0,wi=Ft.length;cn<wi;cn++){let pd=Ft[cn];Ge.update(pd,_n),Ge.bind(pd,_n)}}return _n}function k0(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function z0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,O,$){let K=Xe.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Xe.get(w.texture).__webglTexture=O,Xe.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let $=Xe.get(w);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,$=0){j=w,q=O,z=$;let K=null,J=!1,ye=!1;if(w){let _e=Xe.get(w);if(_e.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),H.copy(w.viewport),X.copy(w.scissor),oe=w.scissorTest,ce.viewport(H),ce.scissor(X),ce.setScissorTest(oe),R=-1;return}else if(_e.__webglFramebuffer===void 0)je.setupRenderTarget(w);else if(_e.__hasExternalTextures)je.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let et=w.depthTexture;if(_e.__boundDepthTexture!==et){if(et!==null&&Xe.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(w)}}let we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);let Be=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?K=Be[O][$]:K=Be[O],J=!0):w.samples>0&&je.useMultisampledRTT(w)===!1?K=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?K=Be[$]:K=Be,H.copy(w.viewport),X.copy(w.scissor),oe=w.scissorTest}else H.copy(he).multiplyScalar(V).floor(),X.copy($e).multiplyScalar(V).floor(),oe=qe;if($!==0&&(K=B),ce.bindFramebuffer(k.FRAMEBUFFER,K)&&ce.drawBuffers(w,K),ce.viewport(H),ce.scissor(X),ce.setScissorTest(oe),J){let _e=Xe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,$)}else if(ye){let _e=O;for(let we=0;we<w.textures.length;we++){let Be=Xe.get(w.textures[we]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+we,Be.__webglTexture,$,_e)}}else if(w!==null&&$!==0){let _e=Xe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,$)}R=-1};function dd(w){let O=Xe.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=dt.textureFormatReadable(w.format),O.__typeReadable=dt.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,$,K,J,ye,Le,_e=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(we=we[Le],Array.isArray(we)&&(we=we[0])),we){ce.bindFramebuffer(k.FRAMEBUFFER,we);try{let Be=w.textures[_e],et=Be.format,lt=Be.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);let Ne=dd(Be);if(Ne.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-K&&$>=0&&$<=w.height-J&&k.readPixels(O,$,K,J,fe.convert(et),fe.convert(lt),ye)}finally{let Be=j!==null?Xe.get(j).__webglFramebuffer:null;ce.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,O,$,K,J,ye,Le,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(we=we[Le],Array.isArray(we)&&(we=we[0])),we)if(O>=0&&O<=w.width-K&&$>=0&&$<=w.height-J){ce.bindFramebuffer(k.FRAMEBUFFER,we);let Be=w.textures[_e],et=Be.format,lt=Be.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);let Ne=dd(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(O,$,K,J,fe.convert(et),fe.convert(lt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Yt=j!==null?Xe.get(j).__webglFramebuffer:null;ce.bindFramebuffer(k.FRAMEBUFFER,Yt);let Pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Bp(k,Pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ct),k.deleteSync(Pt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,$=0){let K=Math.pow(2,-$),J=Math.floor(w.image.width*K),ye=Math.floor(w.image.height*K),Le=O!==null?O.x:0,_e=O!==null?O.y:0;je.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Le,_e,J,ye),ce.unbindTexture()},this.copyTextureToTexture=function(w,O,$=null,K=null,J=0,ye=0){let Le,_e,we,Be,et,lt,Ne,ct,Yt,Pt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if($!==null)Le=$.max.x-$.min.x,_e=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,et=$.min.y,lt=$.isBox3?$.min.z:0;else{let ut=Math.pow(2,-J);Le=Math.floor(Pt.width*ut),_e=Math.floor(Pt.height*ut),w.isDataArrayTexture?we=Pt.depth:w.isData3DTexture?we=Math.floor(Pt.depth*ut):we=1,Be=0,et=0,lt=0}K!==null?(Ne=K.x,ct=K.y,Yt=K.z):(Ne=0,ct=0,Yt=0);let Ct=fe.convert(O.format),xn=fe.convert(O.type),De;O.isData3DTexture?(je.setTexture3D(O,0),De=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(je.setTexture2DArray(O,0),De=k.TEXTURE_2D_ARRAY):(je.setTexture2D(O,0),De=k.TEXTURE_2D),ce.activeTexture(k.TEXTURE0),ce.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),ce.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ce.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let bn=ce.getParameter(k.UNPACK_ROW_LENGTH),xt=ce.getParameter(k.UNPACK_IMAGE_HEIGHT),bs=ce.getParameter(k.UNPACK_SKIP_PIXELS),_n=ce.getParameter(k.UNPACK_SKIP_ROWS),Va=ce.getParameter(k.UNPACK_SKIP_IMAGES);ce.pixelStorei(k.UNPACK_ROW_LENGTH,Pt.width),ce.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt.height),ce.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),ce.pixelStorei(k.UNPACK_SKIP_ROWS,et),ce.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);let $i=w.isDataArrayTexture||w.isData3DTexture,ws=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let ut=Xe.get(w),fn=Xe.get(O),jn=Xe.get(ut.__renderTarget),Ft=Xe.get(fn.__renderTarget);ce.bindFramebuffer(k.READ_FRAMEBUFFER,jn.__webglFramebuffer),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let cn=0;cn<we;cn++)$i&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,J,lt+cn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(O).__webglTexture,ye,Yt+cn)),k.blitFramebuffer(Be,et,Be+Le,et+_e,Ne,ct,Ne+Le,ct+_e,k.DEPTH_BUFFER_BIT,k.NEAREST);ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||Xe.has(w)){let ut=Xe.get(w),fn=Xe.get(O);ce.bindFramebuffer(k.READ_FRAMEBUFFER,N),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let jn=0;jn<we;jn++)$i?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ut.__webglTexture,J,lt+jn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ut.__webglTexture,J),ws?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,ye,Yt+jn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,ye),J!==0?k.blitFramebuffer(Be,et,Be+Le,et+_e,Ne,ct,Ne+Le,ct+_e,k.COLOR_BUFFER_BIT,k.NEAREST):ws?k.copyTexSubImage3D(De,ye,Ne,ct,Yt+jn,Be,et,Le,_e):k.copyTexSubImage2D(De,ye,Ne,ct,Be,et,Le,_e);ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ws?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(De,ye,Ne,ct,Yt,Le,_e,we,Ct,xn,Pt.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(De,ye,Ne,ct,Yt,Le,_e,we,Ct,Pt.data):k.texSubImage3D(De,ye,Ne,ct,Yt,Le,_e,we,Ct,xn,Pt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,Ne,ct,Le,_e,Ct,xn,Pt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,Ne,ct,Pt.width,Pt.height,Ct,Pt.data):k.texSubImage2D(k.TEXTURE_2D,ye,Ne,ct,Le,_e,Ct,xn,Pt);ce.pixelStorei(k.UNPACK_ROW_LENGTH,bn),ce.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),ce.pixelStorei(k.UNPACK_SKIP_PIXELS,bs),ce.pixelStorei(k.UNPACK_SKIP_ROWS,_n),ce.pixelStorei(k.UNPACK_SKIP_IMAGES,Va),ye===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&k.generateMipmap(De),ce.unbindTexture()},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?je.setTextureCube(w,0):w.isData3DTexture?je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?je.setTexture2DArray(w,0):je.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){q=0,z=0,j=null,ce.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Bc=new Float32Array(20002),kc=new Float32Array(20002),zc=new Float32Array(20002),Gc=new Float32Array(20002),pn=[],qu=0;function PM(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Qs=16;function Mm(i=1709,e=["street"]){let t=PM(i);pn.length=0;let n=0,s=0,r=e[0],o=(p,g,v=0,b=0)=>{pn.push({s:n,e:n+p,type:g,k:v,dir:b,kind:r}),n+=p},a=()=>{let p;do p=e[t()*e.length|0];while(p===r&&e.length>1&&t()<.7);r=p};for(o(150,"street");n<19600;){let p=t()<.5?-1:1;o(Math.PI/2*Qs,"corner",p/Qs,p),s++,s%2===1&&o(120,"square"),a(),o(40+t()*40,"street");let g=t()<.5?-1:1;o(70,"bend",g*(.35+t()*.25)/70,g),t()<.5&&a(),o(60+t()*60,"street")}let l=pn.filter(p=>p.type==="corner"),c=0,h=p=>{for(;c<l.length-1&&p>l[c].e+25;)c++;let g=l[c];if(!g)return 1;let v=Math.max(g.s-10-p,p-g.e-10,0),b=Math.min(1,v/20);return b*b*(3-2*b)},u=0,f=0,d=0,m=0,_=0;for(let p=0;p<=20001;p++){for(;m<pn.length-1&&p>=pn[m].e;)m++;let g=pn[m];Bc[p]=f,kc[p]=d,Gc[p]=u,zc[p]=_;let v=5.5/230*Math.cos(p/230)+2.6/97*Math.cos(p/97+1)+1.2/41*Math.cos(p/41);_+=v*1*h(p);let b=g&&p>=g.s&&p<g.e?g.k:0;u+=b*1,f+=Math.sin(u)*1,d+=-Math.cos(u)*1}qu=2e4}function ai(i){let e=0,t=pn.length-1;for(;e<=t;){let n=e+t>>1,s=pn[n];if(i<s.s)t=n-1;else if(i>=s.e)e=n+1;else return s}return null}function Hc(i,e){i<0&&(i=0),i>qu-1&&(i=qu-1);let t=i|0,n=i-t;return e.x=Bc[t]+(Bc[t+1]-Bc[t])*n,e.z=kc[t]+(kc[t+1]-kc[t])*n,e.y=zc[t]+(zc[t+1]-zc[t])*n,e.th=Gc[t]+(Gc[t+1]-Gc[t])*n,e}function qt(i,e,t,n){let s=Hc(i,n),r=Math.cos(s.th),o=Math.sin(s.th);return n.wx=s.x+r*e,n.wz=s.z+o*e,n.wy=s.y+t,n}var Vc=new Re;function Pe(i){return Vc.set(i),[Vc.r,Vc.g,Vc.b]}var yt=class{constructor(){this.p=[],this.n=[],this.u=[],this.c=[]}tri(e,t,n,s,r,o,a,l){let c=t[0]-e[0],h=t[1]-e[1],u=t[2]-e[2],f=n[0]-e[0],d=n[1]-e[1],m=n[2]-e[2],_=h*m-u*d,p=u*f-c*m,g=c*d-h*f;if(_*s[0]+p*s[1]+g*s[2]<0){let v=t;t=n,n=v;let b=o;o=a,a=b}this.p.push(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this.n.push(s[0],s[1],s[2],s[0],s[1],s[2],s[0],s[1],s[2]),this.u.push(r[0],r[1],o[0],o[1],a[0],a[1]),this.c.push(l[0],l[1],l[2],l[0],l[1],l[2],l[0],l[1],l[2])}quad(e,t,n,s,r,o,a,l,c,h){this.tri(e,t,n,r,o,a,l,h),this.tri(e,n,s,r,o,l,c,h)}geo(e,t,n){let s=e.index?e.toNonIndexed():e,r=s.attributes.position,o=s.attributes.normal,a=s.attributes.uv,l=new Ke().getNormalMatrix(t),c=new U;for(let h=0;h<r.count;h++)c.fromBufferAttribute(r,h).applyMatrix4(t),this.p.push(c.x,c.y,c.z),c.fromBufferAttribute(o,h).applyMatrix3(l).normalize(),this.n.push(c.x,c.y,c.z),this.u.push(a?a.getX(h):0,a?a.getY(h):0),this.c.push(n[0],n[1],n[2]);s!==e&&s.dispose()}get empty(){return!this.p.length}build(){if(!this.p.length)return null;let e=new vt;return e.setAttribute("position",new Je(this.p,3)),e.setAttribute("normal",new Je(this.n,3)),e.setAttribute("uv",new Je(this.u,2)),e.setAttribute("color",new Je(this.c,3)),e.computeBoundingSphere(),e}};function er(i,e,t,n){let s=Math.sin(n),r=Math.cos(n);return{ox:i,oy:e,oz:t,fx:s,fz:-r,nx:r,nz:s}}function Yi(i,e,t,n){return[i.ox+i.fx*e+i.nx*n,i.oy+t,i.oz+i.fz*e+i.nz*n]}function Hn(i,e,t,n){return[i.fx*e+i.nx*n,t,i.fz*e+i.nz*n]}function ro(i,e,t,n,s=0,r=1,o=1,a=1){let l=Yi(i,e,t,n),c=Math.PI/2-Math.atan2(i.fx,-i.fz)+s;return new Ye().makeRotationY(c).setPosition(l[0],l[1],l[2]).multiply(new Ye().makeScale(r,o,a))}function He(i,e,t,n,s,r,o,a,l,c=1.9,h=3.3,u=!0,f=s,d=0){let m=(g,v,b)=>Yi(e,g,v,b),_=g=>(g-d)/c,p=g=>(g-f)/h;i.quad(m(t,s,o),m(n,s,o),m(n,r,o),m(t,r,o),Hn(e,0,0,-1),[_(t),p(s)],[_(n),p(s)],[_(n),p(r)],[_(t),p(r)],l),i.quad(m(t,s,a),m(n,s,a),m(n,r,a),m(t,r,a),Hn(e,0,0,1),[-_(t),p(s)],[-_(n),p(s)],[-_(n),p(r)],[-_(t),p(r)],l),i.quad(m(t,s,o),m(t,s,a),m(t,r,a),m(t,r,o),Hn(e,-1,0,0),[-_(o),p(s)],[-_(a),p(s)],[-_(a),p(r)],[-_(o),p(r)],l),i.quad(m(n,s,o),m(n,s,a),m(n,r,a),m(n,r,o),Hn(e,1,0,0),[_(o),p(s)],[_(a),p(s)],[_(a),p(r)],[_(o),p(r)],l),u&&i.quad(m(t,r,o),m(n,r,o),m(n,r,a),m(t,r,a),[0,1,0],[_(t),_(o)],[_(n),_(o)],[_(n),_(a)],[_(t),_(a)],l)}var LM=i=>"#"+i.map(e=>e.toString(16).padStart(2,"0")).join(""),Dn=(...i)=>i.map(LM),Wc=[{id:"kyiv",n:"\u041A\u0438\u0457\u0432",fac:["stalinka","stalinka","panel","modern"],pal:Dn([232,212,176],[216,186,152],[240,228,204],[206,178,144],[226,202,172]),tree:"chestnut",lamp:"city",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","column"],sky:["motherland","belltower","tv"],ads:["\u0412\u0410\u0420\u0415\u041D\u0418\u041A\u0418","\u041A\u0418\u0407\u0412","\u041A\u0410\u0428\u0422\u0410\u041D","\u041C\u0415\u0422\u0420\u041E \u2192","\u041A\u0410\u0412\u0410","\u0410\u041F\u0422\u0415\u041A\u0410"],pool:["avenue","avenue","boulevard","street","park","construction"]},{id:"lviv",n:"\u041B\u044C\u0432\u0456\u0432",fac:["austro"],pal:Dn([238,208,162],[200,222,212],[242,192,172],[222,204,232],[250,232,174],[192,212,232],[236,186,150]),tree:"linden",lamp:"lantern",tram:1,trolley:0,cobble:1,cafe:1,land:["opera","gothic","ratusha"],sky:["spires","ratusha","domes"],ads:["\u041A\u0410\u0412\u0410","\u041F\u041B\u042F\u0426\u041A\u0418","\u0428\u041E\u041A\u041E\u041B\u0410\u0414","\u041B\u0415\u0412","\u041A\u0420\u0415\u041C-\u0411\u0420\u042E\u041B\u0415","\u041F\u0418\u0412\u041E"],pool:["street","street","boulevard","park"]},{id:"odesa",n:"\u041E\u0434\u0435\u0441\u0430",fac:["classic","classic","panel"],pal:Dn([242,216,160],[248,232,194],[230,200,152],[240,224,202],[234,208,178]),tree:"plane",lamp:"lantern",tram:1,trolley:1,cobble:1,cafe:1,land:["opera","statue"],sky:["cranes","lighthouse"],ads:["\u041F\u0420\u0418\u0412\u041E\u0417","\u0411\u0418\u0427\u041A\u0418","\u0428\u0410\u041B\u0410\u041D\u0414\u0418","\u041C\u041E\u0420\u0415 \u0422\u0410\u041C \u2192","\u0412\u0410\u041C \u041A\u0423\u0414\u0418?","\u041A\u0410\u0412\u0410"],pool:["boulevard","street","street","park"]},{id:"kharkiv",n:"\u0425\u0430\u0440\u043A\u0456\u0432",fac:["constructivist","stalinka","panel"],pal:Dn([206,204,196],[218,210,194],[188,188,184],[230,218,194]),tree:"linden",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["gosprom","domes"],sky:["gosprom","belltower","wheel"],ads:["\u0413\u041E\u0421\u041F\u0420\u041E\u041C","\u041C\u0415\u0422\u0420\u041E \u2192","\u0421\u0422\u0423\u0414\u0415\u041D\u0422","\u0428\u0410\u0423\u0420\u041C\u0410","\u041A\u041D\u0418\u0413\u0418"],pool:["avenue","avenue","street","park","construction"]},{id:"dnipro",n:"\u0414\u043D\u0456\u043F\u0440\u043E",fac:["modern","panel","stalinka"],pal:Dn([150,192,222],[202,204,210],[228,216,192],[132,172,212]),tree:"poplar",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["highrise","statue"],sky:["highrises","chimneys"],ads:["\u041D\u0410\u0411\u0415\u0420\u0415\u0416\u041D\u0410","\u041C\u0415\u0422\u0420\u041E \u2192","\u0414\u041D\u0406\u041F\u0420\u041E","\u0421\u0423\u0428\u0406"],pool:["avenue","avenue","street","construction","park"]},{id:"zaporizhzhia",n:"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F",fac:["panel","stalinka"],pal:Dn([216,208,192],[202,192,172],[228,216,198]),tree:"poplar",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["statue"],sky:["chimneys","dam"],ads:["\u0425\u041E\u0420\u0422\u0418\u0426\u042F","\u0414\u041D\u0406\u041F\u0420\u041E\u0413\u0415\u0421","\u041C\u041E\u0422\u041E\u0420","\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418"],pool:["avenue","street","construction","park"]},{id:"vinnytsia",n:"\u0412\u0456\u043D\u043D\u0438\u0446\u044F",fac:["brick","classic","panel"],pal:Dn([192,96,72],[238,216,172],[216,192,162]),tree:"chestnut",lamp:"lantern",tram:1,trolley:1,cobble:0,cafe:1,land:["watertower","domes"],sky:["watertower","domes"],ads:["\u0412\u0406\u041D\u041D\u0418\u0426\u042F","\u0424\u041E\u041D\u0422\u0410\u041D","\u041F\u041E\u0414\u0406\u041B\u041B\u042F","\u041A\u0410\u0412\u0410"],pool:["street","boulevard","park","avenue"]},{id:"mykolaiv",n:"\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432",fac:["classic","panel"],pal:Dn([238,218,178],[228,206,172],[216,202,182]),tree:"plane",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["statue"],sky:["cranes"],ads:["\u0412\u0415\u0420\u0424","\u041C\u0418\u041A\u041E\u041B\u0410\u0407\u0412","\u0420\u0418\u0411\u0410","\u0410\u041F\u0422\u0415\u041A\u0410"],pool:["avenue","street","boulevard","park"]},{id:"zhytomyr",n:"\u0416\u0438\u0442\u043E\u043C\u0438\u0440",fac:["brick","classic","panel"],pal:Dn([188,98,74],[234,216,182],[212,198,178]),tree:"linden",lamp:"city",tram:1,trolley:1,cobble:0,cafe:0,land:["rocket","domes"],sky:["rocket","domes"],ads:["\u041A\u041E\u0421\u041C\u041E\u0421","\u0416\u0418\u0422\u041E\u041C\u0418\u0420","\u041A\u041E\u0420\u041E\u041B\u042C\u041E\u0412"],pool:["street","avenue","park"]},{id:"chernihiv",n:"\u0427\u0435\u0440\u043D\u0456\u0433\u0456\u0432",fac:["brick","panel","classic"],pal:Dn([186,94,72],[234,222,198],[212,202,188]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","domes"],sky:["domes","domes"],ads:["\u0427\u0415\u0420\u041D\u0406\u0413\u0406\u0412","\u0412\u0410\u041B","\u0425\u041B\u0406\u0411"],pool:["street","boulevard","park"]},{id:"poltava",n:"\u041F\u043E\u043B\u0442\u0430\u0432\u0430",fac:["classic","classic","panel"],pal:Dn([246,222,152],[248,238,208],[238,208,152]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:0,cafe:0,land:["column","domes"],sky:["column","domes"],ads:["\u0413\u0410\u041B\u0423\u0428\u041A\u0418","\u041F\u041E\u041B\u0422\u0410\u0412\u0410","\u041A\u0410\u0412\u0410"],pool:["boulevard","street","park"]},{id:"sumy",n:"\u0421\u0443\u043C\u0438",fac:["classic","brick","panel"],pal:Dn([238,222,192],[192,102,82],[216,206,192]),tree:"linden",lamp:"city",tram:0,trolley:1,cobble:0,cafe:0,land:["domes","statue"],sky:["domes"],ads:["\u0421\u0423\u041C\u0418","\u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0418"],pool:["street","avenue","park"]},{id:"lutsk",n:"\u041B\u0443\u0446\u044C\u043A",fac:["brick","austro","panel"],pal:Dn([182,98,74],[232,212,182],[212,202,192]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:1,cafe:1,land:["castle","domes"],sky:["castle","domes"],ads:["\u041B\u0423\u0426\u042C\u041A","\u0417\u0410\u041C\u041E\u041A \u2192","\u041A\u0410\u0412\u0410"],pool:["street","street","park","boulevard"]},{id:"frankivsk",n:"\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A",fac:["austro","classic"],pal:Dn([238,210,166],[208,224,214],[238,198,178],[224,208,234]),tree:"linden",lamp:"lantern",tram:0,trolley:1,cobble:1,cafe:1,land:["ratusha","domes"],sky:["ratusha","mountains"],ads:["\u0424\u0420\u0410\u041D\u0418\u041A","\u041A\u0410\u0412\u0410","\u041A\u0410\u0420\u041F\u0410\u0422\u0418 \u2192","\u0411\u0410\u041D\u041E\u0428"],pool:["street","street","boulevard","park"]}],Xc=Object.fromEntries(Wc.map(i=>[i.id,i])),Aa={street:{walk:5.8,bx:5.8,flo:0},avenue:{walk:8.6,bx:9,flo:2,park:!0},boulevard:{walk:5.8,bx:12.5,flo:0,alley:!0},park:{walk:5.8,bx:0},construction:{walk:5.8,bx:0}};function Sm(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1000003+1}var Me={cream:Pe("#efe4c8"),white:Pe("#f4f1ea"),stone:Pe("#a39a8c"),grey:Pe("#8a8a88"),dark:Pe("#4b4744"),green:Pe("#5f9d8c"),brick:Pe("#9a4b36"),red:Pe("#b8322a"),granite:Pe("#6e625a"),bronze:Pe("#4f5a3c"),blue:Pe("#3d5a8a"),concrete:Pe("#b9b6ae"),yellow:Pe("#e3b23c"),steel:Pe("#c9ccd1")},bm={},us=(i,e)=>bm[i]||(bm[i]=e()),NM=()=>us("box",()=>new Dt(1,1,1)),DM=(i=16)=>us("cyl"+i,()=>new Ut(.5,.5,1,i)),UM=(i=16)=>us("cone"+i,()=>new jo(.5,1,i)),FM=()=>us("sph",()=>new tn(.5,18,12)),OM=()=>us("hemi",()=>new tn(.5,18,8,0,Math.PI*2,0,Math.PI/2)),BM=()=>us("onion",()=>{let i=[];for(let e=0;e<=16;e++){let t=e/16;i.push(new Ce(Math.max(.001,.5*Math.sin(Math.PI*Math.pow(t,.7))*(1-.3*t)),t*1.4))}return new Gs(i,18)}),kM=()=>us("caps",()=>new kn(.5,1,4,10));function wm(i,e){let t=(n,s,r,o,a,l,c,h,u,f=0)=>n.geo(s,ro(i,r,o,a,f,l,c,h),u);return{box:(n,s,r,o,a,l,c,h=e.det,u=0)=>t(h,NM(),n,s+a/2,r,o,a,l,c,u),cyl:(n,s,r,o,a,l,c=e.det,h=16)=>t(c,DM(h),n,s+a/2,r,o*2,a,o*2,l),cone:(n,s,r,o,a,l,c=e.det,h=16,u=0)=>t(c,UM(h),n,s+a/2,r,o*2,a,o*2,l,u),sph:(n,s,r,o,a,l=e.det,c=1)=>t(l,FM(),n,s,r,o*2,o*2*c,o*2,a),dome:(n,s,r,o,a,l=e.det,c=1)=>t(l,OM(),n,s,r,o*2,o*2*c,o*2,a),onion:(n,s,r,o,a,l=e.gold)=>t(l,BM(),n,s,r,o*2,o*2,o*2,a),caps:(n,s,r,o,a,l,c=e.det,h=0)=>t(c,kM(),n,s,r,o*2,a,o*2,l,h)}}function Tm(i,e,t,n,s){let r=s||Me.white;i.box(e,0,t,16*n,12*n,10*n,r),i.box(e,0,t,10*n,12*n,16*n,r),i.box(e,12*n,t,16.4*n,.6*n,10.4*n,Me.cream),i.box(e,12*n,t,10.4*n,.6*n,16.4*n,Me.cream),i.cyl(e,12*n,t,3*n,6*n,r),i.onion(e,18*n,t,3.4*n,Me.yellow),i.box(e,22.3*n,t,.2*n,2.4*n,.2*n,Me.yellow,void 0),i.box(e,23.3*n,t,.2*n,.2*n,1.2*n,Me.yellow);for(let[o,a]of[[-5,-5],[5,-5],[-5,5],[5,5]])i.cyl(e+o*n,12*n,t+a*n,1.4*n,3*n,r),i.onion(e+o*n,15*n,t+a*n,1.7*n,Me.yellow);i.box(e-12*n,0,t,5*n,18*n,5*n,r),i.box(e-12*n,18*n,t,4*n,4*n,4*n,r),i.onion(e-12*n,22*n,t,2*n,Me.yellow)}function qc(i,e,t,n,s,r,o){i.caps(e,t+1.5*s,n,.45*s,1.6*s,r,o),i.sph(e,t+2.75*s,n,.32*s,r,o),i.caps(e+.1*s,t+2.3*s,n+.55*s,.13*s,1.1*s,r,o),i.caps(e,t+1.8*s,n-.55*s,.13*s,.9*s,r,o)}function Yu(i,e,t,n){let s=wm(e,n),r=-t;switch(i){case"opera":s.box(0,0,0,30,15,20,Me.cream),s.box(0,14.6,0,31,.8,21,Me.white),s.box(0,0,r*10.5,20,1.2,3,Me.stone),s.box(0,15,r*8.5,18,3,3,Me.cream);for(let o=0;o<8;o++)s.cyl(-10.5+o*3,1.2,r*10.6,.48,10,Me.white);s.box(0,11.2,r*10.6,24,1.2,1.4,Me.white);for(let o of[-13,13])qc(s,o,15.4,r*8.5,1.4,Me.yellow,n.gold);s.cyl(0,15,0,6.3,1.2,Me.white),s.dome(0,16.2,0,6,Me.green),s.cyl(0,22,0,.35,2.6,Me.yellow,n.gold),qc(s,0,24.2,0,1.2,Me.yellow,n.gold);break;case"gothic":s.box(0,0,-r*4,14,14,24,Me.stone),s.box(0,14,-r*4,.1,.1,.1,Me.dark),s.cone(0,14,-r*4,9.8,6,Me.dark,n.det,4,Math.PI/4);for(let o of[-5,5])s.box(o,0,r*8,4.4,28,4.4,Me.stone),s.cone(o,28,r*8,3,18,Me.dark,n.det,4,Math.PI/4),s.sph(o,46.3,r*8,.35,Me.yellow,n.gold);s.cyl(0,10,r*10.1,2.1,.2,Me.blue),s.box(0,0,r*10.1,2.6,4.5,.4,Me.dark);break;case"ratusha":s.box(0,0,0,24,13,22,Me.cream),s.box(0,12.8,0,25,.7,23,Me.white),s.box(0,13,0,5.5,20,5.5,Me.cream),s.box(0,33,0,6.4,.6,6.4,Me.white),s.cyl(0,33.6,0,2.6,2.5,Me.cream),s.cone(0,36,0,3.6,5.4,Me.green,n.det,8);for(let[o,a]of[[0,2.8],[0,-2.8],[2.8,0],[-2.8,0]])s.cyl(o,29.5,a,1.25,.1,Me.white);s.cyl(0,41.4,0,.08,5,Me.dark,n.metal,6),s.box(1.3,44.6,0,2.6,.8,.05,Me.yellow),s.box(1.3,45.4,0,2.6,.8,.05,Me.blue);break;case"domes":Tm(s,0,0,1.1);break;case"column":s.box(0,0,0,9,1,9,Me.granite),s.box(0,1,0,5,5,5,Me.white),s.cyl(0,6,0,1.3,34,Me.white,n.det,20),s.cyl(0,40,0,2,1.5,Me.white),qc(s,0,41.5,0,2.2,Me.yellow,n.gold);for(let o=0;o<4;o++)s.cyl(Math.cos(o*1.57)*7,0,Math.sin(o*1.57)*7,.4,3.5,Me.dark,n.metal,8);break;case"statue":s.box(0,0,0,7,.8,7,Me.granite),s.box(0,.8,0,3.4,4.5,3.4,Me.granite),s.box(0,5.3,0,3.8,.5,3.8,Me.granite),qc(s,0,5.8,0,2.3,Me.bronze,n.metal);break;case"gosprom":for(let[o,a,l]of[[-26,18,26],[-8,16,44],[8,16,50],[26,18,30]]){s.box(o,0,0,a,l,18,Me.concrete);for(let c=3;c<l-2;c+=3.4)s.box(o,c,r*9.05,a-1,1.6,.2,Me.blue,n.glass)}s.box(0,20,r*2,52,3,4,Me.concrete),s.box(-17,14,r*2,4,3,4,Me.concrete),s.cyl(8,50,0,.25,12,Me.dark,n.metal,6);break;case"highrise":s.box(0,0,0,22,6,22,Me.grey),s.box(0,6,0,18,74,18,Me.blue,n.glass),s.box(0,80,0,19,1,19,Me.steel,n.metal);for(let o=9;o<80;o+=3)s.box(0,o,r*9.02,18.2,.25,.1,Me.steel,n.metal);s.cyl(0,81,0,.3,14,Me.steel,n.metal,6);break;case"watertower":s.box(0,0,0,7,24,7,Me.brick),s.box(0,24,0,8.5,6,8.5,Me.brick),s.box(0,30,0,9,.6,9,Me.white);for(let[o,a]of[[0,4.3],[0,-4.3],[4.3,0],[-4.3,0]])s.cyl(o,26.4,a,1.4,.1,Me.white);s.cone(0,30.6,0,5.8,6,Me.dark,n.det,4,Math.PI/4),s.cyl(0,36.6,0,.15,3,Me.yellow,n.gold,6);break;case"rocket":s.box(0,0,0,8,1.2,8,Me.granite);for(let o of[0,2.09,4.19])s.box(Math.cos(o)*2,1.2,Math.sin(o)*2,.5,9,.5,Me.steel,n.metal,o);s.cyl(0,6,0,1.4,16,Me.white),s.cone(0,22,0,1.4,5,Me.white),s.cyl(0,6,0,1.45,1.2,Me.red);for(let o of[0,1.57,3.14,4.71])s.box(Math.cos(o)*1.8,6,Math.sin(o)*1.8,.2,4,1.8,Me.white,n.det,o);break;case"castle":s.box(0,0,0,36,9,2,Me.brick),s.box(0,0,r*14,36,9,2,Me.brick),s.box(-18,0,r*7,2,9,14,Me.brick),s.box(18,0,r*7,2,9,14,Me.brick);for(let o=-17;o<=17;o+=2.4)s.box(o,9,0,1.2,1,2.2,Me.brick);for(let[o,a]of[[-18,22],[0,28],[18,18]])s.box(o,0,0,8,a,8,Me.brick),s.cone(o,a,0,6.2,6,Me.red,n.det,4,Math.PI/4);break}}function Am(i,e){let t=i.length;i.forEach((n,s)=>{let r=-.6+(s-(t-1)/2)*.95+s%2*.2,o=330,a=er(Math.sin(r)*o,0,-Math.cos(r)*o,r+Math.PI/2),l={det:e,gold:e,glass:e,metal:e},c=wm(a,l),h=[1,1,1];switch(n){case"motherland":c.box(0,0,0,20,30,20,h),c.caps(0,62,0,5,50,h),c.sph(0,92,0,3,h),c.box(4,78,6,1.2,38,1.2,h,e,.2),c.cyl(-6,74,0,6,1.2,h);break;case"belltower":c.box(0,0,0,22,30,22,h),c.box(0,30,0,16,24,16,h),c.cyl(0,54,0,6,18,h),c.onion(0,72,0,7,h,e),c.cone(0,81,0,1,12,h);break;case"tv":c.cone(0,0,0,14,160,h,e,6),c.cyl(0,160,0,1,40,h),c.box(0,100,0,12,4,12,h);break;case"spires":for(let u of[-8,8])c.box(u,0,0,7,50,7,h),c.cone(u,50,0,5,32,h,e,4);c.box(0,0,18,18,28,30,h);break;case"ratusha":c.box(0,0,0,40,22,30,h),c.box(0,22,0,10,40,10,h),c.cone(0,62,0,7,12,h,e,8);break;case"domes":Tm(c,0,0,2.2,h);break;case"cranes":for(let u of[-30,0,30])c.box(u,0,0,3,50,3,h),c.box(u+14,48,0,46,3,2,h,e,.15);break;case"lighthouse":c.cone(0,0,0,8,50,h,e,12),c.cyl(0,50,0,4,8,h),c.cone(0,58,0,4.5,4,h);break;case"gosprom":for(let[u,f]of[[-40,50],[-14,80],[14,90],[40,56]])c.box(u,0,0,24,f,24,h);break;case"wheel":{let u=us("torus",()=>new Hs(30,1.2,6,40));e.geo(u,ro(a,0,36,0,Math.PI/2),h),c.box(0,0,0,2,36,6,h);for(let f=0;f<6;f++)c.box(0,36,0,.8,60,.8,h,e);break}case"highrises":for(let[u,f,d]of[[-50,110,22],[-20,150,26],[14,130,22],[46,90,30]])c.box(u,0,0,d,f,d,h);break;case"chimneys":for(let[u,f]of[[-30,110],[0,130],[28,100]])c.cone(u,0,0,6,f,h,e,12);c.box(0,0,20,90,30,30,h);break;case"dam":c.box(0,0,0,320,40,12,h);for(let u=-150;u<=150;u+=20)c.box(u,40,0,6,14,10,h);break;case"watertower":c.box(0,0,0,12,60,12,h),c.box(0,60,0,16,14,16,h),c.cone(0,74,0,11,14,h,e,4);break;case"rocket":c.cyl(0,0,0,5,60,h),c.cone(0,60,0,5,20,h);break;case"castle":for(let[u,f]of[[-40,40],[0,56],[40,34]])c.box(u,0,0,18,f,18,h),c.cone(u,f,0,13,14,h,e,4);c.box(0,0,0,90,22,8,h);break;case"column":c.cyl(0,0,0,3,90,h),c.caps(0,98,0,3,8,h);break;case"mountains":for(let[u,f,d]of[[-120,120,180],[0,160,220],[130,110,200]])c.cone(u,0,60,d/2,f,h,e,7);break}})}var zM=(i,e,t)=>i+(e-i)*t,GM=(i,e,t)=>i<e?e:i>t?t:i;function HM(i,e){if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,o]=i[t],a=(e-n)/(r-n);return zM(s,o,a*a*(3-2*a))}return i[i.length-1][1]}function VM(i,e=30,t=20){let n=[],s=[];for(let f=0;f<=e;f++){let d=f/e,m=-i.L/2+d*i.L,_=HM(i.top,m),p=i.clear+(i.lift||0)*Math.pow(Math.abs(m)/(i.L/2),6),g=GM((i.L/2-Math.abs(m))/i.round,0,1),v=Math.sqrt(1-(1-g)*(1-g)),b=.55+.45*v,M=(p+_)/2,E=(_-p)/2,T=i.W/2,x=[];for(let y=0;y<t;y++){let I=y/t*Math.PI*2,C=Math.cos(I),P=Math.sin(I),A=M+E*Math.sign(P)*Math.pow(Math.abs(P),2/i.n),B=T*Math.sign(C)*Math.pow(Math.abs(C),2/i.n);A>i.belt&&_>i.belt+.05&&(B*=1-i.tumble*Math.pow((A-i.belt)/(_-i.belt),1.4)),A=M+(A-M)*(.75+.25*b),B*=b,x.push(n.length/3),n.push(m,A,B)}s.push({ring:x,x:m,yT:_})}let r=[],o=[],a=(f,d,m,_)=>{let p=(n[f*3]+n[m*3])/2,g=(n[f*3+1]+n[m*3+1])/2,v=(n[f*3+2]+n[m*3+2])/2,b=s[Math.round((p+i.L/2)/i.L*e)];(i.glass&&i.glass(p,g,v,b.yT,i.W/2)?o:r).push(f,d,m,f,m,_)};for(let f=0;f<e;f++)for(let d=0;d<t;d++){let m=s[f].ring,_=s[f+1].ring,p=(d+1)%t;a(m[d],_[d],_[p],m[p])}for(let[f,d]of[[0,!0],[e,!1]]){let m=s[f].ring,_=n.length/3,p=0,g=0;for(let v of m)p+=n[v*3+1];n.push(s[f].x,p/m.length,0);for(let v=0;v<t;v++){let b=(v+1)%t;d?r.push(_,m[b],m[v]):r.push(_,m[v],m[b])}}let l=f=>{let d=new vt;return d.setAttribute("position",new Je(n,3)),d.setIndex(f),d.computeVertexNormals(),d.setAttribute("uv",new Je(new Float32Array(n.length/3*2),2)),d},c=l(r.concat(o)),h=l(r),u=l(o);return h.setAttribute("normal",c.attributes.normal),u.setAttribute("normal",c.attributes.normal),{paint:h,glass:u}}var WM=(()=>{let i=[];for(let[r,o]of[[.68,-.62/2],[.86,-.62/2-.02],[1-.04,-.62/2+.02],[1,-.62/2+.12],[1,.62/2-.12],[1-.04,.62/2-.02],[.86,.62/2+.02],[.68,.62/2]])i.push(new Ce(r,o));let s=new Gs(i,18);return s.rotateX(Math.PI/2),s})(),XM=(()=>{let i=new Ut(.68,.68,.5,18,1,!1);return i.rotateX(Math.PI/2),i})(),qM=(()=>{let i=new Ut(.2,.26,.56,10);return i.rotateX(Math.PI/2),i})(),YM=new Dt(.12,.62,.08),tr=new Dt(1,1,1),KM=new tn(.5,12,8),Em=new En(1,1),ZM={sedan:{L:4.6,W:1.8,H:1.45,wheelR:.32,wb:1.38,belt:.92,top:[[-2.3,.82],[-2,.98],[-1.55,1],[-1,1.4],[.15,1.45],[.85,1],[1.3,.9],[2.3,.72]],cabin:[-1.45,1],bp:-.25},hatch:{L:4.05,W:1.76,H:1.48,wheelR:.31,wb:1.25,belt:.92,top:[[-2.03,.9],[-1.95,1.3],[-1.7,1.46],[.1,1.48],[.75,1],[1.2,.9],[2.03,.72]],cabin:[-1.85,.85],bp:-.35},suv:{L:4.7,W:1.9,H:1.72,wheelR:.38,wb:1.42,belt:1.12,clear:.38,top:[[-2.35,1],[-2.25,1.55],[-2,1.7],[.45,1.72],[1.05,1.2],[1.6,1.1],[2.35,.9]],cabin:[-2.1,1.1],bp:-.6},van:{L:5.2,W:1.98,H:2.45,wheelR:.36,wb:1.75,belt:1.32,clear:.36,n:6,top:[[-2.6,2.4],[-2.5,2.45],[1.35,2.45],[1.95,1.55],[2.35,1.2],[2.6,1]],cabin:[-2.4,2.25],bp:1.25,sideWin:[-1.9,1.15]},bus:{L:11.5,W:2.5,H:3,wheelR:.5,wb:3.4,wbF:3.1,belt:1.25,clear:.34,n:8,round:.35,top:[[-5.75,2.95],[-5.6,3],[5.6,3],[5.75,2.9]],cabin:[-5.55,5.7],bp:99,busWin:!0}},Ku={};function Ju(i){if(Ku[i])return Ku[i];let e=ZM[i],t=e.clear||.3,n=e.n||3.2,s=(d,m,_,p,g)=>m<e.belt+.03||d<e.cabin[0]||d>e.cabin[1]?!1:e.busWin?m<2.55&&(Math.abs(_)>g*.6||d>5.4||d<-5.45)&&!(Math.abs((d+5.5)%1.6-.8)<.06):!(m>p-.06&&p>=e.H-.06||Math.abs(d-e.bp)<.07||e.sideWin&&Math.abs(_)>g*.7&&(d<e.sideWin[0]||d>e.sideWin[1])),r=VM({L:e.L,W:e.W,clear:t,top:e.top,belt:e.belt,n,tumble:e.busWin?.03:.2,round:e.round||.55,lift:.12,glass:s},i==="bus"?48:30,i==="bus"?16:20),o={paint:[r.paint],glass:[r.glass],chrome:[],rubber:[],trim:[],head:[],tail:[],plate:[]},a=(d,m,_,p,g,v=1,b=1,M=1,E=0)=>{let T=m.clone();T.scale(v,b,M),E&&T.rotateY(E),T.translate(_,p,g),d.push(T)},l=e.wheelR,c=[e.wbF||e.wb,-e.wb],h=e.W/2-.16;for(let d of c)for(let m of[-1,1]){a(o.rubber,WM,d,l,m*h,l,l,l*.75),a(o.chrome,XM,d,l,m*(h+.01),l,l,l*.5),a(o.trim,qM,d,l,m*(h+.02),l,l,l*.5);for(let _=0;_<5;_++){let p=YM.clone();p.scale(l,l,l),p.translate(0,l*.35,0),p.rotateZ(_*Math.PI*2/5),p.translate(d,l,m*(h+l*.29)),o.trim.push(p)}}let u=e.L/2,f=i==="bus"?.75:t+(e.belt-t)*.55;a(o.trim,tr,u-.12,t+.12,0,.16,.26,e.W*.78),a(o.trim,tr,-u+.12,t+.12,0,.16,.26,e.W*.78),a(o.trim,tr,u-.02,f-.05,0,.06,.16,e.W*.42);for(let d of[-1,1])a(o.head,KM,u-.1,f,d*e.W*.36,.14,.12,.34),a(o.tail,tr,-u+.03,f+.05,d*e.W*.38,.06,.12,.28),i!=="bus"&&(a(o.paint,tr,e.cabin[1]-.15,e.belt+.08,d*(e.W/2+.06),.14,.1,.16),a(o.trim,tr,e.bp+.5,e.belt-.12,d*(e.W/2+.01),.16,.03,.03));if(a(o.plate,Em,u+.002,t+.18,0,1,.13,.52,Math.PI/2),a(o.plate,Em,-u-.002,t+.32,0,1,.13,.52,-Math.PI/2),i==="bus")for(let d of[3.2,-1.2])for(let m of[1])a(o.glass,tr,d,.35+1.1,m*(e.W/2+.005),1.2,2.1,.02);return Ku[i]=o,o}var fs=null,$u=null;function Rm(i){$u=i,fs&&Cm(fs)}function Cm(i){for(let[e,t]of[["paint",.55],["glass",.9],["chrome",1.1]])i[e].envMap=$u,i[e].envMapIntensity=t,i[e].needsUpdate=!0}function ju(i=!0){if(fs&&fs.hq===i)return fs;let e=i?dn:At;return fs={hq:i,paint:new e({vertexColors:!0,metalness:.3,roughness:.35,...i?{clearcoat:1,clearcoatRoughness:.06}:{}}),glass:new At({vertexColors:!0,color:"#2a3642",metalness:.9,roughness:.04}),chrome:new At({color:"#d4d7db",metalness:1,roughness:.22}),rubber:new At({color:"#141416",roughness:.92}),trim:new At({color:"#202124",roughness:.55,metalness:.1}),head:new At({color:"#e9eef2",emissive:"#fff4d6",emissiveIntensity:.15,metalness:.3,roughness:.1}),tail:new At({color:"#7a0f12",emissive:"#ff2a1a",emissiveIntensity:.15,roughness:.25}),plate:new At({map:JM(),roughness:.5})},$u&&Cm(fs),fs}function JM(){let i=document.createElement("canvas");i.width=512,i.height=256;let e=i.getContext("2d"),t="ABCEHIKMOPTX",n=()=>t[Math.random()*t.length|0],s=()=>Math.random()*10|0;for(let o=0;o<8;o++){let a=o%2*256,l=(o>>1)*64;e.fillStyle="#f4f4f0",e.fillRect(a+2,l+4,252,56),e.strokeStyle="#111",e.lineWidth=2,e.strokeRect(a+3,l+5,250,54),e.fillStyle="#0057b7",e.fillRect(a+4,l+6,30,52),e.fillStyle="#ffd700",e.fillRect(a+4,l+34,30,24),e.fillStyle="#fff",e.font="700 13px sans-serif",e.textAlign="center",e.fillText("UA",a+19,l+28),e.fillStyle="#111",e.font="700 38px sans-serif",e.fillText(`${n()}${n()} ${s()}${s()}${s()}${s()} ${n()}${n()}`,a+145,l+46)}let r=new zs(i);return r.colorSpace=wt,r.anisotropy=4,r}function Qu(i,e){let t=i.attributes.uv,n=e%2/2,s=1-(e>>1)/4;for(let r=0;r<t.count;r++)t.setXY(r,n+t.getX(r)*.5,s-.25+t.getY(r)*.25);return i}var ef=["#c9cdd2","#1d1f24","#f0f0ec","#7d0f14","#1e3a6e","#5b6066","#2f4a3a","#b8a27a","#8e959d","#a31d1d","#0f2c4c"],Im={kyiv:"#1f5ea8",kharkiv:"#d7b52c",lviv:"#2f7b3d",odesa:"#e8e6df",dnipro:"#c63a2a"},Zu={};function tf(i,e,t=!0){let n=i+e,s=ju(t);if(!Zu[n]){let o=Ju(i),a=new Ye,l={},c=[0,0,0],h={r:0,g:0,b:0};{let m=document.createElement("canvas").getContext("2d")}let u=e.replace("#",""),f=m=>(m/=255,m<=.04045?m/12.92:Math.pow((m+.055)/1.055,2.4)),d=[f(parseInt(u.slice(0,2),16)),f(parseInt(u.slice(2,4),16)),f(parseInt(u.slice(4,6),16))];for(let[m,_]of Object.entries(o)){let p=new yt;_.forEach((g,v)=>{if(m==="plate"){let b=Qu(g.clone(),Math.random()*8|0);p.geo(b,a,[1,1,1]),b.dispose()}else p.geo(g,a,m==="paint"?d:[1,1,1])}),l[m]=p.build()}Zu[n]=l}let r=new _t;for(let[o,a]of Object.entries(Zu[n])){if(!a)continue;let l=new st(a,s[o]);l.castShadow=o!=="glass"&&o!=="head"&&o!=="tail"&&o!=="plate",l.receiveShadow=o==="paint",r.add(l)}return r}var Pm=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i}),ds={mat:null,sky:null};async function Lm(i){let e=window.UKH_ASSETS;if(!e||!e.materials)return!1;let t=[],n={},s={};for(let[o,a]of Object.entries(e.materials)){n[o]={tile:a.tile_m};for(let l of["c","n","r"])a[l]&&t.push(Pm(a[l]).then(c=>{n[o][l]=c}))}for(let[o,a]of Object.entries(e.skies||{}))s[o]={sun:a.sun,sunCol:a.sunCol,hor:a.hor,elev:a.elev},t.push(Pm(a.img).then(l=>{s[o].img=l}));let r=0;return t.forEach(o=>o.then(()=>{r++,i&&i(r/t.length)})),await Promise.all(t),delete e.materials,delete e.skies,ds.mat=n,ds.sky=s,!0}function Ki(i,e,t){let n=document.createElement("canvas");return n.width=i,n.height=e,n.__st=new Error().stack,t&&t(n.getContext("2d"),i,e),n}function _i(i,{srgb:e=!0,repeatU:t=!0,repeatV:n=!0,aniso:s=8}={}){let r=new zs(i);return r.colorSpace=e?wt:Gn,r.wrapS=t?ii:Mn,r.wrapT=n?ii:Mn,r.minFilter=Ln,r.anisotropy=s,r}var sf=7,Mt=()=>(sf=sf*16807%2147483647)/2147483647;function Nm(i){sf=i%2147483646+1}function $M(i,e=2,t=!0){let n=i.width,s=i.height,r=i.getContext("2d").getImageData(0,0,n,s).data,o=Ki(n,s),a=o.getContext("2d"),l=a.createImageData(n,s),c=l.data,h=(u,f)=>(t?(u=(u+n)%n,f=(f+s)%s):(u=Math.max(0,Math.min(n-1,u)),f=Math.max(0,Math.min(s-1,f))),r[(f*n+u)*4]/255);for(let u=0;u<s;u++)for(let f=0;f<n;f++){let d=h(f+1,u-1)+2*h(f+1,u)+h(f+1,u+1)-(h(f-1,u-1)+2*h(f-1,u)+h(f-1,u+1)),m=h(f-1,u+1)+2*h(f,u+1)+h(f+1,u+1)-(h(f-1,u-1)+2*h(f,u-1)+h(f+1,u-1)),_=-d*e,p=m*e,g=1,v=Math.hypot(_,p,g);_/=v,p/=v,g/=v;let b=(u*n+f)*4;c[b]=(_*.5+.5)*255,c[b+1]=(p*.5+.5)*255,c[b+2]=(g*.5+.5)*255,c[b+3]=255}return a.putImageData(l,0,0),o}function nf(i,e,t,n,s,r){if(e)for(let o=0;o<s;o++)for(let a=0;a<r;a++)i.drawImage(e,o*t/s,a*n/r,t/s+.5,n/r+.5)}function ao(i,e,t,n=null,s=1,r=1){let o={w:i,h:e,hb:parseInt(t.h.replace(/[^0-9,]/g,"").split(",")[0],10)};for(let a of["c","h","r","e"]){o[a]=Ki(i,e),o[a].__k=a;let l=o[a].getContext("2d");l.fillStyle=t[a],l.fillRect(0,0,i,e),o[a+"g"]=l}return n&&n.c&&(o.photo=!0,nf(o.cg,n.c,i,e,s,r),n.r&&nf(o.rg,n.r,i,e,s,r),n.n&&(o.n=Ki(i,e),nf(o.n.getContext("2d"),n.n,i,e,s,r))),o.scale=a=>{for(let l of["c","h","r","e"])o[l+"g"].setTransform(a,0,0,a,0,0)},o.rect=(a,l,c,h,u)=>{for(let f of["c","h","r","e"])u[f]!=null&&(o[f+"g"].fillStyle=u[f],o[f+"g"].fillRect(a,l,c,h))},o.path=(a,l)=>{for(let c of["c","h","r","e"])if(l[c]!=null){let h=o[c+"g"];h.fillStyle=l[c],h.beginPath(),a(h),h.fill()}},o.noise=(a,l,c=2600,h=2)=>{if(o.photo)return;let u=o[a+"g"];for(let f=0;f<c;f++){let d=Mt();u.fillStyle=`rgba(${d<.5?"0,0,0":"255,255,255"},${l*Mt()})`,u.fillRect(Mt()*i,Mt()*e,h,h)}},o}var Fe=i=>`rgb(${i|0},${i|0},${i|0})`;function nr(i,{normal:e=2.2,srgbE:t=!0}={}){let n=$M(i.h,e);if(i.n){let s=i.w,r=i.h.height,o=i.hg.getImageData(0,0,s,r).data,a=i.n.getContext("2d"),l=a.getImageData(0,0,s,r),c=n.getContext("2d").getImageData(0,0,s,r).data;for(let h=0;h<o.length;h+=4)o[h]!==i.hb&&(l.data[h]=c[h],l.data[h+1]=c[h+1],l.data[h+2]=c[h+2]);a.putImageData(l,0,0),n=i.n}return{map:_i(i.c),normal:_i(n,{srgb:!1}),rough:_i(i.r,{srgb:!1}),emissive:_i(i.e,{srgb:t})}}var sr=1;function Dm(i){sr=i}var ir=i=>ds.mat&&ds.mat[i]||null,oo=(i,e)=>Math.max(1,Math.round(e/(i&&i.tile||e)));function rf({cobble:i,rails:e,markings:t}){let n=ir(i?"cobble":"asphalt"),s=Math.round((n?1024:512)*sr),r=Math.round(s*.75),o=s/512,a=ao(s,r,{c:i?"#6f655b":"#4a4b4e",h:Fe(90),r:Fe(i?200:225),e:"#000"},n,oo(n,6.8),oo(n,5));if(i&&!n){let h=r/18;for(let u=0;u<18;u++){let f=u%2*9-9;for(;f<s;){let d=18+Mt()*12,m=100+Mt()*50|0,_=150+Mt()*60;a.path(p=>p.roundRect(f+1.5,u*h+1.5,d-3,h-3,6),{c:`rgb(${m+12},${m+2},${m-10})`,h:Fe(_),r:Fe(150+Mt()*60)}),a.path(p=>p.roundRect(f+5,u*h+4,d-10,h-9,5),{h:Fe(_+25)}),f+=d}}}else if(!i){a.noise("c",.25,26e3,2),a.noise("h",.5,3e4,1),a.noise("r",.3,9e3,3);for(let c=0;c<6;c++){let h=Mt()*s,u=Mt()*r;a.path(f=>f.ellipse(h,u,(20+Mt()*50)*o,(8+Mt()*20)*o,Mt()*3,0,7),{c:"rgba(30,30,32,0.22)",r:Fe(150)})}for(let c=0;c<3;c++){let h=Mt()*s;a.path(u=>{u.moveTo(h,0);for(let f=0;f<=r;f+=16*o)u.lineTo(h+Math.sin(f*.05+c)*10*o,f);u.lineTo(h+2*o,r),u.lineTo(h+2*o,0)},{c:"rgba(20,20,20,0.35)",h:Fe(70)})}if(t)for(let c of[-1.1,1.1]){let h=(c+3.4)/6.8*s;a.rect(h-3*o,0,6*o,r*.6,{c:"#dcdcd4",h:Fe(100),r:Fe(140)})}for(let c of[.6,6.2]){let h=c/6.8*s;a.rect(h-2.5*o,0,5*o,r,{c:"#d4d4cc",h:Fe(100),r:Fe(150)})}}if(e)for(let c of[-2.2,0,2.2])for(let h of[-.72,.72]){let u=(c+h+3.4)/6.8*s;a.rect(u-6*o,0,12*o,r,{c:"#3f3c3a",h:Fe(60),r:Fe(170)}),a.rect(u-2.5*o,0,5*o,r,{c:"#b9bcc0",h:Fe(140),r:Fe(55)})}let l=nr(a,{normal:i?3:1.4});for(let c of["map","normal","rough"])l[c].wrapS=Mn;return l}function Um(i){let e=ir(i?"pavingOld":"paving"),t=Math.round((e?512:256)*sr),s=ao(t,t,{c:i?"#c3baac":"#b9b6b0",h:Fe(150),r:Fe(215),e:"#000"},e,oo(e,2),oo(e,2));if(!e){let r=i?4:8,o=t/r;for(let a=0;a<r;a++)for(let l=0;l<r;l++){let c=(i?175:182)+Mt()*30|0;s.rect(a*o+2,l*o+2,o-4,o-4,{c:`rgb(${c+6},${c},${c-8})`,h:Fe(170+Mt()*30)})}s.noise("c",.12,9e3,2),s.noise("h",.25,9e3,1)}return nr(s,{normal:2})}function Fm(){let i=ir("grass"),e=Math.round((i?512:256)*sr),t=e,n=ao(e,t,{c:"#5d7f3a",h:Fe(120),r:Fe(240),e:"#000"},i,1,1);if(!i)for(let s=0;s<9e3;s++){let r=Mt();n.rect(Mt()*e,Mt()*t,2,3,{c:r<.5?"#4b6d2e":"#6f9446",h:Fe(80+r*120)})}return nr(n,{normal:1.5})}var Ea={austro:{bw:1.9,fh:3.3},stalinka:{bw:2.4,fh:3.3},classic:{bw:2.2,fh:3.6},panel:{bw:2.6,fh:2.8},constructivist:{bw:3,fh:3.1},modern:{bw:1.6,fh:3},brick:{bw:1.9,fh:3.2}};function Om(i){if(i==="modern"&&ir("tower"))return QM();let e=Ea[i],t=ir(i==="brick"?"bricks":i==="panel"?"concrete":"plaster"),n=(t?128:96)*sr/96,s=96,r=Math.round(s*e.fh/e.bw),o=Math.round(s*4*n),a=Math.round(r*2*n),l=ao(o,a,{c:"#f2efe9",h:Fe(150),r:Fe(230),e:"#000"},t,oo(t,e.bw*4),oo(t,e.fh*2));if(l.scale(n),i==="brick"&&!t){let h=Math.round(a/7);for(let u=0;u<h;u++)for(let f=u%2*-6;f<o;f+=12){let d=170+Mt()*60|0;l.rect(f+.5,u*7+.5,11,6,{c:`rgb(${d},${d-20},${d-30})`,h:Fe(165+Mt()*25)})}}else i!=="modern"&&(l.noise("c",.07,14e3,2),l.noise("h",.18,12e3,2));let c=(h,u,f,d,m,_)=>{l.rect(h,u,f,d,{c:"#2c3a4c",h:Fe(70),r:Fe(35),e:m?Mt()<.5?"#ffc977":"#ffe0a8":"#000"}),_&&l.rect(h+2,u+2,f*(.3+Mt()*.3),d-4,{c:_,r:Fe(200),e:m?"#e8a05a":null}),l.rect(h+f*.08,u+3,f*.18,d-6,{c:"rgba(160,190,220,0.25)"})};for(let h=0;h<2;h++)for(let u=0;u<4;u++){let f=u*s,d=h*r,m=Mt()<.55,_=Mt()<.5?jM(["#e9e2d0","#d9c7a8","#c9d4dc","#b98b7a"]):null;if(i==="austro"||i==="brick"||i==="classic"||i==="stalinka"){let p=s*(i==="stalinka"?.46:i==="classic"?.44:.5),g=r*(i==="classic"?.6:.55),v=f+(s-p)/2,b=d+r*.2;i==="brick"?l.path(M=>{M.moveTo(v-6,b+2),M.arc(v+p/2,b+2,p/2+6,Math.PI,0),M.closePath()},{c:"#8c4a36",h:Fe(185)}):l.rect(v-8,b-16,p+16,9,{c:"#f8f5ee",h:Fe(220)}),i==="classic"&&l.path(M=>{M.moveTo(v-10,b-16),M.lineTo(v+p/2,b-34),M.lineTo(v+p+10,b-16),M.closePath()},{c:"#f8f5ee",h:Fe(225)}),l.rect(v-5,b-5,p+10,g+10,{c:"#fbf8f2",h:Fe(200),r:Fe(170)}),c(v,b,p,g,m,_),l.rect(v+p/2-2,b,4,g,{c:"#f4f1ea",h:Fe(190),r:Fe(170),e:"#000"}),l.rect(v,b+g*.36,p,4,{c:"#f4f1ea",h:Fe(190),r:Fe(170),e:"#000"}),l.rect(v-9,b+g+4,p+18,7,{c:"#e3ddd0",h:Fe(230)}),i==="stalinka"&&(l.rect(v-4,b+g+16,p+8,r*.12,{c:"#e9e3d6",h:Fe(185)}),l.rect(f,d+r-5,s,5,{h:Fe(110)}))}else if(i==="panel"){let p=s*.52,g=r*.46,v=f+(s-p)/2,b=d+r*.24;l.rect(f,d,2,r,{c:"#9c9a94",h:Fe(80)}),l.rect(f,d,s,2,{c:"#9c9a94",h:Fe(80)}),l.rect(v-3,b-3,p+6,g+6,{c:"#eeeeea",h:Fe(120),r:Fe(170)}),c(v,b,p,g,m,_),l.rect(v+p*.6,b,3,g,{c:"#eeeeea",e:"#000"}),u%2===1&&l.rect(f+4,b+g+6,s-8,r*.2,{c:"#d9d6cf",h:Fe(205)})}else if(i==="constructivist"){let p=d+r*.28,g=r*.42;c(f,p,s,g,m,_);for(let v=0;v<4;v++)l.rect(f+v*s/4,p,3,g,{c:"#e9e6df",h:Fe(190),r:Fe(170),e:"#000"});l.rect(f,p-4,s,4,{c:"#e9e6df",h:Fe(200)}),l.rect(f,p+g,s,5,{c:"#e9e6df",h:Fe(210)})}else i==="modern"&&(l.rect(f,d,s,r,{c:"#a8bccf",h:Fe(120),r:Fe(18),e:m&&Mt()<.7?"#f3e6c8":"#000"}),l.rect(f+6,d+6,s*.3,r-20,{c:"rgba(255,255,255,0.18)"}),l.rect(f,d+r-14,s,14,{c:"#5f6b78",h:Fe(160),r:Fe(80),e:"#000"}),l.rect(f,d,3,r,{c:"#3a434d",h:Fe(185),r:Fe(60),e:"#000"}))}return{...nr(l,{normal:i==="modern"?.6:2.4}),bw:e.bw*4,fh:e.fh*2}}function jM(i){return i[Mt()*i.length|0]}function QM(){let i=ir("tower"),e=Math.round(1024*sr),t=ao(e,e,{c:"#888",h:Fe(150),r:Fe(60),e:"#000"},i,1,1),n=t.cg.getImageData(0,0,e,e).data,s=t.eg,r=s.getImageData(0,0,e,e),o=r.data,a=40,l=[];for(let c=0;c<a*a;c++)l.push(Mt()<.45?Mt()<.5?[255,205,140]:[255,232,190]:null);for(let c=0;c<e;c++)for(let h=0;h<e;h++){let u=(c*e+h)*4,f=n[u],d=n[u+1],m=n[u+2],_=.3*f+.59*d+.11*m,p=l[(c*a/e|0)*a+(h*a/e|0)];p&&_<110&&m>=f&&(o[u]=p[0],o[u+1]=p[1],o[u+2]=p[2])}return s.putImageData(r,0,0),{...nr(t,{normal:1}),bw:13,fh:13}}function of(i){let e=ir(i?"roofFlat":"roofTiles"),t=Math.round((e?512:256)*sr),s=ao(t,t,{c:i?"#6c6a66":"#a8492f",h:Fe(120),r:Fe(i?235:160),e:"#000"},e,1,1);if(e)return nr(s,{normal:2});if(i){s.noise("c",.3,2e4,2),s.noise("h",.5,2e4,2);for(let r=0;r<4;r++)s.rect(0,r*64,t,2,{c:"#56544f",h:Fe(170)})}else for(let r=0;r<10;r++)for(let o=0;o<11;o++){let a=o*24+r%2*12,l=r*26,c=Mt();s.path(h=>{h.moveTo(a-12,l),h.lineTo(a+12,l),h.lineTo(a+12,l+20),h.arc(a,l+20,12,0,Math.PI),h.closePath()},{c:`rgb(${150+c*40|0},${62+c*18|0},${40+c*10|0})`,h:Fe(120+c*40)}),s.path(h=>{h.moveTo(a-8,l+2),h.lineTo(a+2,l+2),h.lineTo(a+2,l+24),h.lineTo(a-8,l+20),h.closePath()},{h:Fe(200)})}return nr(s,{normal:i?1.2:3})}function Bm(){return _i(Ki(128,32,(i,e,t)=>{i.fillStyle="#f5f5f5",i.fillRect(0,0,e,t),i.fillStyle="#d63028";for(let n=-t;n<e+t;n+=32)i.beginPath(),i.moveTo(n,t),i.lineTo(n+16,t),i.lineTo(n+16+t,0),i.lineTo(n+t,0),i.closePath(),i.fill()}))}function rr(i,e,t,n=256,s=96){return _i(Ki(n,s,r=>{r.fillStyle=e,r.fillRect(0,0,n,s),r.fillStyle=t,r.font=`900 ${s*.55}px Rubik, system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,n/2,s/2+2)}),{repeatU:!1,repeatV:!1})}function km(){return _i(Ki(256,128,(i,e,t)=>{i.fillStyle="#eef0f2",i.fillRect(0,0,e,t),i.fillStyle="#2b3a4e";for(let n=0;n<5;n++)i.fillRect(10+n*49,22,40,40);i.fillStyle="#c9ced4",i.fillRect(0,92,e,6)}),{repeatU:!1,repeatV:!1})}function Yc(){return _i(Ki(128,128,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}),{repeatU:!1,repeatV:!1})}function zm(){return _i(Ki(8,64,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.4,"rgba(0,0,0,0.18)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}),{repeatU:!0,repeatV:!1})}function Gm(i){let r=Ki(512,256,a=>{let l=["#7a1f1a","#1f4a36","#1d355f","#4b2a55","#5a3a1a","#1b1b1b","#6b5a18","#234a55"];for(let c=0;c<8;c++){let h=c%2*256,u=(c>>1)*64,f=i[c%i.length]||"\u041A\u0410\u0412\u0410";a.fillStyle=l[c],a.fillRect(h,u,256,64),a.strokeStyle="#e8c878",a.lineWidth=3,a.strokeRect(h+4,u+4,248,56),a.fillStyle="#f6e7b8",a.font=`800 ${f.length>9?26:34}px Rubik, system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(f,h+128,u+32+2)}});return{tex:_i(r,{repeatU:!1,repeatV:!1}),uv:a=>{let l=a%2/2,c=1-((a>>1)+1)/4;return[l,c,l+.5,c+.25]}}}var Ia=50,tS=new Xr({depthPacking:xu}),Un=i=>new At({roughness:.9,metalness:0,...i});function Xm(i,e=!0){Nm(i.id.length*977+i.id.charCodeAt(0));let t=rf({cobble:!!i.cobble,rails:!!i.tram,markings:!i.cobble}),n=rf({cobble:!1,rails:!1,markings:!1}),s=Um(!!i.cobble),r=Fm(),o=of(!1),a=of(!0),l=Gm(i.ads),c=[...new Set(i.fac.concat(["panel"]))],h={},u={};for(let d of c)h[d]=Om(d),u[d]=Un({map:h[d].map,normalMap:h[d].normal,roughnessMap:h[d].rough,emissiveMap:h[d].emissive,emissive:"#ffffff",emissiveIntensity:0,vertexColors:!0,metalness:d==="modern"?.55:0,roughness:1});let f={fac:h,wall:u,signsUV:l.uv,road:Un({map:t.map,normalMap:t.normal,roughnessMap:t.rough,roughness:1}),asph:Un({map:n.map,normalMap:n.normal,roughnessMap:n.rough,roughness:1}),walk:Un({map:s.map,normalMap:s.normal,roughnessMap:s.rough,vertexColors:!0,roughness:1}),grass:Un({map:r.map,normalMap:r.normal,vertexColors:!0,roughness:1}),roofP:Un({map:o.map,normalMap:o.normal,roughnessMap:o.rough,vertexColors:!0,roughness:1,emissive:"#000000"}),roofF:Un({map:a.map,normalMap:a.normal,roughnessMap:a.rough,vertexColors:!0,roughness:1,emissive:"#000000"}),det:Un({vertexColors:!0,roughness:.82}),leaves:Un({vertexColors:!0,roughness:.95,emissive:"#000000"}),metal:Un({color:"#2a2c31",metalness:.7,roughness:.42}),gold:Un({vertexColors:!0,metalness:1,roughness:.28}),glass:Un({vertexColors:!0,color:"#9fb4c8",metalness:.6,roughness:.06}),lamp:Un({color:"#fff2c8",emissive:"#ffcf7a",emissiveIntensity:.3}),glow:new Xt({map:Yc(),color:"#ffbe6a",transparent:!0,opacity:0,blending:Xi,depthWrite:!1}),ao:new Xt({map:zm(),color:"#000000",transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),sign:Un({map:l.tex,emissiveMap:l.tex,emissive:"#ffffff",emissiveIntensity:0,roughness:.5})};return f.ao.map.repeat.set(1,1),f.ao.color.set("#ffffff"),f.ao.blending=1,f.v=ju(e),f}function qm(i){let e=new Set,t=Object.values(i).concat(Object.values(i.wall));for(let n of t)if(n&&n.isMaterial){for(let s of["map","normalMap","roughnessMap","emissiveMap"])n[s]&&!e.has(n[s])&&(e.add(n[s]),n[s].dispose());n.dispose()}}function Ym(i,e){for(let n of Object.values(i.wall))n.emissiveIntensity=e.win;i.lamp.emissiveIntensity=e.lamp,i.sign.emissiveIntensity=e.night?.9:e.tod==="sunset"?.35:0,i.glow.opacity=e.glow,i.glow.visible=e.glow>0,i.road.color.set(e.wet?"#7c7c7c":"#ffffff"),i.road.roughness=e.wet?.32:1,i.asph.color.set(e.wet?"#6c6c6c":"#ffffff"),i.asph.roughness=e.wet?.28:1,i.walk.roughness=e.wet?.5:1;let t=e.snow?e.night?.12:.5:0;for(let n of[i.roofP,i.roofF,i.leaves])n.emissive.set(e.snow?"#dfe6ee":"#000000"),n.emissiveIntensity=t;i.road.emissive.set(e.snow?"#4c535b":"#000000"),i.walk.emissive.set(e.snow?"#6a727b":"#000000")}var Hm={austro:{fl:[3,4],W:[6.5,10],gap:[.15,.35],D:10,roof:"pitch"},brick:{fl:[2,4],W:[8,13],gap:[.4,2.5],D:10,roof:"pitch"},classic:{fl:[2,3],W:[10,16],gap:[.3,1.5],D:12,roof:"flat"},stalinka:{fl:[6,8],W:[16,26],gap:[.3,2],D:14,roof:"flat"},panel:{fl:[5,9],W:[18,30],gap:[3,8],D:12,roof:"flat"},constructivist:{fl:[5,8],W:[18,28],gap:[1,4],D:14,roof:"flat"},modern:{fl:[12,20],W:[14,20],gap:[4,9],D:16,roof:"flat"}},Ra=(i,e=1.12)=>i.map(t=>Math.min(1,t*e+.03)),Kc=(i,e=.62)=>i.map(t=>t*e);function lo(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var af=(i,[e,t])=>e+i()*(t-e),Ca=(()=>{let i=new Qo(1,2),e=i.attributes.position,t=lo(99);for(let n=0;n<e.count;n++){let s=.82+t()*.3;e.setXYZ(n,e.getX(n)*s,e.getY(n)*s,e.getZ(n)*s)}return i.computeVertexNormals(),i})(),lf=new Ut(.5,.5,1,8),Vm=new Ut(.5,.5,1,12),Gw=new Dt(1,1,1),Wm=new Ut(.35,.5,1,7);function Km(i,e,t,n){let s=e.fac,r={lantern:e.lamp==="lantern"},o={};for(let x of[-1,1]){let y=lo(n*31+(x+2)*7),I=[],C=y()*3;o[x]={list:I,r:y,next:()=>{let P=s[y()*s.length|0],A=Hm[P],B=Ea[P].bw,N=Math.max(2,Math.round(af(y,A.W)/B)),G=N*B,q={s:C,W:G,fam:P,nb:N,floors:Math.round(af(y,A.fl)),pal:y()*1e3|0,seed:y()*1e9|0};I.push(q),C+=G+af(y,A.gap)},until(P){for(;!I.length||I[I.length-1].s<P;)this.next()}}}let a=x=>!x||x.type==="corner"||x.type==="square",l=(x,y=0)=>pn.some(I=>I.type==="corner"&&x+y>I.s-7&&x<I.e+7),c=x=>{let y=ai(x);return y?y.type==="square"?"square":y.type==="corner"?"corner":y.kind||"street":"street"};function h(x,y,I,C,P,A,B,N,G,q){for(let z=y;z<I;z+=1){let j=Math.min(z+1,I),R=qt(z,C,A,{}),F=qt(z,P,A,{}),H=qt(j,P,A,{}),X=qt(j,C,A,{}),oe=q?0:C/N,W=q?1:P/N;x.quad([R.wx,R.wy,R.wz],[F.wx,F.wy,F.wz],[H.wx,H.wy,H.wz],[X.wx,X.wy,X.wz],[0,1,0],[oe,z/G],[W,z/G],[W,j/G],[oe,j/G],B)}}function u(x,y,I,C,P,A){for(let B=y;B<I;B+=1){let N=Math.min(B+1,I),G=qt(B,C,0,{}),q=qt(N,C,0,{}),z=Hc(B,{}),j=Hn(er(0,0,0,z.th),0,0,C>0?-1:1);x.quad([G.wx,G.wy,G.wz],[q.wx,q.wy,q.wz],[q.wx,q.wy+P,q.wz],[G.wx,G.wy+P,G.wz],j,[B/2,0],[N/2,0],[N/2,.07],[B/2,.07],A)}}let f=(x,y=0,I=0)=>{let C=qt(x,y,I,{});return er(C.wx,C.wy,C.wz,C.th)},d=(x,y,I,C,P,A,B,N,G,q,z=0)=>x.geo(y,ro(I,C,P,A,z,B,N,G),q);function m(x,y,I,C,P,A=e.tree,B=Math.random){let N=A==="plane"?Pe("#9a9182"):Pe("#4f3b2a"),G=F=>Pe(F),q=[G("#3f6b2e"),G("#4d7a34"),G("#5a8a3a"),G("#46733a")][B()*4|0];if(A==="poplar"){d(x.det,Wm,y,I,1.5*P,C,.5*P,3*P,.5*P,N),d(x.leaves,Ca,y,I,7*P,C,1.5*P,5.5*P,1.5*P,q);return}let z=A==="plane"?3.2:2.6;d(x.det,Wm,y,I,z*P/2,C,.55*P,z*P,.55*P,N);let j=A==="plane"?2.8:A==="linden"?2.1:2.4,R=A==="linden"?1.35:A==="plane"?.75:1;d(x.leaves,Ca,y,I,(z+j*R*.8)*P,C,j*P,j*R*P,j*P,q),d(x.leaves,Ca,y,I+.9*P,(z+j*R*1.2)*P,C+.5*P,j*.7*P,j*.7*R*P,j*.7*P,Ra(q,1.08)),d(x.leaves,Ca,y,I-1*P,(z+j*R*.9)*P,C-.6*P,j*.65*P,j*.65*R*P,j*.65*P,Kc(q,.9))}function _(x,y,I){let C=f(y,I),P=-Math.sign(I);r.lantern?(He(x.metal,C,-.12,.12,0,.5,-.12,.12,[1,1,1],1,1),He(x.metal,C,-.06,.06,0,3.9,-.06,.06,[1,1,1],1,1),He(x.metal,C,-.24,.24,4.55,4.68,-.24,.24,[1,1,1],1,1),He(x.metal,C,-.06,.06,4.68,4.9,-.06,.06,[1,1,1],1,1),He(x.lamp,C,-.17,.17,3.95,4.55,-.17,.17,[1,1,1],1,1)):(d(x.metal,lf,C,0,4,0,.16,8,.16,[1,1,1]),He(x.metal,C,-.05,.05,7.9,8,Math.min(0,P*1.7),Math.max(0,P*1.7),[1,1,1],1,1),He(x.lamp,C,-.18,.18,7.75,7.88,P*1.4-.32,P*1.4+.32,[1,1,1],1,1));let A=3.6,B=.16,N=P*(r.lantern?.9:1.4);x.glow.quad(Yi(C,-A,B,N-A),Yi(C,A,B,N-A),Yi(C,A,B,N+A),Yi(C,-A,B,N+A),[0,1,0],[0,0],[1,0],[1,1],[0,1],[1,1,1])}function p(x,y,I,C,P=5){let A=f(y,I*P,.14),B=C();if(B<.2){He(x.det,A,-.8,.8,.42,.5,-.22,.22,Pe("#7a5232"),1,1),He(x.det,A,-.8,.8,.5,.92,I*.2,I*.26,Pe("#7a5232"),1,1);for(let N of[-.7,.7])He(x.metal,A,N-.04,N+.04,0,.45,-.2,.2,[1,1,1],1,1)}else if(B<.34)He(x.det,A,-.45,.45,0,.55,-.35,.35,Pe("#8d8478"),1,1),d(x.leaves,Ca,A,0,.75,0,.45,.3,.45,Pe(["#c0392b","#e67e22","#8e44ad","#d35480"][C()*4|0]));else if(B<.46)d(x.det,lf,A,0,.42,0,.45,.85,.45,Pe("#2f5d3a"));else if(B<.62&&e.cafe){let N=Pe(["#f4efe4","#b8322a","#2c4f86","#e7c25a"][C()*4|0]);He(x.metal,A,-.03,.03,0,2.25,-.03,.03,[1,1,1],1,1),d(x.det,Vm,A,0,.74,0,.75,.04,.75,Pe("#e8e2d6")),d(x.det,new Ut(0,1.5,.55,8),A,0,2.33,0,1,1,1,N);for(let G of[-.6,.6])He(x.det,A,G-.2,G+.2,.42,.46,-.2,.2,Pe("#3b2b20"),1,1),He(x.det,A,G+Math.sign(G)*.17,G+Math.sign(G)*.21,.46,.9,-.2,.2,Pe("#3b2b20"),1,1)}else B<.62?(He(x.det,A,-1.2,1.2,0,2.5,-.9,.9,Pe(["#e9e4d8","#c8d6e0","#f0d9a0"][C()*3|0]),1,1),He(x.glass,A,-1,1,.9,2.1,-I*.91-.01,-I*.91+.01,[1,1,1],1,1),He(x.det,A,-1.3,1.3,2.5,2.65,-1,1,Pe("#b8322a"),1,1)):B<.7&&(He(x.metal,A,-.04,.04,0,2.6,-.04,.04,[1,1,1],1,1),He(x.det,A,-.5,.5,2.3,2.6,-.03,.03,Pe("#1f4f8a"),1,1))}function g(x,y,I,C,P,A,B,N){let G=Ju(P),q=ro(y,I,0,C,B),z=Pe(A);for(let[j,R]of Object.entries(G))for(let F of R){if(j==="plate"){let H=Qu(F.clone(),N()*8|0);x.vplate.geo(H,q,[1,1,1]),H.dispose();continue}x["v"+j].geo(F,q,j==="paint"?z:j==="glass"&&P==="bus"?[.8,.85,.9]:[1,1,1])}}function v(x,y,I,C,P){let A=["sedan","sedan","hatch","suv","hatch","sedan","van"][P()*7|0],B=A==="van"?P()<.7?"#eeeeea":"#c9cdd2":ef[P()*ef.length|0];g(x,y,I,C,A,B,P()<.65?0:Math.PI,P)}function b(x,y,I,C){let P=f(y),A="bus",B=Im[e.id]||["#1f5ea8","#d7b52c","#2f7b3d","#e8e6df"][C()*4|0];if(g(x,P,0,I*4.75,A,B,0,C),e.trolley&&!e.tram)for(let G of[-.35,.35])He(x.metal,P,-4.4,-1.2,3.02,3.08,I*4.75+G-.03,I*4.75+G+.03,[1,1,1],1,1);let N=f(y+2,I*7.4,.16);He(x.metal,N,-2,2,2.5,2.6,-.8,.8,[1,1,1],1,1),He(x.glass,N,-2,2,.1,2.5,I*.75-.02,I*.75+.02,[.85,.9,.95],1,1);for(let G of[-1.95,1.95])He(x.metal,N,G-.04,G+.04,0,2.5,-.8,.8,[1,1,1],1,1);He(x.det,N,-1.6,1.6,.45,.5,I*.3-.2,I*.3+.2,Pe("#7a5232"),1,1),He(x.sign,N,-.4,.4,2.62,3,-.03,.03,[1,1,1],1,1)}function M(x,y,I,C,P){let A=y.fam,B=Hm[A],N=t.fac[A],G=Ea[A],q=G.fh,z=lo(y.seed),j=Math.max(2,y.floors+P),R=y.W,F=B.D,H=B.roof==="pitch",X=j*q+.4,oe=y.s+R/2,W=Hc(oe,{}),Y=I*(C+F/2),ae=qt(oe,Y,0,{}),ee=er(ae.wx,ae.wy,ae.wz,W.th),V=(Te,Ie,Ve)=>Yi(ee,Te,Ie,Ve),te=Pe(e.pal[y.pal%e.pal.length]),Ae=Ra(te),he=Kc(te,.7),$e=Pe("#f2efe9"),qe=A==="modern"?Ra(te,1):te;He(x.wall[A],ee,-R/2,R/2,-2.5,X,-F/2,F/2,qe,N.bw,N.fh,!1,0,-R/2);let Ee=-I*F/2,Ue=-I,Oe=(Te,Ie,Ve,ze,ht,Nt,k,jt,Qe=!0)=>{let dt=Ee+Ue*Nt,ce=Ee+Ue*k;He(Te,ee,Ie,Ve,ze,ht,Math.min(dt,ce),Math.max(dt,ce),jt,1,1,Qe)};if(x.ao.quad(V(-R/2,.15,Ee),V(R/2,.15,Ee),V(R/2,.15,Ee+Ue*1.3),V(-R/2,.15,Ee+Ue*1.3),[0,1,0],[0,1],[1,1],[1,0],[0,0],[1,1,1]),H){let Ie=Math.min(4.2,F*.36),Ve=-R/2-.2,ze=R/2+.2,ht=-F/2-.35,Nt=F/2+.35,k=A==="brick"&&z()<.5?Pe("#7d8590"):[1,1,1];x.roofP.quad(V(Ve,X,ht),V(ze,X,ht),V(ze,X+Ie,0),V(Ve,X+Ie,0),Hn(ee,0,.8,-.6),[Ve/3,0],[ze/3,0],[ze/3,1.9],[Ve/3,1.9],k),x.roofP.quad(V(Ve,X,Nt),V(ze,X,Nt),V(ze,X+Ie,0),V(Ve,X+Ie,0),Hn(ee,0,.8,.6),[Ve/3,0],[ze/3,0],[ze/3,1.9],[Ve/3,1.9],k);for(let Qe of[-R/2,R/2])x.det.tri(V(Qe,X,-F/2),V(Qe,X,F/2),V(Qe,X+Ie*.93,0),Hn(ee,Math.sign(Qe),0,0),[0,0],[0,0],[0,0],te);if(R>6.5){let Qe=-I*2.2;He(x.det,ee,-.75,.75,X+.3,X+1.9,Qe-.7,Qe+.7,te,1,1),He(x.glass,ee,-.45,.45,X+.6,X+1.6,Qe+Ue*.71-.01,Qe+Ue*.71+.01,[1,1,1],1,1),He(x.roofP,ee,-.9,.9,X+1.9,X+2.05,Qe-.85,Qe+.85,[1,1,1],1,1)}let jt=Pe("#8a4a3a");for(let Qe=0,dt=1+(z()<.5?1:0);Qe<dt;Qe++){let ce=(z()-.5)*(R-2),gt=I*z()*2;He(x.det,ee,ce-.32,ce+.32,X+1,X+Ie+.9,gt-.32,gt+.32,jt,1,1),He(x.det,ee,ce-.4,ce+.4,X+Ie+.9,X+Ie+1.05,gt-.4,gt+.4,Kc(jt,.8),1,1)}}else{x.roofF.quad(V(-R/2,X,-F/2),V(R/2,X,-F/2),V(R/2,X,F/2),V(-R/2,X,F/2),[0,1,0],[0,0],[R/8,0],[R/8,F/8],[0,F/8],[1,1,1]);let Te=A==="modern"?Pe("#5f6b78"):Ae;for(let[Ie,Ve,ze,ht]of[[-R/2,R/2,-F/2,-F/2+.3],[-R/2,R/2,F/2-.3,F/2],[-R/2,-R/2+.3,-F/2,F/2],[R/2-.3,R/2,-F/2,F/2]])He(x.det,ee,Ie,Ve,X,X+.7,ze,ht,Te,1,1);for(let Ie=0,Ve=1+(z()*3|0);Ie<Ve;Ie++){let ze=(z()-.5)*(R-3),ht=(z()-.5)*(F-3);He(x.det,ee,ze-.6,ze+.6,X,X+.9,ht-.45,ht+.45,Pe("#c9c9c4"),1,1)}if(z()<.5&&d(x.det,Vm,ee,(z()-.5)*(R-4),X+1.2,(z()-.5)*(F-4),1.8,2.4,1.8,Pe("#8a8580")),(A==="panel"||A==="modern")&&He(x.det,ee,-2,2,X,X+2.6,-1.5,1.5,Te,1,1),z()<.4&&He(x.metal,ee,.5,.58,X,X+5,.5,.58,[1,1,1],1,1),A==="stalinka"&&j>=7&&z()<.35){let Ie=R/2-3;He(x.wall[A],ee,Ie-2.4,Ie+2.4,X,X+q*1.6,-2.4,2.4,te,N.bw,N.fh,!1,X,Ie-2.4),He(x.det,ee,Ie-2.7,Ie+2.7,X+q*1.6,X+q*1.6+.5,-2.7,2.7,Ae,1,1),d(x.gold,new Ut(0,1.8,1,8),ee,Ie,X+q*1.6+4.5,0,1,8,1,Pe("#c9a440"))}}if(Oe(x.det,-R/2,R/2,-2,.65,0,.1,A==="brick"?Pe("#7a6a5c"):he),A==="austro"||A==="classic"||A==="stalinka"||A==="brick"){for(let Te of[-R/2,R/2-.36])Oe(x.det,Te,Te+.36,.65,X-.3,0,.09,Ae);for(let Te=1;Te<j;Te++)(Te===1||A!=="stalinka"||Te===j-1)&&Oe(x.det,-R/2-.04,R/2+.04,Te*q-.16,Te*q+.02,0,.16,Ae);Oe(x.det,-R/2-.2,R/2+.2,X-.45,X,0,.42,Ae),A==="stalinka"&&Oe(x.det,-R/2,R/2,.65,q,0,.06,Kc(te,.85))}if(A==="constructivist"){let Te=(z()<.5?-1:1)*(R/2-2.2);Oe(x.glass,Te-1.4,Te+1.4,.6,X-.2,0,.5,[.8,.85,.9]),Oe(x.det,-R/2,R/2,X-.5,X,0,.3,Ae)}if(A==="modern"){for(let Te=-R/2;Te<=R/2+.01;Te+=N.bw/2)Oe(x.metal,Te-.06,Te+.06,3,X,0,.25,[1,1,1],!1);Oe(x.glass,-R/2+.5,R/2-.5,.14,3,-.6,.01,[.7,.8,.88]),Oe(x.det,-R/2,R/2,2.9,3.3,0,.6,Pe("#5f6b78"))}let St=G.bw;if(A==="panel")for(let Te=1;Te<j;Te++)for(let Ie=1;Ie<y.nb;Ie+=2){let Ve=-R/2+Ie*St;Oe(x.det,Ve+.15,Ve+St-.15,Te*q-.1,Te*q+1,0,1.1,Pe("#d6d3cc"))}else if(A!=="modern"&&A!=="constructivist")for(let Te=1;Te<j;Te++){if(z()>(Te===1?.55:.28))continue;let Ie=1+(z()*(y.nb-2)|0),Ve=-R/2+Ie*St,ze=Ve+St*(z()<.3&&Ie+2<y.nb?2:1),ht=Te*q-.1;if(Oe(x.det,Ve-.05,ze+.05,ht,ht+.16,0,.8,Pe("#b8b0a2")),A==="stalinka")Oe(x.det,Ve,ze,ht+.16,ht+1,.68,.8,Ae);else{Oe(x.metal,Ve,ze,ht+1,ht+1.05,.74,.8,[1,1,1]);for(let Nt=Ve;Nt<=ze+.01;Nt+=.24)Oe(x.metal,Nt-.018,Nt+.018,ht+.16,ht+1,.75,.79,[1,1,1],!1)}}if(A!=="modern")for(let Te=0;Te<y.nb;Te+=2+(z()*2|0)){let Ie=-R/2+Te*St+.3,Ve=Math.min(R/2-.3,Ie+St*2-.6);if(!(Ve-Ie<1.2))if(z()<.6){Oe(x.glass,Ie,Ve,.15,2.5,0,.04,[.85,.9,1]),Oe(x.det,Ie-.1,Ve+.1,2.5,2.62,0,.1,Pe("#3b2b20"));let ze=t.signsUV(z()*8|0),ht=2.66,Nt=3.1,k=Ee+Ue*.09,jt=Hn(ee,0,0,Ue);if(x.sign.quad(V(Ie,ht,k),V(Ve,ht,k),V(Ve,Nt,k),V(Ie,Nt,k),jt,I>0?[ze[2],ze[1]]:[ze[0],ze[1]],I>0?[ze[0],ze[1]]:[ze[2],ze[1]],I>0?[ze[0],ze[3]]:[ze[2],ze[3]],I>0?[ze[2],ze[3]]:[ze[0],ze[3]],[1,1,1]),e.cafe&&z()<.5){let Qe=Pe(["#b8322a","#2f6f4f","#2c4f86","#7a3b6e","#c77a1e"][z()*5|0]),dt=3.2,ce=2.55,gt=1.3;x.det.quad(V(Ie,dt,Ee),V(Ve,dt,Ee),V(Ve,ce,Ee+Ue*gt),V(Ie,ce,Ee+Ue*gt),Hn(ee,0,.9,Ue*.45),[0,0],[0,0],[0,0],[0,0],Qe),x.det.quad(V(Ie,ce,Ee+Ue*gt),V(Ve,ce,Ee+Ue*gt),V(Ve,ce-.25,Ee+Ue*gt),V(Ie,ce-.25,Ee+Ue*gt),Hn(ee,0,0,Ue),[0,0],[0,0],[0,0],[0,0],Ra(Qe))}}else{let ze=(Ie+Ve)/2;Oe(x.det,ze-.6,ze+.6,.14,2.45,0,.06,Pe("#4a3020")),Oe(x.det,ze-.78,ze+.78,2.45,2.7,0,.14,Ae),Oe(x.det,ze-.8,ze+.8,0,.28,0,.45,Pe("#8f877c"))}}}function E(x){let y=x*Ia,I=y+Ia,C=new _t,P=lo(n*7919+x*131+13),A={vpaint:new yt,vglass:new yt,vchrome:new yt,vrubber:new yt,vtrim:new yt,vhead:new yt,vtail:new yt,vplate:new yt,road:new yt,asph:new yt,walk:new yt,grass:new yt,roofP:new yt,roofF:new yt,det:new yt,leaves:new yt,metal:new yt,gold:new yt,glass:new yt,lamp:new yt,glow:new yt,ao:new yt,sign:new yt,wall:{}};for(let R of Object.keys(t.wall))A.wall[R]=new yt;let B=[1,1,1],N=Pe("#8f8579"),G=Pe("#8a7a62"),q=[1,1,1];h(A.road,y,I,-3.4,3.4,0,B,6.8,5,!0);for(let R=y;R<I;){let F=ai(R)||{e:I,type:"street",kind:"street"},H=Math.min(F.e,I),X=F.type==="square"?"square":F.kind||"street";for(let oe of[-1,1]){if(F.type==="corner"&&oe===-F.dir)continue;let W=(Y,ae,ee,V,te,Ae=2,he=2)=>h(V,R,H,oe>0?Y:-ae,oe>0?ae:-Y,ee,te,Ae,he,!1);if(F.type==="corner"){W(3.4,9,.14,A.walk,B),u(A.walk,R,H,oe*3.4,.14,Pe("#d8d2c6"));continue}if(X==="square"){W(3.4,34,.14,A.walk,B),u(A.walk,R,H,oe*3.4,.14,Pe("#d8d2c6"));continue}X==="avenue"?(W(3.4,5.8,.02,A.asph,B,6.8,5),W(5.8,9,.16,A.walk,B),u(A.walk,R,H,oe*5.8,.16,Pe("#d8d2c6")),W(9,32,.15,A.walk,N)):(W(3.4,5.8,.14,A.walk,B),u(A.walk,R,H,oe*3.4,.14,Pe("#d8d2c6"))),X==="street"&&W(5.8,30,.13,A.walk,N),X==="boulevard"&&(W(5.8,9.4,.13,A.grass,q,3,3),W(9.4,12.5,.14,A.walk,B),W(12.5,32,.13,A.walk,N)),X==="park"&&W(5.8,40,.13,A.grass,q,3,3),X==="construction"&&W(5.8,40,.12,A.walk,G)}R=H}for(let R of[-1,1]){let F=o[R];F.until(I+40);for(let H of F.list){if(H.s<y||H.s>=I)continue;let X=c(H.s),oe=c(H.s+H.W),W=c(H.s+H.W/2);X!==oe||X!==W||!Aa[X]||!Aa[X].bx||l(H.s,H.W)||M(A,H,R,Aa[X].bx,Aa[X].flo||0)}}for(let R=Math.ceil(y/2)*2;R<I;R+=2){let F=ai(R);if(!F||F.type==="corner"||l(R))continue;let H=F.type==="square"?"square":F.kind||"street",X=Math.round(R)%8===0;for(let oe of[-1,1]){if(H==="avenue"&&Math.round(R)%9===(oe>0?0:4)){let ee=f(R);m(A,ee,0,oe*7.2,1.05,e.tree,P),He(A.det,ee,-.7,.7,.15,.19,oe*7.2-.7,oe*7.2+.7,Pe("#5a4a3a"),1,1)}let W=Math.floor(R/90),Y=oe>0&&(W*7+n)%3===0,ae=W*90+30;if(H==="avenue"&&Y&&Math.round(R)===ae&&ai(R+8)&&ai(R-8)&&ai(R+8).kind==="avenue"&&ai(R-8).kind==="avenue"&&!l(R,8)?b(A,R,oe,P):H==="avenue"&&Math.round(R)%7===(oe>0?1:4)&&!(Y&&Math.abs(R-ae)<11)&&P()<.6&&v(A,f(R),0,oe*4.6,P),H==="boulevard"&&X&&m(A,f(R+(oe>0?0:4)),0,oe*7.6,1.1,e.tree,P),H==="boulevard"&&Math.round(R)%16===(oe>0?6:14)&&p(A,R,oe,P,10.9),H==="park"&&Math.round(R)%6===(oe>0?0:3))for(let ee=0;ee<2;ee++)m(A,f(R+P()*4),0,oe*(9+P()*22),.9+P()*.4,P()<.3?"chestnut":e.tree,P);if(H==="park"&&Math.round(R)%2===0){let ee=f(R);He(A.metal,ee,-1,1,.9,.96,oe*6.1-.03,oe*6.1+.03,B,1,1),He(A.metal,ee,-.04,.04,.13,1,oe*6.1-.04,oe*6.1+.04,B,1,1)}if(H==="construction"&&Math.round(R)%2===0){let ee=f(R);He(A.det,ee,-1,1,.12,2.3,oe*6.1-.04,oe*6.1+.04,Math.round(R)%12<2?Pe("#c94b2c"):Pe("#5e7a5a"),1,1)}(H==="street"||H==="avenue")&&Math.round(R)%10===(oe>0?3:8)&&P()<.55&&p(A,R,oe,P,H==="avenue"?8.2:5)}}for(let R of pn)if(!(R.kind!=="construction"||R.type==="corner"||R.type==="square"||R.s+10<y||R.s+10>=I))for(let F of[-1,1]){if(R.e-R.s<40)continue;let H=f(R.s+24,F*18),X=lo(R.s*3+F),oe=3+(X()*4|0),W=Pe("#b5b1a8");for(let Y=0;Y<=oe;Y++)He(A.det,H,-12,12,Y*3.2,Y*3.2+.3,-6,6,W,1,1);for(let Y=-12;Y<=12;Y+=6)for(let ae of[-6,0,6])He(A.det,H,Y-.2,Y+.2,0,oe*3.2,ae-.2,ae+.2,W,1,1);if(F>0){let V=Pe("#e3b23c");for(let te=0;te<34;te+=2)He(A.det,H,0-.9,0+.9,te,te+.12,10-.9,10+.9,V,1,1);for(let[te,Ae]of[[-.85,-.85],[.85,-.85],[-.85,.85],[.85,.85]])He(A.det,H,0+te-.1,0+te+.1,0,34,10+Ae-.1,10+Ae+.1,V,1,1);He(A.det,H,-8,26,34,34+1.4,10-.6,10+.6,V,1,1),He(A.det,H,-8,-4,34-1.6,34,9,11,Pe("#777"),1,1),He(A.det,H,0-1.2,0+1.2,34-2.6,34,10-1.2,10+1.2,Pe("#d9d4c4"),1,1),He(A.metal,H,18,0+18.06,20,34,10-.03,10+.03,B,1,1),He(A.det,H,0+17.2,0+18.8,19,20,10-.6,10+.6,Pe("#8a5a3a"),1,1)}}let z=14;for(let R=Math.ceil(y/z)*z;R<I;R+=z){let F=ai(R);if(!F||F.type==="corner")continue;let H=F.type==="square"?"square":F.kind||"street",X=H==="avenue"?6.2:3.9;_(A,R,-X),_(A,R+z/2,X)}if(e.tram||e.trolley){let R=e.tram?[0]:[-.35,.35];for(let F=y;F<I;F++)for(let H of R){let X=qt(F,H,6.6,{}),oe=qt(F+1,H,6.6,{}),W=Hn(er(0,0,0,X.th),0,0,.009);A.metal.quad([X.wx-W[0],X.wy,X.wz-W[2]],[X.wx+W[0],X.wy,X.wz+W[2]],[oe.wx+W[0],oe.wy,oe.wz+W[2]],[oe.wx-W[0],oe.wy,oe.wz-W[2]],[0,-1,0],[0,0],[0,0],[0,0],[0,0],B)}for(let F=Math.ceil(y/28)*28+3;F<I;F+=28){let H=ai(F);if(a(H)||l(F))continue;let X=H.kind||"street",oe=X==="avenue"?5.6:5.55,W=f(F);for(let Y of[-1,1])d(A.metal,lf,W,0,3.5,Y*oe,.2,7,.2,B);He(A.metal,W,-.01,.01,6.6,6.63,-oe,oe,B,1,1)}}for(let R of pn){if(R.type!=="corner"||R.s<y||R.s>=I)continue;let F=f(R.s),H=(te,Ae,he)=>Yi(F,te,Ae,he),X=-R.dir,oe=[0,1,0],W=(te,Ae,he,$e,qe,Ee,Ue)=>te.quad(H(Ae,Ee,$e),H(he,Ee,$e),H(he,Ee,qe),H(Ae,Ee,qe),oe,[$e/2,Ae/2],[$e/2,he/2],[qe/2,he/2],[qe/2,Ae/2],Ue);A.road.quad(H(0,-.02,-3.4),H(48,-.02,-3.4),H(48,-.02,3.4),H(0,-.02,3.4),oe,[0,0],[0,9.6],[1,9.6],[1,0],B),W(A.walk,-6,48,X*3.4,X*5.8,.14,B),W(A.walk,-6,48,X*5.8,X*18,.13,N),W(A.walk,-6,2*Qs-10,R.dir*3.4,R.dir*16,-.05,N),W(A.walk,2*Qs-10,48,R.dir*3.4,R.dir*5.8,.14,B),W(A.walk,2*Qs-10,48,R.dir*5.8,R.dir*16,.13,N);let Y=e.fac[0],ae=t.fac[Y],ee=Ea[Y].fh,V=lo(R.s|0);for(let te=4;te<46;te+=8.4){let Ae=Pe(e.pal[V()*e.pal.length|0]),he=ee*(3+(V()*2|0));He(A.wall[Y],F,te,te+8,-2,he,-R.dir*15,-R.dir*6,Ae,ae.bw,ae.fh,!1,0,te),He(A.det,F,te-.1,te+8.1,he-.4,he,-R.dir*6.35,-R.dir*6,Ra(Ae),1,1),A.roofF.quad(H(te,he,-R.dir*15),H(te+8,he,-R.dir*15),H(te+8,he,-R.dir*6),H(te,he,-R.dir*6),oe,[0,0],[1,0],[1,1],[0,1],B)}for(let te=2*Qs+4;te<46;te+=8.4){let Ae=Pe(e.pal[V()*e.pal.length|0]),he=ee*3;He(A.wall[Y],F,te,te+8,-2,he,R.dir*6,R.dir*15,Ae,ae.bw,ae.fh,!0,0,te)}m(A,F,6,R.dir*9,1.1,e.tree,V),m(A,F,12,R.dir*11,.9,e.tree,V)}for(let R of pn){if(R.type!=="square"||R.s<y||R.s>=I)continue;let F=e.land,H=[[40,-22],[45,22],[98,-22]];F.forEach((X,oe)=>{let[W,Y]=H[oe];Yu(X,f(R.s+W,Y),Math.sign(Y),A)}),F.length<3&&Yu("statue",f(R.s+92,16),1,A)}for(let R=Math.ceil(y/12)*12;R<I;R+=12){let F=ai(R);if(!F||F.type!=="square"||R<F.s+6||R>F.e-6)continue;let H=f(R,0,.14),X=[[40,-1],[45,1],[98,-1],[92,1]].slice(0,Math.max(e.land.length,2)+(e.land.length<3?1:0));for(let oe of[-1,1])X.some(([W,Y])=>Y===oe&&Math.abs(R-(F.s+W))<30)||(m(A,H,0,oe*8.5,1+P()*.25,e.tree,P),P()<.5&&p(A,R+4,oe,P,6.5))}let j=[["road",t.road,0,1],["asph",t.asph,0,1],["walk",t.walk,0,1],["grass",t.grass,0,1],["roofP",t.roofP,1,1],["roofF",t.roofF,1,1],["det",t.det,1,1],["leaves",t.leaves,1,1],["metal",t.metal,1,0],["gold",t.gold,1,0],["glass",t.glass,0,0],["lamp",t.lamp,0,0],["sign",t.sign,0,0],["ao",t.ao,0,0],["glow",t.glow,0,0],["vpaint",t.v.paint,1,1],["vglass",t.v.glass,1,0],["vchrome",t.v.chrome,0,0],["vrubber",t.v.rubber,1,0],["vtrim",t.v.trim,1,0],["vhead",t.v.head,0,0],["vtail",t.v.tail,0,0],["vplate",t.v.plate,0,0]];for(let R of Object.keys(A.wall))j.push([null,t.wall[R],1,1,A.wall[R]]);for(let[R,F,H,X,oe]of j){let W=(oe||A[R]).build();if(!W)continue;let Y=new st(W,F);Y.castShadow=!!H,Y.receiveShadow=!!X,H&&(Y.customDepthMaterial=tS),(F===t.glow||F===t.ao)&&(Y.renderOrder=1),C.add(Y)}return i.add(C),C}function T(x){x.traverse(y=>{y.isMesh&&y.geometry.dispose()}),i.remove(x)}return{buildChunk:E,disposeChunk:T}}var Pa=class i extends st{constructor(){let e=i.SkyShader,t=new Jt({name:e.name,uniforms:oi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:nn,depthWrite:!1});super(new Dt(1,1,1),t),this.isSky=!0}};Pa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nS=new Hi(-1,1,1,-1,0,1),cf=class extends vt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},iS=new cf,ps=class{constructor(e){this._mesh=new st(iS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Zc=class extends Vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oi.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var La=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jc=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zc(co),this.copyPass.material.blending=Wi,this.timer=new aa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}La!==void 0&&(o instanceof La?n=!0:o instanceof Jc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var jc=class extends Vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Zm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ho=class i extends Vn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Wt(r,o,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Wt(r,o,{type:sn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Zm;this.highPassUniforms=oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oi.clone(co.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,premultipliedAlpha:!0,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new Xt,this._fsQuad=new ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Jt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ho.BlurDirectionX=new Ce(1,0);ho.BlurDirectionY=new Ce(0,1);var Na={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Qc=class extends Vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=oi.clone(Na.uniforms),this.material=new Wr({name:Na.name,uniforms:this.uniforms,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader}),this._fsQuad=new ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ks?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===da?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ff={day:["\u0414\u0435\u043D\u044C","\u2600\uFE0F"],sunset:["\u0417\u0430\u0445\u0456\u0434 \u0441\u043E\u043D\u0446\u044F","\u{1F307}"],night:["\u041D\u0456\u0447","\u{1F319}"]},eh={clear:["\u042F\u0441\u043D\u043E","\u{1F324}\uFE0F"],rain:["\u0414\u043E\u0449","\u{1F327}\uFE0F"],storm:["\u0413\u0440\u043E\u0437\u0430","\u26C8\uFE0F"],snow:["\u0421\u043D\u0456\u0433","\u{1F328}\uFE0F"],fog:["\u0422\u0443\u043C\u0430\u043D","\u{1F32B}\uFE0F"]},or=["ultra","high","medium","low"],th={ultra:"\u0423\u043B\u044C\u0442\u0440\u0430",high:"\u0412\u0438\u0441\u043E\u043A\u0456",medium:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456",low:"\u041D\u0438\u0437\u044C\u043A\u0456"},sS={day:{dir:[-.45,.8,.42],sunCol:"#fff3e0",sunI:3.2,hemiSky:"#cfe3ff",hemiGround:"#7a6650",hemiI:.45,envI:1,fog:"#bcd0e2",win:0,lamp:.3,top:"#5f9fd8",hor:"#cfe1ee",turb:2.6,ray:1.1,mie:.004,gain:1},sunset:{dir:[-.82,.12,.56],sunCol:"#ffa65e",sunI:2.8,hemiSky:"#f3c7a6",hemiGround:"#4f3a36",hemiI:.4,envI:.9,fog:"#e2aa84",win:.7,lamp:1.4,top:"#3a4f86",hor:"#e9a77c",turb:6,ray:2.6,mie:.006,gain:1},night:{dir:[.35,.6,-.7],sunCol:"#a9bbff",sunI:.42,hemiSky:"#3c4c7c",hemiGround:"#141420",hemiI:.3,envI:.35,fog:"#141b33",win:1.6,lamp:3.2,top:"#050a1c",hor:"#1c2748"}},rS={clear:{tint:null,mix:0,sun:1,dens:.0055,cover:.32,cden:.35,drops:0},rain:{tint:"#7c8693",mix:.62,sun:.28,dens:.011,cover:.85,cden:.85,drops:1e3,gain:.6},storm:{tint:"#4a525e",mix:.82,sun:.12,dens:.015,cover:.97,cden:1,drops:1600,gain:.38},snow:{tint:"#cfd6df",mix:.55,sun:.42,dens:.013,cover:.85,cden:.7,drops:0,snow:!0,gain:.8},fog:{tint:"#c2c7cd",mix:.8,sun:.3,dens:.034,cover:.7,cden:.6,drops:0,gain:.75}},hf=1600,uf=1600,zt={x:22,y0:-3,y1:20,z:22},uo=(i,e,t)=>{let n=t-e;return i<e?i+n*Math.ceil((e-i)/n):i>=t?i-n*Math.ceil((i-t+1e-6)/n):i};function Jm(i,e,t){i.outputColorSpace=wt,i.toneMapping=Ks,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=qs;let n=Math.random,s={bakeGain:.05,tod:"day",wx:"clear",tier:"high",sunDir:new U(-.45,.8,.42).normalize(),flash:0,nextBolt:6,camVel:{x:0,y:0,z:0},onThunder:null,state:{}};e.fog=new Vo("#bcd0e2",.0055);let r=new ia("#cfe3ff","#7a6650",.45);e.add(r);let o=new cs("#fff3e0",3.2);e.add(o),e.add(o.target),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:200}),o.shadow.bias=-4e-4,o.shadow.normalBias=.05;let a=new cs("#9ec4ff",.25);e.add(a),e.add(a.target);let l=new Xs("#ffd49a",0,16,1.4);e.add(l),Object.assign(s,{hemi:r,sun:o,fill:a,near:l});let h=(()=>{let Y=new Pa;return Y.scale.setScalar(420),Y})();h.material.uniforms.skyGain={value:1},h.material.fragmentShader=`uniform float skyGain;
`+h.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( texColor * skyGain, 1.0 );"),h.material.fog=!1,h.renderOrder=-3,h.frustumCulled=!1,e.add(h);let u=new tn(400,32,16),f=new Xt({vertexColors:!0,side:nn,fog:!1,depthWrite:!1}),d=new st(u,f);d.renderOrder=-3,d.frustumCulled=!1,e.add(d);let m=Yc(),_=new st(new Oi(9,24),new Xt({map:m,color:"#e6ecff",fog:!1,transparent:!0,depthWrite:!1,blending:Xi}));_.renderOrder=-2,e.add(_);let p=new vt,g=new Float32Array(600*3);for(let Y=0;Y<600;Y++){let ae=n()*Math.PI*2,ee=.05+n()*1.45,V=380;g.set([Math.cos(ae)*Math.cos(ee)*V,Math.sin(ee)*V,Math.sin(ae)*Math.cos(ee)*V],Y*3)}p.setAttribute("position",new kt(g,3));let v=new as(p,new Ui({color:"#ffffff",size:1.5,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9,depthWrite:!1}));v.renderOrder=-2,v.frustumCulled=!1,e.add(v);function b(Y,ae,ee=.12){let V=u.attributes.position,te=new Float32Array(V.count*3),Ae=new U,he=new Re,$e=s.sunDir;for(let qe=0;qe<V.count;qe++){Ae.fromBufferAttribute(V,qe).normalize(),he.copy(ae).lerp(Y,Math.pow(Math.max(0,Ae.y),.5)),Ae.y<0&&he.copy(ae).multiplyScalar(.7);let Ee=Math.pow(Math.max(0,Ae.dot($e)),6)*ee;he.r+=Ee*.6,he.g+=Ee*.7,he.b+=Ee,te.set([he.r,he.g,he.b],qe*3)}u.setAttribute("color",new kt(te,3))}let M=new io(i),E=new Us,T=new st(h.geometry,h.material);T.scale.setScalar(100),E.add(T);let x=new st(u,f);x.scale.setScalar(.25),E.add(x);let y=null,I={};function C(){if(s.photo){let te=M.fromEquirectangular(s.photo);y&&y.dispose(),y=te,e.environment=te.texture,s.onEnv&&s.onEnv(te.texture);return}T.visible=!!s.phys,x.visible=!s.phys;let Y=h.material.uniforms,ae=Y.skyGain.value,ee=Y.showSunDisc.value;Y.skyGain.value=ae*s.bakeGain,Y.showSunDisc.value=0;let V=M.fromScene(E,0,.5,500);Y.skyGain.value=ae,Y.showSunDisc.value=ee,y&&y.dispose(),y=V,e.environment=V.texture,s.onEnv&&s.onEnv(V.texture)}let P=new Float32Array(hf*3),A=new Float32Array(hf*6);for(let Y=0;Y<hf;Y++)P.set([(n()*2-1)*zt.x,zt.y0+n()*(zt.y1-zt.y0),(n()*2-1)*zt.z],Y*3);let B=new vt;B.setAttribute("position",new kt(A,3).setUsage(Ic));let N=new ks(B,new os({color:"#c3cfdc",transparent:!0,opacity:.45,depthWrite:!1}));N.frustumCulled=!1,N.visible=!1,e.add(N);let G=new Float32Array(uf*3);for(let Y=0;Y<uf;Y++)G.set([(n()*2-1)*zt.x,zt.y0+n()*(zt.y1-zt.y0),(n()*2-1)*zt.z],Y*3);let q=new vt;q.setAttribute("position",new kt(G,3).setUsage(Ic));let z=new as(q,new Ui({color:"#ffffff",map:m,size:.16,transparent:!0,depthWrite:!1,opacity:.95}));z.frustumCulled=!1,z.visible=!1,e.add(z);let j=0,R=.45,F=1,H=1,X=null,oe=null;function W(){let Y=i.getDrawingBufferSize(new Ce),ae=new Wt(Y.x,Y.y,{type:sn,samples:4});X=new $c(i,ae),X.addPass(new jc(e,t)),oe=new ho(new Ce(Y.x/2,Y.y/2),.3,.4,2.5),X.addPass(oe),X.addPass(new Qc)}return s.apply=function(Y,ae){Y&&(s.tod=Y),ae&&(s.wx=ae);let ee=sS[s.tod],V=rS[s.wx],te=s.tod==="night",Ae=te?.2:s.tod==="sunset"?.65:1,he=V.tint?new Re(V.tint).multiplyScalar(Ae):null,$e=Ue=>{let Oe=new Re(Ue);return he&&Oe.lerp(he,V.mix),Oe};s.sunDir.set(...ee.dir).normalize(),e.fog.color.copy($e(ee.fog)),e.fog.density=V.dens*(te&&s.wx==="clear"?1.2:1);let qe=!te&&V.mix<.5;if(s.phys=qe,h.visible=qe,d.visible=!qe,v.visible=te&&V.mix<.5,_.visible=te&&V.mix<.6,qe){let Ue=h.material.uniforms;Ue.turbidity.value=ee.turb+V.mix*6,Ue.rayleigh.value=ee.ray*(1-V.mix*.6),Ue.mieCoefficient.value=ee.mie,Ue.mieDirectionalG.value=.8,Ue.sunPosition.value.copy(s.sunDir),Ue.cloudCoverage.value=V.cover,Ue.cloudDensity.value=V.cden,Ue.showSunDisc.value=V.mix<.5?1:0,H=ee.gain*(V.gain||1),Ue.skyGain.value=H}else b($e(ee.top),$e(ee.hor),te?.12:V.mix>.5?.05:.3);if(o.color.set(ee.sunCol),o.intensity=ee.sunI*V.sun,o.shadow.intensity=V.mix>.5?.4:1,s.photo=null,e.background=null,ds.sky){let Ue=te?V.mix>.5?"overcast":"night":s.wx==="fog"?"misty":V.mix>.5?"overcast":s.tod==="sunset"?"sunset":"day",Oe=ds.sky[Ue];if(Oe&&Oe.img){if(!I[Ue]){let Ie=new Ot(Oe.img);Ie.colorSpace=wt,Ie.mapping=jr,Ie.needsUpdate=!0,I[Ue]=Ie}let St=te?V.mix>.5?.1:1:s.wx==="storm"?.45:s.wx==="rain"?.72:s.wx==="snow"?.95:1;s.photo=I[Ue],e.background=s.photo,e.backgroundIntensity=St,s.bgBase=St,h.visible=!1,d.visible=!1,v.visible=!1,_.visible=!1,te||s.sunDir.set(-Oe.sun[0],Math.max(.08,Oe.sun[1]),-Oe.sun[2]).normalize();let Te=new Re().setRGB(Oe.sunCol[0],Oe.sunCol[1],Oe.sunCol[2]);s.tod==="sunset"&&Te.lerp(new Re("#ffffff"),.45),!te&&V.mix<.5&&o.color.copy(Te),e.fog.color.setRGB(Oe.hor[0],Oe.hor[1],Oe.hor[2],wt).multiplyScalar(St*(te?.35:1)),V.tint&&!te&&Ue==="day"&&e.fog.color.lerp(new Re(V.tint),V.mix)}}r.color.copy($e(ee.hemiSky)),r.groundColor.set(ee.hemiGround),R=ee.hemiI*(V.mix?1.3:1),r.intensity=R,a.intensity=te?.08:.22,F=ee.envI*(V.mix>.5?.75:1),e.environmentIntensity=F,s.photo&&(R*=.35,r.intensity=R,F=(te?.3:V.mix>.5?.45:.25)*(te?1:e.backgroundIntensity),e.environmentIntensity=F,e.fog.density*=.55,te||(o.intensity*=1.12)),l.intensity=te?24:s.tod==="sunset"||V.mix>.7?5:0,j=V.drops?Math.round(V.drops*(s.tier==="low"?.5:1)):0,N.visible=j>0,B.setDrawRange(0,j*2),N.material.opacity=te?.28:.45,z.visible=!!V.snow,i.toneMappingExposure=(te?1.15:s.tod==="sunset"?.9:.95)*(s.photo?.9:1);let Ee=V.mix>.6&&!te;return s.state={tod:s.tod,wx:s.wx,night:te,gloom:Ee,wet:s.wx==="rain"||s.wx==="storm",snow:!!V.snow,win:ee.win+(Ee?.35:0),lamp:ee.lamp+(V.mix>.7?.9:0),glow:te?.85:s.tod==="sunset"?.3:V.mix>.7?.2:0},C(),oe&&(oe.strength=te?.5:.2,oe.threshold=te?.9:2.5),s.nextBolt=1.5,s.state},s.setTier=function(Y){s.tier=Y;let ae=window.devicePixelRatio||1;i.setPixelRatio(Math.min(ae,{ultra:2,high:1.6,medium:1.3,low:1}[Y]));let ee=Y==="ultra"||Y==="high";(i.shadowMap.enabled!==ee||o.castShadow!==ee)&&(i.shadowMap.enabled=ee,o.castShadow=ee,e.traverse(te=>{te.material&&(Array.isArray(te.material)?te.material:[te.material]).forEach(Ae=>{Ae.needsUpdate=!0})}));let V=Y==="ultra"?2048:1024;o.shadow.mapSize.x!==V&&(o.shadow.mapSize.set(V,V),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null)),Y==="ultra"&&!X&&(W(),s.apply()),Y!=="ultra"&&X&&(X.dispose(),X=null,oe=null),s.resize()},s.resize=function(){if(!X)return;let Y=i.getDrawingBufferSize(new Ce);X.setSize(Y.x/i.getPixelRatio(),Y.y/i.getPixelRatio()),X.setPixelRatio(i.getPixelRatio())},s.render=function(){X?X.render():i.render(e,t)},s.update=function(Y,ae,ee){let V=t.position;h.position.copy(V),d.position.copy(V),v.position.copy(V),_.position.copy(V).addScaledVector(s.sunDir,360),_.lookAt(V),h.material.uniforms.time.value=ae,o.target.position.copy(ee),o.position.copy(ee).addScaledVector(s.sunDir,100),a.target.position.copy(ee),a.position.set(ee.x-s.sunDir.x*50,ee.y+40,ee.z-s.sunDir.z*50);let te=s.camVel;if(N.visible){let Ae=2.5-te.x,he=-24-te.y,$e=1-te.z,qe=.045;for(let Ee=0;Ee<j;Ee++){let Ue=Ee*3,Oe=uo(P[Ue]+Ae*Y,-zt.x,zt.x),St=uo(P[Ue+1]+he*Y,zt.y0,zt.y1),Te=uo(P[Ue+2]+$e*Y,-zt.z,zt.z);P[Ue]=Oe,P[Ue+1]=St,P[Ue+2]=Te;let Ie=Ee*6;A[Ie]=Oe,A[Ie+1]=St,A[Ie+2]=Te,A[Ie+3]=Oe-Ae*qe,A[Ie+4]=St-he*qe,A[Ie+5]=Te-$e*qe}B.attributes.position.needsUpdate=!0,N.position.copy(V)}if(z.visible){for(let Ae=0;Ae<uf;Ae++){let he=Ae*3;G[he]=uo(G[he]+(Math.sin(ae*.9+Ae)*.6-te.x)*Y,-zt.x,zt.x),G[he+1]=uo(G[he+1]+(-1.4-te.y)*Y,zt.y0,zt.y1),G[he+2]=uo(G[he+2]+(Math.cos(ae*.7+Ae*1.3)*.5-te.z)*Y,-zt.z,zt.z)}q.attributes.position.needsUpdate=!0,z.position.copy(V)}if(s.wx==="storm"&&(s.nextBolt-=Y,s.nextBolt<=0&&(s.flash=1,s.nextBolt=4+n()*7,s.onThunder&&s.onThunder(.4+n()*.9))),s.flash>0){s.flash=Math.max(0,s.flash-Y*3.2);let Ae=s.flash>.75||s.flash>.3&&s.flash<.5?s.flash:0;r.intensity=R+Ae*4,e.environmentIntensity=F+Ae*2,s.photo&&(e.backgroundIntensity=s.bgBase+Ae*1.5),h.material.uniforms.skyGain.value=H+Ae*2.5}else r.intensity=R,e.environmentIntensity=F,s.photo&&(e.backgroundIntensity=s.bgBase),h.material.uniforms.skyGain.value=H},s.flashNow=()=>{s.flash=1},s}var fo=(i,e,t)=>i<e?e:i>t?t:i,$m=i=>i*i*(3-2*i),$t={chest:new kn(.2,.32,6,14),belly:new kn(.17,.12,6,14),head:new tn(.15,20,14),neck:new Ut(.06,.07,.12,10),hair:new tn(.158,20,12,0,Math.PI*2,0,Math.PI*.55),nose:new tn(.025,8,6),ear:new tn(.035,8,6),upper:new kn(.068,.24,4,10),fore:new kn(.058,.22,4,10),hand:new tn(.06,10,8),thigh:new kn(.095,.3,4,12),shin:new kn(.075,.32,4,12),shoe:new kn(.07,.17,4,10),cap:new tn(.162,20,10,0,Math.PI*2,0,Math.PI*.5),brim:new Ut(.15,.16,.025,16,1,!1,-Math.PI/2,Math.PI),hood:new Hs(.13,.045,8,16,Math.PI),stripe:new Dt(.012,.42,.03),blob:new Oi(.55,24),zip:new Dt(.012,.42,.01)},df=new Map,ms=(i,e=.85,t=0)=>{let n=i+e+t;return df.has(n)||df.set(n,new At({color:i,roughness:e,metalness:t})),df.get(n)},jm={suit:"#22252d",pants:"#22252d",skin:"#e3b08c",hair:"#3a2a1e",shoe:"#f2f2f0",cap:"#b8312a",trim:"#f2f2f0",hood:!0},nh={suit:"#5c6a3a",pants:"#4b5530",skin:"#dba582",hair:"#2e2418",shoe:"#1b1b1b",cap:"#48522f",boots:!0};function Da(i,e,t,n){let s=ms(e.suit,.9),r=ms(e.pants,.92),o=ms(e.skin,.6),a=ms(e.hair,.8),l=ms(e.shoe,.55),c=ms(e.cap,.85),h=ms(e.trim||"#ffffff",.7),u=new _t,f=new _t,d=new _t;f.position.y=.95,d.position.y=-.95,u.add(f),f.add(d);let m=(v,b,M,E,T,x,y=0,I=1,C=1,P=1)=>{let A=new st(b,M);return A.position.set(E,T,x),A.rotation.x=y,A.scale.set(I,C,P),A.castShadow=!0,v.add(A),A};m(d,$t.chest,s,0,1.36,0,0,1.25,1,.78),m(d,$t.belly,s,0,1.04,0,0,1.2,1,.82),m(d,$t.neck,o,0,1.66,0);let _=new _t;_.position.set(0,1.8,.01),d.add(_),m(_,$t.head,e.face?o:a,0,0,0,0,1,1.1,1),m(_,$t.nose,o,0,-.01,.15);for(let v of[-1,1])m(_,$t.ear,o,v*.15,0,0);e.face&&m(_,$t.hair,a,0,.01,-.01),m(_,$t.cap,c,0,.03,0),m(_,$t.brim,c,0,.04,.06,0,1,1,1.35),e.hood&&m(d,$t.hood,s,0,1.62,-.1,-.5,1,1,1.3),e.trim&&m(d,$t.zip,h,0,1.3,.2);let p=[];for(let v of[-1,1]){let b=new _t;b.position.set(v*.11,.95,0),d.add(b),m(b,$t.thigh,r,0,-.22,0),e.trim&&m(b,$t.stripe,h,v*.095,-.22,0);let M=new _t;M.position.y=-.45,b.add(M),m(M,$t.shin,r,0,-.2,0),e.trim&&m(M,$t.stripe,h,v*.075,-.2,0,0,1,.9,1),m(M,$t.shoe,e.boots?ms("#1b1b1b",.5):l,0,-.44,.06,Math.PI/2,1.05,1,e.boots?1.3:1);let E=new _t;E.position.set(v*.29,1.56,0),d.add(E),m(E,$t.upper,s,0,-.15,0);let T=new _t;T.position.y=-.32,E.add(T),m(T,$t.fore,s,0,-.14,0),m(T,$t.hand,o,0,-.31,0),p.push({hip:b,knee:M,sho:E,elb:T,s:v})}if(t){let v=new st(new En(.42,.17),new At({map:rr(t,"#5c6a3a","#ffd21f",192,72),roughness:.9}));v.position.set(0,1.36,-.165),v.rotation.y=Math.PI,d.add(v)}let g=new st($t.blob,n);return g.rotation.x=-Math.PI/2,g.position.y=.03,u.add(g),u.userData={pivot:f,limbs:p,blob:g,head:_},i.add(u),u}function Qm(i,e,t,n=0,s=0,r=0){let{pivot:o,limbs:a,head:l}=i.userData,c=.16,h=.95,u=1,f=0,d=-.1;for(let m of a){let _=e+(m.s>0?0:Math.PI),p=Math.sin(_),g,v,b,M,E=0;if(t==="run")g=-.85*p,v=.25+1.3*Math.max(0,Math.cos(_)),b=.85*p,M=-1.4,f=Math.abs(Math.cos(e))*.07;else if(t==="air"||t==="flip"){let T=Math.sin(Math.PI*fo(n,0,1));g=-.3-(t==="flip"?1.6:1)*T+(m.s>0?-.25:.2)*(1-T),v=.5+(t==="flip"?1.7:1.1)*T,b=t==="flip"?-1-.6*T:-2.5+.4*T,M=t==="flip"?-1.4:-.35,E=t==="flip"?0:.35,c=.1+(t==="flip"?Math.PI*2*$m(fo(n,0,1)):.12*T),d=.2}else if(t==="roll"){let T=Math.sin(Math.PI*fo(n,0,1)),x=fo(n*6,0,1)*fo((1-n)*6,0,1);g=-.4-1.5*x,v=.4+1.9*x,b=-.6-.8*x,M=-1.7*x-.4,d=.5*x,c=.16+Math.PI*2*$m(fo(n,0,1)),h=.95-.42*T,u=1-.27*x}else t==="hands"?(g=0,v=.05,b=-2.9+Math.sin(e*3+m.s)*.1,M=-.2,c=0,E=.25,d=-.25):(g=0,v=.05,b=.05*Math.sin(e*.5),M=-.25,c=0,d=.05*Math.sin(e*.3));m.hip.rotation.set(g,0,0),m.knee.rotation.x=v,m.sho.rotation.set(b,0,m.s*(.06+E)),m.elb.rotation.x=M}l.rotation.x=d,o.rotation.set(c,0,-s),o.position.y=h+f,o.scale.set(u*(1+r*.12),u*(1-r*.2),u*(1+r*.12))}function e0(i){i.traverse(e=>{e.isMesh&&e.material.map&&(e.material.map.dispose(),e.material.dispose())})}function pf(i,e){if(e===gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===to||e===Ma){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===to)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function ih(i){let e=new Map,t=new Map,n=i.clone();return t0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function t0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)t0(i.children[n],e.children[n],t)}var sh=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new rh(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new rh(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Vi.extractUrlBase(e);o=Vi.resolveURL(c,this.path)}else o=Vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new qr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===o0){try{o[ot.KHR_BINARY_GLTF]=new Ff(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Vf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new vf;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new Of(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new Bf;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new kf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function oS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Bt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_f=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Tn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new cs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xs(h),c.distance=u;break;case"spot":c=new ra(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},vf=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}},yf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Mf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(r,r)}return Promise.all(s)}},Sf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},bf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},wf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,wt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Af=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],Tn),Promise.all(s)}},Rf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],Tn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,wt)),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Nf=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Df=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},rh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Uf=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let _=new Ye,p=new U,g=new Zt,v=new U(1,1,1),b=new Os(m.geometry,m.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&v.fromBufferAttribute(l.SCALE,E),b.setMatrixAt(E,_.compose(p,g,v));let M=null;for(let E in l)if(E==="_COLOR_0"){let T=l[E];b.instanceColor=new Di(T.array,T.itemSize,T.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let x=b.geometry;M=new vt,M.name=x.name;for(let y in x.attributes)M.setAttribute(y,x.attributes[y]);for(let y in x.morphAttributes)M.morphAttributes[y]=x.morphAttributes[y];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let y of x.groups)M.addGroup(y.start,y.count,y.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),b.geometry=M}let T=l[E];M.setAttribute(E,new Di(T.array,T.itemSize,T.normalized))}Lt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},o0="glTF",Ua=12,n0={JSON:1313821514,BIN:5130562},Ff=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ua,r=new DataView(e,Ua),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===n0.JSON){let c=new Uint8Array(e,Ua+o,a);this.content=n.decode(c)}else if(l===n0.BIN){let c=Ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Of=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Gf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Gf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=po[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let m in d.attributes){let _=d.attributes[m],p=l[m];p!==void 0&&(_.normalized=p)}u(d)},a,c,Tn,f)})})}},Bf=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},kf=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},oh=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,_=m-c,p=-2*d+3*f,g=d-f,v=1-p,b=g-f+u;for(let M=0;M!==a;M++){let E=o[_+M+a],T=o[_+M+l]*h,x=o[m+M+a],y=o[m+M]*h;r[M]=v*E+b*T+p*x+g*y}return r}},aS=new Zt,zf=class extends oh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return aS.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},i0={9728:Vt,9729:en,9984:Vl,9985:Qr,9986:Js,9987:Ln},s0={33071:Mn,33648:Dr,10497:ii},mf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lS={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Ls},gf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),i.DefaultMaterial}function ar(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function uS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fS(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xf(t.attributes):e=i.indices+":"+xf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xf(i.targets[n]);return e}function xf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var pS=new Ye,Vf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?(this.textureLoader=new na(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new oa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ar(r,a,s),vi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Vi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=mf[s.type],a=po[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new kt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=mf[s.type],c=po[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,p;if(d&&d!==u){let g=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,b=t.cache.get(v);b||(_=new c(a,g*d,s.count*d/h),b=new zr(_,d/h),t.cache.add(v,b)),p=new Gr(b,l,f%d/h,m)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),p=new kt(_,l,m);if(s.sparse!==void 0){let g=mf.SCALAR,v=po[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new v(o[1],b,s.sparse.count*g),T=new c(o[2],M,s.sparse.count*l);a!==null&&(p=new kt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,y=E.length;x<y;x++){let I=E[x];if(p.setX(I,T[x*l]),l>=2&&p.setY(I,T[x*l+1]),l>=3&&p.setZ(I,T[x*l+2]),l>=4&&p.setW(I,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=i0[f.magFilter]||en,h.minFilter=i0[f.minFilter]||Ln,h.wrapS=s0[f.wrapS]||ii,h.wrapT=s0[f.wrapT]||ii,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==en,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,m){t.parse(f,d,m)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,m){let _=d;t.isImageBitmapLoader===!0&&(_=function(p){let g=new Ot(p);g.needsUpdate=!0,d(g)}),t.load(Vi.resolveURL(f,r.path),_,void 0,m)})})}let u=h.then(function(f){return c===!0&&a.revokeObjectURL(l),vi(f,o),f.userData.mimeType=o.mimeType||dS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ui,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new os,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return At}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Tn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pn);let h=r.alphaMode||gf.OPAQUE;if(h===gf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===gf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],Tn)}return r.emissiveTexture!==void 0&&o!==Xt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ar(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return r0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=fS(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=r0(new vt,c,t),c.mode===Zn.TRIANGLE_STRIP?f=f.then(d=>pf(d,Ma)):c.mode===Zn.TRIANGLE_FAN&&(f=f.then(d=>pf(d,to))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?cS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let _=h[d],p=o[d],g,v=c[d];if(p.mode===Zn.TRIANGLES||p.mode===Zn.TRIANGLE_STRIP||p.mode===Zn.TRIANGLE_FAN||p.mode===void 0){let b=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=b&&M?new qo(_,v):new st(_,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Zn.LINES)g=new ks(_,v);else if(p.mode===Zn.LINE_STRIP)g=new Bs(_,v);else if(p.mode===Zn.LINE_LOOP)g=new Ko(_,v);else if(p.mode===Zn.POINTS)g=new as(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&uS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),vi(g,r),p.extensions&&ar(s,g,p),t.assignFinalMaterial(g),u.push(g)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ar(s,u[0],r),u[0];let f=new _t;r.extensions&&ar(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Lc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],m=s.samplers[d.sampler],_=d.target,p=_.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],_=u[3],p=u[4],g=[];for(let b=0,M=f.length;b<M;b++){let E=f[b],T=d[b],x=m[b],y=_[b],I=p[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=n._createAnimationTracks(E,T,x,y,I);if(C)for(let P=0;P<C.length;P++)g.push(C[P])}let v=new Vs(r,void 0,g);return vi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,pS)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new U().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Hr:c.length>1?h=new _t:c.length===1?h=c[0]:h=new Lt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),vi(h,r),r.extensions&&ar(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new _t;n.name&&(r.name=s.createUniqueName(n.name)),vi(r,n),n.extensions&&ar(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(ih(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Cn||f instanceof Ot)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}gs[r.path]===gs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(gs[r.path]){case gs.weights:h=ki;break;case gs.rotation:h=zi;break;case gs.translation:case gs.scale:h=ls;break;default:n.itemSize===1?h=ki:h=ls;break}let u=s.interpolation!==void 0?lS[s.interpolation]:Ns,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let _=new h(l[d]+"."+gs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Hf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof zi?zf:oh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mS(i,e,t){let n=e.attributes,s=new An;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let h=Hf(po[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let _=Hf(po[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function r0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Gf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),vi(i,e),mS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hS(i,e.targets,t):i})}var un={ready:!1},h0=0,u0=!1;function f0(i){h0=i}var Yf=()=>un.ready,a0=i=>{let e=atob(i.slice(i.indexOf(",")+1)),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer},Fa=i=>new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i}),Oa=(i,e)=>{let t=new Ot(i);return t.colorSpace=e?wt:Gn,t.flipY=u0,t.anisotropy=4,t.needsUpdate=!0,t},l0=i=>new Promise((e,t)=>new sh().parse(i,"",e,t));async function d0(){let i=window.UKH_ASSETS&&window.UKH_ASSETS.people;if(!i)return!1;try{u0=!!window.__peopleFlip;let[e,t,n,s,r,o,a]=await Promise.all([Fa(i.runner.c),Fa(i.runner.r),Fa(i.tck.c),Fa(i.tck.r),Fa(i.normal),l0(a0(i.character)),l0(a0(i.anims))]),l=Oa(r,!1);un.mat={runner:new At({map:Oa(e,!0),roughnessMap:Oa(t,!1),normalMap:l,roughness:1}),tck:new At({map:Oa(n,!0),roughnessMap:Oa(s,!1),normalMap:l,roughness:1})},un.dark=new At({color:"#2a1d16",roughness:.6}),un.scene=o.scene,un.clips={};for(let h of a.animations)un.clips[h.name]=h;un.scene.updateMatrixWorld(!0);let c=new An().setFromObject(un.scene);un.h=c.max.y-c.min.y,un.minY=c.min.y,delete window.UKH_ASSETS.people,un.ready=!0}catch(e){return console.warn("people pack failed",e),!1}return!0}var Wf={dome:new tn(.118,18,10,0,Math.PI*2,0,Math.PI/2),brim:new Ut(.1,.11,.012,16,1,!1,-Math.PI/2,Math.PI),blob:new Oi(.55,24)},Xf=new Map,gS=i=>(Xf.has(i)||Xf.set(i,new At({color:i,roughness:.85})),Xf.get(i)),qf=null;function c0(i,e,t,n){i.updateWorldMatrix(!0,!1);let s=i.matrixWorld.clone().invert();e.position.copy(t.clone().applyMatrix4(s));let r=new Zt;i.getWorldQuaternion(r),e.quaternion.copy(r.invert().multiply(n));let o=new U;i.getWorldScale(o),e.scale.set(1/o.x,1/o.y,1/o.z),i.add(e)}function Ba(i,e,t){let n=new _t,s=new _t,r=ih(un.scene),o=1.8/un.h;r.scale.setScalar(o),r.position.y=-un.minY*o-.95,s.position.y=.95,s.add(r),n.add(s);let a=e==="runner"?un.mat.runner:un.mat.tck,l=null,c=null;if(r.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.frustumCulled=!1,d.material=d.geometry.attributes.position.count>3e3?a:un.dark),d.isBone&&d.name==="Head"&&(l=d),d.isBone&&d.name==="spine_03"&&(c=d)}),r.updateMatrixWorld(!0),l){let d=new U;l.getWorldPosition(d);let m=new _t,_=gS(e==="runner"?"#b8312a":"#4c5532"),p=new st(Wf.dome,_),g=new st(Wf.brim,_);p.castShadow=!0,g.position.set(0,.005,.07),g.scale.set(1,1,1.5),m.add(p,g),c0(l,m,new U(d.x,d.y+.1,d.z-.005),new Zt)}if(e==="tck"&&c){qf||(qf=new At({map:rr("\u0422\u0426\u041A","#4a5530","#ffd21f",192,72),roughness:.9}));let d=new U;c.getWorldPosition(d);let m=new st(new En(.3,.12),qf),_=new Zt().setFromAxisAngle(new U(0,1,0),Math.PI);c0(c,m,new U(d.x,d.y+.02,d.z-.2),_)}let h=new st(Wf.blob,t);h.rotation.x=-Math.PI/2,h.position.y=.03,n.add(h);let u=new la(r),f={};for(let[d,m]of Object.entries(un.clips))f[d]=u.clipAction(m);for(let d of["Jump_Start","Jump_Land","Roll","Hit_Chest","Death01","Interact"])f[d]&&(f[d].setLoop(Ec,1),f[d].clampWhenFinished=!0);return n.userData={person:!0,kind:e,body:s,mixer:u,actions:f,cur:null,blob:h,pivot:s,t0:Math.random()*3},i.add(n),yi(n,e==="patrol"?"Idle_Talking_Loop":"Idle_Loop",0),n}function yi(i,e,t=.15,n=1){let s=i.userData,r=s.actions[e];if(!r||(r.timeScale=n,s.cur===e))return;let o=s.cur&&s.actions[s.cur];r.reset(),r.enabled=!0,r.setEffectiveWeight(1),r.play(),o&&(t>0?r.crossFadeFrom(o,t,!1):o.stop()),s.cur=e}function p0(i,e,t=0,n=0,s=15,r=0,o=.72,a=.62){let l=i.userData,c=l.actions;e==="run"?yi(i,"Sprint_Loop",.12,.75+s/40):e==="chase"?yi(i,"Sprint_Loop",.2,.75+s/40):e==="idle"?yi(i,"Idle_Loop",.3):e==="patrol"?yi(i,"Idle_Talking_Loop",.3):e==="hands"?yi(i,"Hit_Chest",.15,.8):e==="roll"?yi(i,"Roll",.08,c.Roll?c.Roll.getClip().duration/a*.9:1):(e==="air"||e==="flip")&&(t<.2?yi(i,"Jump_Start",.06,c.Jump_Start?c.Jump_Start.getClip().duration/(o*.2)*.5:1):t<.85?yi(i,"Jump_Loop",.12):yi(i,"Jump_Land",.08,1.6));let h=e==="flip"?Math.PI*2*(t<0?0:t>1?1:t*t*(3-2*t)):0;l.body.position.y=.95+(h?.25*Math.sin(h/2):0),l.body.rotation.set(h,0,-n),l.body.scale.set(1+r*.06,1-r*.1,1+r*.06),l.mixer.update(h0)}var ft=i=>document.getElementById(i),gr=2.2,hh=15,xS=36,M0=32,S0=11.5,$f=.62,jf=190,b0=2*S0/M0,gh=(i,e,t)=>i<e?e:i>t?t:i,Si=Math.random,Kf=i=>i[Si()*i.length|0],za={get:i=>{try{return localStorage.getItem(i)}catch{return null}},set:(i,e)=>{try{localStorage.setItem(i,e)}catch{}}},So=ft("c"),Mo,mt="start";function w0(){ft("fail").classList.remove("hidden"),["start","hud","over","pause"].forEach(i=>ft(i).classList.add("hidden")),mt="dead"}try{Mo=new Uc({canvas:So,antialias:!0,powerPreference:"high-performance"})}catch{Mo=null}if(!Mo)throw w0(),new Error("no WebGL");So.addEventListener("webglcontextlost",i=>{i.preventDefault(),w0()});var mn=new Us,Fn=new Qt(65,1,.3,560),It=Jm(Mo,mn,Fn);It.onEnv=i=>Rm(i);var Mi=i=>new At({roughness:.8,metalness:0,...i}),gn={stripe:Mi({map:Bm(),roughness:.6}),gatePole:Mi({color:"#b5bac2",metalness:.6,roughness:.35}),stij:Mi({map:rr("\u0421\u0422\u0406\u0419!","#d63028","#ffffff"),side:Pn,roughness:.6}),busBody:Mi({map:km(),roughness:.45}),white:Mi({color:"#eef0f2",roughness:.45}),busPlate:Mi({map:rr("\u0422\u0426\u041A","#ffd21f","#1b1b1b",192,56)}),glass:Mi({color:"#1e2a38",metalness:.5,roughness:.06}),tyre:Mi({color:"#1a1a1c",roughness:.9}),headl:Mi({color:"#fff7d0",emissive:"#fff0b0",emissiveIntensity:.6}),shadow:new Xt({color:"#000000",transparent:!0,opacity:.22,depthWrite:!1}),coin:Mi({color:"#ffcc33",metalness:1,roughness:.25,emissive:"#7a5200",emissiveIntensity:.25}),sky:new Xt({color:"#8090a0",fog:!1})},Xn=null,xo=null,_o=null,xs=null,Zi=new Map,uh=new _t;mn.add(uh);function _S(){let i=za.get("ukh3d_city");if(i&&Xc[i])return i;try{let e=JSON.parse(za.get("ukh_save_v2")||"{}");if(e.city&&Xc[e.city])return e.city}catch{}return"lviv"}function xh(i){if(_o)for(let[,s]of Zi)_o.disposeChunk(s);Zi.clear(),xo&&qm(xo),xs&&(uh.remove(xs),xs.geometry.dispose(),xs=null),Xn=Xc[i],za.set("ukh3d_city",i);let e=Sm(i+":3d");Mm(e,Xn.pool),xo=Xm(Xn,mh===1),_o=Km(mn,Xn,xo,e);let t=new yt;Am(Xn.sky,t);let n=t.build();n&&(xs=new st(n,gn.sky),xs.frustumCulled=!1,xs.renderOrder=-1,uh.add(xs)),xr(),CS()}function Ms(i=!1){let e=Math.max(0,Math.floor((Ht-30)/Ia)),t=Math.floor((Ht+jf)/Ia);for(let[n,s]of Zi)(n<e||n>t)&&(_o.disposeChunk(s),Zi.delete(n));for(let n=e;n<=t&&!(!Zi.has(n)&&(Zi.set(n,_o.buildChunk(n)),!i));n++);}function xr(i,e){let t=It.apply(i,e);Ym(xo,t),gn.headl.emissiveIntensity=t.tod==="day"&&!t.gloom?.6:2.2,gn.coin.emissiveIntensity=t.night?.8:.25,gn.sky.color.copy(mn.fog.color).lerp(new Re(t.night?"#05070d":"#46566b"),t.night?.45:It.photo?.62:.42),ft("btnNight").textContent=ff[It.tod][1],ft("btnWx").textContent=eh[It.wx][1],td(t.wet?It.wx==="storm"?.07:.045:0)}function T0(){xr({day:"sunset",sunset:"night",night:"day"}[It.tod]),bo(ff[It.tod][0])}function A0(){let i=Object.keys(eh);xr(null,i[(i.indexOf(It.wx)+1)%i.length]),bo(eh[It.wx][0])}It.onThunder=i=>ES(i);var $n=null,Zf=[];function vS(){Yf()?($n=Ba(mn,"runner",gn.shadow),Zf=[Ba(mn,"tck",gn.shadow),Ba(mn,"tck",gn.shadow)]):($n=Da(mn,jm,null,gn.shadow),Zf=[Da(mn,nh,"\u0422\u0426\u041A",gn.shadow),Da(mn,nh,"\u0422\u0426\u041A",gn.shadow)])}function lr(i,e,t,n=0,s=0,r=0){return i.userData.person?p0(i,t,n,s,ys,r,b0,$f):Qm(i,e,t==="chase"?"run":t==="patrol"?"hands":t,n,s,r)}var ka={bar:new Dt(2,1,.5),pole:new Ut(.08,.08,2.75,10),banner:new En(2,1.2),bus:new Dt(5.2,2.35,2),wheel:new Ut(.42,.42,.3,18),coin:new Ut(.36,.36,.08,24),wind:new En(1.8,1.05),plate:new En(1.5,.42),head:new Dt(.06,.22,.32),roofBox:new Dt(4.6,.12,1.9),mirror:new Dt(.1,.25,.12)},li=[],_s=[],dr=new Os(ka.coin,gn.coin,260);dr.count=0;dr.frustumCulled=!1;dr.castShadow=!0;mn.add(dr);var ah=new Lt,bi={};function m0(i,e,t,n,s=0){let r=qt(e,t,n,bi);i.position.set(r.wx,r.wy,r.wz),i.rotation.set(0,Math.PI/2-bi.th+s,0)}function yS(i){let e=new _t,t=(n,s,r,o,a)=>{let l=new st(n,s);return l.position.set(r,o,a),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l};if(i.t==="bar")t(ka.bar,gn.stripe,0,.5,0).rotation.y=Math.PI/2;else if(i.t==="gate"){for(let n of[-1.05,1.05])t(ka.pole,gn.gatePole,0,1.37,n);t(ka.banner,gn.stij,0,1.9,0).rotation.y=-Math.PI/2}else if(i.t==="bus"){let n=tf("van","#f1f1ee",mh===1);n.rotation.y=Math.PI,e.add(n);for(let s of[-1,1]){let r=t(ka.plate,gn.busPlate,.2,1.55,s*1);r.rotation.y=s>0?0:Math.PI,r.scale.set(1.6,1.6,1)}}else if(i.t==="patrol"){i.fig=Yf()?Ba(mn,"patrol",gn.shadow):Da(mn,{...nh,face:!0},null,gn.shadow);return}mn.add(e),i.mesh=e}function MS(){for(let i of li){let e=i.d+i.len/2;i.mesh&&(m0(i.mesh,e,i.lane*gr,0),i.mesh.visible=i.d<Ht+jf),i.fig&&(m0(i.fig,e,i.lane*gr,0),i.fig.rotation.y=-bi.th,lr(i.fig,hr*2+i.d,"patrol"),i.fig.userData.limbs&&(i.fig.userData.limbs[0].sho.rotation.x=-2.4+Math.sin(hr*8+i.d)*.5))}}function Qf(i){i.mesh&&mn.remove(i.mesh),i.fig&&(i.fig.userData.person?i.fig.userData.mixer.stopAllAction():e0(i.fig),mn.remove(i.fig))}var vo=0,cr=0,g0=i=>i==="bus"||i==="patrol";function SS(i){return pn.some(e=>e.type==="corner"&&i>e.s-16&&i<e.e+12)}function bS(){let i=vo,e=pn.find(m=>m.type==="corner"&&i>m.s-16&&i<m.e+12);if(e){vo=e.e+12,cr=Math.max(cr,e.e+4);return}let t=Math.min(1,i/3e3),n=i<180,s=Si(),r=n||s<.42-.22*t?1:s<.88-.08*t?2:3,o=[-1,0,1].sort(()=>Si()-.5).slice(0,r),a={};for(let m of o){let _=Si();a[m]=n?_<.4?"bar":_<.7?"gate":"bus":_<.3?"bar":_<.55?"gate":_<.83?"bus":"patrol"}if(r===3){let m=o.filter(_=>g0(a[_]));m.length===3&&(a[Kf(m)]=Si()<.5?"bar":"gate")}let l=[-1,0,1].filter(m=>!a[m]||!g0(a[m])),c=cr+3,h=i-3,u=Kf(l);if(h-c>4&&Si()<.85)for(let m=Math.max(c,h-30);m<=h;m+=2.2)SS(m)||_s.push({d:m,x:u*gr,y:.9,got:!1});let f=.6;for(let m of o){let _=a[m],p={t:_,lane:m,d:i,len:.5,y0:0,y1:1,hx:1};if(_==="gate"&&Object.assign(p,{len:.35,y0:1.25,y1:2.6}),_==="bus"&&Object.assign(p,{len:5.2,y1:2.7}),_==="patrol"&&Object.assign(p,{len:.6,y1:2.3,hx:.55}),_==="bar"&&Si()<.45)for(let g=-3;g<=3;g++)_s.push({d:i+.25+g*1.5,x:m*gr,y:.9+1.4*(1-(g/3.5)**2),got:!1});yS(p),li.push(p),f=Math.max(f,p.len)}cr=i+f;let d=Math.max(ys,hh)+1;vo=cr+d*(1.3-.45*t)+Si()*d*.45}var Ht=0,vs=0,ys=0,fh=0,pr=0,_h=0,hr=0,yo=0,dh=0,me={lane:0,prevLane:0,x:0,prevX:0,y:0,vy:0,onGround:!0,slide:0,run:0,inv:0,stumble:0,jt:0,flip:!1,jumps:0,land:0};function Ga(){for(let i of li)Qf(i);li=[],_s=[],Ht=vs=0,ys=0,fh=0,pr=0,_h=0,yo=3,dh=0,Object.assign(me,{lane:0,prevLane:0,x:0,prevX:0,y:0,vy:0,onGround:!0,slide:0,run:0,inv:0,stumble:0,jt:0,flip:!1,jumps:0,land:0}),vo=60,cr=6;for(let[,i]of Zi)_o.disposeChunk(i);Zi.clear(),an=null,ph=!0}function fr(i){if(mt==="play")if(i==="left"||i==="right"){let e=gh(me.lane+(i==="left"?-1:1),-1,1);e!==me.lane&&(me.prevLane=me.lane,me.lane=e,mr(500,.05,.03))}else i==="up"&&me.onGround?(me.vy=S0,me.onGround=!1,me.slide=0,me.jt=0,me.jumps++,me.flip=me.jumps%3===0,mr(320,.18,.06,760)):i==="down"&&(me.onGround?(me.slide<=0&&mr(180,.15,.04,90),me.slide=$f):me.vy=Math.min(me.vy,-24))}function wS(){if(mr(140,.3,.15,45),nd(80),yo>0)return E0();yo=5,me.stumble=.5,me.inv=.5,bo("\u0422\u0426\u041A \u041D\u0410 \u0425\u0412\u041E\u0421\u0422\u0406!")}function E0(){mt="caught",dh=0,ys=0,mr(392,.6,.1,196),nd(200)}function TS(){if(me.inv>0)return;let i=me.slide>0?.8:1.75;for(let e of li){let t=e.d,n=e.d+e.len;if(Ht+.35<t||vs-.35>n)continue;let s=e.lane*gr,r=e.hx+.38;if(Math.abs(me.x-s)>=r||me.y+i<=e.y0||me.y>=e.y1)continue;let o=vs+.35>=t&&vs-.35<=n,a=Math.abs(me.prevX-s)<r;o&&!a?(me.lane=me.prevLane,wS()):(Ht=Math.max(vs,e.d-.45),E0());return}}var an=null,ph=!0,mo=0,lh=2.6,Jn={x:0,y:0,z:0},x0=new U;function AS(i){if(hr+=i,f0(i),mt==="play"){fh+=i,ys=hh+(xS-hh)*(1-Math.exp(-fh/110)),vs=Ht,Ht+=ys*i,pr=Math.floor(Ht),yo>0&&(yo-=i),me.inv>0&&(me.inv-=i),me.stumble>0&&(me.stumble-=i),me.land>0&&(me.land-=i),me.prevX=me.x;let m=me.lane*gr;me.x+=(m-me.x)*(1-Math.exp(-i*16)),(!me.onGround||me.vy>0)&&(me.jt+=i,me.vy-=M0*i,me.y+=me.vy*i,me.y<=0&&(me.y=0,me.vy=0,me.onGround=!0,me.land=.16,mo=.12)),me.slide>0&&(me.slide-=i),me.run+=i*(6+ys*.35),TS();for(let _ of _s)!_.got&&_.d>vs-.9&&_.d<Ht+.9&&Math.abs(_.x-me.x)<1&&_.y>me.y-.4&&_.y<me.y+2.5&&(_.got=!0,_h++,mr(1046,.07,.05),mr(1568,.1,.05,0,.05));for(;vo<Ht+jf;)bS();li=li.filter(_=>_.d+_.len<Ht-8?(Qf(_),!1):!0),_s=_s.filter(_=>!_.got&&_.d>Ht-8)}else mt==="caught"&&(dh+=i,dh>1.5&&RS());Ms();let e=qt(Ht,me.x,me.y,bi);$n.position.set(e.wx,e.wy,e.wz),$n.rotation.y=Math.PI-bi.th;let t=gh((me.lane*gr-me.x)*.22,-.35,.35)+(me.stumble>0?Math.sin(me.stumble*20)*.25:0);mt==="start"?lr($n,hr*2,"idle"):mt!=="play"?lr($n,hr*3,"hands"):me.slide>0?lr($n,me.run,"roll",1-me.slide/$f,t):me.onGround?lr($n,me.run,"run",0,t,me.land>0?Math.sin(me.land/.16*Math.PI):0):lr($n,me.run,me.flip?"flip":"air",me.jt/b0,t),$n.userData.blob.position.y=.03-me.y,$n.userData.blob.scale.setScalar(1/(1+me.y*.3));let n=mt!=="play"||yo>0;lh+=((n?mt==="caught"||mt==="over"?.9:2.6:9)-lh)*(1-Math.exp(-i*2.5)),Zf.forEach((m,_)=>{let p=qt(Ht-lh-_*.4,me.x+(_?1.15:-1.15)*(mt==="caught"||mt==="over"?.55:1),0,bi);m.position.set(p.wx,p.wy,p.wz),m.rotation.y=Math.PI-bi.th,lr(m,me.run+_*1.7,mt==="play"?"chase":"patrol"),m.visible=lh<8}),MS();let s=0;for(let m of _s){if(m.d>Ht+150||s>=260)continue;let _=qt(m.d,m.x,m.y,bi);ah.position.set(_.wx,_.wy,_.wz),ah.rotation.set(Math.PI/2,0,hr*4+m.d),ah.updateMatrix(),dr.setMatrixAt(s++,ah.matrix)}dr.count=s,dr.instanceMatrix.needsUpdate=!0;let r=qt(Math.max(0,Ht-6.5),me.x*.5,4.6+me.y*.3,{}),o=qt(Ht+9,me.x*.6,1.1+me.y*.5,{});an||(an={x:r.wx,y:r.wy,z:r.wz}),ph&&(Jn.x=o.wx,Jn.y=o.wy,Jn.z=o.wz,ph=!1);let a=1-Math.exp(-i*7),l=an.x,c=an.y,h=an.z;an.x+=(r.wx-an.x)*a,an.y+=(r.wy-an.y)*a,an.z+=(r.wz-an.z)*a,i>0&&(It.camVel={x:(an.x-l)/i,y:(an.y-c)/i,z:(an.z-h)/i}),Jn.x+=(o.wx-Jn.x)*Math.min(1,a*1.4),Jn.y+=(o.wy-Jn.y)*Math.min(1,a*1.4),Jn.z+=(o.wz-Jn.z)*Math.min(1,a*1.4),mo>0&&(mo=Math.max(0,mo-i)),Fn.position.set(an.x,an.y-Math.sin(mo*40)*mo*.6,an.z),Fn.lookAt(Jn.x,Jn.y,Jn.z);let u=Jf+(ys-hh)*.22;Math.abs(Fn.fov-u)>.05&&(Fn.fov+=(u-Fn.fov)*Math.min(1,i*3),Fn.updateProjectionMatrix());let f=qt(Ht+14,0,0,bi);x0.set(f.wx,f.wy,f.wz);let d=qt(Ht-.8,me.x*.5,4,bi);It.near.position.set(d.wx,d.wy,d.wz),uh.position.set(Fn.position.x,e.wy-3,Fn.position.z),It.update(i,hr,x0)}var Rt=null,go=null,ch=null;function ed(){try{Rt||(Rt=new(window.AudioContext||window.webkitAudioContext)),Rt.state==="suspended"&&Rt.resume()}catch{Rt=null}}function mr(i,e,t,n,s=0){if(Rt)try{let r=Rt.currentTime+s,o=Rt.createOscillator(),a=Rt.createGain();o.type="square",o.frequency.setValueAtTime(i,r),n&&o.frequency.exponentialRampToValueAtTime(n,r+e),a.gain.setValueAtTime(t,r),a.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a),a.connect(Rt.destination),o.start(r),o.stop(r+e+.05)}catch{}}function R0(){if(!ch){ch=Rt.createBuffer(1,Rt.sampleRate*2,Rt.sampleRate);let i=ch.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1}return ch}function td(i){if(Rt)try{if(!go){let e=Rt.createBufferSource();e.buffer=R0(),e.loop=!0;let t=Rt.createBiquadFilter();t.type="bandpass",t.frequency.value=1400,t.Q.value=.6,go=Rt.createGain(),go.gain.value=0,e.connect(t),t.connect(go),go.connect(Rt.destination),e.start()}go.gain.setTargetAtTime(mt==="play"?i:0,Rt.currentTime,.4)}catch{}}function ES(i){if(Rt){try{let e=Rt.currentTime+i,t=Rt.createBufferSource(),n=Rt.createBiquadFilter(),s=Rt.createGain();t.buffer=R0(),n.type="lowpass",n.frequency.value=160,s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.35,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+1.9),t.connect(n),n.connect(s),s.connect(Rt.destination),t.start(e),t.stop(e+2)}catch{}nd(40)}}function nd(i){try{window.AndroidBridge&&window.AndroidBridge.vibrate?window.AndroidBridge.vibrate(i):navigator.vibrate&&navigator.vibrate(i)}catch{}}function bo(i){let e=ft("toast");e.textContent=i,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function wo(i){for(let e of["start","pause","over"])ft(e).classList.toggle("hidden",e!==i);ft("hud").classList.toggle("hidden",i!==null&&i!=="pause")}function vh(){ed(),Ga(),Ms(!0),mt="play",wo(null),xr(),bo(Xn.n+": \u0411\u0406\u0416\u0418!"),Gt.reset()}function To(){mt==="play"&&(mt="pause",wo("pause"),td(0))}function C0(){mt==="pause"&&(ed(),mt="play",wo(null),xr(),Gt.reset())}function RS(){mt="over",ft("oScore").textContent=pr,ft("oCoins").textContent=_h,ft("oCity").textContent=Xn.n,ft("oPerf").textContent=`\u0413\u0440\u0430\u0444\u0456\u043A\u0430: ${th[It.tier]} \xB7 ${Gt.avg?Math.round(Gt.avg):"\u2014"} \u043A\u0430\u0434\u0440/\u0441`,wo("over"),td(0)}function yh(){location.href="index.html"}function CS(){let i=ft("cities");if(i){i.innerHTML="";for(let e of Wc){let t=document.createElement("button");t.className="chip"+(e.id===Xn.id?" on":""),t.textContent=e.n,t.addEventListener("click",n=>{n.stopPropagation(),e.id!==Xn.id&&(xh(e.id),Ga(),Ms(!0))}),i.appendChild(t)}ft("cityName").textContent=Xn.n}}ft("btnGo").addEventListener("click",i=>{i.stopPropagation(),vh()});ft("btnBack1").addEventListener("click",i=>{i.stopPropagation(),yh()});ft("btnAgain").addEventListener("click",vh);ft("btnBack2").addEventListener("click",yh);ft("btnMenu").addEventListener("click",()=>{Ga(),Ms(!0),mt="start",wo("start")});ft("btnResume").addEventListener("click",C0);ft("btnBack3").addEventListener("click",yh);ft("btnPause").addEventListener("click",i=>{i.stopPropagation(),To()});ft("btnNight").addEventListener("click",i=>{i.stopPropagation(),T0()});ft("btnWx").addEventListener("click",i=>{i.stopPropagation(),A0()});ft("btnQ").addEventListener("click",i=>{i.stopPropagation(),Mh(or[(or.indexOf(It.tier)+1)%or.length],!0),bo("\u0413\u0440\u0430\u0444\u0456\u043A\u0430: "+th[It.tier])});var Wn=null,id=(i,e)=>Math.abs(i)>Math.abs(e)?fr(i>0?"right":"left"):fr(e>0?"down":"up");So.addEventListener("touchstart",i=>{i.preventDefault(),ed();let e=i.changedTouches[0];Wn={id:e.identifier,x:e.clientX,y:e.clientY,done:!1}},{passive:!1});So.addEventListener("touchmove",i=>{if(i.preventDefault(),!(!Wn||Wn.done))for(let e of i.changedTouches){if(e.identifier!==Wn.id)continue;let t=e.clientX-Wn.x,n=e.clientY-Wn.y;(Math.abs(t)>22||Math.abs(n)>22)&&(id(t,n),Wn.done=!0)}},{passive:!1});So.addEventListener("touchend",i=>{if(i.preventDefault(),!!Wn){for(let e of i.changedTouches)if(e.identifier===Wn.id){if(!Wn.done){let t=e.clientX-Wn.x,n=e.clientY-Wn.y;(Math.abs(t)>10||Math.abs(n)>10)&&id(t,n)}Wn=null}}},{passive:!1});document.addEventListener("touchmove",i=>{i.cancelable&&!i.target.closest("#cities")&&i.preventDefault()},{passive:!1});var ur=null;So.addEventListener("mousedown",i=>{ur={x:i.clientX,y:i.clientY,done:!1}});window.addEventListener("mousemove",i=>{if(!ur||ur.done)return;let e=i.clientX-ur.x,t=i.clientY-ur.y;(Math.abs(e)>24||Math.abs(t)>24)&&(id(e,t),ur.done=!0)});window.addEventListener("mouseup",()=>{ur=null});window.addEventListener("keydown",i=>{let e=i.code;if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(e)&&i.preventDefault(),e==="KeyN")return T0();if(e==="KeyM")return A0();mt==="play"?e==="ArrowLeft"||e==="KeyA"?fr("left"):e==="ArrowRight"||e==="KeyD"?fr("right"):e==="ArrowUp"||e==="KeyW"||e==="Space"?fr("up"):e==="ArrowDown"||e==="KeyS"?fr("down"):(e==="KeyP"||e==="Escape")&&To():(mt==="start"||mt==="over")&&(e==="Enter"||e==="Space")?vh():mt==="pause"&&(e==="Enter"||e==="KeyP"||e==="Escape")&&C0()});function I0(){To();try{Rt&&Rt.state==="running"&&Rt.suspend()}catch{}}document.addEventListener("visibilitychange",()=>{document.hidden&&I0()});window.addEventListener("blur",To);window.__appPause=I0;window.__appBack=()=>mt==="play"?(To(),"ok"):(mt==="caught"||yh(),"ok");var Gt={t:0,n:0,sum:0,cnt:0,avg:0,locked:!1,reset(){this.t=0,this.n=0}};function Mh(i,e=!1){let t=i==="low"||i==="medium"?.5:1,n=Xn&&t!==mh;mh=t,Dm(t),It.setTier(i),n&&(xh(Xn.id),Ms(!0)),za.set("ukh3d_q",i),e&&(Gt.locked=!0),ft("btnQ").textContent={ultra:"\u2728",high:"\u2699\uFE0F",medium:"\u{1F505}",low:"\u{1F50B}"}[i],P0()}function IS(i){if(mt!=="play"||i<=0||i>.5||(Gt.t+=i,Gt.n++,Gt.t<4))return;let e=Gt.n/Gt.t;Gt.sum+=e,Gt.cnt++,Gt.avg=Gt.sum/Gt.cnt,Gt.t=0,Gt.n=0,!Gt.locked&&e<45&&It.tier!=="low"&&(Mh(or[or.indexOf(It.tier)+1]),bo("\u0413\u0440\u0430\u0444\u0456\u043A\u0430: "+th[It.tier]+" \u2014 \u0434\u043B\u044F \u043F\u043B\u0430\u0432\u043D\u043E\u0441\u0442\u0456"),Gt.sum=0,Gt.cnt=0)}var Jf=70;function P0(){let i=window.innerWidth,e=window.innerHeight;Mo.setSize(i,e,!1),Fn.aspect=i/e,Jf=gh(2*Math.atan(Math.tan(74*Math.PI/180/2)/Fn.aspect)*180/Math.PI,55,92),Fn.fov=Jf,Fn.updateProjectionMatrix(),It.resize()}window.addEventListener("resize",P0);var _0=performance.now(),v0=-1;function L0(i){let e=(i-_0)/1e3;_0=i;let t=gh(e,0,.05);mt!=="pause"&&mt!=="dead"&&AS(t),mt!=="dead"&&It.render(),IS(e),pr!==v0&&(ft("score").textContent=pr,v0=pr),ft("coinN").textContent=_h,requestAnimationFrame(L0)}var mh=1,y0=za.get("ukh3d_q");Mh(or.includes(y0)?y0:"high");It.tod=Si()<.6?"day":Si()<.6?"sunset":"night";It.wx=Kf(["clear","clear","clear","rain","storm","snow","fog"]);ft("btnGo").disabled=!0;ft("btnGo").textContent="\u0417\u0410\u0412\u0410\u041D\u0422\u0410\u0416\u0415\u041D\u041D\u042F\u2026";var PS=performance.now();Lm(i=>{ft("btnGo").textContent="\u0417\u0410\u0412\u0410\u041D\u0422\u0410\u0416\u0415\u041D\u041D\u042F "+Math.round(i*100)+"%"}).then(async i=>{N0=i,D0=await d0(),vS(),xh(_S()),Ga(),wo("start"),Ms(!0),ft("btnGo").disabled=!1,ft("btnGo").textContent="\u0411\u0406\u0413\u0422\u0418 \u25B6",U0=Math.round(performance.now()-PS),requestAnimationFrame(L0)});var N0=!1,D0=!1,U0=0;window.__g3={get state(){return mt},get dist(){return Ht},get lane(){return me.lane},get score(){return pr},get p(){return me},act:fr,start:vh,renderer:Mo,camera:Fn,scene:mn,env:It,vehicleMesh:tf,frame:i=>qt(i,0,0,{}),get chunks(){return Zi.size},get obs(){return li.length},get obsList(){return li.map(i=>({t:i.t,lane:i.lane,d:i.d}))},pause:To,setEnv(i,e){xr(i,e)},setNight(i){xr(i?"night":"day")},setTier:Mh,get tier(){return It.tier},lockTier(){Gt.locked=!0},get perf(){return Gt},city:i=>{xh(i),Ga(),Ms(!0)},get M(){return xo},get photos(){return N0},get people(){return D0},get runner(){return $n},get bootMs(){return U0},get cityId(){return Xn.id},cities:Wc.map(i=>i.id),warp(i){Ht=vs=i,vo=i+40,cr=i+6;for(let e of li)Qf(e);li=[],_s=[],an=null,ph=!0,Ms(!0)},segs:pn,setSpeedTime(i){fh=i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
