(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),l=a.n(i),r=a(2),o=a(3),u=a(1),c=a(5),d=a(4),h=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isOver:!1},n.handleMouseLeave=n.handleMouseLeave.bind(Object(u.a)(n)),n.handleMouseOver=n.handleMouseOver.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleMouseOver",value:function(){this.setState({isOver:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isOver:!1})}},{key:"getColor",value:function(e){return["lightblue","orange","mediumseagreen"][e]}},{key:"render",value:function(){var e=this.props,t=e.task,a=e.onClick,n=e.taskId,i=e.deleteTask,l=this.getColor(t.status),r=2===t.status?"line-through":"none",o=s.a.createElement("div",{style:{display:"flex"},onClick:function(){return a(n)}},s.a.createElement("p",{style:{backgroundColor:l,width:"10px"}}),s.a.createElement("p",{style:{textDecoration:r,marginLeft:"10px"}},t.value));return s.a.createElement("div",{style:{display:"flex",cursor:"pointer",justifyContent:"space-between"},onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave},s.a.createElement("div",null,o),this.state.isOver?s.a.createElement("p",{onClick:function(){return i(n)}},"X"):"")}}]),a}(s.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={value:n.props.value||""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleKeyUp=n.handleKeyUp.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleKeyUp",value:function(e){"Enter"===e.key&&(this.props.onChange(this.state.value),this.setState({value:""}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.state.value,onKeyUp:this.handleKeyUp,onChange:this.handleChange})}}]),a}(s.a.Component),k=(a(7),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isOver:!1,editable:!1},n.handleMouseLeave=n.handleMouseLeave.bind(Object(u.a)(n)),n.handleMouseOver=n.handleMouseOver.bind(Object(u.a)(n)),n.makeEditable=n.makeEditable.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"makeEditable",value:function(){this.setState({editable:!0})}},{key:"handleMouseOver",value:function(){this.setState({isOver:!0})}},{key:"handleMouseLeave",value:function(){this.setState({isOver:!1})}},{key:"handleChange",value:function(e){this.props.onChange(e),this.setState({editable:!1})}},{key:"render",value:function(){var e=this.state.editable?s.a.createElement(v,{value:this.props.heading,onChange:this.handleChange}):s.a.createElement("div",{className:"headerContent"},s.a.createElement("p",{onClick:this.makeEditable},this.props.heading),this.state.isOver?s.a.createElement("p",{onClick:this.props.deleteAllTask},"X"):"");return s.a.createElement("div",{className:"header",onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave},e)}}]),a}(s.a.Component)),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={tasks:[],heading:"Todo"},n.addNewTask=n.addNewTask.bind(Object(u.a)(n)),n.updateHeading=n.updateHeading.bind(Object(u.a)(n)),n.toggleCheckedStatus=n.toggleCheckedStatus.bind(Object(u.a)(n)),n.deleteTask=n.deleteTask.bind(Object(u.a)(n)),n.deleteAllTask=n.deleteAllTask.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"addNewTask",value:function(e){this.setState((function(t){var a=t.tasks.slice();return a.push({status:0,value:e}),{tasks:a}}))}},{key:"getNextState",value:function(e){return(this.state.tasks[e].status+1)%3}},{key:"toggleCheckedStatus",value:function(e){var t=this;this.setState((function(a){var n=JSON.parse(JSON.stringify(a.tasks));return n[e].status=t.getNextState(e),{tasks:n}}))}},{key:"deleteTask",value:function(e){this.setState((function(t){var a=JSON.parse(JSON.stringify(t.tasks));return a.splice(e,1),{tasks:a}}))}},{key:"deleteAllTask",value:function(){this.setState({tasks:[],heading:"Todo"})}},{key:"updateHeading",value:function(e){this.setState({heading:e})}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t,a){return s.a.createElement(h,{task:t,taskId:a,key:a,onClick:e.toggleCheckedStatus,deleteTask:e.deleteTask})}));return s.a.createElement("div",{className:"todo"},s.a.createElement(k,{heading:this.state.heading,onChange:this.updateHeading,deleteAllTask:this.deleteAllTask}),s.a.createElement("div",null," ",t),s.a.createElement(v,{onChange:this.addNewTask}))}}]),a}(s.a.Component),g=function(){return s.a.createElement("div",null,s.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.dafeae0f.chunk.js.map