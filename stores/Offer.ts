import { Offer } from "~/interfaces/Offer";

export const useOfferStore = defineStore(
  "offer",
  () => {
    const offersList = ref<Offer[]>([]);

    const adicionaOferta = (offer: Offer) => {
      const favoritosFiltrados = offersList.value.some((v) => v.id === offer.id);
      if (!favoritosFiltrados) {
        offersList.value.push(offer);
      }
    };

    const ApagaOferta = (id: number) => {
      const favoritosFiltrados = offersList.value.filter((v) => v.id !== id);
      offersList.value = favoritosFiltrados;
    };

    return { adicionaOferta, ApagaOferta, offersList };
  }
//   ,
//   {
//     persist: {
//       storage: persistedState.sessionStorage,
//     },
//   }
);