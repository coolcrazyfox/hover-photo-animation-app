import s from "./css/main.module.css";
import firstUrl from "./asset/photos/1.jpg";
import secondUrl from "./asset/photos/2.jpg";
import thirdUrl from "./asset/photos/3.jpg";
import fourthUrl from "./asset/photos/4.jpg";
import fifthUrl from "./asset/photos/5.jpg";
import sixthUrl from "./asset/photos/6.jpg";
import seventhUrl from "./asset/photos/7.jpg";
import eighthUrl from "./asset/photos/8.jpg";
import ninthUrl from "./asset/photos/9.jpg";
import tenthUrl from "./asset/photos/10.jpg";
import eleventhUrl from "./asset/photos/11.jpg";
import twelfthUrl from "./asset/photos/12.jpg";
import thirteenthUrl from "./asset/photos/13.jpg";
import fourteenthUrl from "./asset/photos/14.jpg";

function App() {
  const itemsPhoto = [
    { id: 1, link: firstUrl },
    { id: 2, link: secondUrl },
    { id: 3, link: thirdUrl },
    { id: 4, link: fourthUrl },
    { id: 5, link: fifthUrl },
    { id: 6, link: sixthUrl },
    { id: 7, link: seventhUrl },
    { id: 8, link: eighthUrl },
    { id: 9, link: ninthUrl },
    { id: 10, link: tenthUrl },
    { id: 11, link: eleventhUrl },
    { id: 12, link: twelfthUrl },
    { id: 13, link: thirteenthUrl },
    { id: 14, link: fourteenthUrl },
  ];
  // test3
  return (
    <div>
      <div class={s.wrapper}>
        <div class={s.items}>
          {itemsPhoto.map((p, index) => (
            <div
              key={p.id}
              class={s.item}
              style={{
                backgroundImage: ` url(${p.link})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
