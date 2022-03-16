import { httpClient } from "../http";
import { downloader, httpRequest } from "../../utils";

export const useCnesRecursosFisicosHospitalares = () => {
  const http = httpClient("cnes/cnv/leiintbr.def");

  const searchQuantidadeExistenteData = async () => {
    for (let i = 10; i <= 20; i++) {
      const data =
        `Linha=Regi%E3o%2FUnidade_da_Federa%E7%E3o&Coluna=Ano%2Fm%EAs_compet.&Incremento=Quantidade_existente&Arquivos=ltbr${i}12.dbf&SRegi%E3o=TODAS_AS_CATEGORIAS__&pesqmes2=Digite+o+texto+e+ache+f%E1cil&SUnidade_da_Federa%E7%E3o=TODAS_AS_CATEGORIAS__&pesqmes3=Digite+o+texto+e+ache+f%E1cil&SMunic%EDpio=TODAS_AS_CATEGORIAS__&pesqmes4=Digite+o+texto+e+ache+f%E1cil&SMunic%EDpio_gestor=TODAS_AS_CATEGORIAS__&pesqmes5=Digite+o+texto+e+ache+f%E1cil&SCapital=TODAS_AS_CATEGORIAS__&pesqmes6=Digite+o+texto+e+ache+f%E1cil&SRegi%E3o_de_Sa%FAde_%28CIR%29=TODAS_AS_CATEGORIAS__&pesqmes7=Digite+o+texto+e+ache+f%E1cil&SMacrorregi%E3o_de_Sa%FAde=TODAS_AS_CATEGORIAS__&pesqmes8=Digite+o+texto+e+ache+f%E1cil&SMicrorregi%E3o_IBGE=TODAS_AS_CATEGORIAS__&pesqmes9=Digite+o+texto+e+ache+f%E1cil&SRegi%E3o_Metropolitana_-_RIDE=TODAS_AS_CATEGORIAS__&pesqmes10=Digite+o+texto+e+ache+f%E1cil&STerrit%F3rio_da_Cidadania=TODAS_AS_CATEGORIAS__&pesqmes11=Digite+o+texto+e+ache+f%E1cil&SMesorregi%E3o_PNDR=TODAS_AS_CATEGORIAS__&SAmaz%F4nia_Legal=TODAS_AS_CATEGORIAS__&SSemi%E1rido=TODAS_AS_CATEGORIAS__&SFaixa_de_Fronteira=TODAS_AS_CATEGORIAS__&SZona_de_Fronteira=TODAS_AS_CATEGORIAS__&SMunic%EDpio_de_extrema_pobreza=TODAS_AS_CATEGORIAS__&SEnsino%2FPesquisa=TODAS_AS_CATEGORIAS__&pesqmes18=Digite+o+texto+e+ache+f%E1cil&SNatureza_Jur%EDdica=TODAS_AS_CATEGORIAS__&pesqmes19=Digite+o+texto+e+ache+f%E1cil&SEsfera_Jur%EDdica=TODAS_AS_CATEGORIAS__&SEsfera_Administrativa=TODAS_AS_CATEGORIAS__&pesqmes21=Digite+o+texto+e+ache+f%E1cil&SNatureza=TODAS_AS_CATEGORIAS__&pesqmes22=Digite+o+texto+e+ache+f%E1cil&STipo_de_Estabelecimento=TODAS_AS_CATEGORIAS__&STipo_de_Gest%E3o=TODAS_AS_CATEGORIAS__&STipo_de_Prestador=TODAS_AS_CATEGORIAS__&SEspecialidade=TODAS_AS_CATEGORIAS__&pesqmes26=Digite+o+texto+e+ache+f%E1cil&SEspecialidade_detalhada=TODAS_AS_CATEGORIAS__&pesqmes27=Digite+o+texto+e+ache+f%E1cil&SLeitos_cir%FArgicos=TODAS_AS_CATEGORIAS__&pesqmes28=Digite+o+texto+e+ache+f%E1cil&SLeitos_cl%EDnicos=TODAS_AS_CATEGORIAS__&SLeitos_obst%E9tricos=TODAS_AS_CATEGORIAS__&SLeitos_pedi%E1tricos=TODAS_AS_CATEGORIAS__&SLeitos_hospital_dia=TODAS_AS_CATEGORIAS__&SLeitos_outras_especial=TODAS_AS_CATEGORIAS__&formato=table&mostre=Mostra`;
      downloader(await httpRequest(http, data));
    }
  };

  return {
    searchQuantidadeExistenteData,
  };
};