Dokumen ini membahas **pemilihan dan pelatihan model ML**, dengan fokus pada iterasi, data-centric AI, dan manajemen eksperimentasi.

---

## 📌 1. Modelling Overview & Key Challenges
- ML lifecycle: iterasi antara **model, hyperparameter, dan data**.
- **Data-centric AI vs Model-centric AI**:
  - Kualitas data sangat penting.
  - Meningkatkan data sering lebih efektif daripada fokus hanya pada arsitektur model.
- AI system = **kode + data**.

---

## 📌 2. Iterative Model Development
- Proses pengembangan model bersifat **iteratif**:
  1. Train model
  2. Analisis error
  3. Audit performa
  4. Perbaikan data & hyperparameter

---

## 📌 3. Low Average Error Isn’t Enough
- Contoh penting:
  - Navigational queries di search engine
  - Slice data kritikal: loan approval, rekomendasi produk
- Performance harus **sempurna pada subset penting**, meskipun jarang muncul.

---

## 📌 4. Rare Classes & Skewed Datasets
- Akurasi saja tidak cukup untuk dataset tidak seimbang.
- Gunakan metrik:
  - Confusion matrix
  - Precision / Recall
  - F1 score
- Berlaku juga untuk **multi-class problems dengan rare classes**.

---

## 📌 5. Establish a Baseline
- Penting menetapkan **baseline performa** di awal proyek:
  - Human-level performance (HLP) untuk data tidak terstruktur
  - State-of-the-art / open source
  - Quick-and-dirty implementation
  - Performance sistem lama

---

## 📌 6. Tips Memulai Modelling
- Lakukan literature search, tapi jangan obses.
- Gunakan algoritma dengan **open-source implementation** yang wajar.
- Pertimbangkan **deployment constraints** setelah baseline.
- **Sanity-check code**: coba overfit dataset kecil.

---

## 📌 7. Error Analysis
- Core dari proses ML development.
- Langkah-langkah:
  - Periksa mislabeled examples
  - Tag error (misal: car noise, blurry image)
  - Metrics: fraction of errors per tag, misclassification rate, frequency tag
- Prioritaskan perbaikan berdasarkan:
  - Gap ke HLP
  - Frekuensi kategori
  - Kemudahan meningkatkan akurasi
  - Business importance

---

## 📌 8. Adding / Improving Data
- Kumpulkan lebih banyak data untuk kategori yang butuh improvement.
- Gunakan **data augmentation** untuk unstructured data:
  - Realistis
  - Mapping jelas x → y
  - Algoritma saat ini performa buruk
- Perhatikan **resiko menambah data** terutama untuk model besar.

---

## 📌 9. Adding Features (Structured Data)
- Untuk structured data sulit membuat contoh baru:
  - Tambahkan **fitur baru yang relevan**.
  - Contoh: fitur vegetarian preference untuk rekomendasi restoran.

---

## 📌 10. Experiment Tracking
- Penting untuk **mengelola banyak eksperimen**:
  - Informasi yang perlu dicatat: algoritma/code version, dataset, hyperparameters, metrics, trained model
- Tools:
  - Text file / spreadsheet
  - Weights & Biases, Comet, MLflow

---

## 📌 11. From Big Data to Good Data
- Data berkualitas tinggi **konsisten** sepanjang lifecycle ML:
  - Cover kasus penting
  - Definisi konsisten
  - Feedback tepat waktu dari production
  - Ukuran data sesuai kebutuhan

---

> Kesimpulan: Keberhasilan ML bukan hanya soal arsitektur model, tapi **data berkualitas + error analysis + iterative improvement + tracking eksperimen**.


## Lihat Dokumen

Berikut dokumen bisa dibaca langsung di halaman:

<iframe
  src="https://drive.google.com/file/d/14SWn3LB39waOc5YAguxOVeJTkrj0POHR/preview"
  width="100%"
  height="600px"
  style="border: none;">
</iframe>
