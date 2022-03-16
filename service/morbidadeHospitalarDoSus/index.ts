import { httpClient } from "../http";
import { downloader, httpRequest } from "../../utils";

export const useMorbidadeHospitalartDoSus = () => {
  const http = httpClient("sih/cnv/nruf.def");

  const searchInternacoesData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data =
        `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Faixa_Et%E1ria_1&Incremento=Interna%E7%F5es&Arquivos=nruf${i}12.dbf&Arquivos=nruf${i}11.dbf&Arquivos=nruf${i}10.dbf&Arquivos=nruf${i}09.dbf&Arquivos=nruf${i}08.dbf&Arquivos=nruf${i}07.dbf&Arquivos=nruf${i}06.dbf&Arquivos=nruf${i}05.dbf&Arquivos=nruf${i}04.dbf&Arquivos=nruf${i}03.dbf&Arquivos=nruf${i}02.dbf&Arquivos=nruf${i}01.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&SCar%E1ter_atendimento=TODAS_AS_CATEGORIAS__&SRegime=TODAS_AS_CATEGORIAS__&pesqmes5=Digite+o+texto+e+ache+f%E1cil&SCap%EDtulo_CID-10=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SLista_Morb__CID-10=97&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SFaixa_Et%E1ria_1=TODAS_AS_CATEGORIAS__&pesqmes8=Digite+o+texto+e+ache+f%E1cil&SFaixa_Et%E1ria_2=TODAS_AS_CATEGORIAS__&SSexo=TODAS_AS_CATEGORIAS__&SCor%2Fra%E7a=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  const searchMediaPermanenciaData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data = `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Faixa_Et%E1ria_1&Incremento=M%E9dia_perman%EAncia&Arquivos=nruf${i}12.dbf&Arquivos=nruf${i}11.dbf&Arquivos=nruf${i}10.dbf&Arquivos=nruf${i}09.dbf&Arquivos=nruf${i}08.dbf&Arquivos=nruf${i}07.dbf&Arquivos=nruf${i}06.dbf&Arquivos=nruf${i}05.dbf&Arquivos=nruf${i}04.dbf&Arquivos=nruf${i}03.dbf&Arquivos=nruf${i}02.dbf&Arquivos=nruf${i}01.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&SCar%E1ter_atendimento=TODAS_AS_CATEGORIAS__&SRegime=TODAS_AS_CATEGORIAS__&pesqmes5=Digite+o+texto+e+ache+f%E1cil&SCap%EDtulo_CID-10=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SLista_Morb__CID-10=97&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SFaixa_Et%E1ria_1=TODAS_AS_CATEGORIAS__&pesqmes8=Digite+o+texto+e+ache+f%E1cil&SFaixa_Et%E1ria_2=TODAS_AS_CATEGORIAS__&SSexo=TODAS_AS_CATEGORIAS__&SCor%2Fra%E7a=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  const searchObitosData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data = `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Faixa_Et%E1ria_1&Incremento=%D3bitos&Arquivos=nruf${i}12.dbf&Arquivos=nruf${i}11.dbf&Arquivos=nruf${i}10.dbf&Arquivos=nruf${i}09.dbf&Arquivos=nruf${i}08.dbf&Arquivos=nruf${i}07.dbf&Arquivos=nruf${i}06.dbf&Arquivos=nruf${i}05.dbf&Arquivos=nruf${i}04.dbf&Arquivos=nruf${i}03.dbf&Arquivos=nruf${i}02.dbf&Arquivos=nruf${i}01.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&SCar%E1ter_atendimento=TODAS_AS_CATEGORIAS__&SRegime=TODAS_AS_CATEGORIAS__&pesqmes5=Digite+o+texto+e+ache+f%E1cil&SCap%EDtulo_CID-10=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SLista_Morb__CID-10=97&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SFaixa_Et%E1ria_1=TODAS_AS_CATEGORIAS__&pesqmes8=Digite+o+texto+e+ache+f%E1cil&SFaixa_Et%E1ria_2=TODAS_AS_CATEGORIAS__&SSexo=TODAS_AS_CATEGORIAS__&SCor%2Fra%E7a=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  return {
    searchInternacoesData,
    searchMediaPermanenciaData,
    searchObitosData,
  };
};
