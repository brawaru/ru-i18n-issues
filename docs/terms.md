---
title: "Принятые определения"
description: "Страница с принятыми определениями."
meta:
  scripts:
    - neat_table
---

{% capture auto_generated %}
Вы можете дополнить список терминов, [отредактировав файл `_data/terms.csv`](https://github.com/Sasha-Sorokin/ru-i18n-issues/edit/gh-pages/_data/terms.csv).
{% endcapture %}

{% include note.html type="information" title="Эта страница генерируется автоматически" content=auto_generated %}

На этой странице перечислены основные принятые определения. Большинство определений можно найти на самом Crowdin, данный список является выдержкой главных из них.

<table>
  <thead>
    <tr>
      <th style="text-align: center">Определение</th>
      <th style="text-align: center">Контекст</th>
      <th style="text-align: center">Переводить как</th>
      <th style="text-align: center">Ошибочный перевод</th>
      <th style="text-align: center">Пример</th>
    </tr>
  </thead>
  <tbody>
    {% for term in site.data.terms %}
    <tr>
      <td>{{ term.definition }}</td>
      <td>{% if term.context %}{{ term.context }}{% else %}&nbsp;{% endif %}</td>
      <td>{{ term.translation }}</td>
      <td>{{ term.wrong_translation }}</td>
      <td>{{ term.example }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>


<style>
  article.main-content { max-width: 98%; width: auto; }
</style>
