interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      showAnswer: false,
      title: "Where should I incorporate my business?",
      desc: "It is a long established fact that a reader be distracted by the readable content of a page when looking a its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum",
   },
   {
      id: 2,
      page: "home_2",
      showAnswer: false,
      title: " What happens my free trial?",
      desc: "It is a long established fact that a reader be distracted by the readable content of a page when looking a its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum",
   },
   {
      id: 3,
      page: "home_2",
      showAnswer: false,
      title: "What is included in your services?",
      desc: "It is a long established fact that a reader be distracted by the readable content of a page when looking a its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum",
   },
   {
      id: 4,
      page: "home_2",
      showAnswer: false,
      title: "What type of company is measured?",
      desc: "It is a long established fact that a reader be distracted by the readable content of a page when looking a its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum",
   },
]

export default faq_data;