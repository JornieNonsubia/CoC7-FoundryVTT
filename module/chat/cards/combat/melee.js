import { EnhancedChatCard } from '../../../common/chatcardlib/src/chatcardlib.js'
import { CoC7Utilities } from '../../../utilities.js'

export class CoC7MeleeCombatChatCard extends EnhancedChatCard {
  /** @override */
  static get defaultOptions () {
    const options = mergeObject(super.defaultOptions, {
      template: 'systems/CoC7/templates/chat/cards/combat/melee.hbs',
      GMUpdate: true
    })
    options.classes.push('melee-combat-card')
    return options
  }

  constructor( data = {}, options = {}){
    let attackerUuid
    if( data.attacker){
      attackerUuid = CoC7Utilities.getTokenOrActorUuid(data.attacker)
      data.attacker = attackerUuid
    }
    super( data, options)

  }

  get attacker(){
    if(!this.data.attackerUuid) return undefined
    if(!this._attacker){
        this._attacker = CoC7Utilities.getDocumentFromKey(this.data.attackerUuid)
    }
    return this._attacker
  }
}
