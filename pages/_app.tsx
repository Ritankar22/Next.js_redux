// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import Wrapper from "@/layout/wrapper/wrapper";
// import { Provider } from "react-redux"
// import { store } from "@/redux/store/store";
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//       <Provider store={store}>
//         <Wrapper>
//         <Component {...pageProps} />;
//         </Wrapper>
//       </Provider>
//   );
// }

//......................Chirantan's....................//

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "@/layout/wrapper/wrapper";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store/store";
import NewsletterSection from "@/components/newsLetter/newsLetter";
import { Toaster } from "react-hot-toast"
import { useEffect } from "react";
import { check_token } from "@/redux/authSlice/authSlice";


export function TokenChecking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(check_token(''))
  }, [dispatch])

  return (
    ""
  )
}



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
        <TokenChecking />
        <Toaster />
      </Wrapper>
    </Provider>
  );
}