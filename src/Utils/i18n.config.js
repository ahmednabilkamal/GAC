import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  ar: {
    translation: {
      العوده: 'العوده',
      ديسمبر: 'يناير',
      تقويم_الأحداث: 'تقويم الاحداث',
      الكل: 'الكل',
      جديد_الأخبار: 'جديد الأخبار',
      الأكثر_مشاهده: 'الأكثر مشاهده',
      محتوى_الخبر:
        'جمارك أبوظبي وجمارك دبي توقعان اتفاقية ومذكرة تفاهم مع الهيئة',
      تاريخ: '22/10/2021',
      تفاصيل_الخبر: 'تدريب مفتشي جمارك ابوظبي عبر تقنية الواقع الافتراضي',
      عنوان_الخبر: 'اتفاقية التجارة الحرة العربية الكبرى (جافتا)',
      عنوان1:
        'مثال تجريبي على محتوى الخبر يستبدل بالنص عضوًا في جامعة الدول العربية عام 1981 اتفاقية',
      عنوان2:
        'التجارة الحرة العربية واتفقوا على شروطها عام مثال 1997 بهدف تيسير وتطوير التجارة بين الدول العربية واتفق أعضاء الاتفاقية على القضاء',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ar', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
