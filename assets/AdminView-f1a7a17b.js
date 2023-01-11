import"./index.min-e0ab316a.js";import{t as $,o as d,c as i,b as e,a as t,d as y,w as u,v as _,i as A,F as U,e as j,f as L,g as v,h as N,n as E,j as D,r as x,k as O,l as w,m as q}from"./index-d76a3173.js";const F={class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},I={key:0,class:"modal-dialog modal-xl relative w-auto pointer-events-none"},J={class:"mod al-content productModal-content"},R={class:"modal-header productModal-header"},T={key:0,class:"productModal-header-h5",id:"exampleModalLabel"},z={key:1,class:"productModal-header-h5",id:"exampleModalLabel"},G=t("button",{type:"button",class:"productModal-btn-close text-gray-200","data-bs-dismiss":"modal","aria-label":"Close"},[t("i",{class:"fa-solid fa-xmark"})],-1),H={class:"modal-body relative p-4"},K={class:"grid grid-cols-3 gap-4"},Q=t("label",{for:"js-imageUrl",class:"productModal-label"},"主圖網址:",-1),W=["src"],X={class:"productModal-image-group"},Y=t("h1",{class:"text-4xl"},"新增圖片",-1),Z={class:"grid grid-flow-col gap-4"},tt={class:"flex"},st={class:"mt-4 flex justify-end"},ot=["onClick"],et=t("i",{class:"fa-solid fa-xmark text-2xl"},null,-1),lt=[et],at=["src"],dt={class:"col-span-2"},it={class:"col-span-2"},nt=t("label",{for:"js-title",class:"productModal-label"},"商品名稱:",-1),ct={class:"grid grid-cols-2 gap-2"},rt=t("label",{for:"js-category",class:"productModal-label"},"分類:",-1),ut=t("label",{for:"js-unit",class:"productModal-label"},"單位:",-1),pt={class:"grid grid-cols-2 gap-2"},_t=t("label",{for:"js-price",class:"productModal-label"},"售價:",-1),bt=t("label",{for:"js-origin-price",class:"productModal-label"},"原價:",-1),mt=t("div",{class:"col-span-2 w-full my-4 h-[1px] content-none bg-slate-200"},null,-1),ht={class:"col-span-2"},vt=t("label",{for:"js-description",class:"productModal-label"},"商品敘述:",-1),gt={class:"col-span-2"},ft=t("label",{for:"js-content",class:"productModal-label"},"說明內容：",-1),yt=t("label",{for:"js-isEnabled",class:"productModal-label"},"是否啟用：",-1),xt={class:"modal-footer productModal-footer"},Mt=t("button",{type:"button",class:"btn-primary-cancel","data-bs-dismiss":"modal","aria-label":"Close"},"取消",-1),kt={key:1,class:"modal-dialog modal-base relative w-auto pointer-events-none"},$t={class:"mod al-content productModal-content"},wt=t("div",{class:"modal-header productModal-header-delete"},[t("h5",{class:"productModal-header-h5",id:"exampleModalLabel"}," 刪除產品 "),t("button",{type:"button",class:"productModal-btn-close text-gray-200","data-bs-dismiss":"modal","aria-label":"Close"},[t("i",{class:"fa-solid fa-xmark"})])],-1),Ut={class:"modal-body relative p-4"},jt={class:"modal-footer productModal-footer"},Pt=t("button",{type:"button",class:"btn-primary-cancel","data-bs-dismiss":"modal","aria-label":"Close"},"取消",-1),St={__name:"ProductModal",props:{product:Object,modalStatus:String},emits:["update"],setup(M,{emit:b}){const h=M,s=$(h,"product"),c=$(h,"modalStatus");let p="";const n=a=>{a!==""&&(s.value.imagesUrl?(s.value.imagesUrl.push(a),p=""):(s.value.imagesUrl=[],s.value.imagesUrl.push(a),p=""))},m=a=>{s.value.imagesUrl.splice(a,1)},r=()=>{const a=s.value.title===void 0,o=s.value.category===void 0,l=s.value.unit===void 0,f=s.value.price===void 0&&typeof s.value.price=="number",k=s.value.origin_price===void 0&&typeof s.value.origin_price=="number",C=s.value.description===void 0,V=s.value.content===void 0,B=s.value.imageUrl===void 0;return a||o||l||f||k||C||V||B},g=(a,o)=>{N({data:a},o).then(()=>{alert("產品更新成功"),b("update")}).catch(l=>{console.log(l)})},P=a=>{r()?alert("請填寫完整資訊"):E({data:a}).then(o=>{console.log(o),alert("產品新增成功!"),b("update")}).catch(o=>{console.log(o)})},S=a=>{D(a).then(()=>{alert("刪除成功"),b("update")}).catch(o=>console.log(o))};return(a,o)=>(d(),i("div",F,[e(c)!=="deleteProduct"?(d(),i("div",I,[t("div",J,[t("div",R,[e(c)==="editProduct"?(d(),i("h5",T," 編輯產品 ")):e(c)==="newProduct"?(d(),i("h5",z," 新增產品 ")):y("",!0),G]),t("div",H,[t("div",K,[t("div",null,[Q,u(t("input",{class:"productModal-input","onUpdate:modelValue":o[0]||(o[0]=l=>e(s).imageUrl=l),id:"js-imageUrl"},null,512),[[_,e(s).imageUrl]]),t("img",{src:e(s).imageUrl,alt:"",class:"w-1/2 mt-4"},null,8,W),t("div",X,[Y,t("div",Z,[u(t("input",{type:"text",class:"productModal-input","onUpdate:modelValue":o[1]||(o[1]=l=>A(p)?p.value=l:p=l)},null,512),[[_,e(p)]]),t("div",tt,[t("button",{type:"button",class:"btn-primary",onClick:o[2]||(o[2]=l=>n(e(p)))},"新增")])]),(d(!0),i(U,null,j(e(s).imagesUrl,(l,f)=>(d(),i("div",{key:l},[t("div",st,[t("button",{type:"button",onClick:k=>m(f)},lt,8,ot)]),t("img",{src:l,class:"object-cover",alt:""},null,8,at)]))),128))])]),t("div",dt,[t("div",it,[nt,u(t("input",{class:"productModal-input","onUpdate:modelValue":o[3]||(o[3]=l=>e(s).title=l),id:"js-title"},null,512),[[_,e(s).title]])]),t("div",ct,[t("div",null,[rt,u(t("input",{class:"productModal-input","onUpdate:modelValue":o[4]||(o[4]=l=>e(s).category=l),id:"js-category"},null,512),[[_,e(s).category]])]),t("div",null,[ut,u(t("input",{class:"productModal-input","onUpdate:modelValue":o[5]||(o[5]=l=>e(s).unit=l),id:"js-unit"},null,512),[[_,e(s).unit]])])]),t("div",pt,[t("div",null,[_t,u(t("input",{type:"number",min:"0",class:"productModal-input","onUpdate:modelValue":o[6]||(o[6]=l=>e(s).price=l),id:"js-price"},null,512),[[_,e(s).price,void 0,{number:!0}]])]),t("div",null,[bt,u(t("input",{type:"number",min:"0",class:"productModal-input","onUpdate:modelValue":o[7]||(o[7]=l=>e(s).origin_price=l),id:"js-origin-price"},null,512),[[_,e(s).origin_price,void 0,{number:!0}]])])]),mt,t("div",ht,[vt,u(t("textarea",{class:"productModal-input","onUpdate:modelValue":o[8]||(o[8]=l=>e(s).description=l),id:"js-description",rows:"5"},`
                `,512),[[_,e(s).description]])]),t("div",gt,[ft,u(t("input",{class:"productModal-input","onUpdate:modelValue":o[9]||(o[9]=l=>e(s).content=l),id:"js-content"},null,512),[[_,e(s).content]])]),yt,u(t("input",{type:"checkbox",class:"productModal-input-checkbox","onUpdate:modelValue":o[10]||(o[10]=l=>e(s).is_enabled=l),"true-value":1,"false-value":0,id:"js-isEnabled"},null,512),[[L,e(s).is_enabled]])])])]),t("div",xt,[Mt,e(c)==="editProduct"?(d(),i("button",{key:0,type:"button",class:"ml-4 btn-primary",onClick:o[11]||(o[11]=l=>g(e(s),e(s).id)),"data-bs-dismiss":"modal"},"確認編輯")):e(c)==="newProduct"?(d(),i("button",{key:1,type:"button",class:"ml-4 btn-primary",onClick:o[12]||(o[12]=l=>P(e(s))),"data-bs-dismiss":"modal"},"確認新增")):y("",!0)])])])):e(c)==="deleteProduct"?(d(),i("div",kt,[t("div",$t,[wt,t("div",Ut," 確認刪除 "+v(e(s).title)+" ? ",1),t("div",jt,[Pt,t("button",{type:"button",class:"ml-4 t-btn-delete",onClick:o[13]||(o[13]=l=>S(e(s).id)),"data-bs-dismiss":"modal"},"確認刪除 ")])])])):y("",!0)]))}},Ct={class:"w-1/2 mx-auto"},Vt={class:"mx-auto my-20 flex flex-col"},Bt=t("h1",{class:"text-5xl"},"產品列表",-1),At={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},Lt={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},Nt={class:"overflow-hidden"},Et={class:"flex justify-end"},Dt=t("i",{class:"fa-solid fa-square-plus text-lg"},null,-1),Ot=[Dt],qt={class:"min-w-full"},Ft=t("thead",{class:"bg-white border-b"},[t("tr",null,[t("th",{scope:"col",class:"t-head-th"}," 產品名稱 "),t("th",{scope:"col",class:"t-head-th"}," 原價 "),t("th",{scope:"col",class:"t-head-th"}," 售價 "),t("th",{scope:"col",class:"t-head-th"}," 是否啟用 "),t("th",{scope:"col",class:"t-head-th"}," 刪除/編輯 ")])],-1),It={class:"t-body-td"},Jt={class:"t-body-td"},Rt={class:"t-body-td"},Tt={class:"t-body-td"},zt={key:0,class:"text-lg text-green-600 font-bold"},Gt={key:1,class:"text-lg font-bold"},Ht={class:"t-body-td"},Kt=["onClick"],Qt=t("i",{class:"fa-solid fa-trash"},null,-1),Wt=[Qt],Xt=["onClick"],Yt=t("i",{class:"fa-solid fa-pen-to-square"},null,-1),Zt=[Yt],os={__name:"AdminView",setup(M){const b=x(),h=x({}),s=x("");O(async()=>{b.value=await w().then(n=>n.data.products).catch(n=>console.log(n))});const c=(n,m)=>{h.value=JSON.parse(JSON.stringify(n)),s.value=m},p=async()=>{b.value=await w().then(n=>n.data.products).catch(n=>console.log(n))};return(n,m)=>(d(),i("div",Ct,[t("div",Vt,[Bt,t("div",At,[t("div",Lt,[t("div",Nt,[t("div",Et,[t("button",{onClick:m[0]||(m[0]=r=>c({imagesUrl:[],is_enabled:0},"newProduct")),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"btn-primary"},Ot)]),t("table",qt,[Ft,t("tbody",null,[(d(!0),i(U,null,j(b.value,r=>(d(),i("tr",{key:r.id,class:"t-body-tr"},[t("td",It,v(r.title),1),t("td",Jt,v(r.origin_price),1),t("td",Rt,v(r.price),1),t("td",Tt,[r.is_enabled?(d(),i("p",zt,"啟用")):(d(),i("p",Gt,"未啟用"))]),t("td",Ht,[t("button",{class:"t-btn-delete",onClick:g=>c(r,"deleteProduct"),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light"},Wt,8,Kt),t("button",{onClick:g=>c(r,"editProduct"),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"t-btn-edit"},Zt,8,Xt)])]))),128))])])])])])]),q(St,{product:h.value,onUpdate:p,modalStatus:s.value},null,8,["product","modalStatus"])]))}};export{os as default};
