Dokumen ini membahas **definisi data** dan **menetapkan baseline performa** untuk proyek ML, dengan fokus pada kualitas data, human-level performance, dan scoping proyek.

---

## 📌 1. Mengapa Data Definition Sulit
- Labeling tidak konsisten → algoritma bingung.
- Contoh: deteksi iguana, defect phone, speech recognition.
- Instruksi labeling ambigu → interpretasi berbeda antar labeler.

---

## 📌 2. Jenis Masalah Data
Dikelompokkan menurut **data type** & **jumlah data**:

| Data Type | Small Data (≤10k) | Big Data (>10k) |
|-----------|-----------------|----------------|
| **Unstructured** | Label harus bersih & konsisten, bisa direview manual | Fokus pada proses data & instruksi konsisten untuk tim besar |
| **Structured** | Data sulit ditambah, human labeling terbatas | Fokus pada proses data & standardisasi |

- **Unstructured**: manusia cukup baik, bisa pakai data augmentation.
- **Structured**: sulit menambah data, labeling manual tidak selalu konsisten.

---

## 📌 3. Meningkatkan Konsistensi Label
- Beberapa labeler memberi anotasi pada contoh yang sama.
- Diskusi antara ML engineer, expert, dan labeler untuk menyepakati definisi.
- Jika input (x) kurang jelas → perbaiki (misal lighting kamera).
- Iterasi instruksi labeling sampai kesepakatan meningkat.
- Strategi:
  - Standarisasi label
  - Gabungkan kelas ambigu
  - Tambahkan kelas "borderline/unintelligible" untuk contoh tidak pasti

---

## 📌 4. Human Level Performance (HLP)
- **Kenapa diukur:** estimasi Bayes error, prioritas error, target realistis untuk bisnis.
- **Tantangan:** HLP bisa memberi algoritma “keuntungan” jika instruksi labeling ambigu.
- **Meningkatkan HLP:** perbaiki konsistensi labeling → data lebih bersih → ML lebih baik.

---

## 📌 5. Mendapatkan Data
- **Time investment:** fokus iterasi cepat (model, hyperparameter, data, training, error analysis).
- **Inventory data sources:** milik sendiri, crowdsourced, paid, purchased. Pertimbangkan jumlah, biaya, kualitas, privasi, regulasi.
- **Labeling options:** in-house, outsourced, crowdsourced. 
  - Jangan langsung menambah data >10x.
  - SME penting untuk tugas spesialisasi.
  - ML engineers labeling beberapa hari → membangun intuisi.

---

## 📌 6. Data Pipeline
- **Pre-processing & Cleaning:** spam removal, merge user ID, dsb.
- **Replicability:** manual pre-processing OK di POC, tapi untuk production gunakan tools: TensorFlow Transform, Apache Beam, Airflow.
- **Meta-data, Provenance & Lineage:**
  - Metadata: info tentang data (waktu, kamera, labeler ID)
  - Provenance: asal data
  - Lineage: sequence steps pipeline
- Tracking ini penting untuk maintain & debugging pipeline kompleks.

---

## 📌 7. Balanced Train/Dev/Test Splits
- Small datasets: random split bisa tidak representatif → gunakan **balanced split** (proporsi positif sama di train/dev/test).
- Large datasets: random split biasanya cukup representatif.

---

## 📌 8. Scoping Proyek ML
- Tujuan: pastikan **impact & feasibility**.
- **Proses:**
  1. Brainstorm masalah bisnis → solusi AI
  2. Nilai feasibility & value
  3. Tentukan milestones & resource
- **Feasibility:** benchmark eksternal, HLP, ketersediaan fitur prediktif, histori proyek.
- **Value:** hubungkan ML metrics → business metrics (revenue, engagement) via estimasi Fermi.
- **Ethical considerations:** pastikan net positive societal value, fairness, bebas bias.
- **Milestones & resourcing:** ML metrics, software metrics (latency, throughput), business metrics, resources, timeline. Untuk ketidakpastian → POC atau benchmarking.

---

> Kesimpulan: Kualitas data, baseline performa, HLP, dan scoping proyek adalah **fondasi sukses ML production**. Iterasi data + model + error analysis + pipeline replicability sangat penting.


## Lihat Dokumen

Berikut dokumen bisa dibaca langsung di halaman:

<iframe
  src="https://drive.google.com/file/d/1XTfB1q9cA2sKfRNzDaq5-KjastYtaqP4/preview"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
