let username = "Tolga";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

console.log(
  "Merhaba",
  username,
  "reis sitemize hosgeldin mail adresin : ",
  email
);

let info = `Merhaba ${username} sitemize hoşgeldin. 
Mail adresin : ${email}
mail adresinin uzunluğu : ${email.length}
borcunuz : ${(4 + 5) * 7}
saat bilgisi : ${new Date().getHours()}
kisa isminiz : ${username[0]}.`;
console.log(info);

const kitap = {
  ad: "Fırtına",
  yazar: "Shakespeare",
  tarih: 1610,
};
const bookTable = `
  <table border> 
    <tbody> 
        <tr> 
            <td> 
                Kitap 
            </td> 
            <td> 
                ${kitap.ad}
            </td> 
        </tr> 
        <tr> 
            <td> 
                Yazar 
            </td> 
            <td> 
                ${kitap.yazar}   
            </td> 
        </tr> 
         <tr> 
            <td> 
                Tarih 
            </td>
            <td>
                ${kitap.tarih} 
            </td>
        </tr>
   </tbody>
  </table>
  `;
document.body.innerHTML = bookTable;
