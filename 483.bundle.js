"use strict";(self.webpackChunkfeedback_app=self.webpackChunkfeedback_app||[]).push([[483],{2483:(e,a,l)=>{l.r(a),l.d(a,{default:()=>f});var t=l(6540),n=l(8084),i=l(2664),r=l(7844),m=l(5692),c=l(1083),d={name:"",email:"",feedback:""},u=i.Ik({email:i.Yj().email("Enter a valid email").required("Email is required"),name:i.Yj().required("Name is required"),feedback:i.Yj().required("Feedback is required")});const f=function(){return t.createElement("div",{className:"feedback-form-container"},t.createElement("div",{className:"feedback-form-block"},t.createElement("div",{className:"feedback-header"},t.createElement("h1",null,"Feedback")),t.createElement("div",null,t.createElement("center",null,t.createElement("p",null,"Please feel free to let me know what you think of the website!"),t.createElement("p",null,"Any feedback is appreciated -"),t.createElement("p",null,"I am always looking for ways to improve!"))),t.createElement(n.l1,{initialValues:d,validationSchema:u,onSubmit:function(e,a){var l=a.setSubmitting;c.A.post("http://localhost:5000/submit-feedback",e).then((function(e){alert("Feedback submitted successfully")})).catch((function(e){alert("Error submitting feedback")})).finally((function(){l(!1)}))}},(function(e){return t.createElement(n.lV,null,t.createElement("div",{className:"form-field form-field-name"},t.createElement(r.A,{id:"name",name:"name",label:"Name",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name})),t.createElement("div",{className:"form-field form-field-email"},t.createElement(r.A,{id:"email",name:"email",label:"Email",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email})),t.createElement("div",{className:"form-field form-field-feedback"},t.createElement(r.A,{id:"feedback",name:"feedback",label:"Feedback",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.feedback,multiline:!0,rows:4})),t.createElement("div",{className:"feedback-submit-button"},t.createElement(m.A,{color:"primary",variant:"contained",type:"submit"},"Submit")))}))))}}}]);
//# sourceMappingURL=483.bundle.js.map