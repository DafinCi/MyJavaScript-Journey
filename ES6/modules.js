// module yaa konsepnya sama kayak di python biar bisa make function di file lain
// tapi caranya sedikit berbeda dengan python

// ini modules.js
// exporting

export const tambah = (a, b) => a + b;
export const kurang = (a, b) => a - b;

// ngasih nama default export agar nanti bisa diganti namanya ketika ada yang import
const bagi = (a, b) => a / b;
export default bagi;
