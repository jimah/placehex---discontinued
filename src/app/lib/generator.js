export default class Placeholder {
  constructor(size, hex = null, text = null) {
    let sizes = size.split('x');
    this.width = sizes[0] + 'px';
    this.height = sizes[1] + 'px';
    this.colour = '#' + hex;
    this.textColour = '#' + this.lightenColour(50);
    this.text = text;
  }
  lightenColour(percent) {
    var num = parseInt(this.color,16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }
}
