// 採用候補者向け見本データ。架空社員「佐藤 美咲」が
// INSTYLE GROUP の目標設定シートを記入した想定。
// 実在社員・クライアント・契約金額は含まない。

import { CURRENT_PERIOD, FormData } from './types';

export function createSampleFormData(): FormData {
  return {
    cover: {
      company: 'INSTYLE GROUP',
      name: '佐藤 美咲',
      grade: 'L',
      period: CURRENT_PERIOD,
    },
    group: {
      revenue: { prev: '4,800,000,000', target: '5,400,000,000', actual: '' },
      operatingProfit: { prev: '720,000,000', target: '900,000,000', actual: '' },
      operatingMargin: { prev: '15.0', target: '16.7', actual: '' },
      grossProfit: { prev: '2,160,000,000', target: '2,430,000,000', actual: '' },
      strategicFocus:
        'D2C 事業の自社チャネル比率を 60% 以上に。クリエイティブ内製率を上げ、運用コストを 15% 圧縮する。',
    },
    company: {
      revenue: { prev: '1,200,000,000', target: '1,400,000,000', actual: '' },
      operatingProfit: { prev: '180,000,000', target: '230,000,000', actual: '' },
      operatingMargin: { prev: '15.0', target: '16.4', actual: '' },
      grossProfit: { prev: '540,000,000', target: '630,000,000', actual: '' },
      strategicFocus:
        '採用ブランディングと制度設計を統合し、リファラル比率 30% を目指す。半期で核人材 6 名を採用する。',
    },
    dept: {
      mission:
        '会社の未来をつくる人を、ブレない基準で迎える。採用は「数」ではなく「同じ景色を見られる人」を集める仕事。',
      kgi1: {
        mission: '採用 KGI',
        kgi: '上期 6 名（S 帯 2 名、T 帯 4 名）の本採用、入社後 3 ヶ月定着率 100%',
      },
      kgi2: {
        mission: '採用ブランディング KGI',
        kgi: 'リファラル比率 30% / 一次面接通過率 60% に底上げ、月間応募数 240 件',
      },
      kpi1: {
        label: '月間応募数（リファラル＋自社経由）',
        prev: '160',
        target: '240',
        actual: '',
        relatedKgi: 'kgi2',
      },
      kpi2: {
        label: '一次面接通過率',
        prev: '48%',
        target: '60%',
        actual: '',
        relatedKgi: 'kgi2',
      },
      kpi3: {
        label: '内定承諾率',
        prev: '70%',
        target: '85%',
        actual: '',
        relatedKgi: 'kgi1',
      },
      kpi4: {
        label: '入社後 3 ヶ月定着率',
        prev: '90%',
        target: '100%',
        actual: '',
        relatedKgi: 'kgi1',
      },
      kpi5: {
        label: '採用 1 名あたりコスト',
        prev: '85 万円',
        target: '55 万円',
        actual: '',
        relatedKgi: 'kgi2',
      },
      actions: [
        {
          content: '採用サイトを全面リニューアル。社員インタビューと評価シート見本を公開して透明性を上げる',
          expectedEffect: '応募数 +40% / 入社前後のギャップによる早期離職を抑制',
          deadline: '7月末',
        },
        {
          content: 'リファラル制度の運用刷新（紹介社員への可視化フィードバックを毎月実施）',
          expectedEffect: 'リファラル比率 30% / 紹介 → 採用までのリードタイム短縮',
          deadline: '6月末',
        },
        {
          content: '一次面接の評価基準を 4 軸に統一し、面接官全員に研修を行う',
          expectedEffect: '一次通過率の判断ブレを抑え、後工程の歩留まり改善',
          deadline: '8月中旬',
        },
        {
          content: '入社後オンボーディングを 90 日プログラム化（30/60/90 日面談 + バディ制度）',
          expectedEffect: '入社後 3 ヶ月定着率 100% / 配属部署との早期立ち上がり',
          deadline: '9月末',
        },
      ],
    },
    personal: {
      currentStatus: [
        { label: '前回面談で指摘された課題', value: '採用要件の言語化が抽象的で、面接官による評価のブレが大きかった' },
        { label: 'それを受けてどう行動したか', value: '評価基準を 4 軸に分解し、各軸ごとの行動例を 30 件収集して FAQ 化した' },
        { label: '今期の役割・期待（自己認識）', value: '採用全工程の設計者として、応募 → 入社 → 定着までの体験を一つの線で繋ぐ' },
      ],
      smartGoals: [
        {
          relatedKpi: 'KPI1 月間応募数 / KPI3 内定承諾率',
          s: '採用サイトのリニューアルを完遂し、社員インタビュー 8 本＋評価シート見本ページを公開する',
          m: '月間応募数 240 件 / 内定承諾率 85% を達成',
          a: 'デザイナー 1 名 + ライター 1 名のリソース確保済み。原稿は社内インタビューで内製',
          r: '応募母集団の質を上げることが、後工程の歩留まりとリファラル拡大に直結するため',
          t: '8 月末公開、9 月末に効果計測',
          note: '採用サイトは候補者が最初に触れるブランド接点。情報の透明性で他社と差別化する',
        },
        {
          relatedKpi: 'KPI2 一次面接通過率',
          s: '一次面接の評価基準を 4 軸（VALUE / カルチャー / 思考力 / 役割適合）に統一し、研修を実施',
          m: '面接官 12 名全員が研修を完了 / 一次通過率 60%（基準 +12pt）',
          a: '研修プログラムは前期のロープレ素材を流用。VALUE 評価は経営層レビュー済み',
          r: '判断のブレを抑えることで、後工程の負荷と内定取り消しリスクを同時に下げられる',
          t: '7 月中に研修完了、8 月以降の面接で運用開始',
          note: '研修は全員必須。新任面接官だけでなく経験者にも基準を共有し直す',
        },
        {
          relatedKpi: 'KPI4 入社後 3 ヶ月定着率',
          s: '90 日オンボーディングプログラムを設計し、上期入社者 6 名全員に適用',
          m: '入社者 6 名の 3 ヶ月定着率 100% / 90 日面談スコア 4.0 以上',
          a: 'バディ制度は既存社員から 4 名選定済み。30/60/90 日面談は HR が主導',
          r: '入社直後のミスマッチを早期に検知し、配属部署と HR で修正できる体制を作る',
          t: '6 月末プログラム完成、7 月以降の入社者から適用',
          note: '90 日経過後の定着が次の半期の母数になる。長期視点で組む',
        },
      ],
      kpiContribs: [
        { deptKpi: 'KPI1 月間応募数', myPart: '採用サイトリニューアル＋リファラル制度刷新で母集団を作る' },
        { deptKpi: 'KPI2 一次面接通過率', myPart: '評価基準統一と面接官研修を主導' },
        { deptKpi: 'KPI4 入社後 3 ヶ月定着率', myPart: '90 日オンボーディング設計と運用' },
      ],
      slLevel: 'S2',
      slNote: '採用全工程の設計者として方向は決まっており、上長への確認は週 1 のレビューで足りる段階',
      commitment: [
        { amount: '8000000', rationale: '採用サイトリニューアルが応募母集団の質を変え、後工程の歩留まりを底上げする' },
        { amount: '5000000', rationale: '面接官研修と評価基準統一による、不採用 → 内定承諾までのリードタイム短縮' },
        { amount: '3000000', rationale: '90 日オンボーディングによる早期離職コストの抑制（採用やり直し費用の回避）' },
      ],
      supervisorComment: '',
    },
    promotion: {
      valueScore: '4.0',
      tenurePoint: 2,
      deptGrowthPoint: 2,
      personalKpiPoint: 2,
      supervisorPoint: 2,
      mgmtPoint: 2,
      nurturingPoint: 2,
    },
    bonus: {
      canAfford: 1,
      hasProfit: 1,
      futureProfit: 1,
      deptKpiAchieved: 2,
      personalKpiAchieved: 2,
      supervisorEval: 2,
      noSupervisor: false,
      valueEval: 2,
      reproducibility: 1,
      roleAchievement: 2,
      difficulty: 2,
      mgmtEval: 1,
    },
    gradeExpectations: {
      L: '与えられた役割を確実に果たし、自分の担当領域で再現可能な成果を出せる。先輩の指示の意図を汲んで動き、判断に迷う場面は早めに相談できる。',
    },
  };
}
