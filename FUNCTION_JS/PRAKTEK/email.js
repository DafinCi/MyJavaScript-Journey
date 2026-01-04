function maskEmail(email) {
  const gmail = "@gmail.com";
  let domain = `${email}${gmail}`;
  let hasil = domain.replace(
    domain.slice(1, -11),
    "*".repeat(domain.slice(1, -11).length)
  );
  console.log(hasil);
}

maskEmail("dafinalfarizi");
