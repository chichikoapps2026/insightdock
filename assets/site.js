const SUPPORTED_LANGS = new Set(["ja", "en"]);

const SITE_CONFIG = {
  appName: "InsightDock",
  supportEmail: "chichikoapps2026@gmail.com"
};

function applyTemplateVars(value) {
  if (typeof value !== "string") return value;

  const supportEmailLink = `<a href="mailto:${SITE_CONFIG.supportEmail}">${SITE_CONFIG.supportEmail}</a>`;

  return value
    .replaceAll("{{appName}}", SITE_CONFIG.appName)
    .replaceAll("{{developerName}}", SITE_CONFIG.developerName)
    .replaceAll("{{supportEmail}}", SITE_CONFIG.supportEmail)
    .replaceAll("{{supportEmailLink}}", supportEmailLink);
}

const translations = {
  index: {
    ja: {
      title: "InsightDock | 比較とレビューを整える macOS アプリ",
      description: "準備済みの CSV データや画像を見比べ、レビューし、PDF や画像として出力準備を進めるための macOS アプリです。",
      brandName: "{{appName}}",
      navOverview: "Overview",
      navSupport: "Support",
      navPrivacy: "Privacy",
      langJa: "日本語",
      langEn: "English",
      eyebrow: "InsightDock • macOS",
      heroTitle: "比較からレポート準備まで、ひとつのMacで。",
      heroBody: "研究・分析・技術業務のための、静かな結果整理ワークスペースです。",
      heroPrimary: "ワークフローを見る",
      heroSecondary: "Support",
      heroNote: "研究、分析、技術業務のように、結果の見比べと確認を丁寧に進めたい作業を想定しています。",
      heroRailEyebrow: "Workflow",
      heroRailStep1: "Compare",
      heroRailStep2: "Review",
      heroRailStep3: "Report",
      heroPanelEyebrow: "At a Glance",
      heroPanelTitle: "最初に把握したいこと",
      heroPoint1Title: "主な用途",
      heroPoint1Body: "準備済みの CSV データや画像の比較、レビュー、出力準備。",
      heroPoint2Title: "想定ユーザー",
      heroPoint2Body: "研究者、分析担当者、技術レポートを扱う個人や小規模チーム。",
      heroPoint3Title: "公開情報",
      heroPoint3Body: "Support と Privacy を公開し、必要な情報へすぐアクセスできるようにしています。",
      heroPanelNote: "主要な比較・確認ワークフローは、Mac 上で落ち着いて進める前提で設計しています。",
      summaryEyebrow: "Product Summary",
      summaryTitle: "比較と確認のための、整った作業面。",
      summaryBody: "InsightDock は、準備済みの CSV データや画像を見比べ、確認し、レポート前の判断を整えやすくするための Mac アプリです。",
      summaryCard1Label: "Input",
      summaryCard1Title: "準備済みデータを比較しやすくする",
      summaryCard1Body: "複数の CSV 結果や関連画像を読み込み、比較の起点をひとつの場所に整えます。",
      summaryCard2Label: "Review",
      summaryCard2Title: "図表と比較を同じ文脈で確認しやすくする",
      summaryCard2Body: "数値だけでなく図表の見え方も含めて、レビュー前提の視点で整理します。",
      summaryCard3Label: "Report Prep",
      summaryCard3Title: "レポート前の確認負荷を軽くする",
      summaryCard3Body: "確認した内容を手元で整え、PDF や画像の出力準備につなげやすくします。",
      audienceEyebrow: "Who It’s For",
      audienceTitle: "こうした作業に向いています",
      audienceBody: "研究・分析・技術業務で、結果を見比べながら丁寧に確認したいケースを想定しています。",
      audienceCard1Title: "研究データの整理",
      audienceCard1Body: "実験や検証の結果を CSV ベースで扱い、比較しながら図を確認したい場面。",
      audienceCard2Title: "分析結果のレビュー",
      audienceCard2Body: "複数の結果セットを並べて見比べ、差分や傾向を落ち着いて把握したい場面。",
      audienceCard3Title: "技術レポート前の確認",
      audienceCard3Body: "レポート本文に入る前に、図表と補足コメントを整理しておきたい場面。",
      workflowEyebrow: "Workflow",
      workflowTitle: "典型的な流れ",
      workflowBody: "取り込みから Compare、Review、Report までを、役割ごとに切り分けて扱える構成です。",
      workflowCard1Title: "Compare",
      workflowCard1Body: "準備済みのデータを並べて比較し、何を見比べるべきかを明確にします。",
      workflowCard2Title: "Review",
      workflowCard2Body: "図表とコンテキストを見ながら、解釈や確認メモを整理します。",
      workflowCard3Title: "Report",
      workflowCard3Body: "出力対象をまとめ、PDF や画像の書き出し前の確認につなげます。",
      valueEyebrow: "Value",
      valueTitle: "プロダクトの核",
      valueBody: "InsightDock は、派手な自動化よりも、比較と確認のしやすさを重視した設計です。",
      valuePoint1Title: "見比べるための静かな画面",
      valuePoint1Body: "重要な情報が埋もれにくいよう、図表と比較情報を落ち着いた密度で扱います。",
      valuePoint2Title: "レポート前の判断を支える",
      valuePoint2Body: "レビュー中の気づきや補足情報を、その後の出力や共有につなげやすくします。",
      valuePoint3Title: "macOS で自然に扱える",
      valuePoint3Body: "ファイル選択、PDF 出力、ワークスペース作業を、Mac らしい流れでまとめます。",
      valueQuoteLabel: "Design Direction",
      valueQuoteBody: "A calmer way to review CSV-based results before they turn into a report.",
      previewEyebrow: "Screen Preview",
      previewTitle: "作業イメージ",
      previewBody: "実際の画面構成を反映した静かなプレビューで、Compare / Review / Report の役割を一目で伝えます。",
      previewCard1Label: "Compare",
      previewCard1Title: "比較対象を整える",
      previewCard1Body: "比較したいデータや series を選び、見比べる対象を整理します。",
      previewCard2Label: "Review",
      previewCard2Title: "図表と文脈を一緒に確認する",
      previewCard2Body: "figure、補足メモ、比較テーブルを行き来しながら確認を進めます。",
      previewCard3Label: "Report",
      previewCard3Title: "出力前にまとめる",
      previewCard3Body: "共有や PDF 化を見据えて、必要な figure とコメントを整えます。",
      trustEyebrow: "Trust",
      trustTitle: "公開情報も、製品体験と同じトーンで。",
      trustBody: "Support / Privacy 情報へ、必要なときに迷わずアクセスできる構成にしています。",
      trustCard1Label: "Support",
      trustCard1Title: "サポート情報",
      trustCard1Body: "問い合わせ先、FAQ、サポート範囲を確認できます。",
      trustCard2Label: "Privacy",
      trustCard2Title: "プライバシーポリシー",
      trustCard2Body: "ローカル処理の前提と、サポート時に受け取る情報を明示します。",
      trustCard3Label: "Local-first",
      trustCard3Title: "主要ワークフローはローカル前提",
      trustCard3Body: "コアな比較・確認・PDF 出力は、Mac 上で落ち着いて扱うことを前提に設計しています。",
      ctaEyebrow: "Official Pages",
      ctaTitle: "Support と Privacy を確認できます",
      ctaBody: "製品の概要を伝えるページとしても、サポートとプライバシーの案内先としても使いやすい構成です。",
      ctaPrimary: "Support を見る",
      ctaSecondary: "Privacy を見る"
    },
    en: {
      title: "InsightDock | Calm review space for result comparison on Mac",
      description: "InsightDock is a macOS app for comparing prepared CSV datasets and images, reviewing results, and preparing PDF or image output on Mac.",
      brandName: "{{appName}}",
      navOverview: "Overview",
      navSupport: "Support",
      navPrivacy: "Privacy",
      langJa: "日本語",
      langEn: "English",
      eyebrow: "InsightDock • macOS",
      heroTitle: "From comparison to report prep, on one Mac.",
      heroBody: "A calm workspace for research, analysis, and technical work that benefits from clearer result review.",
      heroPrimary: "See the workflow",
      heroSecondary: "Support",
      heroNote: "Built for research, analysis, and technical work where careful comparison matters.",
      heroRailEyebrow: "Workflow",
      heroRailStep1: "Compare",
      heroRailStep2: "Review",
      heroRailStep3: "Report",
      heroPanelEyebrow: "At a Glance",
      heroPanelTitle: "What to know first",
      heroPoint1Title: "Primary use",
      heroPoint1Body: "Comparison, review, and output preparation for prepared CSV datasets and images.",
      heroPoint2Title: "Intended users",
      heroPoint2Body: "Researchers, analysts, and technical users working with result-heavy datasets.",
      heroPoint3Title: "Public information",
      heroPoint3Body: "Support and Privacy pages are published so key information stays easy to reach.",
      heroPanelNote: "Core comparison and review workflows are built to feel calm and native on Mac.",
      summaryEyebrow: "Product Summary",
      summaryTitle: "A structured workspace for comparison and review.",
      summaryBody: "InsightDock helps compare prepared CSV datasets and images, review figures, and prepare PDF or image output with more clarity on Mac.",
      summaryCard1Label: "Input",
      summaryCard1Title: "Make prepared result sets easier to compare",
      summaryCard1Body: "Bring multiple CSV datasets and related images into one place so comparison can start from a clearer baseline.",
      summaryCard2Label: "Review",
      summaryCard2Title: "Keep figures and comparisons in the same context",
      summaryCard2Body: "Review not only the numbers, but also how figures look and read before reporting.",
      summaryCard3Label: "Report Prep",
      summaryCard3Title: "Reduce friction before final reporting",
      summaryCard3Body: "Organize what needs to be checked first so PDF or image export feels more deliberate.",
      audienceEyebrow: "Who it’s for",
      audienceTitle: "Useful for work like this",
      audienceBody: "InsightDock is for research, analysis, and technical reporting workflows where careful comparison matters.",
      audienceCard1Title: "Research result organization",
      audienceCard1Body: "For experiments or evaluation work where results are handled in CSV form and reviewed alongside figures.",
      audienceCard2Title: "Analytical review",
      audienceCard2Body: "For comparing multiple result sets and checking differences or trends with less visual noise.",
      audienceCard3Title: "Technical report preparation",
      audienceCard3Body: "For organizing figures and supporting notes before content is finalized into a report.",
      workflowEyebrow: "Workflow",
      workflowTitle: "A typical flow",
      workflowBody: "Import, compare, review, and prepare output in a fixed flow where each step has a clear role.",
      workflowCard1Title: "Compare",
      workflowCard1Body: "Line up the prepared datasets and decide what should be compared.",
      workflowCard2Title: "Review",
      workflowCard2Body: "Check figures and context together while capturing interpretation and review notes.",
      workflowCard3Title: "Report",
      workflowCard3Body: "Prepare the figures and comments that should be carried into PDF or image export.",
      valueEyebrow: "Value",
      valueTitle: "A clearer way to review CSV-based results before they turn into a report.",
      valueBody: "InsightDock prioritizes clarity and reviewability over heavy workflow complexity.",
      valuePoint1Title: "A calmer place to compare",
      valuePoint1Body: "Charts and comparison context are presented in a way that keeps key signals easier to read.",
      valuePoint2Title: "Support for report-ready decisions",
      valuePoint2Body: "Notes and supporting context stay closer to the figures they relate to before export.",
      valuePoint3Title: "Feels native on macOS",
      valuePoint3Body: "File selection, workspace flow, and PDF export are shaped around expected Mac interactions.",
      valueQuoteLabel: "Design Direction",
      valueQuoteBody: "A clearer way to review CSV-based results before they turn into a report.",
      previewEyebrow: "Screen Preview",
      previewTitle: "A quiet view of the workflow",
      previewBody: "These previews show how Compare, Review, and Report work together in the product.",
      previewCard1Label: "Compare",
      previewCard1Title: "Set up what matters",
      previewCard1Body: "Choose the datasets and visible series that define the comparison you want to make.",
      previewCard2Label: "Review",
      previewCard2Title: "Inspect figures with context",
      previewCard2Body: "Move between figures, notes, and comparison context while reviewing the results.",
      previewCard3Label: "Report",
      previewCard3Title: "Prepare output with intent",
      previewCard3Body: "Collect the figures and supporting comments you want to export or share.",
      trustEyebrow: "Trust",
      trustTitle: "Public information with the same level of care.",
      trustBody: "Support and Privacy stay easy to reach, with wording intended to feel clear and direct.",
      trustCard1Label: "Support",
      trustCard1Title: "Support information",
      trustCard1Body: "Contact details, FAQ, and support scope.",
      trustCard2Label: "Privacy",
      trustCard2Title: "Privacy policy",
      trustCard2Body: "An explanation of the local-first workflow and the information handled through support.",
      trustCard3Label: "Local-first",
      trustCard3Title: "Core workflows are designed around local use",
      trustCard3Body: "Comparison, review, and PDF export are framed as Mac-based workflows rather than cloud-first operations.",
      ctaEyebrow: "Official Pages",
      ctaTitle: "Support and Privacy are available here",
      ctaBody: "These pages are designed to work both as the public product site and as a clear place to find support and privacy details.",
      ctaPrimary: "Open Support",
      ctaSecondary: "View Privacy Policy"
    }
  },
  support: {
    ja: {
      title: "InsightDock | サポート",
      description:
        "InsightDock の公式サポートページです。問い合わせ方法、FAQ、サポート範囲を掲載しています。",
      brandName: "InsightDock",
      navHome: "Overview",
      navSupport: "Support",
      navPrivacy: "Privacy",
      langJa: "日本語",
      langEn: "English",
      pageEyebrow: "Official Support",
      heading: "サポート",
      intro:
        "InsightDock に関するお問い合わせ、不具合報告、改善要望は、以下の窓口からご連絡ください。",
      contactLabel: "サポート窓口",
      section1: "お問い合わせ時に含めてほしい情報",
      include1: "ご利用の macOS バージョン",
      include2: "InsightDock のアプリバージョン",
      include3: "発生している問題や質問の内容",
      include4: "再現手順",
      include5: "必要に応じてスクリーンショットやログ",
      section2: "よくある質問",
      faq1:
        "<strong>Q. アプリが起動しません。</strong><br />A. macOS バージョン、インストール状態、利用中の配布ビルドをご確認ください。改善しない場合は、環境情報を添えてお問い合わせください。",
      faq2:
        "<strong>Q. 不具合報告はどこから送れますか。</strong><br />A. 上記のサポートメールアドレスまでご連絡ください。",
      faq3:
        "<strong>Q. プライバシーに関する説明はどこで確認できますか。</strong><br />A. <a href=\"./privacy.html?lang=ja\">プライバシーポリシー</a>をご確認ください。",
      section3: "対応環境",
      platform:
        "InsightDock は macOS 向けアプリです。対応 OS の詳細は、App Store の配布ページに記載された最新情報をご確認ください。",
      section4: "サポート範囲",
      scope:
        "一般的な利用方法、不具合報告、改善要望を受け付けます。個別環境や外部サービス起因のすべての問題について、対応を保証するものではありません。",
      section5: "関連ページ",
      related1: "プライバシーポリシー",
      related2: "Support (English)",
      callout:
        "InsightDock は、ログインを必要とせず、Compare / Review / Report の主要ワークフローをローカル環境で利用する前提で設計されています。",
      aside1Label: "Support Scope",
      aside1Title: "必要な情報にすぐ届く構成",
      aside1Body:
        "連絡先、FAQ、サポート範囲が迷わず見つかる、分かりやすい構成を重視しています。",
      footer:
        "サポートに関するご連絡は、このページ上の連絡先をご利用ください。"
    },
    en: {
      title: "InsightDock | Support",
      description:
        "Official support page for InsightDock. Includes contact details, FAQ, and support scope.",
      brandName: "{{appName}}",
      navHome: "Overview",
      navSupport: "Support",
      navPrivacy: "Privacy",
      langJa: "日本語",
      langEn: "English",
      pageEyebrow: "Official Support",
      heading: "Support",
      intro:
        "For questions, bug reports, or feedback about InsightDock, email us using the support address below.",
      contactLabel: "Support email",
      section1: "Please include",
      include1: "Your macOS version",
      include2: "Your InsightDock app version",
      include3: "A description of the issue or question",
      include4: "Steps to reproduce",
      include5: "Screenshots or logs when available",
      section2: "FAQ",
      faq1:
        "<strong>Q. The app does not launch.</strong><br />A. Please check your macOS version, installation status, and the build you are using. If the issue continues, contact support with your environment details.",
      faq2:
        "<strong>Q. How do I report a bug?</strong><br />A. Please email the support address listed above.",
      faq3:
        "<strong>Q. Where can I read the privacy policy?</strong><br />A. Please visit the <a href=\"./privacy.html?lang=en\">Privacy Policy</a> page.",
      section3: "Platform",
      platform:
        "InsightDock is a macOS app. Please check the App Store listing for supported macOS versions.",
      section4: "Scope of support",
      scope:
        "We accept general usage questions, bug reports, and feature suggestions. Support may be limited for issues caused by specific local environments or third-party services.",
      section5: "Related pages",
      related1: "Privacy Policy",
      related2: "Support (Japanese)",
      callout:
        "InsightDock is built for local Compare / Review / Report workflows and does not require account login for its core features.",
      aside1Label: "Support Scope",
      aside1Title: "Structured for clarity",
      aside1Body:
        "This page keeps contact details, FAQ, and support scope visible without relying on buried documentation or account portals.",
      footer:
        "Use the contact address on this page for support requests."
    }
  },
  privacy: {
    ja: {
      title: "InsightDock | プライバシーポリシー",
      description:
        "InsightDock の公式プライバシーポリシーです。ローカル処理、収集しない情報、サポート時に受け取る情報を説明しています。",
      brandName: "{{appName}}",
      navHome: "Overview",
      navSupport: "Support",
      navPrivacy: "Privacy",
      langJa: "日本語",
      langEn: "English",
      pageEyebrow: "Privacy Policy",
      heading: "プライバシーポリシー",
      updated: "最終更新日: 2026-04-04",
      intro:
        "InsightDock（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、Compare / Review / Report の主要なワークフローをユーザーの Mac 上で扱う前提で設計されています。",
      section1: "1. 連絡先情報",
      developer:
        "アプリ名: {{appName}}<br />お問い合わせ先: {{supportEmailLink}}",
      section2: "2. 通常利用時に扱う情報",
      normalUse:
        "本アプリは、通常の利用においてアカウント登録を必要としません。また、ユーザーが選択した CSV、画像、レポート本文、ノート内容を主要ワークフローのために外部サーバーへ送信しない前提で設計されています。",
      info1: "ユーザーが選択した CSV ファイル",
      info2: "ユーザーが選択した画像ファイル",
      info3: "比較結果、統計値、レビュー用メモ",
      info4: "エクスポートされた PDF レポート",
      info5: "ワークスペース状態や設定情報",
      section3: "3. ローカル保存について",
      localStorage:
        "インポートしたファイルは、アプリ管理下のローカルストレージへコピーされる場合があります。ワークスペース状態の一部は、ユーザーの Mac 上にローカル保存されます。",
      section4: "4. 外部送信しない情報",
      notSentLead: "主要機能のために、次の情報を外部送信しません。",
      notSent1: "インポートした研究データや画像",
      notSent2: "比較結果や生成したコメント本文",
      notSent3: "エクスポートした PDF の内容",
      notSent4: "広告識別子やトラッキング情報",
      section5: "5. サポート時に受け取る可能性がある情報",
      supportDataLead:
        "サポート対応時には、ユーザーが任意で送信した範囲の情報を受け取ることがあります。",
      support1: "メールアドレス",
      support2: "氏名または表示名",
      support3: "問い合わせ内容",
      support4: "スクリーンショット、ログ、利用環境情報",
      section6: "6. 利用目的",
      purpose1: "お問い合わせへの返信",
      purpose2: "不具合の調査と改善",
      purpose3: "ユーザーサポートの提供",
      purpose4: "品質向上のための検討",
      section7: "7. 第三者提供",
      sharing:
        "法令に基づく場合を除き、取得した情報を第三者へ販売または提供しません。",
      section8: "8. 外部サービス",
      thirdParty:
        "サポート運用のため、メールサービスやホスティングサービス等を利用する場合があります。これらのサービスでは、運用上必要最小限の情報が処理されることがあります。",
      section9: "9. 情報の保存期間",
      retention:
        "サポート対応に必要な範囲で情報を保存し、不要となった後は合理的な期間内に削除または適切に管理します。",
      section10: "10. ユーザーの権利",
      rights:
        "サポート問い合わせを通じて提供した情報について、開示、訂正、削除を求めることができます。ご希望の場合は、上記のお問い合わせ先までご連絡ください。",
      section11: "11. 改定",
      changes:
        "本ポリシーは必要に応じて改定されることがあります。重要な変更がある場合は、本ページ上で更新後の内容を掲載します。",
      callout:
        "InsightDock は、主要な比較・レビュー・PDF 出力ワークフローをローカル環境で扱う前提で設計されています。",
      aside1Label: "Privacy Stance",
      aside1Title: "主要ワークフローはローカル前提です",
      aside1Body:
        "比較、レビュー、PDF 出力といった中核機能は、ユーザーの Mac 上で作業する前提で設計されています。",
      aside2Label: "Support Data",
      aside2Title: "サポート時の情報だけを別で扱います",
      aside2Body:
        "メール問い合わせを行った場合に限り、返信や調査に必要な範囲で連絡先や環境情報を受け取ることがあります。",
      footer:
        "プライバシーやサポートに関するお問い合わせは、このページの連絡先をご利用ください。"
    },
    en: {
      title: "InsightDock | Privacy Policy",
      description:
        "Official privacy policy for InsightDock, including local processing scope and support inquiry handling.",
      brandName: "{{appName}}",
      navHome: "Overview",
      navSupport: "Support",
      navPrivacy: "Privacy",
      langJa: "日本語",
      langEn: "English",
      pageEyebrow: "Privacy Policy",
      heading: "Privacy Policy",
      updated: "Last updated: 2026-04-04",
      intro:
        "InsightDock (the “App”) respects your privacy and handles its core Compare / Review / Report workflows locally on your Mac.",
      section1: "1. Contact information",
      developer:
        "App name: {{appName}}<br />Contact: {{supportEmailLink}}",
      section2: "2. Information handled during normal use",
      normalUse:
        "The App does not require account login for normal use. It does not transmit imported CSV files, images, report text, or notes to external servers for its core workflow.",
      info1: "User-selected CSV files",
      info2: "User-selected image files",
      info3: "Generated comparison metrics and review notes",
      info4: "Exported PDF reports",
      info5: "Workspace state and settings",
      section3: "3. Local storage",
      localStorage:
        "Imported files may be copied into app-managed local storage. Some workspace state and preferences are stored locally on your Mac.",
      section4: "4. Information not sent externally",
      notSentLead: "During core use, the following information is not transmitted to external services.",
      notSent1: "Imported research data and images",
      notSent2: "Comparison outputs and generated comment text",
      notSent3: "Exported PDF contents",
      notSent4: "Advertising identifiers or tracking data",
      section5: "5. Information we may receive through support",
      supportDataLead:
        "If you contact support, we may receive information that you voluntarily provide.",
      support1: "Email address",
      support2: "Name or display name",
      support3: "Inquiry details",
      support4: "Screenshots, logs, or environment details",
      section6: "6. Purposes of use",
      purpose1: "Responding to support inquiries",
      purpose2: "Investigating and fixing issues",
      purpose3: "Providing customer support",
      purpose4: "Improving product quality",
      section7: "7. Sharing with third parties",
      sharing:
        "We do not sell or provide collected information to third parties except where required by law.",
      section8: "8. Third-party services",
      thirdParty:
        "For support and site operation, we may use email and hosting providers. Those services may process only the minimum information necessary to operate.",
      section9: "9. Retention",
      retention:
        "Support-related information is retained only for as long as reasonably necessary for support and operational purposes, then deleted or appropriately managed.",
      section10: "10. Your rights",
      rights:
        "You may request access, correction, or deletion of information provided through support inquiries by contacting us at the address above.",
      section11: "11. Changes to this policy",
      changes:
        "We may update this policy from time to time. Material changes will be reflected on this page.",
      callout:
        "InsightDock is designed around local workflows for comparison, review, and PDF export.",
      aside1Label: "Privacy Stance",
      aside1Title: "Core workflows are designed around local use",
      aside1Body:
        "Comparison, review, and PDF export are intended to happen on the user's Mac as part of the primary workflow.",
      aside2Label: "Support Data",
      aside2Title: "Support inquiries are handled separately",
      aside2Body:
        "If you email support, we may receive contact and environment details only to the extent needed to respond and investigate.",
      footer:
        "Use the contact address on this page for privacy or support questions."
    }
  }
};

function resolveLanguage() {
  const params = new URLSearchParams(window.location.search);
  const explicit = params.get("lang");
  if (explicit && SUPPORTED_LANGS.has(explicit)) return explicit;
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  return (
    candidates
      .map((value) => value.toLowerCase().split("-")[0])
      .find((value) => SUPPORTED_LANGS.has(value)) || "en"
  );
}

function localizePage() {
  const page = document.body.dataset.page;
  const lang = resolveLanguage();
  const copy = translations[page]?.[lang];
  if (!copy) return;

  const templatedCopy = Object.fromEntries(
    Object.entries(copy).map(([key, value]) => [key, applyTemplateVars(value)])
  );

  document.documentElement.lang = lang;
  document.title = templatedCopy.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", templatedCopy.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (templatedCopy[key] !== undefined) element.textContent = templatedCopy[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (templatedCopy[key] !== undefined) element.innerHTML = templatedCopy[key];
  });

  document.querySelectorAll("[data-support-email]").forEach((element) => {
    element.textContent = SITE_CONFIG.supportEmail;
    element.href = `mailto:${SITE_CONFIG.supportEmail}`;
  });

  document.querySelectorAll("[data-lang-link]").forEach((element) => {
    const base = element.dataset.baseHref;
    const targetLang = element.dataset.langLink;
    element.href = `${base}?lang=${targetLang}`;
    element.classList.toggle("active", targetLang === lang);
  });

  document.querySelectorAll("[data-lang-aware-href]").forEach((element) => {
    const base = element.dataset.langAwareHref;
    element.href = `${base}?lang=${lang}`;
  });

  document.querySelectorAll("[data-alt-lang-href]").forEach((element) => {
    const base = element.dataset.altLangHref;
    const other = lang === "ja" ? "en" : "ja";
    element.href = `${base}?lang=${other}`;
  });
}

document.addEventListener("DOMContentLoaded", localizePage);
