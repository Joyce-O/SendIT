const successfulOrder = {
  senderName: "luke Ben",
  senderPhone: "02383837300",
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "2",
  parcelType: "delicate"
}
 
const invalidName = {
  senderName: "",
  senderPhone: "02383837300",
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "2",
  parcelType: "delicate"
}

const invalidPhone = {
  senderName: "luke Ben",
  senderPhone: "00",
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "2",
  parcelType: "delicate"
}
const invalidEmail = {
  senderName: "luke Ben",
  senderPhone: "02383837300",
  email: 'joyc.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "2",
  parcelType: "delicate"
}

const invalidWeight = {
  senderName: "luke Ben",
  senderPhone: "02383837300",
  email: 'joyce@gmail.com',
  weight: "1.g",
  parcelContent: "Books",
  quantity: "2",
  parcelType: "delicate"
}
const invalidParcelCon = {
  senderName: "luke Ben",
  senderPhone: "02383837300",
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "",
  quantity: "2",
  parcelType: "delicate"
}

const invalidQty = {
  senderName: "luke Ben",
  senderPhone: "02383837300",
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "",
  parcelType: "delicate"
}

const invalidparcelType = {
  senderName: "luke Ben",
  senderPhone: "02383837300",
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "2",
  parcelType: "cate"
}
const passedUser = {
  name: 'Joyce Ob',
  email: 'joyce@gmail.com',
  phone: '09038802833',
  password: 'passpass',
  address: '12 Adeyemi street Lagos'
};


export {
  successfulOrder, invalidName, invalidPhone, invalidEmail, invalidWeight, invalidParcelCon, invalidQty, invalidparcelType, passedUser 
};