-- Adaugă poze de copertă (din imaginile deja existente pe site) și paragrafe
-- de linkuri interne (pagini de locație + ghiduri) la cele 10 articole SEO
-- despre Slobozia. Rulează integral în Supabase SQL Editor (proiectul ArtDent).
-- Sigur de rulat oricând: cover_image se suprascrie curat, iar linkurile se
-- adaugă la finalul conținutului existent (nu se șterge nimic).

update blog_posts set cover_image = '/images/cabinet-stomatologic-slobozia.jpg'
where slug = 'cabinet-stomatologic-slobozia-cum-alegi';

update blog_posts set cover_image = '/images/gallery/tratament-cabinet.jpg'
where slug = 'dentist-urgenta-slobozia';

update blog_posts set cover_image = '/images/consultatie-dentist-slobozia.jpg'
where slug = 'preturi-tratamente-stomatologice-slobozia';

update blog_posts set cover_image = '/images/unit-dentar-cabinet-slobozia.jpg'
where slug = 'implant-dentar-slobozia';

update blog_posts set cover_image = '/images/gallery/sala-tratament-copii.jpg'
where slug = 'ortodontie-copii-adulti-slobozia';

update blog_posts set cover_image = '/images/gallery/sterilizare-1.jpg'
where slug = 'igiena-dentara-profesionala-slobozia';

update blog_posts set cover_image = '/images/gallery/tratament-detaliu-1.jpg'
where slug = 'albire-dentara-profesionala-slobozia';

update blog_posts set cover_image = '/images/gallery/zona-copii.jpg'
where slug = 'stomatologie-familie-slobozia';

update blog_posts set cover_image = '/images/gallery/tratament-detaliu-6.jpg'
where slug = 'proteze-dentare-slobozia';

update blog_posts set cover_image = '/images/sala-tratament-dentara-slobozia.jpg'
where slug = 'programare-stomatolog-slobozia';

-- Paragrafe de linkuri interne, adăugate la finalul fiecărui articol.

update blog_posts set content = content || $links$
<h2>Deservim și pacienții din zonă</h2>
<p>Pe lângă Slobozia, primim frecvent pacienți din <a href="/dentist-amara">Amara</a>, <a href="/dentist-fetesti">Fetești</a> și <a href="/dentist-tandarei">Țăndărei</a>. Dacă ai întrebări înainte de programare, poți consulta și <a href="/intrebari-frecvente">secțiunea de întrebări frecvente</a>.</p>
$links$
where slug = 'cabinet-stomatologic-slobozia-cum-alegi';

update blog_posts set content = content || $links$
<h2>Urgențe și pentru pacienții din afara Sloboziei</h2>
<p>Tratăm urgențe dentare și pentru pacienții aflați temporar la <a href="/dentist-amara">Amara</a>, de exemplu în timpul unui sejur la tratament balnear. Vezi și ghidul complet despre <a href="/urgente-dentare">urgențele dentare</a>.</p>
$links$
where slug = 'dentist-urgenta-slobozia';

update blog_posts set content = content || $links$
<h2>Prețuri pentru pacienți din tot județul</h2>
<p>Aceleași prețuri transparente se aplică și pacienților din <a href="/cabinet-stomatologic-ialomita">tot județul Ialomița</a>, inclusiv celor care vin din <a href="/dentist-fetesti">Fetești</a> sau <a href="/dentist-tandarei">Țăndărei</a>.</p>
$links$
where slug = 'preturi-tratamente-stomatologice-slobozia';

update blog_posts set content = content || $links$
<h2>Implant dentar pentru pacienți din afara Sloboziei</h2>
<p>Pentru pacienții care vin din <a href="/dentist-fetesti">Fetești</a> sau din alte localități din <a href="/cabinet-stomatologic-ialomita">județul Ialomița</a>, recomandăm programarea din timp, ca să grupăm etapele tratamentului acolo unde este posibil clinic.</p>
$links$
where slug = 'implant-dentar-slobozia';

update blog_posts set content = content || $links$
<h2>Ortodonție pentru familii din toată zona</h2>
<p>Primim copii și adulți la ortodonție și din <a href="/dentist-tandarei">Țăndărei</a> sau <a href="/dentist-amara">Amara</a>. Dacă vii cu un copil la prima vizită, citește și <a href="/prima-vizita-copil-la-dentist">ghidul pentru prima vizită a copilului la dentist</a>.</p>
$links$
where slug = 'ortodontie-copii-adulti-slobozia';

update blog_posts set content = content || $links$
<h2>Igienizare dentară, indiferent de localitate</h2>
<p>O ședință de igienizare durează sub o oră, ceea ce o face accesibilă și pentru pacienții care vin din <a href="/dentist-amara">Amara</a> sau din alte localități apropiate de <a href="/cabinet-stomatologic-ialomita">Slobozia</a>.</p>
$links$
where slug = 'igiena-dentara-profesionala-slobozia';

update blog_posts set content = content || $links$
<h2>Albire dentară pentru pacienți din tot județul</h2>
<p>Procedura este disponibilă și pentru pacienții din <a href="/dentist-fetesti">Fetești</a> sau <a href="/dentist-tandarei">Țăndărei</a>. Vezi și pagina completă de <a href="/servicii/cosmetica-dentara">estetică și cosmetică dentară</a>.</p>
$links$
where slug = 'albire-dentara-profesionala-slobozia';

update blog_posts set content = content || $links$
<h2>Un cabinet de familie pentru tot județul</h2>
<p>Tratăm familii întregi și din <a href="/dentist-tandarei">Țăndărei</a> sau <a href="/dentist-amara">Amara</a>, nu doar din Slobozia. Pentru pacienții vârstnici din familie, avem și un ghid dedicat de <a href="/ingrijire-dentara-varstnici">îngrijire dentară pentru vârstnici</a>.</p>
$links$
where slug = 'stomatologie-familie-slobozia';

update blog_posts set content = content || $links$
<h2>Proteze dentare pentru pacienți din toată zona</h2>
<p>Adaptăm procesul și pentru pacienții vârstnici — vezi <a href="/ingrijire-dentara-varstnici">ghidul de îngrijire dentară pentru vârstnici</a> — inclusiv pentru cei care vin din <a href="/dentist-fetesti">Fetești</a> sau <a href="/cabinet-stomatologic-ialomita">alte localități din județ</a>.</p>
$links$
where slug = 'proteze-dentare-slobozia';

update blog_posts set content = content || $links$
<h2>Programează-te din orice localitate</h2>
<p>Programarea funcționează la fel de simplu și pentru pacienții din <a href="/dentist-amara">Amara</a>, <a href="/dentist-fetesti">Fetești</a> sau <a href="/dentist-tandarei">Țăndărei</a>. După programare, poți oricând <a href="/verifica-programare">verifica programarea</a> ta online.</p>
$links$
where slug = 'programare-stomatolog-slobozia';
