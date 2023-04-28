import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { Avatar } from "@chatscope/chat-ui-kit-react";

function Body() {
  // the prompt will be send as a state to chat component
  const array5 = [
    {
      name: "حنبعل",
      pic: "https://phoenician.org/wp-content/uploads/2020/10/hannibal_barca-815x1024.jpg",
      prompt: "",
      firstMessage:
        "أنا حنبعل, القائد القرطاجي الذي عبر جبال الألب ⛰️ وهزم روما أكثر من مرة",
    },
    {
      name: "إبن خلدون",
      pic: "https://www.aljazeera.net/wp-content/uploads/2019/01/eb1133d8-5ee0-4759-bde0-efc1553ac210.jpeg?resize=770%2C513&quality=80",
      prompt: "",
      firstMessage: "المؤرخ إبن خلدون جاهز للإجابة على أسئلتكم 😎",
    },
    {
      name: "عليسة",
      pic: "https://almaghribalarabi.com/wp-content/uploads/2021/10/unnamed-1-750x375.jpg",
      prompt: "",
      firstMessage: "أهلا أنا عليسة 👋 مؤسسة قرطاج وملكتها الأولى",
    },
  ];

  const array6 = [
    {
      name: "خير الدين بربروس",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIygFfqrz32m1B39CzsUoy6hnJGV7duGKNsxHapcOZ464Ri9eOhUJJCn4&s=10",
      prompt: "",
      firstMessage:
        "أهلا أنا خير الدين بربروس 👋 واحد من القراصنة الأتراك الذين واجهو الإسبان في الحوض الغربي للبحر الأبيض المتوسط, إسألني ما تشاء",
    },
    {
      name: "شارل الخامس",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Titian_-_Portrait_of_Charles_V_Seated_-_WGA22964.jpg/531px-Titian_-_Portrait_of_Charles_V_Seated_-_WGA22964.jpg",
      prompt: "",
      firstMessage:
        "أهلا أنا شارل الخامس 👋 واحد من أبرز ملوك إسبانيا, إسألني ما تشاء",
    },
    {
      name: "سنان باشا",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Arolsen_Klebeband_02_327.jpg/363px-Arolsen_Klebeband_02_327.jpg",
      prompt: "",
      firstMessage:
        "أهلا أنا سنان باشا 👋 قائد الحملة العسكرية العثمانية على البلاد التونسية سنة 1574, إسألني ما تشاء",
    },
    {
      name: "مصطفى خزندار",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mustapha_Khaznadar_1846.jpg/310px-Mustapha_Khaznadar_1846.jpg",
      prompt: "",
      firstMessage:
        "أهلا أنا مصطفى خزندار 👋 توليت منصب وزير المالية في الدولة التونسية بين سنتي 1937 و 1873",
    },
    {
      name: "علي بن غذاهم",
      pic: "https://www.9awmya.tn/wp-content/uploads/2020/09/images-53.jpeg",
      prompt: "",
      firstMessage: "أهلا أنا علي بن غذاهم 👋 قائد إنتفاضة 1864",
    },
    {
      name: "خير الدين التونسي",
      pic: "https://alchetron.com/cdn/hayreddin-pasha-7b543ae4-1552-4d01-bbdd-713597007ab-resize-750.jpeg",
      prompt: "",
      firstMessage: "أهلا أنا خير الدين باشا 👋 إسألني ما تشاء",
    },
    {
      name: "جول فيري",
      pic: "https://i.f1g.fr/media/ext/299x250/image2.evene.fr/files/celebrity/1424.jpg",
      prompt: "",
      firstMessage: "أهلا أنا جول فيري 👋 سياسي فرنسي, إسألني ما تشاء",
    },
    {
      name: "عبد العزيز الثعالبي ",
      pic: "https://upload.wikimedia.org/wikipedia/commons/2/29/Abdelaziz_Th%C3%A2albi_2.jpg",
      prompt: "",
      firstMessage: "أهلا أنا عبد العزيز الثعالبي 👋 إسألني ما تشاء",
    },
    {
      name: "الحبيب بورقيبة",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Habib_Bourguiba_portrait4.jpg/360px-Habib_Bourguiba_portrait4.jpg",
      prompt: "",
      firstMessage: "أهلا أنا الحبيب بورقيبة 👋 إسألني ما تشاء",
    },
    {
      name: "فرحات حشاد",
      pic: "http://marayana.com/wp-content/uploads/2019/09/t%C3%A9l%C3%A9chargement-e1567694832680.jpg",
      prompt: "",
      firstMessage: "أهلا أنا فرحات حشاد 👋 إسألني ما تشاء",
    },
  ];

  return (
    <div dir="rtl" style={{ margin: "20px" }}>
      <div>
        <span className="section-title">شخصيات لتلاميذ السنة الخامسة</span>
        <div className="section-content">
          {array5.map((character) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "20px 10px",
                }}
              >
                <div>
                  <Avatar
                    src={character.pic}
                    name={character.name}
                    status="available"
                    size="lg"
                  />
                </div>
                <div style={{ width: "92vw", marginRight: "10px" }}>
                  <div>{character.name}</div>
                  <div>{`${character.firstMessage
                    .split(" ")
                    .slice(0, 5)
                    .join(" ")}...`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <span className="section-title">شخصيات لتلاميذ السنة السادسة</span>
        <div className="section-content">
          {array6.map((character) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "20px 10px",
                }}
              >
                <div>
                  <Avatar
                    src={character.pic}
                    name={character.name}
                    status="available"
                    size="lg"
                  />
                </div>
                <div style={{ width: "92vw", marginRight: "10px" }}>
                  <div>{character.name}</div>
                  <div>{`${character.firstMessage
                    .split(" ")
                    .slice(0, 5)
                    .join(" ")}...`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
