// Tab section changer (login + register)
const contents = [
   // Register: main button
   {
      left: {         
         parentLeftResponsiveDisplay: "ds-flex",
         wrapper: document.querySelector("#request-register"),
         buttonId: document.querySelector("#request__register__btn"), 
         directWrapper: document.querySelector("#request-login"),
         username: document.querySelector("#request__name"),
         userpass: document.querySelector("#request__password"),
         formfiller: true
      },
      right: {         
         parentRightResponsiveDisplay: "ds-none",
         now: document.querySelector("#request-register-display"),
         after: document.querySelector("#request-login-display")
      },
      directDisplayStyle: "block"
   },
   // Register: back button
   {
      left: {               
         parentLeftResponsiveDisplay: "ds-flex",
         wrapper: document.querySelector("#request-register"),
         buttonId: document.querySelector("#request-left"), 
         directWrapper: document.querySelector("#request-login"),
         username: document.querySelector("#request__name"),
         userpass: document.querySelector("#request__password"),
         formfiller: false
      },
      right: {         
         parentRightResponsiveDisplay: "ds-none",
         now: document.querySelector("#request-register-display"),
         after: document.querySelector("#request-login-display")
      },
      directDisplayStyle: "block"
   },
   // Login: to register
   {
      left: {         
         parentLeftResponsiveDisplay: "ds-flex",
         wrapper: document.querySelector("#request-login"),
         buttonId: document.querySelector("#request__register__direct"), 
         directWrapper: document.querySelector("#request-register"),
         username: document.querySelector("#request__name__login"),
         userpass: document.querySelector("#request__password__login"),
         formfiller: false
      },
      right: {         
         parentRightResponsiveDisplay: "ds-none",
         now: document.querySelector("#request-login-display"),
         after: document.querySelector("#request-register-display")
      },
      directDisplayStyle: "block"
   },
   // Login: interface auth
   {      
      left: {         
         parentLeftResponsiveDisplay: "ds-none",
         wrapper: document.querySelector("#request-login"),
         buttonId: document.querySelector("#request__login__btn"), 
         directWrapper: document.querySelector("#request-interface"),
         username: document.querySelector("#request__name__login"),
         userpass: document.querySelector("#request__password__login"),
         formfiller: true
      },
      right: {         
         parentRightResponsiveDisplay: "ds-flex",
         now: document.querySelector("#request-login-display"),
         after: document.querySelector("#request-interface-display")
      },
      directDisplayStyle: "flex"
   },
   // Request: logout
   {      
      left: {         
         parentLeftResponsiveDisplay: "ds-flex",
         wrapper: document.querySelector("#request-interface"),
         buttonId: document.querySelector("#request-interface-logout"), 
         directWrapper: document.querySelector("#request-login"),
         username: document.querySelector("#request__name__login"),
         userpass: document.querySelector("#request__password__login"),
         formfiller: false
      },
      right: {         
         parentRightResponsiveDisplay: "ds-none",
         now: document.querySelector("#request-interface-display"),
         after: document.querySelector("#request-login-display")
      },
      directDisplayStyle: "block"
   },
   // Request: logout mini
   {      
      left: {         
         parentLeftResponsiveDisplay: "ds-flex",
         wrapper: document.querySelector("#request-interface"),
         buttonId: document.querySelector("#request__interface__logout__mini"), 
         directWrapper: document.querySelector("#request-login"),
         username: document.querySelector("#request__name__login"),
         userpass: document.querySelector("#request__password__login"),
         formfiller: false
      },
      right: {         
         parentRightResponsiveDisplay: "ds-none",
         now: document.querySelector("#request-interface-display"),
         after: document.querySelector("#request-login-display")
      },
      directDisplayStyle: "block"
   }
]

for (const content of contents) {
   const { left, right, directDisplayStyle } = content;
   const { buttonId, directWrapper, wrapper, username, userpass, formfiller, parentLeftResponsiveDisplay } = left;     
   const { now, after, parentRightResponsiveDisplay } = right;
   
   buttonId.onclick = () => {
      const nullData = username.value == "" || userpass.value == "";
      if (nullData && formfiller) return;
      
      fadeEffect();
      setTimeout(() => {
         wrapper.style.display = "none";
         now.style.display = "none";
   
         directWrapper.style.display = directDisplayStyle;
         after.style.display = directDisplayStyle;

         document.querySelector(".request-left").classList.add(parentLeftResponsiveDisplay);
         document.querySelector(".request-right").classList.add(parentRightResponsiveDisplay);
         document.querySelector(".request-left").classList.remove(parentRightResponsiveDisplay);
         document.querySelector(".request-right").classList.remove(parentLeftResponsiveDisplay);
      }, 800);
   }
}

// Close request page   
document.querySelector("#request-left.back").onclick = () => {
   fadeEffect();
   setTimeout(() => { window.open("../index.html", "_self"); }, 800);
}

// History check page
document.querySelector("#request-interface-history").onclick = () => {
   fadeEffect();
   setTimeout(() => { window.open("pp/history.html", "_self"); }, 800);
}