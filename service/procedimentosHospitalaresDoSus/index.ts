import { httpClient } from "../http";
import { downloader, httpRequest } from "../../utils";

const http = httpClient("sih/cnv/qruf.def");

export const useProcedimentosHospitalaresDoSusService = () => {
  const searchAIHAprovadaData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data = `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Ano_processamento&Incremento=AIH_aprovadas&Arquivos=qruf${i}12.dbf&Arquivos=qruf${i}11.dbf&Arquivos=qruf${i}10.dbf&Arquivos=qruf${i}09.dbf&Arquivos=qruf${i}08.dbf&Arquivos=qruf${i}07.dbf&Arquivos=qruf${i}06.dbf&Arquivos=qruf${i}05.dbf&Arquivos=qruf${i}04.dbf&Arquivos=qruf${i}03.dbf&Arquivos=qruf${i}02.dbf&Arquivos=qruf${i}01.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&SCar%E1ter_atendimento=TODAS_AS_CATEGORIAS__&pesqmes4=Digite+o+texto+e+ache+f%E1cil&SProcedimento=TODAS_AS_CATEGORIAS__&SGrupo_procedimento=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SSubgrupo_proced.=TODAS_AS_CATEGORIAS__&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SForma_organiza%E7%E3o=TODAS_AS_CATEGORIAS__&SComplexidade=TODAS_AS_CATEGORIAS__&SFinanciamento=TODAS_AS_CATEGORIAS__&pesqmes10=Digite+o+texto+e+ache+f%E1cil&SRubrica_FAEC=TODAS_AS_CATEGORIAS__&pesqmes11=Digite+o+texto+e+ache+f%E1cil&SRegra_contratual=TODAS_AS_CATEGORIAS__&SNatureza=TODAS_AS_CATEGORIAS__&SRegime=TODAS_AS_CATEGORIAS__&pesqmes14=Digite+o+texto+e+ache+f%E1cil&SNatureza_jur%EDdica=TODAS_AS_CATEGORIAS__&pesqmes15=Digite+o+texto+e+ache+f%E1cil&SEsfera_jur%EDdica=TODAS_AS_CATEGORIAS__&SGest%E3o=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  const searchValorTotalData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data = `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Ano_processamento&Incremento=Valor_total&Arquivos=qruf${i}12.dbf&Arquivos=qruf${i}11.dbf&Arquivos=qruf${i}10.dbf&Arquivos=qruf${i}09.dbf&Arquivos=qruf${i}08.dbf&Arquivos=qruf${i}07.dbf&Arquivos=qruf${i}06.dbf&Arquivos=qruf${i}05.dbf&Arquivos=qruf${i}04.dbf&Arquivos=qruf${i}03.dbf&Arquivos=qruf${i}02.dbf&Arquivos=qruf${i}01.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&SCar%E1ter_atendimento=TODAS_AS_CATEGORIAS__&pesqmes4=Digite+o+texto+e+ache+f%E1cil&SProcedimento=TODAS_AS_CATEGORIAS__&SGrupo_procedimento=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SSubgrupo_proced.=TODAS_AS_CATEGORIAS__&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SForma_organiza%E7%E3o=TODAS_AS_CATEGORIAS__&SComplexidade=TODAS_AS_CATEGORIAS__&SFinanciamento=TODAS_AS_CATEGORIAS__&pesqmes10=Digite+o+texto+e+ache+f%E1cil&SRubrica_FAEC=TODAS_AS_CATEGORIAS__&pesqmes11=Digite+o+texto+e+ache+f%E1cil&SRegra_contratual=TODAS_AS_CATEGORIAS__&SNatureza=TODAS_AS_CATEGORIAS__&SRegime=TODAS_AS_CATEGORIAS__&pesqmes14=Digite+o+texto+e+ache+f%E1cil&SNatureza_jur%EDdica=TODAS_AS_CATEGORIAS__&pesqmes15=Digite+o+texto+e+ache+f%E1cil&SEsfera_jur%EDdica=TODAS_AS_CATEGORIAS__&SGest%E3o=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  const searchValorMedioInternacaoData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data = `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Ano_processamento&Incremento=Valor_m%E9dio_intern&Arquivos=qruf${i}12.dbf&Arquivos=qruf${i}11.dbf&Arquivos=qruf${i}10.dbf&Arquivos=qruf${i}09.dbf&Arquivos=qruf${i}08.dbf&Arquivos=qruf${i}07.dbf&Arquivos=qruf${i}06.dbf&Arquivos=qruf${i}05.dbf&Arquivos=qruf${i}04.dbf&Arquivos=qruf${i}03.dbf&Arquivos=qruf${i}02.dbf&Arquivos=qruf${i}01.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&SCar%E1ter_atendimento=TODAS_AS_CATEGORIAS__&pesqmes4=Digite+o+texto+e+ache+f%E1cil&SProcedimento=TODAS_AS_CATEGORIAS__&SGrupo_procedimento=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SSubgrupo_proced.=TODAS_AS_CATEGORIAS__&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SForma_organiza%E7%E3o=TODAS_AS_CATEGORIAS__&SComplexidade=TODAS_AS_CATEGORIAS__&SFinanciamento=TODAS_AS_CATEGORIAS__&pesqmes10=Digite+o+texto+e+ache+f%E1cil&SRubrica_FAEC=TODAS_AS_CATEGORIAS__&pesqmes11=Digite+o+texto+e+ache+f%E1cil&SRegra_contratual=TODAS_AS_CATEGORIAS__&SNatureza=TODAS_AS_CATEGORIAS__&SRegime=TODAS_AS_CATEGORIAS__&pesqmes14=Digite+o+texto+e+ache+f%E1cil&SNatureza_jur%EDdica=TODAS_AS_CATEGORIAS__&pesqmes15=Digite+o+texto+e+ache+f%E1cil&SEsfera_jur%EDdica=TODAS_AS_CATEGORIAS__&SGest%E3o=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  return {
    searchAIHAprovadaData,
    searchValorTotalData,
    searchValorMedioInternacaoData,
  };
};
