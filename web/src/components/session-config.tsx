"use client";

import { TurnDetectionSelector } from "@/components/turn-detection-selector";
import { ModalitiesSelector } from "@/components/modalities-selector";
import { VoiceSelector } from "@/components/voice-selector";
import { TemperatureSelector } from "./temperature-selector";
import { MaxOutputTokensSelector } from "./max-output-tokens-selector";
import { ConfigurationFormFieldProps } from "./configuration-form";
import { ModelSelector } from "./model-selector";
import { TranscriptionSelector } from "./transcription-selector";
import styles from '../app/page.module.css';

export function SessionConfig({ form }: ConfigurationFormFieldProps) {
  return (
    <div className={`space-y-2 ${styles.hidden}`}>
      <ModelSelector form={form} />
      <TranscriptionSelector form={form} />
      <VoiceSelector form={form} />
      <ModalitiesSelector form={form} />
      <TemperatureSelector form={form} />
      <MaxOutputTokensSelector form={form} />
      <TurnDetectionSelector form={form} />
    </div>
  );
}
