'use client';

import { useState } from 'react';
import StepIndicator from '@/components/StepIndicator';
import GoalFunnel from '@/components/GoalFunnel';
import CoverForm from '@/components/forms/CoverForm';
import CompanyGoalForm from '@/components/forms/CompanyGoalForm';
import DeptGoalForm from '@/components/forms/DeptGoalForm';
import PersonalGoalForm from '@/components/forms/PersonalGoalForm';
import CommitmentForm from '@/components/forms/CommitmentForm';
import GradeForm from '@/components/forms/GradeForm';
import PromotionForm from '@/components/forms/PromotionForm';
import BonusForm from '@/components/forms/BonusForm';
import { FormData } from '@/lib/types';
import { createSampleFormData } from '@/lib/sample-data';

// グループ〜ギャランティ までのサイドバー
function showFunnel(step: number): boolean {
  return step >= 2 && step <= 6;
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(() => createSampleFormData());

  const handleResetSample = () => {
    setFormData(createSampleFormData());
    setStep(1);
  };

  const navigate = (s: number) => {
    if (s >= 1 && s <= 10) setStep(s);
  };

  const updateCover = (d: FormData['cover']) => setFormData(prev => ({ ...prev, cover: d }));
  const updateGroup = (d: FormData['group']) => setFormData(prev => ({ ...prev, group: d }));
  const updateCompany = (d: FormData['company']) => setFormData(prev => ({ ...prev, company: d }));
  const updateDept = (d: FormData['dept']) => setFormData(prev => ({ ...prev, dept: d }));
  const updatePersonal = (d: FormData['personal']) => setFormData(prev => ({ ...prev, personal: d }));
  const updatePromotion = (d: FormData['promotion']) => setFormData(prev => ({ ...prev, promotion: d }));
  const updateBonus = (d: FormData['bonus']) => setFormData(prev => ({ ...prev, bonus: d }));
  const updateGradeExpectations = (d: FormData['gradeExpectations']) => setFormData(prev => ({ ...prev, gradeExpectations: d }));

  return (
    <>
      <div className="scene-bg" />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

        {/* Header */}
        <header className="site-header" style={{
          padding: '40px 48px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'var(--glass-dark)',
            backdropFilter: 'var(--glass-blur-lg)',
            WebkitBackdropFilter: 'var(--glass-blur-lg)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg,rgba(255,90,100,.04) 0%,rgba(255,210,80,.04) 25%,rgba(60,220,160,.05) 50%,rgba(80,160,255,.05) 75%,transparent 100%)',
            pointerEvents: 'none',
          }} />
          <div className="header-inner" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
            <div style={{ minWidth: 0 }}>
              <img src="https://crhr.instyle.group/_shared/static/logo.svg" alt="INSTYLE GROUP" style={{ height: 10, marginBottom: 10, filter: 'brightness(0) invert(1)', opacity: 0.45 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-inv)', letterSpacing: '-.02em' }}>
                  目標設定シート <span style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.6 }}>見本</span>
                </h1>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 10px',
                  fontSize: '.6875rem',
                  fontWeight: 600,
                  letterSpacing: '.04em',
                  color: 'var(--color-text-inv)',
                  background: 'rgba(255,255,255,.10)',
                  border: '1px solid rgba(255,255,255,.22)',
                  borderRadius: 999,
                }}>
                  デモ
                </span>
              </div>
              <p style={{ fontSize: '.8125rem', color: 'rgba(243,241,238,.55)', lineHeight: 1.75, maxWidth: 720 }}>
                INSTYLE GROUP の社員が半期ごとに作成する目標設定シートの実物見本です。実際の運用ではグループ → 会社 → 部署 → 個人 と段階的に目標を分解し、ギャランティ／ボーナス／昇格採点まで一気通貫で扱います。<br />
                記入例として架空社員のデータを初期表示しています。自由に書き換えて構造を確認してください（リロードで初期状態に戻ります）。
              </p>
            </div>
            <div className="header-buttons" style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
              <button className="header-action" onClick={handleResetSample}>
                記入例に戻す
              </button>
            </div>
          </div>
        </header>

        {/* Step nav */}
        <StepIndicator current={step} onNavigate={navigate} />

        {/* Main content */}
        <main className="site-main" style={{ maxWidth: showFunnel(step) ? 1296 : 1080, margin: '0 auto', padding: '0 24px 80px' }}>

          <div
            style={{
              display: showFunnel(step) ? 'grid' : 'block',
              gridTemplateColumns: showFunnel(step) ? '188px minmax(0, 1fr)' : undefined,
              gap: 28,
              alignItems: 'start',
            }}
          >
            {showFunnel(step) && (
              <aside style={{ position: 'sticky', top: 84, alignSelf: 'start' }}>
                <GoalFunnel formData={formData} currentStep={step} />
              </aside>
            )}

            <div style={{ minWidth: 0 }}>
              {/* Form card */}
              <div className="glass-panel" style={{ marginBottom: 24 }}>
                {step === 1 && <CoverForm data={formData.cover} onChange={updateCover} />}
                {step === 2 && <CompanyGoalForm data={formData.group} onChange={updateGroup} title="01｜グループ目標 記入シート" labelPrefix="グループ" />}
                {step === 3 && <CompanyGoalForm data={formData.company} onChange={updateCompany} title="02｜会社目標 記入シート" labelPrefix="会社" parentStrategicFocus={formData.group.strategicFocus} parentLabelPrefix="グループ" />}
                {step === 4 && <DeptGoalForm data={formData.dept} onChange={updateDept} companyStrategicFocus={formData.company.strategicFocus} />}
                {step === 5 && <PersonalGoalForm data={formData.personal} onChange={updatePersonal} />}
                {step === 6 && <CommitmentForm data={formData.personal} grade={formData.cover.grade} onChange={updatePersonal} />}
                {step === 7 && <GradeForm selectedGrade={formData.cover.grade} expectations={formData.gradeExpectations} onChange={updateGradeExpectations} />}
                {step === 8 && <PromotionForm data={formData.promotion} onChange={updatePromotion} />}
                {step === 9 && <BonusForm data={formData.bonus} onChange={updateBonus} />}
                {step === 10 && <ConfirmView data={formData} />}
              </div>

              {/* Navigation buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(step - 1)}
                  disabled={step === 1}
                >
                  ← 前へ
                </button>

                {step < 10 ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(step + 1)}
                  >
                    次へ →
                  </button>
                ) : (
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(1)}
                  >
                    ← 最初に戻る
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function ConfirmView({ data }: { data: FormData }) {
  const phase1Total = data.bonus.canAfford + data.bonus.hasProfit + data.bonus.futureProfit;
  const supervisorPoints = data.bonus.supervisorEval * (data.bonus.noSupervisor ? 2 : 1);
  const phase2Total =
    data.bonus.deptKpiAchieved + data.bonus.personalKpiAchieved + supervisorPoints +
    data.bonus.valueEval + data.bonus.reproducibility + data.bonus.roleAchievement +
    data.bonus.difficulty + data.bonus.mgmtEval;
  const promotionTotal =
    data.promotion.tenurePoint + data.promotion.deptGrowthPoint + data.promotion.personalKpiPoint +
    data.promotion.supervisorPoint + data.promotion.mgmtPoint + data.promotion.nurturingPoint;

  const valueNum = parseFloat(data.promotion.valueScore);
  const promotionGatePass = !isNaN(valueNum) && data.promotion.valueScore !== '' && valueNum >= 3.5;
  const isPromotionEligible = promotionGatePass && promotionTotal >= 11;

  const promotionLabel = data.promotion.valueScore === ''
    ? `${promotionTotal}pt`
    : isPromotionEligible
      ? `${promotionTotal}pt（昇格対象）`
      : !promotionGatePass
        ? `${promotionTotal}pt（VALUEゲート未通過）`
        : `${promotionTotal}pt（あと${11 - promotionTotal}pt）`;

  const guarantyTotal = data.personal.commitment.reduce((sum, r) => {
    const n = parseInt(r.amount || '0', 10);
    return sum + (Number.isFinite(n) ? n : 0);
  }, 0);

  const rows = [
    { label: '所属法人', value: data.cover.company || '（未入力）' },
    { label: '氏名', value: data.cover.name || '（未入力）' },
    { label: 'グレード', value: data.cover.grade || '（未入力）' },
    { label: '期', value: data.cover.period || '（未入力）' },
    { label: 'ギャランティ合計', value: `${guarantyTotal.toLocaleString('ja-JP')}円 / 年` },
    { label: '昇格評価合計', value: promotionLabel },
    { label: 'ボーナス支給額', value: phase1Total >= 3 ? `${(phase2Total * 110000).toLocaleString('ja-JP')}円` : '0円（財務ゲート未通過）' },
  ];

  return (
    <div>
      <p className="section-title">確認</p>
      <p style={{ fontSize: '.8125rem', color: 'var(--color-text-muted)', marginBottom: 24 }}>
        架空社員「佐藤 美咲」の記入例として算出された集計です。実運用版ではこの画面からシェア用URLを発行し、オーナーや上長と内容を共有します。
      </p>

      <div className="table-wrap" style={{ marginBottom: 28 }}>
        <table className="data-table">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td style={{ width: '30%', color: 'var(--color-text-muted)', fontSize: '.8125rem', fontWeight: 500 }}>
                  {row.label}
                </td>
                <td style={{ fontWeight: row.value.includes('（未入力）') ? 400 : 500 }}>
                  <span style={{ color: row.value.includes('（未入力）') ? 'var(--color-text-light)' : 'var(--color-text)' }}>
                    {row.value}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
        padding: '16px 20px',
        background: 'rgba(230,226,215,.40)',
        borderRadius: 'var(--r)',
        fontSize: '.8125rem',
        color: 'var(--color-text-muted)',
        lineHeight: 1.8,
      }}>
        <strong style={{ color: 'var(--color-text)' }}>シートの構成：</strong>
        <br />
        1. カバー &nbsp; 2. グループ目標 &nbsp; 3. 会社目標 &nbsp; 4. 部署目標 &nbsp; 5. 個人目標 &nbsp; 6. ギャランティ &nbsp; 7. グレード表 &nbsp; 8. 昇格・昇給採点 &nbsp; 9. ボーナス評価採点
      </div>
    </div>
  );
}
