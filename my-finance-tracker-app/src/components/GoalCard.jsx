import { useState } from "react";
import { Target, Plus, Trophy, Wallet } from "lucide-react";

import { useFinance } from "../contexts/FinanceContext";

export default function GoalCard() {
  const { goal, addSavings } = useFinance();
  const [amount, setAmount] = useState("");
  const progress = Math.min((goal.saved / goal.target) * 100, 100);
  const remaining = goal.target - goal.saved;
  
  const handleAddSavings = () => {
    if (!amount || Number(amount) <= 0) return;

    addSavings(Number(amount));

    setAmount("");
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Header */}

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-primary/10">
              <Target className="text-primary" size={24} />
            </div>

            <div>
              <h2 className="card-title">{goal.title}</h2>

              <p className="text-sm opacity-60">Savings Goal</p>
            </div>
          </div>

          {progress >= 100 && <Trophy className="text-warning" size={28} />}
        </div>

        {/* Amount */}

        <div className="mt-6">
          <div className="flex justify-between">
            <div>
              <p className="text-sm opacity-60">Saved</p>

              <p className="text-3xl font-bold text-success">
                ${goal.saved.toFixed(2)}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm opacity-60">Target</p>

              <p className="text-3xl font-bold">${goal.target.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Progress</span>

            <span className="font-bold">{progress.toFixed(0)}%</span>
          </div>

          <progress
            className="progress progress-primary w-full"
            value={progress}
            max="100"
          />
        </div>

        {/* Remaining */}

        <div className="mt-5 flex items-center gap-2">
          <Wallet size={18} />

          {remaining > 0 ? (
            <p>
              <span className="font-semibold">${remaining.toFixed(2)}</span>{" "}
              remaining to reach your goal
            </p>
          ) : (
            <p className="text-success font-semibold">🎉 Goal completed!</p>
          )}
        </div>

        {/* Add Savings */}

        {progress < 100 && (
          <div className="mt-6 flex gap-3">
            <input
              type="number"
              placeholder="Add savings"
              className="input input-bordered flex-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button className="btn btn-primary" onClick={handleAddSavings}>
              <Plus size={18} />
              Add
            </button>
          </div>
        )}

        {/* Completed */}

        {progress >= 100 && (
          <div className="alert alert-success mt-6">
            <span>Congratulations! You achieved your savings goal.</span>
          </div>
        )}
      </div>
    </div>
  );
}
