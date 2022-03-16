import React, { useState } from "react";
import {
  useProcedimentosHospitalaresDoSusService,
  useMorbidadeHospitalartDoSus,
  useCnesRecursosFisicosHospitalares,
  useCnesRecursosHumanosProfissionais
} from "../../service";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

export const SearchDataBTN: React.FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const procedimentosHospitalaresDoSusService =
    useProcedimentosHospitalaresDoSusService();
  const morbidadeHospitalarDoSus = useMorbidadeHospitalartDoSus();
  const cnesRecursosFisicosHospitalares = useCnesRecursosFisicosHospitalares();
  const cnesRecusrsosHumanosProfissionais = useCnesRecursosHumanosProfissionais();

  const searchProcedimentosHospitalaresDoSus = async () => {
    try {
      await procedimentosHospitalaresDoSusService.searchAIHAprovadaData();
      await procedimentosHospitalaresDoSusService.searchValorTotalData();
      await procedimentosHospitalaresDoSusService.searchValorMedioInternacaoData();
    } catch (error) {
      console.log(error);
    }
  };

  const searchMorbidadeHospitalartDoSus = async () => {
    try {
      await morbidadeHospitalarDoSus.searchInternacoesData();
      await morbidadeHospitalarDoSus.searchMediaPermanenciaData();
      await morbidadeHospitalarDoSus.searchObitosData();
    } catch (error) {
      console.log(error);
    }
  };

  const searchRecusrosFisicosHospitalaresCnes = async () => {
    try {
      await cnesRecursosFisicosHospitalares.searchQuantidadeExistenteData();
    } catch (error) {
      console.log(error);
    }
  };

  const searchRecusrosHumanosProfissionaisCnes = async () => {
    try {
      await cnesRecusrsosHumanosProfissionais.searchQuantidadeMedicosData();
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = async () => {
    setIsSearch(true);
    await searchProcedimentosHospitalaresDoSus();
    await searchMorbidadeHospitalartDoSus();
    await searchRecusrosFisicosHospitalaresCnes();
    await searchRecusrosHumanosProfissionaisCnes();
    setIsSearch(false);
  };

  return (
    <div style={{ display: "block" }}>
      <Button
        label="Buscar dados"
        className="p-button-rounded"
        icon="pi pi-search"
        onClick={searchData}
        disabled={isSearch}
      />
      {isSearch && (
        <div style={{ marginTop: "15%", display: "flex" }}>
          <label style={{ marginRight: "10%" }}>Buscando dados</label>
          <ProgressSpinner
            style={{ width: "20px", height: "20px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
          />
        </div>
      )}
    </div>
  );
};
