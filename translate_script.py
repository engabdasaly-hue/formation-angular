from translate import Translator
translator= Translator(to_lang="fr")
with open("file1.txt","r") as f:
	english_txt=f.read()
french_txt=translator.translate(english_txt)
with open("file3.txt","w",encoding="utf-8") as f:
	f.write(french_txt)
