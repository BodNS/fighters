import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`
  });

  // todo: show fighter info (image, name, health, etc.)
  const fighterInfo = [
    createFighterText(fighter.name),
    createFighterText("Health: "+ fighter.health),
    createFighterText("Attack: "+ fighter.attack),
    createFighterText("Defense: "+ fighter.defense)
  ]
  const fighterImage = createFighterImage(fighter);
    
  fighterElement.append(fighterImage, ...fighterInfo);
  return fighterElement;
}

export function createFighterText(txt) {
  const txtElement = createElement({
    tagName: 'p',
    className: 'fighter-prewiew__txt',
    
  })
  txtElement.textContent = txt;
  return txtElement;
}


export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
