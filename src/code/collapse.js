let code = {};


code.base = `
<template>
      <IvueCollapse v-model="active">
            <IvueCollapsePanel name="0">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>史蒂夫·乔布斯
                  <p
                        slot="content"
                  >史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </IvueCollapsePanel>
            <IvueCollapsePanel name="1">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>斯蒂夫·盖瑞·沃兹尼亚克
                  <p
                        slot="content"
                  >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
            </IvueCollapsePanel>
            <IvueCollapsePanel name="2">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>乔纳森·伊夫
                  <p
                        slot="content"
                  >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
            </IvueCollapsePanel>
      </IvueCollapse>
</template>

<script>
      export default {
            data () {
                  return {
                        active: '0'
                  }
            }
      }
</script>
`;


code.accordion = `
<template>
      <IvueCollapse v-model="active" accordion>
            <IvueCollapsePanel name="0">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>史蒂夫·乔布斯
                  <p
                        slot="content"
                  >史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </IvueCollapsePanel>
            <IvueCollapsePanel name="1">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>斯蒂夫·盖瑞·沃兹尼亚克
                  <p
                        slot="content"
                  >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
            </IvueCollapsePanel>
            <IvueCollapsePanel name="2">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>乔纳森·伊夫
                  <p
                        slot="content"
                  >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
            </IvueCollapsePanel>
      </IvueCollapse>
</template>

<script>
      export default {
            data () {
                  return {
                        active: ['0','1']
                  }
            }
      }
</script>
`;


code.nesting = `
<template>
      <IvueCollapse v-model="active">
            <IvueCollapsePanel name="0">
                  <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>史蒂夫·乔布斯
                  <div
                        slot="content"
                  >史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                        <IvueCollapse v-model="active1">
                              <IvueCollapsePanel name="1">
                                    <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>斯蒂夫·盖瑞·沃兹尼亚克
                                    <p
                                          slot="content"
                                    >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                              </IvueCollapsePanel>
                              <IvueCollapsePanel name="2">
                                    <IvueIcon slot="header-icon">keyboard_arrow_right</IvueIcon>乔纳森·伊夫
                                    <p
                                          slot="content"
                                    >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                              </IvueCollapsePanel>
                        </IvueCollapse>
                  </div>
            </IvueCollapsePanel>
      </IvueCollapse>
</template>

<script>
      export default {
            data () {
                  return {
                        active: ['0', '1'],
                        active1: ''
                  }
            }
      }
</script>
`;

export default code;
