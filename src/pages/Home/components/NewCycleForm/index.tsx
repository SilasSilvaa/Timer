import { useContext } from "react";

import { useFormContext } from "react-hook-form";

import { FormContainer, InputTask, MinutesAmountInput } from "./styles";
import { CyclesContext } from "../../../../contexts/CyclesContexts";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="text">Vou trabalhar em: </label>
      <InputTask
        type="text"
        id="text"
        placeholder="Dê um nome para seu projeto"
        list="list-suggestion"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="list-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmout"> durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmout"
        placeholder="00"
        step="5"
        min="5"
        max="60"
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
