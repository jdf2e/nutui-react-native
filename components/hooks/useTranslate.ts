import { useState } from "react";
import { BaseLang } from "../configprovider/locales/types";
import useLocale from "./useLocale";

type Keys = keyof BaseLang;
interface LanguagesPackage<A = {}> {
  [key: string]: {
    [k in Keys]?: string;
  } & A;
}

const useTranslate = <T>(languagesPackage: LanguagesPackage<T>) => {
  const [locale] = useLocale();
  const [translated, setLanguagesPackage] = useState<BaseLang & T>(
    languagesPackage[locale || 'zh-CN'] as any
  );
  // useEffect(() => {
  //   if (languagesPackage) {
  //     // @ts-ignore
  //     setLanguagesPackage(languagesPackage[locale || 'zh-CN'] || {})
  //   }
  // }, [])
  return [translated];
};
export default useTranslate;
