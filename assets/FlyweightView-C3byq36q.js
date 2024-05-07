import{c as g,a as n,o as _}from"./index-DFCzDU05.js";class h{constructor(e,t,i){this.movementCost=e,this.isWater=t,this.texture=i}getMovementCost(){return this.movementCost}isWater(){return this.isWater}getTexture(){return this.texture}get color(){if(this.texture==="GRASS_TEXTURE")return"#00FF00";if(this.texture==="HILL_TEXTURE")return"#FFFF00";if(this.texture==="RIVER_TEXTURE")return"#2ddfe7"}}class w{constructor(e,t){this.tiles=[],this.width=Math.ceil(e/10),this.height=Math.ceil(t/10),this.grassTerrain=new h(1,!1,"GRASS_TEXTURE"),this.hillTerrain=new h(3,!1,"HILL_TEXTURE"),this.riverTerrain=new h(2,!0,"RIVER_TEXTURE"),this.generateTerrain()}generateTerrain(){for(let t=0;t<this.width;t++){this.tiles[t]=[];for(let i=0;i<this.height;i++)Math.floor(Math.random()*10)===0?this.tiles[t][i]=this.hillTerrain:this.tiles[t][i]=this.grassTerrain}const e=Math.floor(Math.random()*this.width);for(let t=0;t<this.height;t++)this.tiles[e][t]=this.riverTerrain}getTile(e,t){if(e>=0&&e<this.width&&t>=0&&t<this.height)return this.tiles[e][t];throw new Error("Invalid coordinates")}getTiles(){return this.tiles}setTerrainAt(e,t,i){e>=0&&e<this.width&&t>=0&&t<this.height&&(this.tiles[e][t]=i)}getTerrainAt(e,t){if(e>=0&&e<this.width&&t>=0&&t<this.height)return this.tiles[e][t]}}const E={class:"flex flex-col justify-center items-center h-screen"},m={width:"800",height:"600",id:"canvas",ref:"canvas"},R={__name:"FlyweightView",setup(l){function e(){const i=new w(800,600);t(i)}function t(i){const o=document.querySelector("#canvas").getContext("2d"),a=i.getTiles();for(let s=0;s<a.length;s++){const c=a[s],T=s*10;for(let r=0;r<c.length;r++){const d=r*6,f=c[r];f&&(o.fillStyle=f.color,o.fillRect(T,d,10,10))}}}return(i,u)=>(_(),g("div",E,[n("section",null,[n("canvas",m,null,512)]),n("section",{class:"left"},[n("button",{class:"primary-btn",onClick:e},"世界生成")])]))}};export{R as default};
