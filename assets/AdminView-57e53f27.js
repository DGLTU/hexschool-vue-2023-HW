import"./index.min-e0ab316a.js";import{t as U,o as n,c as i,b as o,a as t,d as M,w as _,v as g,i as E,F as j,e as w,f as O,g as v,h as q,n as D,j as F,k as $,l as P,r as x,m as I,p as S,q as V}from"./index-675746eb.js";const J={class:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},R={key:0,class:"modal-dialog modal-xl relative w-auto pointer-events-none"},T={class:"mod al-content productModal-content"},z={class:"modal-header productModal-header"},H={key:0,class:"productModal-header-h5",id:"exampleModalLabel"},G={key:1,class:"productModal-header-h5",id:"exampleModalLabel"},K=t("button",{type:"button",class:"productModal-btn-close text-gray-200","data-bs-dismiss":"modal","aria-label":"Close"},[t("i",{class:"fa-solid fa-xmark"})],-1),Q={class:"modal-body relative p-4"},W={class:"grid grid-cols-3 gap-4"},X=t("label",{for:"js-imageUrl",class:"productModal-label"},"主圖網址:",-1),Y=["src"],Z={class:"productModal-image-group"},tt=t("h1",{class:"text-4xl"},"新增圖片",-1),et={class:"grid grid-flow-col gap-4"},st={class:"flex"},ot={class:"mt-4 flex justify-end"},at=["onClick"],lt=t("i",{class:"fa-solid fa-xmark text-2xl"},null,-1),dt=[lt],nt=["src"],it={class:"col-span-2"},ct={class:"col-span-2"},rt=t("label",{for:"js-title",class:"productModal-label"},"商品名稱:",-1),ut={class:"grid grid-cols-2 gap-2"},pt=t("label",{for:"js-category",class:"productModal-label"},"分類:",-1),_t=t("label",{for:"js-unit",class:"productModal-label"},"單位:",-1),bt={class:"grid grid-cols-2 gap-2"},mt=t("label",{for:"js-price",class:"productModal-label"},"售價:",-1),gt=t("label",{for:"js-origin-price",class:"productModal-label"},"原價:",-1),ht=t("div",{class:"col-span-2 w-full my-4 h-[1px] content-none bg-slate-200"},null,-1),vt={class:"col-span-2"},ft=t("label",{for:"js-description",class:"productModal-label"},"商品敘述:",-1),yt={class:"col-span-2"},xt=t("label",{for:"js-content",class:"productModal-label"},"說明內容：",-1),kt=t("label",{for:"js-isEnabled",class:"productModal-label"},"是否啟用：",-1),Mt={class:"modal-footer productModal-footer"},$t=t("button",{type:"button",class:"btn-primary-cancel","data-bs-dismiss":"modal","aria-label":"Close"},"取消",-1),Pt={key:1,class:"modal-dialog modal-base relative w-auto pointer-events-none"},Ut={class:"mod al-content productModal-content"},jt=t("div",{class:"modal-header productModal-header-delete"},[t("h5",{class:"productModal-header-h5",id:"exampleModalLabel"}," 刪除產品 "),t("button",{type:"button",class:"productModal-btn-close text-gray-200","data-bs-dismiss":"modal","aria-label":"Close"},[t("i",{class:"fa-solid fa-xmark"})])],-1),wt={class:"modal-body relative p-4"},Ct={class:"modal-footer productModal-footer"},St=t("button",{type:"button",class:"btn-primary-cancel","data-bs-dismiss":"modal","aria-label":"Close"},"取消",-1),Vt={__name:"ProductModal",props:{product:Object,modalStatus:String},emits:["update"],setup(f,{emit:b}){const h=f,e=U(h,"product"),r=U(h,"modalStatus");let u="";const m=c=>{c!==""&&(e.value.imagesUrl?(e.value.imagesUrl.push(c),u=""):(e.value.imagesUrl=[],e.value.imagesUrl.push(c),u=""))},l=c=>{e.value.imagesUrl.splice(c,1)},d=()=>{const c=e.value.title===void 0,s=e.value.category===void 0,a=e.value.unit===void 0,k=e.value.price===void 0&&typeof e.value.price=="number",C=e.value.origin_price===void 0&&typeof e.value.origin_price=="number",N=e.value.description===void 0,A=e.value.content===void 0,L=e.value.imageUrl===void 0;return c||s||a||k||C||N||A||L},p=(c,s)=>{q({data:c},s).then(()=>{alert("產品更新成功"),b("update")}).catch(a=>{console.log(a)})},y=c=>{d()?alert("請填寫完整資訊"):D({data:c}).then(s=>{console.log(s),alert("產品新增成功!"),b("update")}).catch(s=>{console.log(s)})},B=c=>{F(c).then(()=>{alert("刪除成功"),b("update")}).catch(s=>console.log(s))};return(c,s)=>(n(),i("div",J,[o(r)!=="deleteProduct"?(n(),i("div",R,[t("div",T,[t("div",z,[o(r)==="editProduct"?(n(),i("h5",H," 編輯產品 ")):o(r)==="newProduct"?(n(),i("h5",G," 新增產品 ")):M("",!0),K]),t("div",Q,[t("div",W,[t("div",null,[X,_(t("input",{class:"productModal-input","onUpdate:modelValue":s[0]||(s[0]=a=>o(e).imageUrl=a),id:"js-imageUrl"},null,512),[[g,o(e).imageUrl]]),t("img",{src:o(e).imageUrl,alt:"",class:"w-1/2 mt-4"},null,8,Y),t("div",Z,[tt,t("div",et,[_(t("input",{type:"text",class:"productModal-input","onUpdate:modelValue":s[1]||(s[1]=a=>E(u)?u.value=a:u=a)},null,512),[[g,o(u)]]),t("div",st,[t("button",{type:"button",class:"btn-primary",onClick:s[2]||(s[2]=a=>m(o(u)))},"新增")])]),(n(!0),i(j,null,w(o(e).imagesUrl,(a,k)=>(n(),i("div",{key:a},[t("div",ot,[t("button",{type:"button",onClick:C=>l(k)},dt,8,at)]),t("img",{src:a,class:"object-cover",alt:""},null,8,nt)]))),128))])]),t("div",it,[t("div",ct,[rt,_(t("input",{class:"productModal-input","onUpdate:modelValue":s[3]||(s[3]=a=>o(e).title=a),id:"js-title"},null,512),[[g,o(e).title]])]),t("div",ut,[t("div",null,[pt,_(t("input",{class:"productModal-input","onUpdate:modelValue":s[4]||(s[4]=a=>o(e).category=a),id:"js-category"},null,512),[[g,o(e).category]])]),t("div",null,[_t,_(t("input",{class:"productModal-input","onUpdate:modelValue":s[5]||(s[5]=a=>o(e).unit=a),id:"js-unit"},null,512),[[g,o(e).unit]])])]),t("div",bt,[t("div",null,[mt,_(t("input",{type:"number",min:"0",class:"productModal-input","onUpdate:modelValue":s[6]||(s[6]=a=>o(e).price=a),id:"js-price"},null,512),[[g,o(e).price,void 0,{number:!0}]])]),t("div",null,[gt,_(t("input",{type:"number",min:"0",class:"productModal-input","onUpdate:modelValue":s[7]||(s[7]=a=>o(e).origin_price=a),id:"js-origin-price"},null,512),[[g,o(e).origin_price,void 0,{number:!0}]])])]),ht,t("div",vt,[ft,_(t("textarea",{class:"productModal-input","onUpdate:modelValue":s[8]||(s[8]=a=>o(e).description=a),id:"js-description",rows:"5"},`
                `,512),[[g,o(e).description]])]),t("div",yt,[xt,_(t("input",{class:"productModal-input","onUpdate:modelValue":s[9]||(s[9]=a=>o(e).content=a),id:"js-content"},null,512),[[g,o(e).content]])]),kt,_(t("input",{type:"checkbox",class:"productModal-input-checkbox","onUpdate:modelValue":s[10]||(s[10]=a=>o(e).is_enabled=a),"true-value":1,"false-value":0,id:"js-isEnabled"},null,512),[[O,o(e).is_enabled]])])])]),t("div",Mt,[$t,o(r)==="editProduct"?(n(),i("button",{key:0,type:"button",class:"ml-4 btn-primary",onClick:s[11]||(s[11]=a=>p(o(e),o(e).id)),"data-bs-dismiss":"modal"},"確認編輯")):o(r)==="newProduct"?(n(),i("button",{key:1,type:"button",class:"ml-4 btn-primary",onClick:s[12]||(s[12]=a=>y(o(e)))},"確認新增")):M("",!0)])])])):o(r)==="deleteProduct"?(n(),i("div",Pt,[t("div",Ut,[jt,t("div",wt," 確認刪除 "+v(o(e).title)+" ? ",1),t("div",Ct,[St,t("button",{type:"button",class:"ml-4 t-btn-delete",onClick:s[13]||(s[13]=a=>B(o(e).id)),"data-bs-dismiss":"modal"},"確認刪除 ")])])])):M("",!0)]))}},Bt={class:"pagination"},Nt={"aria-label":"Page navigation"},At=["onClick"],Lt={__name:"PaginationBar",props:{pagination:Object},emits:["handlePage"],setup(f,{emit:b}){const e=U(f,"pagination"),r=m=>{b("handlePage",m)},u=m=>{let l="";return e.value.current_page===m?l="page-active page-disabled":l="page",l};return(m,l)=>(n(),i("div",Bt,[t("nav",Nt,[t("ul",null,[t("li",null,[t("a",{href:"#",class:$(o(e).has_pre?"page-pre":"page-pre page-disabled"),onClick:l[0]||(l[0]=P(d=>r(o(e).current_page-1),["prevent"]))},"上頁",2)]),(n(!0),i(j,null,w(o(e).total_pages,(d,p)=>(n(),i("li",{key:p},[t("a",{href:"#",class:$(u(d)),onClick:P(y=>r(d),["prevent"])},v(d),11,At)]))),128)),t("li",null,[t("a",{href:"#",class:$(o(e).has_next?"page-next":"page-next page-disabled"),onClick:l[1]||(l[1]=P(d=>r(o(e).current_page+1),["prevent"]))},"下頁",2)])])])]))}},Et={class:"w-1/2 mx-auto"},Ot={class:"mx-auto my-20 flex flex-col"},qt=t("h1",{class:"text-5xl"},"產品列表",-1),Dt={class:"overflow-x-auto sm:-mx-6 lg:-mx-8"},Ft={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},It={class:"overflow-hidden"},Jt={class:"flex justify-end"},Rt=t("i",{class:"fa-solid fa-square-plus text-lg"},null,-1),Tt=[Rt],zt={class:"min-w-full"},Ht=t("thead",{class:"bg-white border-b"},[t("tr",null,[t("th",{scope:"col",class:"t-head-th"}," 產品名稱 "),t("th",{scope:"col",class:"t-head-th"}," 原價 "),t("th",{scope:"col",class:"t-head-th"}," 售價 "),t("th",{scope:"col",class:"t-head-th"}," 是否啟用 "),t("th",{scope:"col",class:"t-head-th"}," 刪除/編輯 ")])],-1),Gt={class:"t-body-td"},Kt={class:"t-body-td"},Qt={class:"t-body-td"},Wt={class:"t-body-td"},Xt={key:0,class:"text-lg text-green-600 font-bold"},Yt={key:1,class:"text-lg font-bold"},Zt={class:"t-body-td"},te=["onClick"],ee=t("i",{class:"fa-solid fa-trash"},null,-1),se=[ee],oe=["onClick"],ae=t("i",{class:"fa-solid fa-pen-to-square"},null,-1),le=[ae],ie={__name:"AdminView",setup(f){const b=x(),h=x({}),e=x({}),r=x("");I(async()=>{S().then(l=>{b.value=l.data.products,h.value=l.data.pagination}).catch(l=>console.log(l))});const u=(l,d)=>{e.value=JSON.parse(JSON.stringify(l)),r.value=d},m=async l=>{S(l).then(d=>{b.value=d.data.products,h.value=d.data.pagination}).catch(d=>console.log(d))};return(l,d)=>(n(),i("div",Et,[t("div",Ot,[qt,t("div",Dt,[t("div",Ft,[t("div",It,[t("div",Jt,[t("button",{onClick:d[0]||(d[0]=p=>u({imagesUrl:[],is_enabled:0},"newProduct")),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"btn-primary"},Tt)]),t("table",zt,[Ht,t("tbody",null,[(n(!0),i(j,null,w(b.value,p=>(n(),i("tr",{key:p.id,class:"t-body-tr"},[t("td",Gt,v(p.title),1),t("td",Kt,v(p.origin_price),1),t("td",Qt,v(p.price),1),t("td",Wt,[p.is_enabled?(n(),i("p",Xt,"啟用")):(n(),i("p",Yt,"未啟用"))]),t("td",Zt,[t("button",{class:"t-btn-delete",onClick:y=>u(p,"deleteProduct"),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light"},se,8,te),t("button",{onClick:y=>u(p,"editProduct"),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"t-btn-edit"},le,8,oe)])]))),128))])])])])])]),V(Vt,{product:e.value,onUpdate:m,modalStatus:r.value},null,8,["product","modalStatus"]),V(Lt,{pagination:h.value,onHandlePage:m},null,8,["pagination"])]))}};export{ie as default};
