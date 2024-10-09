import "./Sentence.css";

const Sentence = () => {
  const sentences = [
    "Ve filmu se koncepce cestování v čase objevila již v jeho začátcích.",
    "Pomocí obracečů času cestoval do minulosti i Harry Potter ve filmu Vězeň z Azkabanu.",
    "V komedii Na hromnice o den více Bill Murray necestoval, ale naopak zůstával nedobrovolně pořad v jednom dni.",
    "Ve francouzské komedii Návštěvníci cestoval středověký rytíř a jeho sluha do současnosti.",
    "I Arnold Schwarzenegger cestoval časem, jako Terminátor.",
    "Snad nejznámější cestovatelé časem jsou Marty McFly a doktor Brown ve filmu Návrat do budoucnosti.",
    "Román Stroj času od H. G. Wellse byl již dvakrát zfilmován. Poprvé v roce 1960 a pak 2002.",
  ];

  const random = Math.floor(Math.random() * sentences.length);
  return (
    <div className="sentence">
      ... <em>{sentences[random]} ...</em>
    </div>
  );
};
export default Sentence;
