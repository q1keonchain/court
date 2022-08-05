import { BigInt } from "@graphprotocol/graph-ts"
import {
  AgreementCreated,
  AgreementFinalizationSent,
  AgreementFinalized,
  AgreementJoined,
  AgreementWithdrawn
} from "../generated/AgreementFramework/AgreementFramework"
import { Agreement, AgreementPosition } from "../generated/schema"

export function handleAgreementCreated(event: AgreementCreated): void {
  let agreement = new Agreement(event.params.id.toString())
  agreement.termsHash = event.params.termsHash
  agreement.criteria = event.params.criteria
  agreement.status = "Created"
  agreement.positions = []
  agreement.save()
}

export function handleAgreementFinalizationSent(event: AgreementFinalizationSent): void {
  let position = AgreementPosition.load(event.params.id.toString()+"-"+event.params.party.toHexString())
  if (position) {
    position.status = "Finalized"
    position.save()
  }
}

export function handleAgreementFinalized(event: AgreementFinalized): void {
}

export function handleAgreementJoined(event: AgreementJoined): void {
  let agreement = Agreement.load(event.params.id.toString())
  let position = new AgreementPosition(event.params.id.toString()+"-"+event.params.party.toHexString())
  position.party = event.params.party
  position.balance = event.params.balance
  position.status = "Idle"
  position.agreement = event.params.id.toString()
  position.save()
}

export function handleAgreementWithdrawn(event: AgreementWithdrawn): void {}
