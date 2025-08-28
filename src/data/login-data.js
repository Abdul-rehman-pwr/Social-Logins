export const loginFields = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Your Email",
    className: "border-[#636364] placeholder:text-[#636364] h--[41.31px]",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Password",
    className: "border-[#636364] placeholder:text-[#636364] h--[41.31px]",
  },
];

export const loginButton = {
  text: "Sign In",
  className:
    "bg-[#66FCF0] hover:bg-black text-black hover:text-[#66FCF0] text-sm lg:text-base h-10 lg:h-12",
};

export const formFooterData = {
  label: "Don't Have an Account?",
  linkText: "Sign Up Here",
  href: "register",
};

export const formRememberData = {
  rememberLabel: "Remember Me",
  forgotText: "Forgot Password",
  forgotHref: "forgot-password",
};

export const formHeaderData = {
  title: "Welcome Back",
  subtitle: "Welcome back! Enter your details",
};
