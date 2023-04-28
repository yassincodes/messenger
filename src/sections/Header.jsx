import { HamburgerIcon } from "@chakra-ui/icons";


function Header() {
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#0084ff", fontSize: "1.5em" }}>ميسنجر الماضي</div>
        <div style={{background: "#F8F8F8", padding: "8px", borderRadius: "50%"}}>
          <HamburgerIcon fontSize="1.7em"  />
        </div>
      </div>

      <div style={{textAlign: "right", margin: "10px 0", paddingBottom: "20px"}} dir="rtl">
      هذا الموقع مخصص لمساعدة المعلمين في تدريس مادة التاريخ بطريقة تفاعلية
        ومسلية, يمكن للمعلمين على سبيل المثال التحدث مع شخصيات مثل "حنبعل"
        و"بورقيبة" وعرض الحوار على شاشة العرض, يمكن لهم كذلك أن أخذ أسئلة
        التلاميذ وطرحها على الشخصيات التاريخية! طريقة تصميم الموقع مستوحات من موقع ميسنجر, ليكون أقرب لتلاميذ السنة الخامسة والسادسة
      </div>

    </div>
  );
}

export default Header;
