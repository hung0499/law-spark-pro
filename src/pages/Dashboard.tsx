import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Clock,
  Award,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const recentSessions = [
    { 
      id: 1, 
      title: "Contract Law Analysis", 
      skill: "Doctrinal Analysis",
      duration: "45 min", 
      score: 85,
      date: "Today"
    },
    { 
      id: 2, 
      title: "Tort Law Case Study", 
      skill: "Critical Evaluation",
      duration: "30 min", 
      score: 78,
      date: "Yesterday"
    },
    { 
      id: 3, 
      title: "Criminal Law Reasoning", 
      skill: "Factual Analysis",
      duration: "60 min", 
      score: 92,
      date: "2 days ago"
    },
  ];

  const skillProgress = [
    { skill: "Knowledge & Recall", progress: 85, level: "Advanced" },
    { skill: "Factual Analysis", progress: 72, level: "Intermediate" },
    { skill: "Doctrinal Analysis", progress: 90, level: "Advanced" },
    { skill: "Critical Evaluation", progress: 68, level: "Intermediate" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="gradient-hero rounded-xl p-8 text-center">
        <h1 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
          Welcome to your Legal Learning Journey
        </h1>
        <p className="text-lg text-primary-foreground/90 mb-6">
          Develop critical thinking skills and master legal reasoning with AI-powered guidance
        </p>
        <Button variant="hero" size="lg" className="shadow-glow">
          <Brain className="h-5 w-5 mr-2" />
          Start Learning Session
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">
              +5% improvement
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 days</div>
            <p className="text-xs text-muted-foreground">
              Personal best!
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Studied</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48h</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Sessions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Recent Learning Sessions
            </CardTitle>
            <CardDescription>
              Your latest interactions with the AI co-pilot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/30 transition-smooth">
                <div className="flex-1">
                  <h4 className="font-medium">{session.title}</h4>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Badge variant="secondary" className="mr-2 text-xs">
                      {session.skill}
                    </Badge>
                    <Clock className="h-3 w-3 mr-1" />
                    {session.duration}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">{session.score}%</div>
                  <div className="text-xs text-muted-foreground">{session.date}</div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Sessions
            </Button>
          </CardContent>
        </Card>

        {/* Skill Progress */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Skill Development
            </CardTitle>
            <CardDescription>
              Progress across core legal reasoning competencies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillProgress.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{item.skill}</span>
                  <Badge 
                    variant={item.level === "Advanced" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {item.level}
                  </Badge>
                </div>
                <Progress value={item.progress} className="h-2" />
                <div className="text-xs text-muted-foreground text-right">
                  {item.progress}% mastery
                </div>
              </div>
            ))}
            <Button variant="elegant" className="w-full">
              <Target className="h-4 w-4 mr-2" />
              View Detailed Progress
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>
            Jump into specific learning activities based on the legal pedagogy framework
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="elegant" className="h-20 flex-col">
              <BookOpen className="h-6 w-6 mb-2" />
              <span className="text-sm">Knowledge Recall</span>
            </Button>
            <Button variant="elegant" className="h-20 flex-col">
              <Brain className="h-6 w-6 mb-2" />
              <span className="text-sm">Case Analysis</span>
            </Button>
            <Button variant="elegant" className="h-20 flex-col">
              <CheckCircle2 className="h-6 w-6 mb-2" />
              <span className="text-sm">Legal Reasoning</span>
            </Button>
            <Button variant="elegant" className="h-20 flex-col">
              <TrendingUp className="h-6 w-6 mb-2" />
              <span className="text-sm">Critical Evaluation</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;