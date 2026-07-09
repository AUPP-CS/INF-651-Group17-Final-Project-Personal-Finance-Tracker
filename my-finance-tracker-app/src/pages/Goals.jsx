import { useState } from "react";
import { useFinance } from "../contexts/FinanceContext";
import GoalCard from "../components/GoalCard";

export default function Goals() {
  const { goal, updateGoal } = useFinance();
  const hasGoal = goal && goal.target > 0;

  const [form, setForm] = useState({ title: "", target: "", saved: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || Number(form.target) <= 0) return;

    updateGoal({
      title: form.title,
      target: Number(form.target),
      saved: Number(form.saved) || 0,
    });
  }

  return (
    <div className="goals-page">
      <div className="goals-header">
        <h1 className="goals-title">Savings Goal</h1>
        <p className="goals-subtitle">Set a target and track your progress toward it.</p>
      </div>

      <div className="goals-content">
        {hasGoal ? (
          <GoalCard />
        ) : (
          <div className="goal-form-card">
            <h2 className="goal-form-title">Set your first goal</h2>
            <form onSubmit={handleSubmit} className="goal-form">
              <input
                name="title"
                className="goal-input"
                placeholder="Goal name (e.g. Emergency Fund)"
                value={form.title}
                onChange={handleChange}
                required
              />
              <input
                name="target"
                type="number"
                min="1"
                step="0.01"
                className="goal-input"
                placeholder="Target amount"
                value={form.target}
                onChange={handleChange}
                required
              />
              <input
                name="saved"
                type="number"
                min="0"
                step="0.01"
                className="goal-input"
                placeholder="Already saved (optional)"
                value={form.saved}
                onChange={handleChange}
              />
              <button type="submit" className="goal-submit-btn">
                Create goal
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}