const successfulOrder = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "219b1e64-afe5-5e71-ac0b-8b6a4c605a01"
};

const undefinedName = {
  weight: "1.5",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyName = {
  email: "joyce@gmail.com",
  weight: "1.5",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "",
  receiverName: "",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidSenderNameLt = {
  email: "joyce@gmail.com",
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "23",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidReceiverLt = {
  email: "joyce@gmail.",
  weight: "1.5",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Po",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
}
const invalidNameChar = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "209",
  receiverName: "5667",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const undefinedPhone = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyPhone = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidPhoneFormat = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "rt4553",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "adb3445",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidSenderPhoneLt = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "0238",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "0200085678",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidReceiverPhoneLt = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "0238908669",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "020008",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const undefinedEmail = {
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyEmail = {
  email: "",
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidEmailFormat = {
  email: "joycegail.",
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidEmailLength = {
  email: 'e@gma.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const undefinedWeight = {
  email: 'joyce@gmail.com',
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
}
const emptyWeight = {
  email: 'joyce@gmail.com',
  weight: "",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidWeightLength = {
  email: 'joyce@gmail.com',
  weight: "0kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidWeigthChar = {
  email: 'joyce@gmail.com',
  weight: "wo",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const undefinedParcelContent = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyParcelContent = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidParcelContentLt = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Bo",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidParcelContentChar = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "79Bo",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};
const undefinedPrice = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyPrice = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidPriceLength = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "20",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidPriceChar = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "ab",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};


const undefinedQty = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyQty = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidQtyLength = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "234",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidQtyChar = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "dg",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "delicate",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const undefinedParcelType = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const emptyParcelType = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  parcelType: "",
  pickupAddress: '12 Owerri Street, Jos',
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

const invalidParcelTypeChar = {
  email: 'joyce@gmail.com',
  weight: "1.5kg",
  parcelContent: "Books",
  price: "200",
  quantity: "2",
  pickupAddress: '12 Owerri Street, Jos',
  parcelType: "78hg",
  senderPhone: "02383837300",
  senderName: "luke Ben",
  receiverName: "Pamela Okoro",
  destinationAddress: "12 roag road Benin",
  receiverPhone: "02383837388",
  status: "pending",
  total: "500",
  presentLocation: "Jos",
  trackingID: "381148a4-d861-5652-a697-730a865bccfe"
};

export {
  successfulOrder, undefinedName, emptyName, invalidSenderNameLt, invalidReceiverLt, invalidNameChar, undefinedPhone, emptyPhone, invalidPhoneFormat, invalidSenderPhoneLt, invalidReceiverPhoneLt, undefinedEmail,
  emptyEmail, invalidEmailFormat, invalidEmailLength,
  undefinedWeight, emptyWeight, invalidWeightLength, invalidWeigthChar, undefinedParcelContent,
  emptyParcelContent, invalidParcelContentLt, invalidParcelContentChar, undefinedPrice,
  emptyPrice, invalidPriceLength, invalidPriceChar, undefinedQty, emptyQty, invalidQtyLength, invalidQtyChar, undefinedParcelType, emptyParcelType, invalidParcelTypeChar
};