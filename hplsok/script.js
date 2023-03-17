function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}console.clear();

const data = [
'AL - Allhelgonakyrkan',
'ALM - Almedal',
'AC - Angered Centrum',
'AP - Aprilgatan',
'APVS - Aprilgatan Vändslinga',
'AG - Axel Dahlströms Torg',
'AGVS - Axel Dahlströms Torg Vändslinga',
'BV - Bellevue',
'BER - Berzeliigatan',
'BEVÄ - Beväringsgatan',
'BOKE - Bokekullsgatan',
'BOT - Botaniska Trädgården',
'BRIL - Briljantgatan',
'BG - Brunnsgatan',
'BP - Brunnsparken',
'BÄCK - Bäckeliden',
'BÖN - Bögatan',
'C - Centralstationen',
'CH - Chalmers',
'CT - Chapmans Torg',
'MX - Depå Vagnhallen Majorna ',
'RTX - Depå Vagnhallen Rantorget',
'RÖX - Depå Vagnhallen Ringön ',
'SLX - Depå Vagnhallen Slottsskogen ',
'DF - Doktor Fries Torg ',
'DS - Doktor Sydows Gata',
'DOM - Domkyrkan',
'EJ - Ejdergatan',
'EKED - Ekeldal',
'ET - Eketrägatan',
'ETVS - Eketrägatan Vändslinga',
'EK - Ekmanska',
'EL - Elisedal',
'FJÄL - Fjällgatan',
'FRIH - Frihamnen',
'FRT - Friskväderstorget',
'FN - Frölunda Torg',
'FVS - Frölunda Torg Vändslinga',
'GAL - Galeleis Gata',
'GM - Gamlestadstorget',
'GO - Godhemsgatan',
'GRO - Gropegårdsgatan',
'GT - Grönsakstorget',
'HKA - Hagakyrkan',
'HAN - Hagen',
'HA - Hammarkullen',
'HAND - Handelshögskolan',
'HINS - Hinsholmen',
'HP - Hjalmar Brantingsplatsen',
'HO - Hjällbo',
'H - Härlanda',
'HG - Högsbogatan',
'JD - Jaegerdorffsplatsen',
'JAN - Januarigatan',
'JT - Järntorget',
'KG - Kaggeledstorget',
'KAPT - Kaptensgatan',
'KLIN - Klintens Väg',
'KTT - Komettorget',
'KV - Korsvägen',
'KOT - Kortedala Torg',
'KRF - Krokslätts Fabriker',
'KRT - Krokslätts Torg',
'KU - Kungsportsplatsen',
'KN - Kungssten',
'KNVS - Kungssten Vändslinga',
'KVI - Kviberg',
'KÄ - Käringberget',
'LAC - Lackarebäck',
'LA - Lana',
'LAVS - Lana Vändslinga',
'LANT - Lantmilsgatan',
'LB - Lilla Bommen',
'LP - Linnéplatsen',
'LPVS - Linnéplatsen Vändslinga',
'LI - Liseberg Station',
'LD - Långedrag',
'LDVS - Långedrag Vändslinga',
'LISÖ - Liseberg Södra',
'MAJV - Majvallen',
'MP - Mariaplan',
'MG - Marklandsgatan',
'MT - Masthuggstorget',
'MEDI - Medicinaregatan',
'MILD - Mildvädersgatan',
'MK - Munkebäckstorget',
'MV - Musikvägen',
'MC - Mölndals Innerstad',
'MS - Mölndals Sjukhus',
'MCVS - Mölndals Vändslinga',
'NSN - Nordstan',
'NYAV - Nya Varvsallén ',
'NY - Nymilsgatan',
'NYM - Nymånegatan',
'NYMÅVS - Nymånegatan Vändslinga',
'OL - Oliverdalsgatan',
'OM - Olskroken',
'OP - Opaltorget',
'OPVS - Opaltorget Vändslinga',
'OS - Ostindiegatan',
'POS - Positivgatan',
'PR - Prinsgatan',
'PP - Polhemsplatsen',
'R - Redbergsplatsen',
'RAM - Rambergsvallen',
'RODD - Roddföreningen',
'RUN - Runstavsgatan',
'RY - Rymdtorget',
'SKF - SKF',
'SHE - Sahlgrenska Huvudentré',
'SHVS - Sahlgrenska Huvudentré Vändslinga',
'SN - Saltholmen',
'SANA - Sanatoriegatan',
'SAND - Sandarna',
'SS - Sankt Sigfrids Plan',
'SSVS - Sankt Sigfrids Plan Vändslinga',
'SP - Sannaplan',
'SCAN - Scandinavium',
'SEMI - Seminariegatan',
'SV - Slottskogsvallens Vändslinga',
'SMAR - Smaragdgatan',
'SOLR - Solrosgatan',
'ST - Stigbergstorget',
'STOC - Stockholmsgatan',
'STPI - Stenpiren',
'SR - Storås',
'S - Svingeln',
'SÄLÖ - Sälöfjordsgatan',
'TEL - Teleskopsgatan',
'TM - Temperaturgatan',
'TING - Torp Vändslinga',
'TP - Tranered',
'TRAN - Töpelsgatan',
'ULN - Ullevi Norra',
'ULS - Ullevi Södra',
'M - Vagnhallen Majorna',
'VA - Valand',
'VB - Varbergsgatan',
'VM - Varmfrontsgatan',
'VMVS - Varmfrontsgatan Vändslinga',
'VP - Vasaplatsen',
'VV - Vasa-Viktoriagatan',
'VIRGVS - Virginsgatan Vändslinga',
'VIRG - Virginsgatan//Torp',
'VÅ - Vågmästareplatsen',
'VT - Vårväderstorget',
'VI - Väderilsgatan',
'VIVS - Väderilsgatan Vändslinga',
'W - Wavrinskys Plats',
'WELA - Welandergatan',
'WG - Wieselgrensplatsen',
'WGVS - Wieselgrensplatsen Vändslinga',
'ÄTTE - Ättehögsgatan',
'ÖNS - Önskevädersgatan',
'ÖS - Östra Sjukhuset',
'Allhelgonakyrkan - AL',
'Almedal - ALM',
'Angered Centrum - AC',
'Aprilgatan - AP',
'Aprilgatan Vändslinga - APVS',
'Axel Dahlströms Torg - AG',
'Axel Dahlströms Torg Vändslinga - AGVS',
'Bellevue - BV',
'Berzeliigatan - BER',
'Beväringsgatan - BEVÄ',
'Bokekullsgatan - BOKE',
'Botaniska Trädgården - BOT',
'Briljantgatan - BRIL',
'Brunnsgatan - BG',
'Brunnsparken - BP',
'Bäckeliden - BÄCK',
'Bögatan - BÖN',
'Centralstationen - C',
'Chalmers - CH',
'Chapmans Torg - CT',
'Depå Vagnhallen Majorna  - MX',
'Depå Vagnhallen Rantorget - RTX',
'Depå Vagnhallen Ringön  - RÖX',
'Depå Vagnhallen Slottsskogen  - SLX',
'Doktor Fries Torg  - DF',
'Doktor Sydows Gata - DS',
'Domkyrkan - DOM',
'Ejdergatan - EJ',
'Ekeldal - EKED',
'Eketrägatan - ET',
'Eketrägatan Vändslinga - ETVS',
'Ekmanska - EK',
'Elisedal - EL',
'Fjällgatan - FJÄL',
'Frihamnen - FRIH',
'Friskväderstorget - FRT',
'Frölunda Torg - FN',
'Frölunda Torg Vändslinga - FVS',
'Galeleis Gata - GAL',
'Gamlestadstorget - GM',
'Godhemsgatan - GO',
'Gropegårdsgatan - GRO',
'Grönsakstorget - GT',
'Hagakyrkan - HKA',
'Hagen - HAN',
'Hammarkullen - HA',
'Handelshögskolan - HAND',
'Hinsholmen - HINS',
'Hjalmar Brantingsplatsen - HP',
'Hjällbo - HO',
'Härlanda - H',
'Högsbogatan - HG',
'Jaegerdorffsplatsen - JD',
'Januarigatan - JAN',
'Järntorget - JT',
'Kaggeledstorget - KG',
'Kaptensgatan - KAPT',
'Klintens Väg - KLIN',
'Komettorget - KTT',
'Korsvägen - KV',
'Kortedala Torg - KOT',
'Krokslätts Fabriker - KRF',
'Krokslätts Torg - KRT',
'Kungsportsplatsen - KU',
'Kungssten - KN',
'Kungssten Vändslinga - KNVS',
'Kviberg - KVI',
'Käringberget - KÄ',
'Lackarebäck - LAC',
'Lana - LA',
'Lana Vändslinga - LAVS',
'Lantmilsgatan - LANT',
'Lilla Bommen - LB',
'Linnéplatsen - LP',
'Linnéplatsen Vändslinga - LPVS',
'Liseberg Station - LI',
'Långedrag - LD',
'Långedrag Vändslinga - LDVS',
'Liseberg Södra - LISÖ',
'Majvallen - MAJV',
'Mariaplan - MP',
'Marklandsgatan - MG',
'Masthuggstorget - MT',
'Medicinaregatan - MEDI',
'Mildvädersgatan - MILD',
'Munkebäckstorget - MK',
'Musikvägen - MV',
'Mölndals Innerstad - MC',
'Mölndals Sjukhus - MS',
'Mölndals Vändslinga - MCVS',
'Nordstan - NSN',
'Nya Varvsallén  - NYAV',
'Nymilsgatan - NY',
'Nymånegatan - NYM',
'Nymånegatan Vändslinga - NYMÅVS',
'Oliverdalsgatan - OL',
'Olskroken - OM',
'Opaltorget - OP',
'Opaltorget Vändslinga - OPVS',
'Ostindiegatan - OS',
'Positivgatan - POS',
'Prinsgatan - PR',
'Polhemsplatsen - PP',
'Rambergsvallen - RAM',
'Redbergsplatsen - R',
'Roddföreningen - RODD',
'Runstavsgatan - RUN',
'Rymdtorget - RY',
'SKF - SKF',
'Sahlgrenska Huvudentré - SHE',
'Sahlgrenska Huvudentré Vändslinga - SHVS',
'Saltholmen - SN',
'Sanatoriegatan - SANA',
'Sandarna - SAND',
'Sankt Sigfrids Plan - SS',
'Sankt Sigfrids Plan Vändslinga - SSVS',
'Sannaplan - SP',
'Scandinavium - SCAN',
'Seminariegatan - SEMI',
'Slottskogsvallens Vändslinga - SV',
'Smaragdgatan - SMAR',
'Solrosgatan - SOLR',
'Stigbergstorget - ST',
'Stockholmsgatan - STOC',
'Stenpiren - STPI',
'Storås - SR',
'Svingeln - S',
'Sälöfjordsgatan - SÄLÖ',
'Teleskopsgatan - TEL',
'Temperaturgatan - TM',
'Torp Vändslinga - TING',
'Tranered - TP',
'Töpelsgatan - TRAN',
'Ullevi Norra - ULN',
'Ullevi Södra - ULS',
'Vagnhallen Majorna - M',
'Valand - VA',
'Varbergsgatan - VB',
'Varmfrontsgatan - VM',
'Varmfrontsgatan Vändslinga - VMVS',
'Vasaplatsen - VP',
'Vasa-Viktoriagatan - VV',
'Virginsgatan Vändslinga - VIRGVS',
'Virginsgatan - VIRG',
'Torp - VIRG',
'Vågmästareplatsen - VÅ',
'Vårväderstorget - VT',
'Väderilsgatan - VI',
'Väderilsgatan Vändslinga - VIVS',
'Wavrinskys Plats - W',
'Welandergatan - WELA',
'Wieselgrensplatsen - WG',
'Wieselgrensplatsen Vändslinga - WGVS',
'Ättehögsgatan - ÄTTE',
'Önskevädersgatan - ÖNS',
'Östra Sjukhuset - ÖS'];


class Autocomplete {
  constructor({
    rootNode,
    inputNode,
    resultsNode,
    searchFn,
    shouldAutoSelect = false,
    onShow = () => {},
    onHide = () => {} } =
  {}) {_defineProperty(this, "handleDocumentClick",




















    event => {
      if (event.target === this.inputNode || this.rootNode.contains(event.target)) {
        return;
      }
      this.hideResults();
    });_defineProperty(this, "handleKeyup",

    event => {
      const { key } = event;

      switch (key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'Escape':
        case 'Enter':
          event.preventDefault();
          return;
        default:
          this.updateResults();}


      if (this.hasInlineAutocomplete) {
        switch (key) {
          case 'Backspace':
            return;
          default:
            this.autocompleteItem();}

      }
    });_defineProperty(this, "handleKeydown",

    event => {
      const { key } = event;
      let activeIndex = this.activeIndex;

      if (key === 'Escape') {
        this.hideResults();
        this.inputNode.value = '';
        return;
      }

      if (this.resultsCount < 1) {
        if (this.hasInlineAutocomplete && (key === 'ArrowDown' || key === 'ArrowUp')) {
          this.updateResults();
        } else {
          return;
        }
      }

      const prevActive = this.getItemAt(activeIndex);
      let activeItem;

      switch (key) {
        case 'ArrowUp':
          if (activeIndex <= 0) {
            activeIndex = this.resultsCount - 1;
          } else {
            activeIndex -= 1;
          }
          break;
        case 'ArrowDown':
          if (activeIndex === -1 || activeIndex >= this.resultsCount - 1) {
            activeIndex = 0;
          } else {
            activeIndex += 1;
          }
          break;
        case 'Enter':
          activeItem = this.getItemAt(activeIndex);
          this.selectItem(activeItem);
          return;
        case 'Tab':
          this.checkSelection();
          this.hideResults();
          return;
        default:
          return;}


      event.preventDefault();
      activeItem = this.getItemAt(activeIndex);
      this.activeIndex = activeIndex;

      if (prevActive) {
        prevActive.classList.remove('selected');
        prevActive.setAttribute('aria-selected', 'false');
      }

      if (activeItem) {
        this.inputNode.setAttribute('aria-activedescendant', `autocomplete-result-${activeIndex}`);
        activeItem.classList.add('selected');
        activeItem.setAttribute('aria-selected', 'true');
        if (this.hasInlineAutocomplete) {
          this.inputNode.value = activeItem.innerText;
        }
      } else {
        this.inputNode.setAttribute('aria-activedescendant', '');
      }
    });_defineProperty(this, "handleFocus",

    event => {
      this.updateResults();
    });_defineProperty(this, "handleResultClick",

    event => {
      if (event.target && event.target.nodeName === 'LI') {
        this.selectItem(event.target);
      }
    });_defineProperty(this, "getItemAt",

    index => {
      return this.resultsNode.querySelector(`#autocomplete-result-${index}`);
    });_defineProperty(this, "selectItem",

    node => {
      if (node) {
        this.inputNode.value = node.innerText;
        this.hideResults();
      }
    });_defineProperty(this, "checkSelection",

    () => {
      if (this.activeIndex < 0) {
        return;
      }
      const activeItem = this.getItemAt(this.activeIndex);
      this.selectItem(activeItem);
    });_defineProperty(this, "autocompleteItem",

    event => {
      const autocompletedItem = this.resultsNode.querySelector('.selected');
      const input = this.inputNode.value;
      if (!autocompletedItem || !input) {
        return;
      }

      const autocomplete = autocompletedItem.innerText;
      if (input !== autocomplete) {
        this.inputNode.value = autocomplete;
        this.inputNode.setSelectionRange(input.length, autocomplete.length);
      }
    });_defineProperty(this, "updateResults",

    () => {
      const input = this.inputNode.value;
      const results = this.searchFn(input);

      this.hideResults();
      if (results.length === 0) {
        return;
      }

      this.resultsNode.innerHTML = results.map((result, index) => {
        const isSelected = this.shouldAutoSelect && index === 0;
        if (isSelected) {
          this.activeIndex = 0;
        }
        return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? ' selected' : ''}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ''}
        >
          ${result}
        </li>
      `;
      }).join('');

      this.resultsNode.classList.remove('hidden');
      this.rootNode.setAttribute('aria-expanded', true);
      this.resultsCount = results.length;
      this.shown = true;
      this.onShow();
    });_defineProperty(this, "hideResults",

    () => {
      this.shown = false;
      this.activeIndex = -1;
      this.resultsNode.innerHTML = '';
      this.resultsNode.classList.add('hidden');
      this.rootNode.setAttribute('aria-expanded', 'false');
      this.resultsCount = 0;
      this.inputNode.setAttribute('aria-activedescendant', '');
      this.onHide();
    });this.rootNode = rootNode;this.inputNode = inputNode;this.resultsNode = resultsNode;this.searchFn = searchFn;this.shouldAutoSelect = shouldAutoSelect;this.onShow = onShow;this.onHide = onHide;this.activeIndex = -1;this.resultsCount = 0;this.showResults = false;this.hasInlineAutocomplete = this.inputNode.getAttribute('aria-autocomplete') === 'both'; // Setup events
    document.body.addEventListener('click', this.handleDocumentClick);this.inputNode.addEventListener('keyup', this.handleKeyup);this.inputNode.addEventListener('keydown', this.handleKeydown);this.inputNode.addEventListener('focus', this.handleFocus);this.resultsNode.addEventListener('click', this.handleResultClick);}}

const search = input => {
  if (input.length < 1) {
    return [];
  }
  return data.filter(item => item.toLowerCase().startsWith(input.toLowerCase()));
};

const autocomplete = new Autocomplete({
  rootNode: document.querySelector('.autocomplete'),
  inputNode: document.querySelector('.autocomplete-input'),
  resultsNode: document.querySelector('.autocomplete-results'),
  searchFn: search,
  shouldAutoSelect: true });


document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const result = document.querySelector('.search-result');
  const input = document.querySelector('.autocomplete-input');
  result.innerHTML = 'Resultat: ' + input.value;
});
