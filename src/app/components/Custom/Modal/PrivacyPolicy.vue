<template>
  <ContentWrapper>
    <div class="container">
      <table border="1" width="100%" cellspacing="0" cellpadding="15" v-if="isChinese">
        <tbody>
          <tr>
            <td align="center">
              <table border="0" width="100%">
                <tbody>
                  <tr>
                    <td align="left">
                      <h2 style="text-align: center">果核CAT隱私權條款</h2>
                      <p>當您完成Compat APP Testing系統(下簡稱CAT)會員註冊後，並第一次登入CAT時，您同意以下內容並瞭解：</p>
                      <p></p>
                      <ul>果核數位股份有限公司（下簡稱本公司），將會蒐集、處理、利用您提供之個人資料（包括但不限於電話號碼、E-MAIL或居住地址或其他得以直接或間接識別您個人之資料）。</ul>
                      <p></p>
                      <p></p>
                      <li>
                        <b>個人資料蒐集之目的：</b>
                      </li>
                      <p></p>
                      <p></p>
                      <ul>
                        行銷（包含合作廠商共同行銷業務）
                        <br />契約、類似契約或其他法律關係事務
                        <br />消費者、客戶管理與服務
                        <br />商業與技術資訊
                        <br />會計與相關服務
                        <br />資（通）訊服務
                        <br />資（通）訊與資料庫管理
                        <br />資通安全與管理
                        <br />網路購物及其他電子商務服務
                        <br />輔助性與後勤支援管理
                        <br />調查、統計與研究分析
                        <br />其他公務機關對目的事業之監督管理
                        <br />其他自然人基於正當性目的所進行個人資料之蒐集處理及利用
                        <br />
                      </ul>
                      <p></p>
                      <p></p>
                      <li>
                        <b>個人資料蒐集之類別：</b>
                      </li>
                      <p></p>
                      <p></p>
                      <ul>
                        辨識個人者，如姓名、地址、室內電話號碼、行動電話。
                        <br />電磁紀錄(LOG)，如app程式、連線設備IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等。
                        <br />財務交易，如收付金額、支付方式、往來紀錄等。
                        <br />
                      </ul>
                      <p></p>
                      <p></p>
                      <li>
                        <b>個人資料利用的期間、地區、對象及方式：</b>
                      </li>
                      <p></p>
                      <p></p>
                      <ul>
                        期間︰
                        <br />
                        <ul>自您加入為CAT會員之日起，至您或本公司終止會員契約之日止。但法令另有規定或依法需保存之資料者，依其規定。</ul>地區：
                        <br />
                        <ul>中華民國地區及CAT提供服務地區。</ul>對象：
                        <br />
                        <ul>本公司。</ul>方式：
                        <br />
                        <ul>以電子、書面、電話、電信、網際網路及其他方式於蒐集之特定目的範圍內處理並利用個人資料。</ul>
                      </ul>
                      <p></p>
                      <p></p>
                      <li>
                        <b>您可向本公司主張之權利種類及行使方式：</b>
                      </li>
                      <p></p>
                      <p></p>
                      <ul>
                        權利種類：
                        <br />
                        <ul>
                          <li>
                            查詢或請求閱覽
                            <br />
                          </li>
                          <li>
                            製給複製本
                            <br />
                          </li>
                          <li>
                            補充或更正
                            <br />
                          </li>
                          <li>
                            請求停止蒐集、處理或利用。
                            <br />
                          </li>
                          <li>請求刪除。 但因本公司執行職務或業務所必需者，本公司得拒絕之。</li>
                        </ul>
                      </ul>
                      <p></p>
                      <p></p>
                      <ul>
                        行使方式：
                        <br />
                        <ul>
                          來信本公司客服（
                          <a
                            href="mailto:DGC-CATservice@digicentre.com"
                          >DGC-CATservice@digicentre.com</a>）提出申請。
                        </ul>
                      </ul>
                      <p></p>
                      <p></p>
                      <ul>
                        本公司將依據您提出可資確認的身分證明文件申請，於法定期間內履行上述義務，但將留下相關文件以資佐證。若您委託他人代為申請者，請另外提出可資確認的身分證明，以備查核。若您申請查詢或請求閱覽個人資料或製給複製本，本公司得酌收相當費用。收費將依本公司所規定的標準辦理。若本公司未能於法定期間內處理您的申請，將會將原因以書面方式告知與您知悉。
                        <br />您有自由選擇提供個人資料之權利，但若不提供時，您將不能使用CAT之全部或部分的個人化服務或加值服務，亦無從使本公司履行對您的契約相關權利或義務。
                        <br />您瞭解除了您主動於CAT登錄提供個人資料外，您可能在CAT的討論區等單元，主動提供個人資料如電子郵件，姓名等。這種形式的資料提供，不在本公司蒐集之個人資料的範圍以內，亦不受本同意書之規範及保護。
                        <br />您瞭解此一同意符合個人資料保護法及相關法規之要求，具有書面同意本公司蒐集、處理及利用您的個人資料之效果。
                      </ul>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </ContentWrapper>
</template>

<script>
export default {
  data() {
    return { isChinese: true };
  }
};
</script>